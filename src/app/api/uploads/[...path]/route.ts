import { NextRequest, NextResponse } from 'next/server'
import { readFile } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

// Generate a responsive placeholder image as SVG
function generatePlaceholderSVG(width = 400, height = 300, text = 'Image Not Found') {
  const isSquare = Math.abs(width - height) < 50 // Consider it square if dimensions are close
  const fontSize = isSquare ? Math.min(width, height) * 0.08 : Math.min(width, height) * 0.06
  const titleFontSize = isSquare ? fontSize * 1.2 : fontSize * 1.5
  
  return `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="bg-${Date.now()}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style="stop-color:#1a1a2e;stop-opacity:1" />
        <stop offset="100%" style="stop-color:#16213e;stop-opacity:1" />
      </linearGradient>
    </defs>
    <rect width="100%" height="100%" fill="url(#bg-${Date.now()})"/>
    <rect x="10" y="10" width="${width-20}" height="${height-20}" fill="none" stroke="#d4af37" stroke-width="2" stroke-dasharray="8,4" opacity="0.6"/>
    ${isSquare ? 
      `<circle cx="50%" cy="35%" r="${width * 0.12}" fill="none" stroke="#d4af37" stroke-width="2" opacity="0.8"/>
       <text x="50%" y="60%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" fill="#d4af37" opacity="0.9">🎵</text>
       <text x="50%" y="75%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize * 0.7}" fill="#ffffff" opacity="0.8">${text}</text>` :
      `<text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${titleFontSize}" fill="#d4af37" opacity="0.8">🎵 Festival Scout</text>
       <text x="50%" y="55%" dominant-baseline="middle" text-anchor="middle" font-family="Arial, sans-serif" font-size="${fontSize}" fill="#ffffff" opacity="0.7">${text}</text>`
    }
  </svg>`
}

export async function GET(
  request: NextRequest,
  { params }: { params: { path: string[] } }
) {
  try {
    // Reconstruct the file path
    const filePath = params.path.join('/')
    const fullPath = join(process.cwd(), 'uploads', filePath)
    
    // Check if file exists
    if (!existsSync(fullPath)) {
      // Log missing file for debugging
      console.warn(`Missing image file: ${fullPath}`)
      
      // Generate a placeholder image instead of returning 404
      const placeholderText = filePath.includes('events') ? 'Event Image Missing' :
                             filePath.includes('teachers') ? 'Teacher Photo Missing' :
                             filePath.includes('musicians') ? 'Musician Photo Missing' :
                             'Image Not Found'
      
      // Generate appropriate dimensions based on image type
      const width = filePath.includes('teachers') || filePath.includes('musicians') ? 300 : 400
      const height = filePath.includes('teachers') || filePath.includes('musicians') ? 300 : 300
      
      const placeholderSVG = generatePlaceholderSVG(width, height, placeholderText)
      
      return new NextResponse(placeholderSVG, {
        headers: {
          'Content-Type': 'image/svg+xml',
          'Cache-Control': 'public, max-age=300', // Cache for 5 minutes only (shorter for placeholders)
        },
      })
    }
    
    // Read the file
    const fileBuffer = await readFile(fullPath)
    
    // Determine content type based on file extension
    const extension = filePath.split('.').pop()?.toLowerCase()
    let contentType = 'application/octet-stream'
    
    switch (extension) {
      case 'jpg':
      case 'jpeg':
        contentType = 'image/jpeg'
        break
      case 'png':
        contentType = 'image/png'
        break
      case 'gif':
        contentType = 'image/gif'
        break
      case 'webp':
        contentType = 'image/webp'
        break
      case 'svg':
        contentType = 'image/svg+xml'
        break
    }
    
    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    })
  } catch (error) {
    console.error('Error serving upload file:', error)
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}