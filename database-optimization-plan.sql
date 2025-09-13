-- ===================================
-- FESTIVAL SCOUT DATABASE OPTIMIZATION
-- ===================================

-- 1. CREATE INDEXES FOR SEARCH PERFORMANCE
-- ===================================

-- Text search indexes (GIN indexes for better text search)
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_name_gin 
    ON events USING GIN (to_tsvector('english', name));

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_description_gin 
    ON events USING GIN (to_tsvector('english', description));

-- Standard B-tree indexes for exact matches and sorting
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_city_lower 
    ON events (LOWER(city));

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_country_lower 
    ON events (LOWER(country));

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_style_lower 
    ON events (LOWER(style));

-- Date indexes for sorting and filtering
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_from_date 
    ON events (from_date);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_date_range 
    ON events (from_date, to_date);

-- Composite index for common search patterns
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_search_composite 
    ON events (LOWER(city), LOWER(country), from_date);

-- 2. CREATE FULL-TEXT SEARCH INDEX
-- ===================================

-- Combined full-text search index
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_events_fulltext_search 
    ON events USING GIN (
        to_tsvector('english', 
            COALESCE(name, '') || ' ' || 
            COALESCE(description, '') || ' ' || 
            COALESCE(city, '') || ' ' || 
            COALESCE(country, '') || ' ' || 
            COALESCE(style, '')
        )
    );

-- 3. FOREIGN KEY INDEXES FOR JOINS
-- ===================================

-- Event relationships
CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_teachers_event_id 
    ON event_teachers (event_id);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_teachers_teacher_id 
    ON event_teachers (teacher_id);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_musicians_event_id 
    ON event_musicians (event_id);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_musicians_musician_id 
    ON event_musicians (musician_id);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_venues_event_id 
    ON event_venues (event_id);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_venues_venue_id 
    ON event_venues (venue_id);

CREATE INDEX CONCURRENTLY IF NOT EXISTS idx_event_prices_event_id 
    ON event_prices (event_id);

-- 4. OPTIMIZED SEARCH FUNCTION
-- ===================================

CREATE OR REPLACE FUNCTION search_events_optimized(
    search_query TEXT DEFAULT NULL,
    search_city TEXT DEFAULT NULL, 
    search_country TEXT DEFAULT NULL,
    page_limit INTEGER DEFAULT 20,
    page_offset INTEGER DEFAULT 0,
    sort_by TEXT DEFAULT 'date',
    sort_order TEXT DEFAULT 'asc'
)
RETURNS TABLE (
    total_count BIGINT,
    id INTEGER,
    name VARCHAR,
    description TEXT,
    short_desc TEXT,
    from_date DATE,
    to_date DATE,
    city VARCHAR,
    country VARCHAR,
    website VARCHAR,
    style VARCHAR,
    image_url VARCHAR,
    ai_quality_score DECIMAL,
    ai_completeness_score DECIMAL,
    extraction_method VARCHAR,
    created_at TIMESTAMP,
    updated_at TIMESTAMP,
    search_rank REAL
) AS $$
DECLARE
    base_query TEXT;
    count_query TEXT;
    final_query TEXT;
    where_conditions TEXT[] := ARRAY[]::TEXT[];
    total_results BIGINT;
BEGIN
    -- Build WHERE conditions dynamically
    IF search_query IS NOT NULL AND search_query != '' THEN
        where_conditions := array_append(where_conditions, 
            format('to_tsvector(''english'', 
                COALESCE(name, '''') || '' '' || 
                COALESCE(description, '''') || '' '' || 
                COALESCE(city, '''') || '' '' || 
                COALESCE(country, '''') || '' '' || 
                COALESCE(style, '''')
            ) @@ plainto_tsquery(''english'', %L)', search_query)
        );
    END IF;
    
    IF search_city IS NOT NULL AND search_city != '' THEN
        where_conditions := array_append(where_conditions,
            format('LOWER(city) LIKE LOWER(%L)', '%' || search_city || '%')
        );
    END IF;
    
    IF search_country IS NOT NULL AND search_country != '' THEN
        where_conditions := array_append(where_conditions,
            format('LOWER(country) LIKE LOWER(%L)', '%' || search_country || '%')
        );
    END IF;
    
    -- Build base query
    base_query := 'FROM events';
    IF array_length(where_conditions, 1) > 0 THEN
        base_query := base_query || ' WHERE ' || array_to_string(where_conditions, ' AND ');
    END IF;
    
    -- Get total count first
    count_query := 'SELECT COUNT(*) ' || base_query;
    EXECUTE count_query INTO total_results;
    
    -- Build final query with ranking and sorting
    final_query := 'SELECT ' || total_results || ' as total_count, 
        e.id, e.name, e.description, e.short_desc, e.from_date, e.to_date,
        e.city, e.country, e.website, e.style, e.image_url,
        e.ai_quality_score, e.ai_completeness_score, e.extraction_method,
        e.created_at, e.updated_at,';
    
    -- Add search ranking if we have a search query
    IF search_query IS NOT NULL AND search_query != '' THEN
        final_query := final_query || '
            ts_rank(to_tsvector(''english'', 
                COALESCE(e.name, '''') || '' '' || 
                COALESCE(e.description, '''') || '' '' || 
                COALESCE(e.city, '''') || '' '' || 
                COALESCE(e.country, '''') || '' '' || 
                COALESCE(e.style, '''')
            ), plainto_tsquery(''english'', ' || quote_literal(search_query) || ')) as search_rank';
    ELSE
        final_query := final_query || ' 0.0 as search_rank';
    END IF;
    
    final_query := final_query || ' FROM events e';
    
    IF array_length(where_conditions, 1) > 0 THEN
        final_query := final_query || ' WHERE ' || array_to_string(where_conditions, ' AND ');
    END IF;
    
    -- Add sorting
    CASE 
        WHEN sort_by = 'relevance' AND search_query IS NOT NULL THEN
            final_query := final_query || ' ORDER BY search_rank DESC, e.from_date ASC';
        WHEN sort_by = 'date' THEN
            final_query := final_query || ' ORDER BY e.from_date ' || 
                CASE WHEN sort_order = 'desc' THEN 'DESC' ELSE 'ASC' END;
        ELSE
            final_query := final_query || ' ORDER BY e.from_date ASC';
    END CASE;
    
    -- Add pagination
    final_query := final_query || format(' LIMIT %s OFFSET %s', page_limit, page_offset);
    
    -- Return results
    RETURN QUERY EXECUTE final_query;
END;
$$ LANGUAGE plpgsql;

-- 5. ANALYZE TABLES FOR BETTER QUERY PLANNING
-- ===================================

ANALYZE events;
ANALYZE event_teachers;
ANALYZE event_musicians;
ANALYZE event_venues;
ANALYZE event_prices;
ANALYZE teachers;
ANALYZE musicians;
ANALYZE venues;

-- 6. VIEW FOR EVENTS WITH RELATED DATA (MATERIALIZED FOR PERFORMANCE)
-- ===================================

DROP MATERIALIZED VIEW IF EXISTS events_search_view CASCADE;

CREATE MATERIALIZED VIEW events_search_view AS
SELECT 
    e.*,
    ARRAY_AGG(DISTINCT t.name) FILTER (WHERE t.name IS NOT NULL) as teacher_names,
    ARRAY_AGG(DISTINCT m.name) FILTER (WHERE m.name IS NOT NULL) as musician_names,
    ARRAY_AGG(DISTINCT v.name) FILTER (WHERE v.name IS NOT NULL) as venue_names,
    to_tsvector('english', 
        COALESCE(e.name, '') || ' ' || 
        COALESCE(e.description, '') || ' ' || 
        COALESCE(e.city, '') || ' ' || 
        COALESCE(e.country, '') || ' ' || 
        COALESCE(e.style, '') || ' ' ||
        COALESCE(array_to_string(ARRAY_AGG(DISTINCT t.name), ' '), '') || ' ' ||
        COALESCE(array_to_string(ARRAY_AGG(DISTINCT m.name), ' '), '')
    ) as search_vector
FROM events e
LEFT JOIN event_teachers et ON e.id = et.event_id
LEFT JOIN teachers t ON et.teacher_id = t.id
LEFT JOIN event_musicians em ON e.id = em.event_id
LEFT JOIN musicians m ON em.musician_id = m.id
LEFT JOIN event_venues ev ON e.id = ev.event_id
LEFT JOIN venues v ON ev.venue_id = v.id
GROUP BY e.id;

-- Create index on materialized view
CREATE INDEX idx_events_search_view_vector ON events_search_view USING GIN(search_vector);
CREATE INDEX idx_events_search_view_date ON events_search_view (from_date);
CREATE INDEX idx_events_search_view_city ON events_search_view (LOWER(city));
CREATE INDEX idx_events_search_view_country ON events_search_view (LOWER(country));

-- Refresh materialized view
REFRESH MATERIALIZED VIEW events_search_view;

-- 7. PERFORMANCE MONITORING QUERIES
-- ===================================

-- Check index usage
SELECT schemaname, tablename, indexname, idx_scan as index_scans, idx_tup_read as tuples_read
FROM pg_stat_user_indexes 
WHERE tablename = 'events'
ORDER BY idx_scan DESC;

-- Check slow queries
SELECT query, mean_time, calls, total_time
FROM pg_stat_statements 
WHERE query LIKE '%events%'
ORDER BY mean_time DESC
LIMIT 10;

-- Check table sizes
SELECT 
    schemaname,
    tablename,
    pg_size_pretty(pg_total_relation_size(schemaname||'.'||tablename)) as size
FROM pg_tables 
WHERE tablename IN ('events', 'event_teachers', 'event_musicians', 'teachers', 'musicians')
ORDER BY pg_total_relation_size(schemaname||'.'||tablename) DESC;