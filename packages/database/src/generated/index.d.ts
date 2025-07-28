
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Event
 * 
 */
export type Event = $Result.DefaultSelection<Prisma.$EventPayload>
/**
 * Model ExternalEventTeacher
 * 
 */
export type ExternalEventTeacher = $Result.DefaultSelection<Prisma.$ExternalEventTeacherPayload>
/**
 * Model ExternalEventVenue
 * 
 */
export type ExternalEventVenue = $Result.DefaultSelection<Prisma.$ExternalEventVenuePayload>
/**
 * Model Teacher
 * 
 */
export type Teacher = $Result.DefaultSelection<Prisma.$TeacherPayload>
/**
 * Model Musician
 * 
 */
export type Musician = $Result.DefaultSelection<Prisma.$MusicianPayload>
/**
 * Model event_musicians
 * 
 */
export type event_musicians = $Result.DefaultSelection<Prisma.$event_musiciansPayload>
/**
 * Model event_prices
 * 
 */
export type event_prices = $Result.DefaultSelection<Prisma.$event_pricesPayload>
/**
 * Model social_media
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type social_media = $Result.DefaultSelection<Prisma.$social_mediaPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Events
 * const events = await prisma.event.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Events
   * const events = await prisma.event.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.event`: Exposes CRUD operations for the **Event** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Events
    * const events = await prisma.event.findMany()
    * ```
    */
  get event(): Prisma.EventDelegate<ExtArgs>;

  /**
   * `prisma.externalEventTeacher`: Exposes CRUD operations for the **ExternalEventTeacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalEventTeachers
    * const externalEventTeachers = await prisma.externalEventTeacher.findMany()
    * ```
    */
  get externalEventTeacher(): Prisma.ExternalEventTeacherDelegate<ExtArgs>;

  /**
   * `prisma.externalEventVenue`: Exposes CRUD operations for the **ExternalEventVenue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExternalEventVenues
    * const externalEventVenues = await prisma.externalEventVenue.findMany()
    * ```
    */
  get externalEventVenue(): Prisma.ExternalEventVenueDelegate<ExtArgs>;

  /**
   * `prisma.teacher`: Exposes CRUD operations for the **Teacher** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Teachers
    * const teachers = await prisma.teacher.findMany()
    * ```
    */
  get teacher(): Prisma.TeacherDelegate<ExtArgs>;

  /**
   * `prisma.musician`: Exposes CRUD operations for the **Musician** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Musicians
    * const musicians = await prisma.musician.findMany()
    * ```
    */
  get musician(): Prisma.MusicianDelegate<ExtArgs>;

  /**
   * `prisma.event_musicians`: Exposes CRUD operations for the **event_musicians** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_musicians
    * const event_musicians = await prisma.event_musicians.findMany()
    * ```
    */
  get event_musicians(): Prisma.event_musiciansDelegate<ExtArgs>;

  /**
   * `prisma.event_prices`: Exposes CRUD operations for the **event_prices** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Event_prices
    * const event_prices = await prisma.event_prices.findMany()
    * ```
    */
  get event_prices(): Prisma.event_pricesDelegate<ExtArgs>;

  /**
   * `prisma.social_media`: Exposes CRUD operations for the **social_media** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Social_medias
    * const social_medias = await prisma.social_media.findMany()
    * ```
    */
  get social_media(): Prisma.social_mediaDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Event: 'Event',
    ExternalEventTeacher: 'ExternalEventTeacher',
    ExternalEventVenue: 'ExternalEventVenue',
    Teacher: 'Teacher',
    Musician: 'Musician',
    event_musicians: 'event_musicians',
    event_prices: 'event_prices',
    social_media: 'social_media'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "event" | "externalEventTeacher" | "externalEventVenue" | "teacher" | "musician" | "event_musicians" | "event_prices" | "social_media"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Event: {
        payload: Prisma.$EventPayload<ExtArgs>
        fields: Prisma.EventFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EventFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EventFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findFirst: {
            args: Prisma.EventFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EventFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          findMany: {
            args: Prisma.EventFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          create: {
            args: Prisma.EventCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          createMany: {
            args: Prisma.EventCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EventCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>[]
          }
          delete: {
            args: Prisma.EventDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          update: {
            args: Prisma.EventUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          deleteMany: {
            args: Prisma.EventDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EventUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.EventUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EventPayload>
          }
          aggregate: {
            args: Prisma.EventAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent>
          }
          groupBy: {
            args: Prisma.EventGroupByArgs<ExtArgs>
            result: $Utils.Optional<EventGroupByOutputType>[]
          }
          count: {
            args: Prisma.EventCountArgs<ExtArgs>
            result: $Utils.Optional<EventCountAggregateOutputType> | number
          }
        }
      }
      ExternalEventTeacher: {
        payload: Prisma.$ExternalEventTeacherPayload<ExtArgs>
        fields: Prisma.ExternalEventTeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalEventTeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalEventTeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>
          }
          findFirst: {
            args: Prisma.ExternalEventTeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalEventTeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>
          }
          findMany: {
            args: Prisma.ExternalEventTeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>[]
          }
          create: {
            args: Prisma.ExternalEventTeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>
          }
          createMany: {
            args: Prisma.ExternalEventTeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalEventTeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>[]
          }
          delete: {
            args: Prisma.ExternalEventTeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>
          }
          update: {
            args: Prisma.ExternalEventTeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>
          }
          deleteMany: {
            args: Prisma.ExternalEventTeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalEventTeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExternalEventTeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventTeacherPayload>
          }
          aggregate: {
            args: Prisma.ExternalEventTeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalEventTeacher>
          }
          groupBy: {
            args: Prisma.ExternalEventTeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalEventTeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalEventTeacherCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalEventTeacherCountAggregateOutputType> | number
          }
        }
      }
      ExternalEventVenue: {
        payload: Prisma.$ExternalEventVenuePayload<ExtArgs>
        fields: Prisma.ExternalEventVenueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExternalEventVenueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExternalEventVenueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>
          }
          findFirst: {
            args: Prisma.ExternalEventVenueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExternalEventVenueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>
          }
          findMany: {
            args: Prisma.ExternalEventVenueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>[]
          }
          create: {
            args: Prisma.ExternalEventVenueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>
          }
          createMany: {
            args: Prisma.ExternalEventVenueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExternalEventVenueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>[]
          }
          delete: {
            args: Prisma.ExternalEventVenueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>
          }
          update: {
            args: Prisma.ExternalEventVenueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>
          }
          deleteMany: {
            args: Prisma.ExternalEventVenueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExternalEventVenueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExternalEventVenueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExternalEventVenuePayload>
          }
          aggregate: {
            args: Prisma.ExternalEventVenueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExternalEventVenue>
          }
          groupBy: {
            args: Prisma.ExternalEventVenueGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExternalEventVenueGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExternalEventVenueCountArgs<ExtArgs>
            result: $Utils.Optional<ExternalEventVenueCountAggregateOutputType> | number
          }
        }
      }
      Teacher: {
        payload: Prisma.$TeacherPayload<ExtArgs>
        fields: Prisma.TeacherFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TeacherFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TeacherFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findFirst: {
            args: Prisma.TeacherFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TeacherFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          findMany: {
            args: Prisma.TeacherFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          create: {
            args: Prisma.TeacherCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          createMany: {
            args: Prisma.TeacherCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TeacherCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>[]
          }
          delete: {
            args: Prisma.TeacherDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          update: {
            args: Prisma.TeacherUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          deleteMany: {
            args: Prisma.TeacherDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TeacherUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.TeacherUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TeacherPayload>
          }
          aggregate: {
            args: Prisma.TeacherAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTeacher>
          }
          groupBy: {
            args: Prisma.TeacherGroupByArgs<ExtArgs>
            result: $Utils.Optional<TeacherGroupByOutputType>[]
          }
          count: {
            args: Prisma.TeacherCountArgs<ExtArgs>
            result: $Utils.Optional<TeacherCountAggregateOutputType> | number
          }
        }
      }
      Musician: {
        payload: Prisma.$MusicianPayload<ExtArgs>
        fields: Prisma.MusicianFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MusicianFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MusicianFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>
          }
          findFirst: {
            args: Prisma.MusicianFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MusicianFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>
          }
          findMany: {
            args: Prisma.MusicianFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>[]
          }
          create: {
            args: Prisma.MusicianCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>
          }
          createMany: {
            args: Prisma.MusicianCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MusicianCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>[]
          }
          delete: {
            args: Prisma.MusicianDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>
          }
          update: {
            args: Prisma.MusicianUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>
          }
          deleteMany: {
            args: Prisma.MusicianDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MusicianUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.MusicianUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MusicianPayload>
          }
          aggregate: {
            args: Prisma.MusicianAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMusician>
          }
          groupBy: {
            args: Prisma.MusicianGroupByArgs<ExtArgs>
            result: $Utils.Optional<MusicianGroupByOutputType>[]
          }
          count: {
            args: Prisma.MusicianCountArgs<ExtArgs>
            result: $Utils.Optional<MusicianCountAggregateOutputType> | number
          }
        }
      }
      event_musicians: {
        payload: Prisma.$event_musiciansPayload<ExtArgs>
        fields: Prisma.event_musiciansFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_musiciansFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_musiciansFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>
          }
          findFirst: {
            args: Prisma.event_musiciansFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_musiciansFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>
          }
          findMany: {
            args: Prisma.event_musiciansFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>[]
          }
          create: {
            args: Prisma.event_musiciansCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>
          }
          createMany: {
            args: Prisma.event_musiciansCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.event_musiciansCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>[]
          }
          delete: {
            args: Prisma.event_musiciansDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>
          }
          update: {
            args: Prisma.event_musiciansUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>
          }
          deleteMany: {
            args: Prisma.event_musiciansDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_musiciansUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.event_musiciansUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_musiciansPayload>
          }
          aggregate: {
            args: Prisma.Event_musiciansAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_musicians>
          }
          groupBy: {
            args: Prisma.event_musiciansGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_musiciansGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_musiciansCountArgs<ExtArgs>
            result: $Utils.Optional<Event_musiciansCountAggregateOutputType> | number
          }
        }
      }
      event_prices: {
        payload: Prisma.$event_pricesPayload<ExtArgs>
        fields: Prisma.event_pricesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.event_pricesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.event_pricesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>
          }
          findFirst: {
            args: Prisma.event_pricesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.event_pricesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>
          }
          findMany: {
            args: Prisma.event_pricesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>[]
          }
          create: {
            args: Prisma.event_pricesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>
          }
          createMany: {
            args: Prisma.event_pricesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.event_pricesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>[]
          }
          delete: {
            args: Prisma.event_pricesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>
          }
          update: {
            args: Prisma.event_pricesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>
          }
          deleteMany: {
            args: Prisma.event_pricesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.event_pricesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.event_pricesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$event_pricesPayload>
          }
          aggregate: {
            args: Prisma.Event_pricesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEvent_prices>
          }
          groupBy: {
            args: Prisma.event_pricesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Event_pricesGroupByOutputType>[]
          }
          count: {
            args: Prisma.event_pricesCountArgs<ExtArgs>
            result: $Utils.Optional<Event_pricesCountAggregateOutputType> | number
          }
        }
      }
      social_media: {
        payload: Prisma.$social_mediaPayload<ExtArgs>
        fields: Prisma.social_mediaFieldRefs
        operations: {
          findUnique: {
            args: Prisma.social_mediaFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.social_mediaFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>
          }
          findFirst: {
            args: Prisma.social_mediaFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.social_mediaFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>
          }
          findMany: {
            args: Prisma.social_mediaFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>[]
          }
          create: {
            args: Prisma.social_mediaCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>
          }
          createMany: {
            args: Prisma.social_mediaCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.social_mediaCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>[]
          }
          delete: {
            args: Prisma.social_mediaDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>
          }
          update: {
            args: Prisma.social_mediaUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>
          }
          deleteMany: {
            args: Prisma.social_mediaDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.social_mediaUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.social_mediaUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$social_mediaPayload>
          }
          aggregate: {
            args: Prisma.Social_mediaAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial_media>
          }
          groupBy: {
            args: Prisma.social_mediaGroupByArgs<ExtArgs>
            result: $Utils.Optional<Social_mediaGroupByOutputType>[]
          }
          count: {
            args: Prisma.social_mediaCountArgs<ExtArgs>
            result: $Utils.Optional<Social_mediaCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type EventCountOutputType
   */

  export type EventCountOutputType = {
    event_musicians: number
    event_prices: number
    event_teachers: number
    venues: number
  }

  export type EventCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_musicians?: boolean | EventCountOutputTypeCountEvent_musiciansArgs
    event_prices?: boolean | EventCountOutputTypeCountEvent_pricesArgs
    event_teachers?: boolean | EventCountOutputTypeCountEvent_teachersArgs
    venues?: boolean | EventCountOutputTypeCountVenuesArgs
  }

  // Custom InputTypes
  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EventCountOutputType
     */
    select?: EventCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEvent_musiciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_musiciansWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEvent_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_pricesWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountEvent_teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalEventTeacherWhereInput
  }

  /**
   * EventCountOutputType without action
   */
  export type EventCountOutputTypeCountVenuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalEventVenueWhereInput
  }


  /**
   * Count Type TeacherCountOutputType
   */

  export type TeacherCountOutputType = {
    event_teachers: number
  }

  export type TeacherCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_teachers?: boolean | TeacherCountOutputTypeCountEvent_teachersArgs
  }

  // Custom InputTypes
  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TeacherCountOutputType
     */
    select?: TeacherCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TeacherCountOutputType without action
   */
  export type TeacherCountOutputTypeCountEvent_teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalEventTeacherWhereInput
  }


  /**
   * Count Type MusicianCountOutputType
   */

  export type MusicianCountOutputType = {
    event_musicians: number
  }

  export type MusicianCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_musicians?: boolean | MusicianCountOutputTypeCountEvent_musiciansArgs
  }

  // Custom InputTypes
  /**
   * MusicianCountOutputType without action
   */
  export type MusicianCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MusicianCountOutputType
     */
    select?: MusicianCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MusicianCountOutputType without action
   */
  export type MusicianCountOutputTypeCountEvent_musiciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_musiciansWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Event
   */

  export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  export type EventAvgAggregateOutputType = {
    id: number | null
    ai_quality_score: number | null
    ai_completeness_score: number | null
  }

  export type EventSumAggregateOutputType = {
    id: number | null
    ai_quality_score: number | null
    ai_completeness_score: number | null
  }

  export type EventMinAggregateOutputType = {
    id: number | null
    name: string | null
    from_date: Date | null
    to_date: Date | null
    country: string | null
    city: string | null
    website: string | null
    style: string | null
    description: string | null
    ai_quality_score: number | null
    ai_completeness_score: number | null
    extraction_method: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
  }

  export type EventMaxAggregateOutputType = {
    id: number | null
    name: string | null
    from_date: Date | null
    to_date: Date | null
    country: string | null
    city: string | null
    website: string | null
    style: string | null
    description: string | null
    ai_quality_score: number | null
    ai_completeness_score: number | null
    extraction_method: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
  }

  export type EventCountAggregateOutputType = {
    id: number
    name: number
    from_date: number
    to_date: number
    country: number
    city: number
    website: number
    style: number
    description: number
    ai_quality_score: number
    ai_completeness_score: number
    extraction_method: number
    created_at: number
    updated_at: number
    image_url: number
    _all: number
  }


  export type EventAvgAggregateInputType = {
    id?: true
    ai_quality_score?: true
    ai_completeness_score?: true
  }

  export type EventSumAggregateInputType = {
    id?: true
    ai_quality_score?: true
    ai_completeness_score?: true
  }

  export type EventMinAggregateInputType = {
    id?: true
    name?: true
    from_date?: true
    to_date?: true
    country?: true
    city?: true
    website?: true
    style?: true
    description?: true
    ai_quality_score?: true
    ai_completeness_score?: true
    extraction_method?: true
    created_at?: true
    updated_at?: true
    image_url?: true
  }

  export type EventMaxAggregateInputType = {
    id?: true
    name?: true
    from_date?: true
    to_date?: true
    country?: true
    city?: true
    website?: true
    style?: true
    description?: true
    ai_quality_score?: true
    ai_completeness_score?: true
    extraction_method?: true
    created_at?: true
    updated_at?: true
    image_url?: true
  }

  export type EventCountAggregateInputType = {
    id?: true
    name?: true
    from_date?: true
    to_date?: true
    country?: true
    city?: true
    website?: true
    style?: true
    description?: true
    ai_quality_score?: true
    ai_completeness_score?: true
    extraction_method?: true
    created_at?: true
    updated_at?: true
    image_url?: true
    _all?: true
  }

  export type EventAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Event to aggregate.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Events
    **/
    _count?: true | EventCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EventAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EventSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EventMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EventMaxAggregateInputType
  }

  export type GetEventAggregateType<T extends EventAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent[P]>
      : GetScalarType<T[P], AggregateEvent[P]>
  }




  export type EventGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EventWhereInput
    orderBy?: EventOrderByWithAggregationInput | EventOrderByWithAggregationInput[]
    by: EventScalarFieldEnum[] | EventScalarFieldEnum
    having?: EventScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EventCountAggregateInputType | true
    _avg?: EventAvgAggregateInputType
    _sum?: EventSumAggregateInputType
    _min?: EventMinAggregateInputType
    _max?: EventMaxAggregateInputType
  }

  export type EventGroupByOutputType = {
    id: number
    name: string
    from_date: Date
    to_date: Date
    country: string
    city: string
    website: string | null
    style: string | null
    description: string | null
    ai_quality_score: number | null
    ai_completeness_score: number | null
    extraction_method: string | null
    created_at: Date | null
    updated_at: Date | null
    image_url: string | null
    _count: EventCountAggregateOutputType | null
    _avg: EventAvgAggregateOutputType | null
    _sum: EventSumAggregateOutputType | null
    _min: EventMinAggregateOutputType | null
    _max: EventMaxAggregateOutputType | null
  }

  type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EventGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EventGroupByOutputType[P]>
            : GetScalarType<T[P], EventGroupByOutputType[P]>
        }
      >
    >


  export type EventSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    from_date?: boolean
    to_date?: boolean
    country?: boolean
    city?: boolean
    website?: boolean
    style?: boolean
    description?: boolean
    ai_quality_score?: boolean
    ai_completeness_score?: boolean
    extraction_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
    event_musicians?: boolean | Event$event_musiciansArgs<ExtArgs>
    event_prices?: boolean | Event$event_pricesArgs<ExtArgs>
    event_teachers?: boolean | Event$event_teachersArgs<ExtArgs>
    venues?: boolean | Event$venuesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["event"]>

  export type EventSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    from_date?: boolean
    to_date?: boolean
    country?: boolean
    city?: boolean
    website?: boolean
    style?: boolean
    description?: boolean
    ai_quality_score?: boolean
    ai_completeness_score?: boolean
    extraction_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["event"]>

  export type EventSelectScalar = {
    id?: boolean
    name?: boolean
    from_date?: boolean
    to_date?: boolean
    country?: boolean
    city?: boolean
    website?: boolean
    style?: boolean
    description?: boolean
    ai_quality_score?: boolean
    ai_completeness_score?: boolean
    extraction_method?: boolean
    created_at?: boolean
    updated_at?: boolean
    image_url?: boolean
  }

  export type EventInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_musicians?: boolean | Event$event_musiciansArgs<ExtArgs>
    event_prices?: boolean | Event$event_pricesArgs<ExtArgs>
    event_teachers?: boolean | Event$event_teachersArgs<ExtArgs>
    venues?: boolean | Event$venuesArgs<ExtArgs>
    _count?: boolean | EventCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EventIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $EventPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Event"
    objects: {
      event_musicians: Prisma.$event_musiciansPayload<ExtArgs>[]
      event_prices: Prisma.$event_pricesPayload<ExtArgs>[]
      event_teachers: Prisma.$ExternalEventTeacherPayload<ExtArgs>[]
      venues: Prisma.$ExternalEventVenuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      from_date: Date
      to_date: Date
      country: string
      city: string
      website: string | null
      style: string | null
      description: string | null
      ai_quality_score: number | null
      ai_completeness_score: number | null
      extraction_method: string | null
      created_at: Date | null
      updated_at: Date | null
      image_url: string | null
    }, ExtArgs["result"]["event"]>
    composites: {}
  }

  type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = $Result.GetResult<Prisma.$EventPayload, S>

  type EventCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<EventFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: EventCountAggregateInputType | true
    }

  export interface EventDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Event'], meta: { name: 'Event' } }
    /**
     * Find zero or one Event that matches the filter.
     * @param {EventFindUniqueArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EventFindUniqueArgs>(args: SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {EventFindUniqueOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EventFindFirstArgs>(args?: SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindFirstOrThrowArgs} args - Arguments to find a Event
     * @example
     * // Get one Event
     * const event = await prisma.event.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Events that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Events
     * const events = await prisma.event.findMany()
     * 
     * // Get first 10 Events
     * const events = await prisma.event.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const eventWithIdOnly = await prisma.event.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EventFindManyArgs>(args?: SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event.
     * @param {EventCreateArgs} args - Arguments to create a Event.
     * @example
     * // Create one Event
     * const Event = await prisma.event.create({
     *   data: {
     *     // ... data to create a Event
     *   }
     * })
     * 
     */
    create<T extends EventCreateArgs>(args: SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Events.
     * @param {EventCreateManyArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EventCreateManyArgs>(args?: SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Events and returns the data saved in the database.
     * @param {EventCreateManyAndReturnArgs} args - Arguments to create many Events.
     * @example
     * // Create many Events
     * const event = await prisma.event.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Events and only return the `id`
     * const eventWithIdOnly = await prisma.event.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event.
     * @param {EventDeleteArgs} args - Arguments to delete one Event.
     * @example
     * // Delete one Event
     * const Event = await prisma.event.delete({
     *   where: {
     *     // ... filter to delete one Event
     *   }
     * })
     * 
     */
    delete<T extends EventDeleteArgs>(args: SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event.
     * @param {EventUpdateArgs} args - Arguments to update one Event.
     * @example
     * // Update one Event
     * const event = await prisma.event.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EventUpdateArgs>(args: SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Events.
     * @param {EventDeleteManyArgs} args - Arguments to filter Events to delete.
     * @example
     * // Delete a few Events
     * const { count } = await prisma.event.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EventDeleteManyArgs>(args?: SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Events
     * const event = await prisma.event.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EventUpdateManyArgs>(args: SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event.
     * @param {EventUpsertArgs} args - Arguments to update or create a Event.
     * @example
     * // Update or create a Event
     * const event = await prisma.event.upsert({
     *   create: {
     *     // ... data to create a Event
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event we want to update
     *   }
     * })
     */
    upsert<T extends EventUpsertArgs>(args: SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Events.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventCountArgs} args - Arguments to filter Events to count.
     * @example
     * // Count the number of Events
     * const count = await prisma.event.count({
     *   where: {
     *     // ... the filter for the Events we want to count
     *   }
     * })
    **/
    count<T extends EventCountArgs>(
      args?: Subset<T, EventCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EventCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EventAggregateArgs>(args: Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>

    /**
     * Group by Event.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EventGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends EventGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EventGroupByArgs['orderBy'] }
        : { orderBy?: EventGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Event model
   */
  readonly fields: EventFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Event.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EventClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_musicians<T extends Event$event_musiciansArgs<ExtArgs> = {}>(args?: Subset<T, Event$event_musiciansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findMany"> | Null>
    event_prices<T extends Event$event_pricesArgs<ExtArgs> = {}>(args?: Subset<T, Event$event_pricesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "findMany"> | Null>
    event_teachers<T extends Event$event_teachersArgs<ExtArgs> = {}>(args?: Subset<T, Event$event_teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findMany"> | Null>
    venues<T extends Event$venuesArgs<ExtArgs> = {}>(args?: Subset<T, Event$venuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Event model
   */ 
  interface EventFieldRefs {
    readonly id: FieldRef<"Event", 'Int'>
    readonly name: FieldRef<"Event", 'String'>
    readonly from_date: FieldRef<"Event", 'DateTime'>
    readonly to_date: FieldRef<"Event", 'DateTime'>
    readonly country: FieldRef<"Event", 'String'>
    readonly city: FieldRef<"Event", 'String'>
    readonly website: FieldRef<"Event", 'String'>
    readonly style: FieldRef<"Event", 'String'>
    readonly description: FieldRef<"Event", 'String'>
    readonly ai_quality_score: FieldRef<"Event", 'Int'>
    readonly ai_completeness_score: FieldRef<"Event", 'Int'>
    readonly extraction_method: FieldRef<"Event", 'String'>
    readonly created_at: FieldRef<"Event", 'DateTime'>
    readonly updated_at: FieldRef<"Event", 'DateTime'>
    readonly image_url: FieldRef<"Event", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Event findUnique
   */
  export type EventFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findUniqueOrThrow
   */
  export type EventFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event findFirst
   */
  export type EventFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findFirstOrThrow
   */
  export type EventFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Event to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Events.
     */
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event findMany
   */
  export type EventFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter, which Events to fetch.
     */
    where?: EventWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Events to fetch.
     */
    orderBy?: EventOrderByWithRelationInput | EventOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Events.
     */
    cursor?: EventWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Events from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Events.
     */
    skip?: number
    distinct?: EventScalarFieldEnum | EventScalarFieldEnum[]
  }

  /**
   * Event create
   */
  export type EventCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to create a Event.
     */
    data: XOR<EventCreateInput, EventUncheckedCreateInput>
  }

  /**
   * Event createMany
   */
  export type EventCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event createManyAndReturn
   */
  export type EventCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Events.
     */
    data: EventCreateManyInput | EventCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Event update
   */
  export type EventUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The data needed to update a Event.
     */
    data: XOR<EventUpdateInput, EventUncheckedUpdateInput>
    /**
     * Choose, which Event to update.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event updateMany
   */
  export type EventUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Events.
     */
    data: XOR<EventUpdateManyMutationInput, EventUncheckedUpdateManyInput>
    /**
     * Filter which Events to update
     */
    where?: EventWhereInput
  }

  /**
   * Event upsert
   */
  export type EventUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * The filter to search for the Event to update in case it exists.
     */
    where: EventWhereUniqueInput
    /**
     * In case the Event found by the `where` argument doesn't exist, create a new Event with this data.
     */
    create: XOR<EventCreateInput, EventUncheckedCreateInput>
    /**
     * In case the Event was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EventUpdateInput, EventUncheckedUpdateInput>
  }

  /**
   * Event delete
   */
  export type EventDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    /**
     * Filter which Event to delete.
     */
    where: EventWhereUniqueInput
  }

  /**
   * Event deleteMany
   */
  export type EventDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Events to delete
     */
    where?: EventWhereInput
  }

  /**
   * Event.event_musicians
   */
  export type Event$event_musiciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    where?: event_musiciansWhereInput
    orderBy?: event_musiciansOrderByWithRelationInput | event_musiciansOrderByWithRelationInput[]
    cursor?: event_musiciansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_musiciansScalarFieldEnum | Event_musiciansScalarFieldEnum[]
  }

  /**
   * Event.event_prices
   */
  export type Event$event_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    where?: event_pricesWhereInput
    orderBy?: event_pricesOrderByWithRelationInput | event_pricesOrderByWithRelationInput[]
    cursor?: event_pricesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_pricesScalarFieldEnum | Event_pricesScalarFieldEnum[]
  }

  /**
   * Event.event_teachers
   */
  export type Event$event_teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    where?: ExternalEventTeacherWhereInput
    orderBy?: ExternalEventTeacherOrderByWithRelationInput | ExternalEventTeacherOrderByWithRelationInput[]
    cursor?: ExternalEventTeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalEventTeacherScalarFieldEnum | ExternalEventTeacherScalarFieldEnum[]
  }

  /**
   * Event.venues
   */
  export type Event$venuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    where?: ExternalEventVenueWhereInput
    orderBy?: ExternalEventVenueOrderByWithRelationInput | ExternalEventVenueOrderByWithRelationInput[]
    cursor?: ExternalEventVenueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalEventVenueScalarFieldEnum | ExternalEventVenueScalarFieldEnum[]
  }

  /**
   * Event without action
   */
  export type EventDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
  }


  /**
   * Model ExternalEventTeacher
   */

  export type AggregateExternalEventTeacher = {
    _count: ExternalEventTeacherCountAggregateOutputType | null
    _avg: ExternalEventTeacherAvgAggregateOutputType | null
    _sum: ExternalEventTeacherSumAggregateOutputType | null
    _min: ExternalEventTeacherMinAggregateOutputType | null
    _max: ExternalEventTeacherMaxAggregateOutputType | null
  }

  export type ExternalEventTeacherAvgAggregateOutputType = {
    event_id: number | null
    teacher_id: number | null
  }

  export type ExternalEventTeacherSumAggregateOutputType = {
    event_id: number | null
    teacher_id: number | null
  }

  export type ExternalEventTeacherMinAggregateOutputType = {
    event_id: number | null
    teacher_id: number | null
    role: string | null
  }

  export type ExternalEventTeacherMaxAggregateOutputType = {
    event_id: number | null
    teacher_id: number | null
    role: string | null
  }

  export type ExternalEventTeacherCountAggregateOutputType = {
    event_id: number
    teacher_id: number
    role: number
    _all: number
  }


  export type ExternalEventTeacherAvgAggregateInputType = {
    event_id?: true
    teacher_id?: true
  }

  export type ExternalEventTeacherSumAggregateInputType = {
    event_id?: true
    teacher_id?: true
  }

  export type ExternalEventTeacherMinAggregateInputType = {
    event_id?: true
    teacher_id?: true
    role?: true
  }

  export type ExternalEventTeacherMaxAggregateInputType = {
    event_id?: true
    teacher_id?: true
    role?: true
  }

  export type ExternalEventTeacherCountAggregateInputType = {
    event_id?: true
    teacher_id?: true
    role?: true
    _all?: true
  }

  export type ExternalEventTeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalEventTeacher to aggregate.
     */
    where?: ExternalEventTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventTeachers to fetch.
     */
    orderBy?: ExternalEventTeacherOrderByWithRelationInput | ExternalEventTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalEventTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalEventTeachers
    **/
    _count?: true | ExternalEventTeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalEventTeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalEventTeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalEventTeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalEventTeacherMaxAggregateInputType
  }

  export type GetExternalEventTeacherAggregateType<T extends ExternalEventTeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalEventTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalEventTeacher[P]>
      : GetScalarType<T[P], AggregateExternalEventTeacher[P]>
  }




  export type ExternalEventTeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalEventTeacherWhereInput
    orderBy?: ExternalEventTeacherOrderByWithAggregationInput | ExternalEventTeacherOrderByWithAggregationInput[]
    by: ExternalEventTeacherScalarFieldEnum[] | ExternalEventTeacherScalarFieldEnum
    having?: ExternalEventTeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalEventTeacherCountAggregateInputType | true
    _avg?: ExternalEventTeacherAvgAggregateInputType
    _sum?: ExternalEventTeacherSumAggregateInputType
    _min?: ExternalEventTeacherMinAggregateInputType
    _max?: ExternalEventTeacherMaxAggregateInputType
  }

  export type ExternalEventTeacherGroupByOutputType = {
    event_id: number
    teacher_id: number
    role: string | null
    _count: ExternalEventTeacherCountAggregateOutputType | null
    _avg: ExternalEventTeacherAvgAggregateOutputType | null
    _sum: ExternalEventTeacherSumAggregateOutputType | null
    _min: ExternalEventTeacherMinAggregateOutputType | null
    _max: ExternalEventTeacherMaxAggregateOutputType | null
  }

  type GetExternalEventTeacherGroupByPayload<T extends ExternalEventTeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalEventTeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalEventTeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalEventTeacherGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalEventTeacherGroupByOutputType[P]>
        }
      >
    >


  export type ExternalEventTeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    teacher_id?: boolean
    role?: boolean
    events?: boolean | EventDefaultArgs<ExtArgs>
    teachers?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalEventTeacher"]>

  export type ExternalEventTeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    event_id?: boolean
    teacher_id?: boolean
    role?: boolean
    events?: boolean | EventDefaultArgs<ExtArgs>
    teachers?: boolean | TeacherDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["externalEventTeacher"]>

  export type ExternalEventTeacherSelectScalar = {
    event_id?: boolean
    teacher_id?: boolean
    role?: boolean
  }

  export type ExternalEventTeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventDefaultArgs<ExtArgs>
    teachers?: boolean | TeacherDefaultArgs<ExtArgs>
  }
  export type ExternalEventTeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | EventDefaultArgs<ExtArgs>
    teachers?: boolean | TeacherDefaultArgs<ExtArgs>
  }

  export type $ExternalEventTeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalEventTeacher"
    objects: {
      events: Prisma.$EventPayload<ExtArgs>
      teachers: Prisma.$TeacherPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      event_id: number
      teacher_id: number
      role: string | null
    }, ExtArgs["result"]["externalEventTeacher"]>
    composites: {}
  }

  type ExternalEventTeacherGetPayload<S extends boolean | null | undefined | ExternalEventTeacherDefaultArgs> = $Result.GetResult<Prisma.$ExternalEventTeacherPayload, S>

  type ExternalEventTeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalEventTeacherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExternalEventTeacherCountAggregateInputType | true
    }

  export interface ExternalEventTeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalEventTeacher'], meta: { name: 'ExternalEventTeacher' } }
    /**
     * Find zero or one ExternalEventTeacher that matches the filter.
     * @param {ExternalEventTeacherFindUniqueArgs} args - Arguments to find a ExternalEventTeacher
     * @example
     * // Get one ExternalEventTeacher
     * const externalEventTeacher = await prisma.externalEventTeacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalEventTeacherFindUniqueArgs>(args: SelectSubset<T, ExternalEventTeacherFindUniqueArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExternalEventTeacher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExternalEventTeacherFindUniqueOrThrowArgs} args - Arguments to find a ExternalEventTeacher
     * @example
     * // Get one ExternalEventTeacher
     * const externalEventTeacher = await prisma.externalEventTeacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalEventTeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalEventTeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExternalEventTeacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherFindFirstArgs} args - Arguments to find a ExternalEventTeacher
     * @example
     * // Get one ExternalEventTeacher
     * const externalEventTeacher = await prisma.externalEventTeacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalEventTeacherFindFirstArgs>(args?: SelectSubset<T, ExternalEventTeacherFindFirstArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExternalEventTeacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherFindFirstOrThrowArgs} args - Arguments to find a ExternalEventTeacher
     * @example
     * // Get one ExternalEventTeacher
     * const externalEventTeacher = await prisma.externalEventTeacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalEventTeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalEventTeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExternalEventTeachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalEventTeachers
     * const externalEventTeachers = await prisma.externalEventTeacher.findMany()
     * 
     * // Get first 10 ExternalEventTeachers
     * const externalEventTeachers = await prisma.externalEventTeacher.findMany({ take: 10 })
     * 
     * // Only select the `event_id`
     * const externalEventTeacherWithEvent_idOnly = await prisma.externalEventTeacher.findMany({ select: { event_id: true } })
     * 
     */
    findMany<T extends ExternalEventTeacherFindManyArgs>(args?: SelectSubset<T, ExternalEventTeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExternalEventTeacher.
     * @param {ExternalEventTeacherCreateArgs} args - Arguments to create a ExternalEventTeacher.
     * @example
     * // Create one ExternalEventTeacher
     * const ExternalEventTeacher = await prisma.externalEventTeacher.create({
     *   data: {
     *     // ... data to create a ExternalEventTeacher
     *   }
     * })
     * 
     */
    create<T extends ExternalEventTeacherCreateArgs>(args: SelectSubset<T, ExternalEventTeacherCreateArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExternalEventTeachers.
     * @param {ExternalEventTeacherCreateManyArgs} args - Arguments to create many ExternalEventTeachers.
     * @example
     * // Create many ExternalEventTeachers
     * const externalEventTeacher = await prisma.externalEventTeacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalEventTeacherCreateManyArgs>(args?: SelectSubset<T, ExternalEventTeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalEventTeachers and returns the data saved in the database.
     * @param {ExternalEventTeacherCreateManyAndReturnArgs} args - Arguments to create many ExternalEventTeachers.
     * @example
     * // Create many ExternalEventTeachers
     * const externalEventTeacher = await prisma.externalEventTeacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalEventTeachers and only return the `event_id`
     * const externalEventTeacherWithEvent_idOnly = await prisma.externalEventTeacher.createManyAndReturn({ 
     *   select: { event_id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalEventTeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalEventTeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExternalEventTeacher.
     * @param {ExternalEventTeacherDeleteArgs} args - Arguments to delete one ExternalEventTeacher.
     * @example
     * // Delete one ExternalEventTeacher
     * const ExternalEventTeacher = await prisma.externalEventTeacher.delete({
     *   where: {
     *     // ... filter to delete one ExternalEventTeacher
     *   }
     * })
     * 
     */
    delete<T extends ExternalEventTeacherDeleteArgs>(args: SelectSubset<T, ExternalEventTeacherDeleteArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExternalEventTeacher.
     * @param {ExternalEventTeacherUpdateArgs} args - Arguments to update one ExternalEventTeacher.
     * @example
     * // Update one ExternalEventTeacher
     * const externalEventTeacher = await prisma.externalEventTeacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalEventTeacherUpdateArgs>(args: SelectSubset<T, ExternalEventTeacherUpdateArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExternalEventTeachers.
     * @param {ExternalEventTeacherDeleteManyArgs} args - Arguments to filter ExternalEventTeachers to delete.
     * @example
     * // Delete a few ExternalEventTeachers
     * const { count } = await prisma.externalEventTeacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalEventTeacherDeleteManyArgs>(args?: SelectSubset<T, ExternalEventTeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalEventTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalEventTeachers
     * const externalEventTeacher = await prisma.externalEventTeacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalEventTeacherUpdateManyArgs>(args: SelectSubset<T, ExternalEventTeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalEventTeacher.
     * @param {ExternalEventTeacherUpsertArgs} args - Arguments to update or create a ExternalEventTeacher.
     * @example
     * // Update or create a ExternalEventTeacher
     * const externalEventTeacher = await prisma.externalEventTeacher.upsert({
     *   create: {
     *     // ... data to create a ExternalEventTeacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalEventTeacher we want to update
     *   }
     * })
     */
    upsert<T extends ExternalEventTeacherUpsertArgs>(args: SelectSubset<T, ExternalEventTeacherUpsertArgs<ExtArgs>>): Prisma__ExternalEventTeacherClient<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExternalEventTeachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherCountArgs} args - Arguments to filter ExternalEventTeachers to count.
     * @example
     * // Count the number of ExternalEventTeachers
     * const count = await prisma.externalEventTeacher.count({
     *   where: {
     *     // ... the filter for the ExternalEventTeachers we want to count
     *   }
     * })
    **/
    count<T extends ExternalEventTeacherCountArgs>(
      args?: Subset<T, ExternalEventTeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalEventTeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalEventTeacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExternalEventTeacherAggregateArgs>(args: Subset<T, ExternalEventTeacherAggregateArgs>): Prisma.PrismaPromise<GetExternalEventTeacherAggregateType<T>>

    /**
     * Group by ExternalEventTeacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventTeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExternalEventTeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalEventTeacherGroupByArgs['orderBy'] }
        : { orderBy?: ExternalEventTeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExternalEventTeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalEventTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalEventTeacher model
   */
  readonly fields: ExternalEventTeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalEventTeacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalEventTeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends EventDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EventDefaultArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    teachers<T extends TeacherDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TeacherDefaultArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExternalEventTeacher model
   */ 
  interface ExternalEventTeacherFieldRefs {
    readonly event_id: FieldRef<"ExternalEventTeacher", 'Int'>
    readonly teacher_id: FieldRef<"ExternalEventTeacher", 'Int'>
    readonly role: FieldRef<"ExternalEventTeacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExternalEventTeacher findUnique
   */
  export type ExternalEventTeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventTeacher to fetch.
     */
    where: ExternalEventTeacherWhereUniqueInput
  }

  /**
   * ExternalEventTeacher findUniqueOrThrow
   */
  export type ExternalEventTeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventTeacher to fetch.
     */
    where: ExternalEventTeacherWhereUniqueInput
  }

  /**
   * ExternalEventTeacher findFirst
   */
  export type ExternalEventTeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventTeacher to fetch.
     */
    where?: ExternalEventTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventTeachers to fetch.
     */
    orderBy?: ExternalEventTeacherOrderByWithRelationInput | ExternalEventTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalEventTeachers.
     */
    cursor?: ExternalEventTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalEventTeachers.
     */
    distinct?: ExternalEventTeacherScalarFieldEnum | ExternalEventTeacherScalarFieldEnum[]
  }

  /**
   * ExternalEventTeacher findFirstOrThrow
   */
  export type ExternalEventTeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventTeacher to fetch.
     */
    where?: ExternalEventTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventTeachers to fetch.
     */
    orderBy?: ExternalEventTeacherOrderByWithRelationInput | ExternalEventTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalEventTeachers.
     */
    cursor?: ExternalEventTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventTeachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalEventTeachers.
     */
    distinct?: ExternalEventTeacherScalarFieldEnum | ExternalEventTeacherScalarFieldEnum[]
  }

  /**
   * ExternalEventTeacher findMany
   */
  export type ExternalEventTeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventTeachers to fetch.
     */
    where?: ExternalEventTeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventTeachers to fetch.
     */
    orderBy?: ExternalEventTeacherOrderByWithRelationInput | ExternalEventTeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalEventTeachers.
     */
    cursor?: ExternalEventTeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventTeachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventTeachers.
     */
    skip?: number
    distinct?: ExternalEventTeacherScalarFieldEnum | ExternalEventTeacherScalarFieldEnum[]
  }

  /**
   * ExternalEventTeacher create
   */
  export type ExternalEventTeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalEventTeacher.
     */
    data: XOR<ExternalEventTeacherCreateInput, ExternalEventTeacherUncheckedCreateInput>
  }

  /**
   * ExternalEventTeacher createMany
   */
  export type ExternalEventTeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalEventTeachers.
     */
    data: ExternalEventTeacherCreateManyInput | ExternalEventTeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalEventTeacher createManyAndReturn
   */
  export type ExternalEventTeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExternalEventTeachers.
     */
    data: ExternalEventTeacherCreateManyInput | ExternalEventTeacherCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalEventTeacher update
   */
  export type ExternalEventTeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalEventTeacher.
     */
    data: XOR<ExternalEventTeacherUpdateInput, ExternalEventTeacherUncheckedUpdateInput>
    /**
     * Choose, which ExternalEventTeacher to update.
     */
    where: ExternalEventTeacherWhereUniqueInput
  }

  /**
   * ExternalEventTeacher updateMany
   */
  export type ExternalEventTeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalEventTeachers.
     */
    data: XOR<ExternalEventTeacherUpdateManyMutationInput, ExternalEventTeacherUncheckedUpdateManyInput>
    /**
     * Filter which ExternalEventTeachers to update
     */
    where?: ExternalEventTeacherWhereInput
  }

  /**
   * ExternalEventTeacher upsert
   */
  export type ExternalEventTeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalEventTeacher to update in case it exists.
     */
    where: ExternalEventTeacherWhereUniqueInput
    /**
     * In case the ExternalEventTeacher found by the `where` argument doesn't exist, create a new ExternalEventTeacher with this data.
     */
    create: XOR<ExternalEventTeacherCreateInput, ExternalEventTeacherUncheckedCreateInput>
    /**
     * In case the ExternalEventTeacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalEventTeacherUpdateInput, ExternalEventTeacherUncheckedUpdateInput>
  }

  /**
   * ExternalEventTeacher delete
   */
  export type ExternalEventTeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    /**
     * Filter which ExternalEventTeacher to delete.
     */
    where: ExternalEventTeacherWhereUniqueInput
  }

  /**
   * ExternalEventTeacher deleteMany
   */
  export type ExternalEventTeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalEventTeachers to delete
     */
    where?: ExternalEventTeacherWhereInput
  }

  /**
   * ExternalEventTeacher without action
   */
  export type ExternalEventTeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
  }


  /**
   * Model ExternalEventVenue
   */

  export type AggregateExternalEventVenue = {
    _count: ExternalEventVenueCountAggregateOutputType | null
    _avg: ExternalEventVenueAvgAggregateOutputType | null
    _sum: ExternalEventVenueSumAggregateOutputType | null
    _min: ExternalEventVenueMinAggregateOutputType | null
    _max: ExternalEventVenueMaxAggregateOutputType | null
  }

  export type ExternalEventVenueAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type ExternalEventVenueSumAggregateOutputType = {
    id: number | null
    event_id: number | null
  }

  export type ExternalEventVenueMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    address: string | null
    type: string | null
  }

  export type ExternalEventVenueMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    name: string | null
    address: string | null
    type: string | null
  }

  export type ExternalEventVenueCountAggregateOutputType = {
    id: number
    event_id: number
    name: number
    address: number
    type: number
    _all: number
  }


  export type ExternalEventVenueAvgAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type ExternalEventVenueSumAggregateInputType = {
    id?: true
    event_id?: true
  }

  export type ExternalEventVenueMinAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    address?: true
    type?: true
  }

  export type ExternalEventVenueMaxAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    address?: true
    type?: true
  }

  export type ExternalEventVenueCountAggregateInputType = {
    id?: true
    event_id?: true
    name?: true
    address?: true
    type?: true
    _all?: true
  }

  export type ExternalEventVenueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalEventVenue to aggregate.
     */
    where?: ExternalEventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventVenues to fetch.
     */
    orderBy?: ExternalEventVenueOrderByWithRelationInput | ExternalEventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExternalEventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExternalEventVenues
    **/
    _count?: true | ExternalEventVenueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExternalEventVenueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExternalEventVenueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExternalEventVenueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExternalEventVenueMaxAggregateInputType
  }

  export type GetExternalEventVenueAggregateType<T extends ExternalEventVenueAggregateArgs> = {
        [P in keyof T & keyof AggregateExternalEventVenue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExternalEventVenue[P]>
      : GetScalarType<T[P], AggregateExternalEventVenue[P]>
  }




  export type ExternalEventVenueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExternalEventVenueWhereInput
    orderBy?: ExternalEventVenueOrderByWithAggregationInput | ExternalEventVenueOrderByWithAggregationInput[]
    by: ExternalEventVenueScalarFieldEnum[] | ExternalEventVenueScalarFieldEnum
    having?: ExternalEventVenueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExternalEventVenueCountAggregateInputType | true
    _avg?: ExternalEventVenueAvgAggregateInputType
    _sum?: ExternalEventVenueSumAggregateInputType
    _min?: ExternalEventVenueMinAggregateInputType
    _max?: ExternalEventVenueMaxAggregateInputType
  }

  export type ExternalEventVenueGroupByOutputType = {
    id: number
    event_id: number | null
    name: string | null
    address: string | null
    type: string | null
    _count: ExternalEventVenueCountAggregateOutputType | null
    _avg: ExternalEventVenueAvgAggregateOutputType | null
    _sum: ExternalEventVenueSumAggregateOutputType | null
    _min: ExternalEventVenueMinAggregateOutputType | null
    _max: ExternalEventVenueMaxAggregateOutputType | null
  }

  type GetExternalEventVenueGroupByPayload<T extends ExternalEventVenueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExternalEventVenueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExternalEventVenueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExternalEventVenueGroupByOutputType[P]>
            : GetScalarType<T[P], ExternalEventVenueGroupByOutputType[P]>
        }
      >
    >


  export type ExternalEventVenueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    events?: boolean | ExternalEventVenue$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["externalEventVenue"]>

  export type ExternalEventVenueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
    events?: boolean | ExternalEventVenue$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["externalEventVenue"]>

  export type ExternalEventVenueSelectScalar = {
    id?: boolean
    event_id?: boolean
    name?: boolean
    address?: boolean
    type?: boolean
  }

  export type ExternalEventVenueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ExternalEventVenue$eventsArgs<ExtArgs>
  }
  export type ExternalEventVenueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | ExternalEventVenue$eventsArgs<ExtArgs>
  }

  export type $ExternalEventVenuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExternalEventVenue"
    objects: {
      events: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      name: string | null
      address: string | null
      type: string | null
    }, ExtArgs["result"]["externalEventVenue"]>
    composites: {}
  }

  type ExternalEventVenueGetPayload<S extends boolean | null | undefined | ExternalEventVenueDefaultArgs> = $Result.GetResult<Prisma.$ExternalEventVenuePayload, S>

  type ExternalEventVenueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExternalEventVenueFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExternalEventVenueCountAggregateInputType | true
    }

  export interface ExternalEventVenueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExternalEventVenue'], meta: { name: 'ExternalEventVenue' } }
    /**
     * Find zero or one ExternalEventVenue that matches the filter.
     * @param {ExternalEventVenueFindUniqueArgs} args - Arguments to find a ExternalEventVenue
     * @example
     * // Get one ExternalEventVenue
     * const externalEventVenue = await prisma.externalEventVenue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExternalEventVenueFindUniqueArgs>(args: SelectSubset<T, ExternalEventVenueFindUniqueArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ExternalEventVenue that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExternalEventVenueFindUniqueOrThrowArgs} args - Arguments to find a ExternalEventVenue
     * @example
     * // Get one ExternalEventVenue
     * const externalEventVenue = await prisma.externalEventVenue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExternalEventVenueFindUniqueOrThrowArgs>(args: SelectSubset<T, ExternalEventVenueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ExternalEventVenue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueFindFirstArgs} args - Arguments to find a ExternalEventVenue
     * @example
     * // Get one ExternalEventVenue
     * const externalEventVenue = await prisma.externalEventVenue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExternalEventVenueFindFirstArgs>(args?: SelectSubset<T, ExternalEventVenueFindFirstArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ExternalEventVenue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueFindFirstOrThrowArgs} args - Arguments to find a ExternalEventVenue
     * @example
     * // Get one ExternalEventVenue
     * const externalEventVenue = await prisma.externalEventVenue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExternalEventVenueFindFirstOrThrowArgs>(args?: SelectSubset<T, ExternalEventVenueFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ExternalEventVenues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExternalEventVenues
     * const externalEventVenues = await prisma.externalEventVenue.findMany()
     * 
     * // Get first 10 ExternalEventVenues
     * const externalEventVenues = await prisma.externalEventVenue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const externalEventVenueWithIdOnly = await prisma.externalEventVenue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExternalEventVenueFindManyArgs>(args?: SelectSubset<T, ExternalEventVenueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ExternalEventVenue.
     * @param {ExternalEventVenueCreateArgs} args - Arguments to create a ExternalEventVenue.
     * @example
     * // Create one ExternalEventVenue
     * const ExternalEventVenue = await prisma.externalEventVenue.create({
     *   data: {
     *     // ... data to create a ExternalEventVenue
     *   }
     * })
     * 
     */
    create<T extends ExternalEventVenueCreateArgs>(args: SelectSubset<T, ExternalEventVenueCreateArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ExternalEventVenues.
     * @param {ExternalEventVenueCreateManyArgs} args - Arguments to create many ExternalEventVenues.
     * @example
     * // Create many ExternalEventVenues
     * const externalEventVenue = await prisma.externalEventVenue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExternalEventVenueCreateManyArgs>(args?: SelectSubset<T, ExternalEventVenueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExternalEventVenues and returns the data saved in the database.
     * @param {ExternalEventVenueCreateManyAndReturnArgs} args - Arguments to create many ExternalEventVenues.
     * @example
     * // Create many ExternalEventVenues
     * const externalEventVenue = await prisma.externalEventVenue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExternalEventVenues and only return the `id`
     * const externalEventVenueWithIdOnly = await prisma.externalEventVenue.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExternalEventVenueCreateManyAndReturnArgs>(args?: SelectSubset<T, ExternalEventVenueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ExternalEventVenue.
     * @param {ExternalEventVenueDeleteArgs} args - Arguments to delete one ExternalEventVenue.
     * @example
     * // Delete one ExternalEventVenue
     * const ExternalEventVenue = await prisma.externalEventVenue.delete({
     *   where: {
     *     // ... filter to delete one ExternalEventVenue
     *   }
     * })
     * 
     */
    delete<T extends ExternalEventVenueDeleteArgs>(args: SelectSubset<T, ExternalEventVenueDeleteArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ExternalEventVenue.
     * @param {ExternalEventVenueUpdateArgs} args - Arguments to update one ExternalEventVenue.
     * @example
     * // Update one ExternalEventVenue
     * const externalEventVenue = await prisma.externalEventVenue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExternalEventVenueUpdateArgs>(args: SelectSubset<T, ExternalEventVenueUpdateArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ExternalEventVenues.
     * @param {ExternalEventVenueDeleteManyArgs} args - Arguments to filter ExternalEventVenues to delete.
     * @example
     * // Delete a few ExternalEventVenues
     * const { count } = await prisma.externalEventVenue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExternalEventVenueDeleteManyArgs>(args?: SelectSubset<T, ExternalEventVenueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExternalEventVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExternalEventVenues
     * const externalEventVenue = await prisma.externalEventVenue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExternalEventVenueUpdateManyArgs>(args: SelectSubset<T, ExternalEventVenueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ExternalEventVenue.
     * @param {ExternalEventVenueUpsertArgs} args - Arguments to update or create a ExternalEventVenue.
     * @example
     * // Update or create a ExternalEventVenue
     * const externalEventVenue = await prisma.externalEventVenue.upsert({
     *   create: {
     *     // ... data to create a ExternalEventVenue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExternalEventVenue we want to update
     *   }
     * })
     */
    upsert<T extends ExternalEventVenueUpsertArgs>(args: SelectSubset<T, ExternalEventVenueUpsertArgs<ExtArgs>>): Prisma__ExternalEventVenueClient<$Result.GetResult<Prisma.$ExternalEventVenuePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ExternalEventVenues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueCountArgs} args - Arguments to filter ExternalEventVenues to count.
     * @example
     * // Count the number of ExternalEventVenues
     * const count = await prisma.externalEventVenue.count({
     *   where: {
     *     // ... the filter for the ExternalEventVenues we want to count
     *   }
     * })
    **/
    count<T extends ExternalEventVenueCountArgs>(
      args?: Subset<T, ExternalEventVenueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExternalEventVenueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExternalEventVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExternalEventVenueAggregateArgs>(args: Subset<T, ExternalEventVenueAggregateArgs>): Prisma.PrismaPromise<GetExternalEventVenueAggregateType<T>>

    /**
     * Group by ExternalEventVenue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExternalEventVenueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExternalEventVenueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExternalEventVenueGroupByArgs['orderBy'] }
        : { orderBy?: ExternalEventVenueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExternalEventVenueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExternalEventVenueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExternalEventVenue model
   */
  readonly fields: ExternalEventVenueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExternalEventVenue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExternalEventVenueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends ExternalEventVenue$eventsArgs<ExtArgs> = {}>(args?: Subset<T, ExternalEventVenue$eventsArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ExternalEventVenue model
   */ 
  interface ExternalEventVenueFieldRefs {
    readonly id: FieldRef<"ExternalEventVenue", 'Int'>
    readonly event_id: FieldRef<"ExternalEventVenue", 'Int'>
    readonly name: FieldRef<"ExternalEventVenue", 'String'>
    readonly address: FieldRef<"ExternalEventVenue", 'String'>
    readonly type: FieldRef<"ExternalEventVenue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * ExternalEventVenue findUnique
   */
  export type ExternalEventVenueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventVenue to fetch.
     */
    where: ExternalEventVenueWhereUniqueInput
  }

  /**
   * ExternalEventVenue findUniqueOrThrow
   */
  export type ExternalEventVenueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventVenue to fetch.
     */
    where: ExternalEventVenueWhereUniqueInput
  }

  /**
   * ExternalEventVenue findFirst
   */
  export type ExternalEventVenueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventVenue to fetch.
     */
    where?: ExternalEventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventVenues to fetch.
     */
    orderBy?: ExternalEventVenueOrderByWithRelationInput | ExternalEventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalEventVenues.
     */
    cursor?: ExternalEventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalEventVenues.
     */
    distinct?: ExternalEventVenueScalarFieldEnum | ExternalEventVenueScalarFieldEnum[]
  }

  /**
   * ExternalEventVenue findFirstOrThrow
   */
  export type ExternalEventVenueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventVenue to fetch.
     */
    where?: ExternalEventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventVenues to fetch.
     */
    orderBy?: ExternalEventVenueOrderByWithRelationInput | ExternalEventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExternalEventVenues.
     */
    cursor?: ExternalEventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventVenues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExternalEventVenues.
     */
    distinct?: ExternalEventVenueScalarFieldEnum | ExternalEventVenueScalarFieldEnum[]
  }

  /**
   * ExternalEventVenue findMany
   */
  export type ExternalEventVenueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * Filter, which ExternalEventVenues to fetch.
     */
    where?: ExternalEventVenueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExternalEventVenues to fetch.
     */
    orderBy?: ExternalEventVenueOrderByWithRelationInput | ExternalEventVenueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExternalEventVenues.
     */
    cursor?: ExternalEventVenueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExternalEventVenues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExternalEventVenues.
     */
    skip?: number
    distinct?: ExternalEventVenueScalarFieldEnum | ExternalEventVenueScalarFieldEnum[]
  }

  /**
   * ExternalEventVenue create
   */
  export type ExternalEventVenueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * The data needed to create a ExternalEventVenue.
     */
    data?: XOR<ExternalEventVenueCreateInput, ExternalEventVenueUncheckedCreateInput>
  }

  /**
   * ExternalEventVenue createMany
   */
  export type ExternalEventVenueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExternalEventVenues.
     */
    data: ExternalEventVenueCreateManyInput | ExternalEventVenueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExternalEventVenue createManyAndReturn
   */
  export type ExternalEventVenueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ExternalEventVenues.
     */
    data: ExternalEventVenueCreateManyInput | ExternalEventVenueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExternalEventVenue update
   */
  export type ExternalEventVenueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * The data needed to update a ExternalEventVenue.
     */
    data: XOR<ExternalEventVenueUpdateInput, ExternalEventVenueUncheckedUpdateInput>
    /**
     * Choose, which ExternalEventVenue to update.
     */
    where: ExternalEventVenueWhereUniqueInput
  }

  /**
   * ExternalEventVenue updateMany
   */
  export type ExternalEventVenueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExternalEventVenues.
     */
    data: XOR<ExternalEventVenueUpdateManyMutationInput, ExternalEventVenueUncheckedUpdateManyInput>
    /**
     * Filter which ExternalEventVenues to update
     */
    where?: ExternalEventVenueWhereInput
  }

  /**
   * ExternalEventVenue upsert
   */
  export type ExternalEventVenueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * The filter to search for the ExternalEventVenue to update in case it exists.
     */
    where: ExternalEventVenueWhereUniqueInput
    /**
     * In case the ExternalEventVenue found by the `where` argument doesn't exist, create a new ExternalEventVenue with this data.
     */
    create: XOR<ExternalEventVenueCreateInput, ExternalEventVenueUncheckedCreateInput>
    /**
     * In case the ExternalEventVenue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExternalEventVenueUpdateInput, ExternalEventVenueUncheckedUpdateInput>
  }

  /**
   * ExternalEventVenue delete
   */
  export type ExternalEventVenueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
    /**
     * Filter which ExternalEventVenue to delete.
     */
    where: ExternalEventVenueWhereUniqueInput
  }

  /**
   * ExternalEventVenue deleteMany
   */
  export type ExternalEventVenueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExternalEventVenues to delete
     */
    where?: ExternalEventVenueWhereInput
  }

  /**
   * ExternalEventVenue.events
   */
  export type ExternalEventVenue$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * ExternalEventVenue without action
   */
  export type ExternalEventVenueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventVenue
     */
    select?: ExternalEventVenueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventVenueInclude<ExtArgs> | null
  }


  /**
   * Model Teacher
   */

  export type AggregateTeacher = {
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  export type TeacherAvgAggregateOutputType = {
    id: number | null
    ai_relevance_score: number | null
  }

  export type TeacherSumAggregateOutputType = {
    id: number | null
    ai_relevance_score: number | null
  }

  export type TeacherMinAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    website: string | null
    ai_bio_summary: string | null
    ai_relevance_score: number | null
    image_url: string | null
  }

  export type TeacherMaxAggregateOutputType = {
    id: number | null
    name: string | null
    bio: string | null
    website: string | null
    ai_bio_summary: string | null
    ai_relevance_score: number | null
    image_url: string | null
  }

  export type TeacherCountAggregateOutputType = {
    id: number
    name: number
    bio: number
    website: number
    ai_bio_summary: number
    ai_relevance_score: number
    image_url: number
    _all: number
  }


  export type TeacherAvgAggregateInputType = {
    id?: true
    ai_relevance_score?: true
  }

  export type TeacherSumAggregateInputType = {
    id?: true
    ai_relevance_score?: true
  }

  export type TeacherMinAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    website?: true
    ai_bio_summary?: true
    ai_relevance_score?: true
    image_url?: true
  }

  export type TeacherMaxAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    website?: true
    ai_bio_summary?: true
    ai_relevance_score?: true
    image_url?: true
  }

  export type TeacherCountAggregateInputType = {
    id?: true
    name?: true
    bio?: true
    website?: true
    ai_bio_summary?: true
    ai_relevance_score?: true
    image_url?: true
    _all?: true
  }

  export type TeacherAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teacher to aggregate.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Teachers
    **/
    _count?: true | TeacherCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TeacherAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TeacherSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TeacherMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TeacherMaxAggregateInputType
  }

  export type GetTeacherAggregateType<T extends TeacherAggregateArgs> = {
        [P in keyof T & keyof AggregateTeacher]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTeacher[P]>
      : GetScalarType<T[P], AggregateTeacher[P]>
  }




  export type TeacherGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TeacherWhereInput
    orderBy?: TeacherOrderByWithAggregationInput | TeacherOrderByWithAggregationInput[]
    by: TeacherScalarFieldEnum[] | TeacherScalarFieldEnum
    having?: TeacherScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TeacherCountAggregateInputType | true
    _avg?: TeacherAvgAggregateInputType
    _sum?: TeacherSumAggregateInputType
    _min?: TeacherMinAggregateInputType
    _max?: TeacherMaxAggregateInputType
  }

  export type TeacherGroupByOutputType = {
    id: number
    name: string
    bio: string | null
    website: string | null
    ai_bio_summary: string | null
    ai_relevance_score: number | null
    image_url: string | null
    _count: TeacherCountAggregateOutputType | null
    _avg: TeacherAvgAggregateOutputType | null
    _sum: TeacherSumAggregateOutputType | null
    _min: TeacherMinAggregateOutputType | null
    _max: TeacherMaxAggregateOutputType | null
  }

  type GetTeacherGroupByPayload<T extends TeacherGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TeacherGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TeacherGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TeacherGroupByOutputType[P]>
            : GetScalarType<T[P], TeacherGroupByOutputType[P]>
        }
      >
    >


  export type TeacherSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    website?: boolean
    ai_bio_summary?: boolean
    ai_relevance_score?: boolean
    image_url?: boolean
    event_teachers?: boolean | Teacher$event_teachersArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    bio?: boolean
    website?: boolean
    ai_bio_summary?: boolean
    ai_relevance_score?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["teacher"]>

  export type TeacherSelectScalar = {
    id?: boolean
    name?: boolean
    bio?: boolean
    website?: boolean
    ai_bio_summary?: boolean
    ai_relevance_score?: boolean
    image_url?: boolean
  }

  export type TeacherInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_teachers?: boolean | Teacher$event_teachersArgs<ExtArgs>
    _count?: boolean | TeacherCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TeacherIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TeacherPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Teacher"
    objects: {
      event_teachers: Prisma.$ExternalEventTeacherPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      bio: string | null
      website: string | null
      ai_bio_summary: string | null
      ai_relevance_score: number | null
      image_url: string | null
    }, ExtArgs["result"]["teacher"]>
    composites: {}
  }

  type TeacherGetPayload<S extends boolean | null | undefined | TeacherDefaultArgs> = $Result.GetResult<Prisma.$TeacherPayload, S>

  type TeacherCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TeacherFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TeacherCountAggregateInputType | true
    }

  export interface TeacherDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Teacher'], meta: { name: 'Teacher' } }
    /**
     * Find zero or one Teacher that matches the filter.
     * @param {TeacherFindUniqueArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TeacherFindUniqueArgs>(args: SelectSubset<T, TeacherFindUniqueArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Teacher that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {TeacherFindUniqueOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TeacherFindUniqueOrThrowArgs>(args: SelectSubset<T, TeacherFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Teacher that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TeacherFindFirstArgs>(args?: SelectSubset<T, TeacherFindFirstArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Teacher that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindFirstOrThrowArgs} args - Arguments to find a Teacher
     * @example
     * // Get one Teacher
     * const teacher = await prisma.teacher.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TeacherFindFirstOrThrowArgs>(args?: SelectSubset<T, TeacherFindFirstOrThrowArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Teachers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Teachers
     * const teachers = await prisma.teacher.findMany()
     * 
     * // Get first 10 Teachers
     * const teachers = await prisma.teacher.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const teacherWithIdOnly = await prisma.teacher.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TeacherFindManyArgs>(args?: SelectSubset<T, TeacherFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Teacher.
     * @param {TeacherCreateArgs} args - Arguments to create a Teacher.
     * @example
     * // Create one Teacher
     * const Teacher = await prisma.teacher.create({
     *   data: {
     *     // ... data to create a Teacher
     *   }
     * })
     * 
     */
    create<T extends TeacherCreateArgs>(args: SelectSubset<T, TeacherCreateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Teachers.
     * @param {TeacherCreateManyArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TeacherCreateManyArgs>(args?: SelectSubset<T, TeacherCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Teachers and returns the data saved in the database.
     * @param {TeacherCreateManyAndReturnArgs} args - Arguments to create many Teachers.
     * @example
     * // Create many Teachers
     * const teacher = await prisma.teacher.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Teachers and only return the `id`
     * const teacherWithIdOnly = await prisma.teacher.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TeacherCreateManyAndReturnArgs>(args?: SelectSubset<T, TeacherCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Teacher.
     * @param {TeacherDeleteArgs} args - Arguments to delete one Teacher.
     * @example
     * // Delete one Teacher
     * const Teacher = await prisma.teacher.delete({
     *   where: {
     *     // ... filter to delete one Teacher
     *   }
     * })
     * 
     */
    delete<T extends TeacherDeleteArgs>(args: SelectSubset<T, TeacherDeleteArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Teacher.
     * @param {TeacherUpdateArgs} args - Arguments to update one Teacher.
     * @example
     * // Update one Teacher
     * const teacher = await prisma.teacher.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TeacherUpdateArgs>(args: SelectSubset<T, TeacherUpdateArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Teachers.
     * @param {TeacherDeleteManyArgs} args - Arguments to filter Teachers to delete.
     * @example
     * // Delete a few Teachers
     * const { count } = await prisma.teacher.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TeacherDeleteManyArgs>(args?: SelectSubset<T, TeacherDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Teachers
     * const teacher = await prisma.teacher.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TeacherUpdateManyArgs>(args: SelectSubset<T, TeacherUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Teacher.
     * @param {TeacherUpsertArgs} args - Arguments to update or create a Teacher.
     * @example
     * // Update or create a Teacher
     * const teacher = await prisma.teacher.upsert({
     *   create: {
     *     // ... data to create a Teacher
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Teacher we want to update
     *   }
     * })
     */
    upsert<T extends TeacherUpsertArgs>(args: SelectSubset<T, TeacherUpsertArgs<ExtArgs>>): Prisma__TeacherClient<$Result.GetResult<Prisma.$TeacherPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Teachers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherCountArgs} args - Arguments to filter Teachers to count.
     * @example
     * // Count the number of Teachers
     * const count = await prisma.teacher.count({
     *   where: {
     *     // ... the filter for the Teachers we want to count
     *   }
     * })
    **/
    count<T extends TeacherCountArgs>(
      args?: Subset<T, TeacherCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TeacherCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TeacherAggregateArgs>(args: Subset<T, TeacherAggregateArgs>): Prisma.PrismaPromise<GetTeacherAggregateType<T>>

    /**
     * Group by Teacher.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TeacherGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TeacherGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TeacherGroupByArgs['orderBy'] }
        : { orderBy?: TeacherGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TeacherGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTeacherGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Teacher model
   */
  readonly fields: TeacherFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Teacher.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TeacherClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_teachers<T extends Teacher$event_teachersArgs<ExtArgs> = {}>(args?: Subset<T, Teacher$event_teachersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExternalEventTeacherPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Teacher model
   */ 
  interface TeacherFieldRefs {
    readonly id: FieldRef<"Teacher", 'Int'>
    readonly name: FieldRef<"Teacher", 'String'>
    readonly bio: FieldRef<"Teacher", 'String'>
    readonly website: FieldRef<"Teacher", 'String'>
    readonly ai_bio_summary: FieldRef<"Teacher", 'String'>
    readonly ai_relevance_score: FieldRef<"Teacher", 'Int'>
    readonly image_url: FieldRef<"Teacher", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Teacher findUnique
   */
  export type TeacherFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findUniqueOrThrow
   */
  export type TeacherFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher findFirst
   */
  export type TeacherFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findFirstOrThrow
   */
  export type TeacherFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teacher to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Teachers.
     */
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher findMany
   */
  export type TeacherFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter, which Teachers to fetch.
     */
    where?: TeacherWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Teachers to fetch.
     */
    orderBy?: TeacherOrderByWithRelationInput | TeacherOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Teachers.
     */
    cursor?: TeacherWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Teachers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Teachers.
     */
    skip?: number
    distinct?: TeacherScalarFieldEnum | TeacherScalarFieldEnum[]
  }

  /**
   * Teacher create
   */
  export type TeacherCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to create a Teacher.
     */
    data: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
  }

  /**
   * Teacher createMany
   */
  export type TeacherCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher createManyAndReturn
   */
  export type TeacherCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Teachers.
     */
    data: TeacherCreateManyInput | TeacherCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Teacher update
   */
  export type TeacherUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The data needed to update a Teacher.
     */
    data: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
    /**
     * Choose, which Teacher to update.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher updateMany
   */
  export type TeacherUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Teachers.
     */
    data: XOR<TeacherUpdateManyMutationInput, TeacherUncheckedUpdateManyInput>
    /**
     * Filter which Teachers to update
     */
    where?: TeacherWhereInput
  }

  /**
   * Teacher upsert
   */
  export type TeacherUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * The filter to search for the Teacher to update in case it exists.
     */
    where: TeacherWhereUniqueInput
    /**
     * In case the Teacher found by the `where` argument doesn't exist, create a new Teacher with this data.
     */
    create: XOR<TeacherCreateInput, TeacherUncheckedCreateInput>
    /**
     * In case the Teacher was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TeacherUpdateInput, TeacherUncheckedUpdateInput>
  }

  /**
   * Teacher delete
   */
  export type TeacherDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
    /**
     * Filter which Teacher to delete.
     */
    where: TeacherWhereUniqueInput
  }

  /**
   * Teacher deleteMany
   */
  export type TeacherDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Teachers to delete
     */
    where?: TeacherWhereInput
  }

  /**
   * Teacher.event_teachers
   */
  export type Teacher$event_teachersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExternalEventTeacher
     */
    select?: ExternalEventTeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExternalEventTeacherInclude<ExtArgs> | null
    where?: ExternalEventTeacherWhereInput
    orderBy?: ExternalEventTeacherOrderByWithRelationInput | ExternalEventTeacherOrderByWithRelationInput[]
    cursor?: ExternalEventTeacherWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExternalEventTeacherScalarFieldEnum | ExternalEventTeacherScalarFieldEnum[]
  }

  /**
   * Teacher without action
   */
  export type TeacherDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Teacher
     */
    select?: TeacherSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TeacherInclude<ExtArgs> | null
  }


  /**
   * Model Musician
   */

  export type AggregateMusician = {
    _count: MusicianCountAggregateOutputType | null
    _avg: MusicianAvgAggregateOutputType | null
    _sum: MusicianSumAggregateOutputType | null
    _min: MusicianMinAggregateOutputType | null
    _max: MusicianMaxAggregateOutputType | null
  }

  export type MusicianAvgAggregateOutputType = {
    id: number | null
    yearsActive: number | null
    followerCount: number | null
    eventCount: number | null
  }

  export type MusicianSumAggregateOutputType = {
    id: number | null
    yearsActive: number | null
    followerCount: number | null
    eventCount: number | null
  }

  export type MusicianMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    bio: string | null
    avatar: string | null
    verified: boolean | null
    yearsActive: number | null
    website: string | null
    email: string | null
    followerCount: number | null
    eventCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    image_url: string | null
  }

  export type MusicianMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    bio: string | null
    avatar: string | null
    verified: boolean | null
    yearsActive: number | null
    website: string | null
    email: string | null
    followerCount: number | null
    eventCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    image_url: string | null
  }

  export type MusicianCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    bio: number
    avatar: number
    verified: number
    instruments: number
    yearsActive: number
    website: number
    email: number
    followerCount: number
    eventCount: number
    createdAt: number
    updatedAt: number
    image_url: number
    _all: number
  }


  export type MusicianAvgAggregateInputType = {
    id?: true
    yearsActive?: true
    followerCount?: true
    eventCount?: true
  }

  export type MusicianSumAggregateInputType = {
    id?: true
    yearsActive?: true
    followerCount?: true
    eventCount?: true
  }

  export type MusicianMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bio?: true
    avatar?: true
    verified?: true
    yearsActive?: true
    website?: true
    email?: true
    followerCount?: true
    eventCount?: true
    createdAt?: true
    updatedAt?: true
    image_url?: true
  }

  export type MusicianMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bio?: true
    avatar?: true
    verified?: true
    yearsActive?: true
    website?: true
    email?: true
    followerCount?: true
    eventCount?: true
    createdAt?: true
    updatedAt?: true
    image_url?: true
  }

  export type MusicianCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    bio?: true
    avatar?: true
    verified?: true
    instruments?: true
    yearsActive?: true
    website?: true
    email?: true
    followerCount?: true
    eventCount?: true
    createdAt?: true
    updatedAt?: true
    image_url?: true
    _all?: true
  }

  export type MusicianAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Musician to aggregate.
     */
    where?: MusicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicians to fetch.
     */
    orderBy?: MusicianOrderByWithRelationInput | MusicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MusicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Musicians
    **/
    _count?: true | MusicianCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MusicianAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MusicianSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MusicianMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MusicianMaxAggregateInputType
  }

  export type GetMusicianAggregateType<T extends MusicianAggregateArgs> = {
        [P in keyof T & keyof AggregateMusician]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMusician[P]>
      : GetScalarType<T[P], AggregateMusician[P]>
  }




  export type MusicianGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MusicianWhereInput
    orderBy?: MusicianOrderByWithAggregationInput | MusicianOrderByWithAggregationInput[]
    by: MusicianScalarFieldEnum[] | MusicianScalarFieldEnum
    having?: MusicianScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MusicianCountAggregateInputType | true
    _avg?: MusicianAvgAggregateInputType
    _sum?: MusicianSumAggregateInputType
    _min?: MusicianMinAggregateInputType
    _max?: MusicianMaxAggregateInputType
  }

  export type MusicianGroupByOutputType = {
    id: number
    name: string
    slug: string
    bio: string | null
    avatar: string | null
    verified: boolean | null
    instruments: string[]
    yearsActive: number | null
    website: string | null
    email: string | null
    followerCount: number | null
    eventCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
    image_url: string | null
    _count: MusicianCountAggregateOutputType | null
    _avg: MusicianAvgAggregateOutputType | null
    _sum: MusicianSumAggregateOutputType | null
    _min: MusicianMinAggregateOutputType | null
    _max: MusicianMaxAggregateOutputType | null
  }

  type GetMusicianGroupByPayload<T extends MusicianGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MusicianGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MusicianGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MusicianGroupByOutputType[P]>
            : GetScalarType<T[P], MusicianGroupByOutputType[P]>
        }
      >
    >


  export type MusicianSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    avatar?: boolean
    verified?: boolean
    instruments?: boolean
    yearsActive?: boolean
    website?: boolean
    email?: boolean
    followerCount?: boolean
    eventCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image_url?: boolean
    event_musicians?: boolean | Musician$event_musiciansArgs<ExtArgs>
    _count?: boolean | MusicianCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["musician"]>

  export type MusicianSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    avatar?: boolean
    verified?: boolean
    instruments?: boolean
    yearsActive?: boolean
    website?: boolean
    email?: boolean
    followerCount?: boolean
    eventCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image_url?: boolean
  }, ExtArgs["result"]["musician"]>

  export type MusicianSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    bio?: boolean
    avatar?: boolean
    verified?: boolean
    instruments?: boolean
    yearsActive?: boolean
    website?: boolean
    email?: boolean
    followerCount?: boolean
    eventCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    image_url?: boolean
  }

  export type MusicianInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    event_musicians?: boolean | Musician$event_musiciansArgs<ExtArgs>
    _count?: boolean | MusicianCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MusicianIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MusicianPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Musician"
    objects: {
      event_musicians: Prisma.$event_musiciansPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      bio: string | null
      avatar: string | null
      verified: boolean | null
      instruments: string[]
      yearsActive: number | null
      website: string | null
      email: string | null
      followerCount: number | null
      eventCount: number | null
      createdAt: Date | null
      updatedAt: Date | null
      image_url: string | null
    }, ExtArgs["result"]["musician"]>
    composites: {}
  }

  type MusicianGetPayload<S extends boolean | null | undefined | MusicianDefaultArgs> = $Result.GetResult<Prisma.$MusicianPayload, S>

  type MusicianCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<MusicianFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: MusicianCountAggregateInputType | true
    }

  export interface MusicianDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Musician'], meta: { name: 'Musician' } }
    /**
     * Find zero or one Musician that matches the filter.
     * @param {MusicianFindUniqueArgs} args - Arguments to find a Musician
     * @example
     * // Get one Musician
     * const musician = await prisma.musician.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MusicianFindUniqueArgs>(args: SelectSubset<T, MusicianFindUniqueArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Musician that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {MusicianFindUniqueOrThrowArgs} args - Arguments to find a Musician
     * @example
     * // Get one Musician
     * const musician = await prisma.musician.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MusicianFindUniqueOrThrowArgs>(args: SelectSubset<T, MusicianFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Musician that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianFindFirstArgs} args - Arguments to find a Musician
     * @example
     * // Get one Musician
     * const musician = await prisma.musician.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MusicianFindFirstArgs>(args?: SelectSubset<T, MusicianFindFirstArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Musician that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianFindFirstOrThrowArgs} args - Arguments to find a Musician
     * @example
     * // Get one Musician
     * const musician = await prisma.musician.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MusicianFindFirstOrThrowArgs>(args?: SelectSubset<T, MusicianFindFirstOrThrowArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Musicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Musicians
     * const musicians = await prisma.musician.findMany()
     * 
     * // Get first 10 Musicians
     * const musicians = await prisma.musician.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const musicianWithIdOnly = await prisma.musician.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MusicianFindManyArgs>(args?: SelectSubset<T, MusicianFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Musician.
     * @param {MusicianCreateArgs} args - Arguments to create a Musician.
     * @example
     * // Create one Musician
     * const Musician = await prisma.musician.create({
     *   data: {
     *     // ... data to create a Musician
     *   }
     * })
     * 
     */
    create<T extends MusicianCreateArgs>(args: SelectSubset<T, MusicianCreateArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Musicians.
     * @param {MusicianCreateManyArgs} args - Arguments to create many Musicians.
     * @example
     * // Create many Musicians
     * const musician = await prisma.musician.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MusicianCreateManyArgs>(args?: SelectSubset<T, MusicianCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Musicians and returns the data saved in the database.
     * @param {MusicianCreateManyAndReturnArgs} args - Arguments to create many Musicians.
     * @example
     * // Create many Musicians
     * const musician = await prisma.musician.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Musicians and only return the `id`
     * const musicianWithIdOnly = await prisma.musician.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MusicianCreateManyAndReturnArgs>(args?: SelectSubset<T, MusicianCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Musician.
     * @param {MusicianDeleteArgs} args - Arguments to delete one Musician.
     * @example
     * // Delete one Musician
     * const Musician = await prisma.musician.delete({
     *   where: {
     *     // ... filter to delete one Musician
     *   }
     * })
     * 
     */
    delete<T extends MusicianDeleteArgs>(args: SelectSubset<T, MusicianDeleteArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Musician.
     * @param {MusicianUpdateArgs} args - Arguments to update one Musician.
     * @example
     * // Update one Musician
     * const musician = await prisma.musician.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MusicianUpdateArgs>(args: SelectSubset<T, MusicianUpdateArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Musicians.
     * @param {MusicianDeleteManyArgs} args - Arguments to filter Musicians to delete.
     * @example
     * // Delete a few Musicians
     * const { count } = await prisma.musician.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MusicianDeleteManyArgs>(args?: SelectSubset<T, MusicianDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Musicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Musicians
     * const musician = await prisma.musician.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MusicianUpdateManyArgs>(args: SelectSubset<T, MusicianUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Musician.
     * @param {MusicianUpsertArgs} args - Arguments to update or create a Musician.
     * @example
     * // Update or create a Musician
     * const musician = await prisma.musician.upsert({
     *   create: {
     *     // ... data to create a Musician
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Musician we want to update
     *   }
     * })
     */
    upsert<T extends MusicianUpsertArgs>(args: SelectSubset<T, MusicianUpsertArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Musicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianCountArgs} args - Arguments to filter Musicians to count.
     * @example
     * // Count the number of Musicians
     * const count = await prisma.musician.count({
     *   where: {
     *     // ... the filter for the Musicians we want to count
     *   }
     * })
    **/
    count<T extends MusicianCountArgs>(
      args?: Subset<T, MusicianCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MusicianCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Musician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MusicianAggregateArgs>(args: Subset<T, MusicianAggregateArgs>): Prisma.PrismaPromise<GetMusicianAggregateType<T>>

    /**
     * Group by Musician.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MusicianGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MusicianGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MusicianGroupByArgs['orderBy'] }
        : { orderBy?: MusicianGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MusicianGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMusicianGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Musician model
   */
  readonly fields: MusicianFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Musician.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MusicianClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    event_musicians<T extends Musician$event_musiciansArgs<ExtArgs> = {}>(args?: Subset<T, Musician$event_musiciansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Musician model
   */ 
  interface MusicianFieldRefs {
    readonly id: FieldRef<"Musician", 'Int'>
    readonly name: FieldRef<"Musician", 'String'>
    readonly slug: FieldRef<"Musician", 'String'>
    readonly bio: FieldRef<"Musician", 'String'>
    readonly avatar: FieldRef<"Musician", 'String'>
    readonly verified: FieldRef<"Musician", 'Boolean'>
    readonly instruments: FieldRef<"Musician", 'String[]'>
    readonly yearsActive: FieldRef<"Musician", 'Int'>
    readonly website: FieldRef<"Musician", 'String'>
    readonly email: FieldRef<"Musician", 'String'>
    readonly followerCount: FieldRef<"Musician", 'Int'>
    readonly eventCount: FieldRef<"Musician", 'Int'>
    readonly createdAt: FieldRef<"Musician", 'DateTime'>
    readonly updatedAt: FieldRef<"Musician", 'DateTime'>
    readonly image_url: FieldRef<"Musician", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Musician findUnique
   */
  export type MusicianFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * Filter, which Musician to fetch.
     */
    where: MusicianWhereUniqueInput
  }

  /**
   * Musician findUniqueOrThrow
   */
  export type MusicianFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * Filter, which Musician to fetch.
     */
    where: MusicianWhereUniqueInput
  }

  /**
   * Musician findFirst
   */
  export type MusicianFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * Filter, which Musician to fetch.
     */
    where?: MusicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicians to fetch.
     */
    orderBy?: MusicianOrderByWithRelationInput | MusicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Musicians.
     */
    cursor?: MusicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Musicians.
     */
    distinct?: MusicianScalarFieldEnum | MusicianScalarFieldEnum[]
  }

  /**
   * Musician findFirstOrThrow
   */
  export type MusicianFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * Filter, which Musician to fetch.
     */
    where?: MusicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicians to fetch.
     */
    orderBy?: MusicianOrderByWithRelationInput | MusicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Musicians.
     */
    cursor?: MusicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Musicians.
     */
    distinct?: MusicianScalarFieldEnum | MusicianScalarFieldEnum[]
  }

  /**
   * Musician findMany
   */
  export type MusicianFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * Filter, which Musicians to fetch.
     */
    where?: MusicianWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Musicians to fetch.
     */
    orderBy?: MusicianOrderByWithRelationInput | MusicianOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Musicians.
     */
    cursor?: MusicianWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Musicians.
     */
    skip?: number
    distinct?: MusicianScalarFieldEnum | MusicianScalarFieldEnum[]
  }

  /**
   * Musician create
   */
  export type MusicianCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * The data needed to create a Musician.
     */
    data: XOR<MusicianCreateInput, MusicianUncheckedCreateInput>
  }

  /**
   * Musician createMany
   */
  export type MusicianCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Musicians.
     */
    data: MusicianCreateManyInput | MusicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Musician createManyAndReturn
   */
  export type MusicianCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Musicians.
     */
    data: MusicianCreateManyInput | MusicianCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Musician update
   */
  export type MusicianUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * The data needed to update a Musician.
     */
    data: XOR<MusicianUpdateInput, MusicianUncheckedUpdateInput>
    /**
     * Choose, which Musician to update.
     */
    where: MusicianWhereUniqueInput
  }

  /**
   * Musician updateMany
   */
  export type MusicianUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Musicians.
     */
    data: XOR<MusicianUpdateManyMutationInput, MusicianUncheckedUpdateManyInput>
    /**
     * Filter which Musicians to update
     */
    where?: MusicianWhereInput
  }

  /**
   * Musician upsert
   */
  export type MusicianUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * The filter to search for the Musician to update in case it exists.
     */
    where: MusicianWhereUniqueInput
    /**
     * In case the Musician found by the `where` argument doesn't exist, create a new Musician with this data.
     */
    create: XOR<MusicianCreateInput, MusicianUncheckedCreateInput>
    /**
     * In case the Musician was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MusicianUpdateInput, MusicianUncheckedUpdateInput>
  }

  /**
   * Musician delete
   */
  export type MusicianDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    /**
     * Filter which Musician to delete.
     */
    where: MusicianWhereUniqueInput
  }

  /**
   * Musician deleteMany
   */
  export type MusicianDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Musicians to delete
     */
    where?: MusicianWhereInput
  }

  /**
   * Musician.event_musicians
   */
  export type Musician$event_musiciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    where?: event_musiciansWhereInput
    orderBy?: event_musiciansOrderByWithRelationInput | event_musiciansOrderByWithRelationInput[]
    cursor?: event_musiciansWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Event_musiciansScalarFieldEnum | Event_musiciansScalarFieldEnum[]
  }

  /**
   * Musician without action
   */
  export type MusicianDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
  }


  /**
   * Model event_musicians
   */

  export type AggregateEvent_musicians = {
    _count: Event_musiciansCountAggregateOutputType | null
    _avg: Event_musiciansAvgAggregateOutputType | null
    _sum: Event_musiciansSumAggregateOutputType | null
    _min: Event_musiciansMinAggregateOutputType | null
    _max: Event_musiciansMaxAggregateOutputType | null
  }

  export type Event_musiciansAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    musician_id: number | null
  }

  export type Event_musiciansSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    musician_id: number | null
  }

  export type Event_musiciansMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    musician_id: number | null
    role: string | null
    created_at: Date | null
  }

  export type Event_musiciansMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    musician_id: number | null
    role: string | null
    created_at: Date | null
  }

  export type Event_musiciansCountAggregateOutputType = {
    id: number
    event_id: number
    musician_id: number
    role: number
    set_times: number
    created_at: number
    _all: number
  }


  export type Event_musiciansAvgAggregateInputType = {
    id?: true
    event_id?: true
    musician_id?: true
  }

  export type Event_musiciansSumAggregateInputType = {
    id?: true
    event_id?: true
    musician_id?: true
  }

  export type Event_musiciansMinAggregateInputType = {
    id?: true
    event_id?: true
    musician_id?: true
    role?: true
    created_at?: true
  }

  export type Event_musiciansMaxAggregateInputType = {
    id?: true
    event_id?: true
    musician_id?: true
    role?: true
    created_at?: true
  }

  export type Event_musiciansCountAggregateInputType = {
    id?: true
    event_id?: true
    musician_id?: true
    role?: true
    set_times?: true
    created_at?: true
    _all?: true
  }

  export type Event_musiciansAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_musicians to aggregate.
     */
    where?: event_musiciansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_musicians to fetch.
     */
    orderBy?: event_musiciansOrderByWithRelationInput | event_musiciansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_musiciansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_musicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_musicians
    **/
    _count?: true | Event_musiciansCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_musiciansAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_musiciansSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_musiciansMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_musiciansMaxAggregateInputType
  }

  export type GetEvent_musiciansAggregateType<T extends Event_musiciansAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_musicians]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_musicians[P]>
      : GetScalarType<T[P], AggregateEvent_musicians[P]>
  }




  export type event_musiciansGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_musiciansWhereInput
    orderBy?: event_musiciansOrderByWithAggregationInput | event_musiciansOrderByWithAggregationInput[]
    by: Event_musiciansScalarFieldEnum[] | Event_musiciansScalarFieldEnum
    having?: event_musiciansScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_musiciansCountAggregateInputType | true
    _avg?: Event_musiciansAvgAggregateInputType
    _sum?: Event_musiciansSumAggregateInputType
    _min?: Event_musiciansMinAggregateInputType
    _max?: Event_musiciansMaxAggregateInputType
  }

  export type Event_musiciansGroupByOutputType = {
    id: number
    event_id: number | null
    musician_id: number | null
    role: string | null
    set_times: string[]
    created_at: Date | null
    _count: Event_musiciansCountAggregateOutputType | null
    _avg: Event_musiciansAvgAggregateOutputType | null
    _sum: Event_musiciansSumAggregateOutputType | null
    _min: Event_musiciansMinAggregateOutputType | null
    _max: Event_musiciansMaxAggregateOutputType | null
  }

  type GetEvent_musiciansGroupByPayload<T extends event_musiciansGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_musiciansGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_musiciansGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_musiciansGroupByOutputType[P]>
            : GetScalarType<T[P], Event_musiciansGroupByOutputType[P]>
        }
      >
    >


  export type event_musiciansSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    musician_id?: boolean
    role?: boolean
    set_times?: boolean
    created_at?: boolean
    events?: boolean | event_musicians$eventsArgs<ExtArgs>
    musicians?: boolean | event_musicians$musiciansArgs<ExtArgs>
  }, ExtArgs["result"]["event_musicians"]>

  export type event_musiciansSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    musician_id?: boolean
    role?: boolean
    set_times?: boolean
    created_at?: boolean
    events?: boolean | event_musicians$eventsArgs<ExtArgs>
    musicians?: boolean | event_musicians$musiciansArgs<ExtArgs>
  }, ExtArgs["result"]["event_musicians"]>

  export type event_musiciansSelectScalar = {
    id?: boolean
    event_id?: boolean
    musician_id?: boolean
    role?: boolean
    set_times?: boolean
    created_at?: boolean
  }

  export type event_musiciansInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | event_musicians$eventsArgs<ExtArgs>
    musicians?: boolean | event_musicians$musiciansArgs<ExtArgs>
  }
  export type event_musiciansIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | event_musicians$eventsArgs<ExtArgs>
    musicians?: boolean | event_musicians$musiciansArgs<ExtArgs>
  }

  export type $event_musiciansPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_musicians"
    objects: {
      events: Prisma.$EventPayload<ExtArgs> | null
      musicians: Prisma.$MusicianPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      musician_id: number | null
      role: string | null
      set_times: string[]
      created_at: Date | null
    }, ExtArgs["result"]["event_musicians"]>
    composites: {}
  }

  type event_musiciansGetPayload<S extends boolean | null | undefined | event_musiciansDefaultArgs> = $Result.GetResult<Prisma.$event_musiciansPayload, S>

  type event_musiciansCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<event_musiciansFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Event_musiciansCountAggregateInputType | true
    }

  export interface event_musiciansDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_musicians'], meta: { name: 'event_musicians' } }
    /**
     * Find zero or one Event_musicians that matches the filter.
     * @param {event_musiciansFindUniqueArgs} args - Arguments to find a Event_musicians
     * @example
     * // Get one Event_musicians
     * const event_musicians = await prisma.event_musicians.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_musiciansFindUniqueArgs>(args: SelectSubset<T, event_musiciansFindUniqueArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event_musicians that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {event_musiciansFindUniqueOrThrowArgs} args - Arguments to find a Event_musicians
     * @example
     * // Get one Event_musicians
     * const event_musicians = await prisma.event_musicians.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_musiciansFindUniqueOrThrowArgs>(args: SelectSubset<T, event_musiciansFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event_musicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_musiciansFindFirstArgs} args - Arguments to find a Event_musicians
     * @example
     * // Get one Event_musicians
     * const event_musicians = await prisma.event_musicians.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_musiciansFindFirstArgs>(args?: SelectSubset<T, event_musiciansFindFirstArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event_musicians that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_musiciansFindFirstOrThrowArgs} args - Arguments to find a Event_musicians
     * @example
     * // Get one Event_musicians
     * const event_musicians = await prisma.event_musicians.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_musiciansFindFirstOrThrowArgs>(args?: SelectSubset<T, event_musiciansFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Event_musicians that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_musiciansFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_musicians
     * const event_musicians = await prisma.event_musicians.findMany()
     * 
     * // Get first 10 Event_musicians
     * const event_musicians = await prisma.event_musicians.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_musiciansWithIdOnly = await prisma.event_musicians.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends event_musiciansFindManyArgs>(args?: SelectSubset<T, event_musiciansFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event_musicians.
     * @param {event_musiciansCreateArgs} args - Arguments to create a Event_musicians.
     * @example
     * // Create one Event_musicians
     * const Event_musicians = await prisma.event_musicians.create({
     *   data: {
     *     // ... data to create a Event_musicians
     *   }
     * })
     * 
     */
    create<T extends event_musiciansCreateArgs>(args: SelectSubset<T, event_musiciansCreateArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Event_musicians.
     * @param {event_musiciansCreateManyArgs} args - Arguments to create many Event_musicians.
     * @example
     * // Create many Event_musicians
     * const event_musicians = await prisma.event_musicians.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_musiciansCreateManyArgs>(args?: SelectSubset<T, event_musiciansCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_musicians and returns the data saved in the database.
     * @param {event_musiciansCreateManyAndReturnArgs} args - Arguments to create many Event_musicians.
     * @example
     * // Create many Event_musicians
     * const event_musicians = await prisma.event_musicians.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_musicians and only return the `id`
     * const event_musiciansWithIdOnly = await prisma.event_musicians.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends event_musiciansCreateManyAndReturnArgs>(args?: SelectSubset<T, event_musiciansCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event_musicians.
     * @param {event_musiciansDeleteArgs} args - Arguments to delete one Event_musicians.
     * @example
     * // Delete one Event_musicians
     * const Event_musicians = await prisma.event_musicians.delete({
     *   where: {
     *     // ... filter to delete one Event_musicians
     *   }
     * })
     * 
     */
    delete<T extends event_musiciansDeleteArgs>(args: SelectSubset<T, event_musiciansDeleteArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event_musicians.
     * @param {event_musiciansUpdateArgs} args - Arguments to update one Event_musicians.
     * @example
     * // Update one Event_musicians
     * const event_musicians = await prisma.event_musicians.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_musiciansUpdateArgs>(args: SelectSubset<T, event_musiciansUpdateArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Event_musicians.
     * @param {event_musiciansDeleteManyArgs} args - Arguments to filter Event_musicians to delete.
     * @example
     * // Delete a few Event_musicians
     * const { count } = await prisma.event_musicians.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_musiciansDeleteManyArgs>(args?: SelectSubset<T, event_musiciansDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_musicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_musiciansUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_musicians
     * const event_musicians = await prisma.event_musicians.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_musiciansUpdateManyArgs>(args: SelectSubset<T, event_musiciansUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_musicians.
     * @param {event_musiciansUpsertArgs} args - Arguments to update or create a Event_musicians.
     * @example
     * // Update or create a Event_musicians
     * const event_musicians = await prisma.event_musicians.upsert({
     *   create: {
     *     // ... data to create a Event_musicians
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_musicians we want to update
     *   }
     * })
     */
    upsert<T extends event_musiciansUpsertArgs>(args: SelectSubset<T, event_musiciansUpsertArgs<ExtArgs>>): Prisma__event_musiciansClient<$Result.GetResult<Prisma.$event_musiciansPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Event_musicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_musiciansCountArgs} args - Arguments to filter Event_musicians to count.
     * @example
     * // Count the number of Event_musicians
     * const count = await prisma.event_musicians.count({
     *   where: {
     *     // ... the filter for the Event_musicians we want to count
     *   }
     * })
    **/
    count<T extends event_musiciansCountArgs>(
      args?: Subset<T, event_musiciansCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_musiciansCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_musicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_musiciansAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_musiciansAggregateArgs>(args: Subset<T, Event_musiciansAggregateArgs>): Prisma.PrismaPromise<GetEvent_musiciansAggregateType<T>>

    /**
     * Group by Event_musicians.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_musiciansGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends event_musiciansGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_musiciansGroupByArgs['orderBy'] }
        : { orderBy?: event_musiciansGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, event_musiciansGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_musiciansGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_musicians model
   */
  readonly fields: event_musiciansFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_musicians.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_musiciansClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends event_musicians$eventsArgs<ExtArgs> = {}>(args?: Subset<T, event_musicians$eventsArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    musicians<T extends event_musicians$musiciansArgs<ExtArgs> = {}>(args?: Subset<T, event_musicians$musiciansArgs<ExtArgs>>): Prisma__MusicianClient<$Result.GetResult<Prisma.$MusicianPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the event_musicians model
   */ 
  interface event_musiciansFieldRefs {
    readonly id: FieldRef<"event_musicians", 'Int'>
    readonly event_id: FieldRef<"event_musicians", 'Int'>
    readonly musician_id: FieldRef<"event_musicians", 'Int'>
    readonly role: FieldRef<"event_musicians", 'String'>
    readonly set_times: FieldRef<"event_musicians", 'String[]'>
    readonly created_at: FieldRef<"event_musicians", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * event_musicians findUnique
   */
  export type event_musiciansFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * Filter, which event_musicians to fetch.
     */
    where: event_musiciansWhereUniqueInput
  }

  /**
   * event_musicians findUniqueOrThrow
   */
  export type event_musiciansFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * Filter, which event_musicians to fetch.
     */
    where: event_musiciansWhereUniqueInput
  }

  /**
   * event_musicians findFirst
   */
  export type event_musiciansFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * Filter, which event_musicians to fetch.
     */
    where?: event_musiciansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_musicians to fetch.
     */
    orderBy?: event_musiciansOrderByWithRelationInput | event_musiciansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_musicians.
     */
    cursor?: event_musiciansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_musicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_musicians.
     */
    distinct?: Event_musiciansScalarFieldEnum | Event_musiciansScalarFieldEnum[]
  }

  /**
   * event_musicians findFirstOrThrow
   */
  export type event_musiciansFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * Filter, which event_musicians to fetch.
     */
    where?: event_musiciansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_musicians to fetch.
     */
    orderBy?: event_musiciansOrderByWithRelationInput | event_musiciansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_musicians.
     */
    cursor?: event_musiciansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_musicians.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_musicians.
     */
    distinct?: Event_musiciansScalarFieldEnum | Event_musiciansScalarFieldEnum[]
  }

  /**
   * event_musicians findMany
   */
  export type event_musiciansFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * Filter, which event_musicians to fetch.
     */
    where?: event_musiciansWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_musicians to fetch.
     */
    orderBy?: event_musiciansOrderByWithRelationInput | event_musiciansOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_musicians.
     */
    cursor?: event_musiciansWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_musicians from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_musicians.
     */
    skip?: number
    distinct?: Event_musiciansScalarFieldEnum | Event_musiciansScalarFieldEnum[]
  }

  /**
   * event_musicians create
   */
  export type event_musiciansCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * The data needed to create a event_musicians.
     */
    data?: XOR<event_musiciansCreateInput, event_musiciansUncheckedCreateInput>
  }

  /**
   * event_musicians createMany
   */
  export type event_musiciansCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_musicians.
     */
    data: event_musiciansCreateManyInput | event_musiciansCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_musicians createManyAndReturn
   */
  export type event_musiciansCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many event_musicians.
     */
    data: event_musiciansCreateManyInput | event_musiciansCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * event_musicians update
   */
  export type event_musiciansUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * The data needed to update a event_musicians.
     */
    data: XOR<event_musiciansUpdateInput, event_musiciansUncheckedUpdateInput>
    /**
     * Choose, which event_musicians to update.
     */
    where: event_musiciansWhereUniqueInput
  }

  /**
   * event_musicians updateMany
   */
  export type event_musiciansUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_musicians.
     */
    data: XOR<event_musiciansUpdateManyMutationInput, event_musiciansUncheckedUpdateManyInput>
    /**
     * Filter which event_musicians to update
     */
    where?: event_musiciansWhereInput
  }

  /**
   * event_musicians upsert
   */
  export type event_musiciansUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * The filter to search for the event_musicians to update in case it exists.
     */
    where: event_musiciansWhereUniqueInput
    /**
     * In case the event_musicians found by the `where` argument doesn't exist, create a new event_musicians with this data.
     */
    create: XOR<event_musiciansCreateInput, event_musiciansUncheckedCreateInput>
    /**
     * In case the event_musicians was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_musiciansUpdateInput, event_musiciansUncheckedUpdateInput>
  }

  /**
   * event_musicians delete
   */
  export type event_musiciansDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
    /**
     * Filter which event_musicians to delete.
     */
    where: event_musiciansWhereUniqueInput
  }

  /**
   * event_musicians deleteMany
   */
  export type event_musiciansDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_musicians to delete
     */
    where?: event_musiciansWhereInput
  }

  /**
   * event_musicians.events
   */
  export type event_musicians$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * event_musicians.musicians
   */
  export type event_musicians$musiciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Musician
     */
    select?: MusicianSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MusicianInclude<ExtArgs> | null
    where?: MusicianWhereInput
  }

  /**
   * event_musicians without action
   */
  export type event_musiciansDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_musicians
     */
    select?: event_musiciansSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_musiciansInclude<ExtArgs> | null
  }


  /**
   * Model event_prices
   */

  export type AggregateEvent_prices = {
    _count: Event_pricesCountAggregateOutputType | null
    _avg: Event_pricesAvgAggregateOutputType | null
    _sum: Event_pricesSumAggregateOutputType | null
    _min: Event_pricesMinAggregateOutputType | null
    _max: Event_pricesMaxAggregateOutputType | null
  }

  export type Event_pricesAvgAggregateOutputType = {
    id: number | null
    event_id: number | null
    amount: Decimal | null
  }

  export type Event_pricesSumAggregateOutputType = {
    id: number | null
    event_id: number | null
    amount: Decimal | null
  }

  export type Event_pricesMinAggregateOutputType = {
    id: number | null
    event_id: number | null
    type: string | null
    amount: Decimal | null
    currency: string | null
    deadline: Date | null
    description: string | null
    available: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Event_pricesMaxAggregateOutputType = {
    id: number | null
    event_id: number | null
    type: string | null
    amount: Decimal | null
    currency: string | null
    deadline: Date | null
    description: string | null
    available: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Event_pricesCountAggregateOutputType = {
    id: number
    event_id: number
    type: number
    amount: number
    currency: number
    deadline: number
    description: number
    available: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Event_pricesAvgAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
  }

  export type Event_pricesSumAggregateInputType = {
    id?: true
    event_id?: true
    amount?: true
  }

  export type Event_pricesMinAggregateInputType = {
    id?: true
    event_id?: true
    type?: true
    amount?: true
    currency?: true
    deadline?: true
    description?: true
    available?: true
    created_at?: true
    updated_at?: true
  }

  export type Event_pricesMaxAggregateInputType = {
    id?: true
    event_id?: true
    type?: true
    amount?: true
    currency?: true
    deadline?: true
    description?: true
    available?: true
    created_at?: true
    updated_at?: true
  }

  export type Event_pricesCountAggregateInputType = {
    id?: true
    event_id?: true
    type?: true
    amount?: true
    currency?: true
    deadline?: true
    description?: true
    available?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Event_pricesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_prices to aggregate.
     */
    where?: event_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_prices to fetch.
     */
    orderBy?: event_pricesOrderByWithRelationInput | event_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: event_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned event_prices
    **/
    _count?: true | Event_pricesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Event_pricesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Event_pricesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Event_pricesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Event_pricesMaxAggregateInputType
  }

  export type GetEvent_pricesAggregateType<T extends Event_pricesAggregateArgs> = {
        [P in keyof T & keyof AggregateEvent_prices]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEvent_prices[P]>
      : GetScalarType<T[P], AggregateEvent_prices[P]>
  }




  export type event_pricesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: event_pricesWhereInput
    orderBy?: event_pricesOrderByWithAggregationInput | event_pricesOrderByWithAggregationInput[]
    by: Event_pricesScalarFieldEnum[] | Event_pricesScalarFieldEnum
    having?: event_pricesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Event_pricesCountAggregateInputType | true
    _avg?: Event_pricesAvgAggregateInputType
    _sum?: Event_pricesSumAggregateInputType
    _min?: Event_pricesMinAggregateInputType
    _max?: Event_pricesMaxAggregateInputType
  }

  export type Event_pricesGroupByOutputType = {
    id: number
    event_id: number | null
    type: string
    amount: Decimal
    currency: string | null
    deadline: Date | null
    description: string | null
    available: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: Event_pricesCountAggregateOutputType | null
    _avg: Event_pricesAvgAggregateOutputType | null
    _sum: Event_pricesSumAggregateOutputType | null
    _min: Event_pricesMinAggregateOutputType | null
    _max: Event_pricesMaxAggregateOutputType | null
  }

  type GetEvent_pricesGroupByPayload<T extends event_pricesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Event_pricesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Event_pricesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Event_pricesGroupByOutputType[P]>
            : GetScalarType<T[P], Event_pricesGroupByOutputType[P]>
        }
      >
    >


  export type event_pricesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    deadline?: boolean
    description?: boolean
    available?: boolean
    created_at?: boolean
    updated_at?: boolean
    events?: boolean | event_prices$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["event_prices"]>

  export type event_pricesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    event_id?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    deadline?: boolean
    description?: boolean
    available?: boolean
    created_at?: boolean
    updated_at?: boolean
    events?: boolean | event_prices$eventsArgs<ExtArgs>
  }, ExtArgs["result"]["event_prices"]>

  export type event_pricesSelectScalar = {
    id?: boolean
    event_id?: boolean
    type?: boolean
    amount?: boolean
    currency?: boolean
    deadline?: boolean
    description?: boolean
    available?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type event_pricesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | event_prices$eventsArgs<ExtArgs>
  }
  export type event_pricesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    events?: boolean | event_prices$eventsArgs<ExtArgs>
  }

  export type $event_pricesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "event_prices"
    objects: {
      events: Prisma.$EventPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      event_id: number | null
      type: string
      amount: Prisma.Decimal
      currency: string | null
      deadline: Date | null
      description: string | null
      available: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["event_prices"]>
    composites: {}
  }

  type event_pricesGetPayload<S extends boolean | null | undefined | event_pricesDefaultArgs> = $Result.GetResult<Prisma.$event_pricesPayload, S>

  type event_pricesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<event_pricesFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Event_pricesCountAggregateInputType | true
    }

  export interface event_pricesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['event_prices'], meta: { name: 'event_prices' } }
    /**
     * Find zero or one Event_prices that matches the filter.
     * @param {event_pricesFindUniqueArgs} args - Arguments to find a Event_prices
     * @example
     * // Get one Event_prices
     * const event_prices = await prisma.event_prices.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends event_pricesFindUniqueArgs>(args: SelectSubset<T, event_pricesFindUniqueArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Event_prices that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {event_pricesFindUniqueOrThrowArgs} args - Arguments to find a Event_prices
     * @example
     * // Get one Event_prices
     * const event_prices = await prisma.event_prices.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends event_pricesFindUniqueOrThrowArgs>(args: SelectSubset<T, event_pricesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Event_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_pricesFindFirstArgs} args - Arguments to find a Event_prices
     * @example
     * // Get one Event_prices
     * const event_prices = await prisma.event_prices.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends event_pricesFindFirstArgs>(args?: SelectSubset<T, event_pricesFindFirstArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Event_prices that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_pricesFindFirstOrThrowArgs} args - Arguments to find a Event_prices
     * @example
     * // Get one Event_prices
     * const event_prices = await prisma.event_prices.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends event_pricesFindFirstOrThrowArgs>(args?: SelectSubset<T, event_pricesFindFirstOrThrowArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Event_prices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_pricesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Event_prices
     * const event_prices = await prisma.event_prices.findMany()
     * 
     * // Get first 10 Event_prices
     * const event_prices = await prisma.event_prices.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const event_pricesWithIdOnly = await prisma.event_prices.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends event_pricesFindManyArgs>(args?: SelectSubset<T, event_pricesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Event_prices.
     * @param {event_pricesCreateArgs} args - Arguments to create a Event_prices.
     * @example
     * // Create one Event_prices
     * const Event_prices = await prisma.event_prices.create({
     *   data: {
     *     // ... data to create a Event_prices
     *   }
     * })
     * 
     */
    create<T extends event_pricesCreateArgs>(args: SelectSubset<T, event_pricesCreateArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Event_prices.
     * @param {event_pricesCreateManyArgs} args - Arguments to create many Event_prices.
     * @example
     * // Create many Event_prices
     * const event_prices = await prisma.event_prices.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends event_pricesCreateManyArgs>(args?: SelectSubset<T, event_pricesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Event_prices and returns the data saved in the database.
     * @param {event_pricesCreateManyAndReturnArgs} args - Arguments to create many Event_prices.
     * @example
     * // Create many Event_prices
     * const event_prices = await prisma.event_prices.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Event_prices and only return the `id`
     * const event_pricesWithIdOnly = await prisma.event_prices.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends event_pricesCreateManyAndReturnArgs>(args?: SelectSubset<T, event_pricesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Event_prices.
     * @param {event_pricesDeleteArgs} args - Arguments to delete one Event_prices.
     * @example
     * // Delete one Event_prices
     * const Event_prices = await prisma.event_prices.delete({
     *   where: {
     *     // ... filter to delete one Event_prices
     *   }
     * })
     * 
     */
    delete<T extends event_pricesDeleteArgs>(args: SelectSubset<T, event_pricesDeleteArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Event_prices.
     * @param {event_pricesUpdateArgs} args - Arguments to update one Event_prices.
     * @example
     * // Update one Event_prices
     * const event_prices = await prisma.event_prices.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends event_pricesUpdateArgs>(args: SelectSubset<T, event_pricesUpdateArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Event_prices.
     * @param {event_pricesDeleteManyArgs} args - Arguments to filter Event_prices to delete.
     * @example
     * // Delete a few Event_prices
     * const { count } = await prisma.event_prices.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends event_pricesDeleteManyArgs>(args?: SelectSubset<T, event_pricesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Event_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_pricesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Event_prices
     * const event_prices = await prisma.event_prices.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends event_pricesUpdateManyArgs>(args: SelectSubset<T, event_pricesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Event_prices.
     * @param {event_pricesUpsertArgs} args - Arguments to update or create a Event_prices.
     * @example
     * // Update or create a Event_prices
     * const event_prices = await prisma.event_prices.upsert({
     *   create: {
     *     // ... data to create a Event_prices
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Event_prices we want to update
     *   }
     * })
     */
    upsert<T extends event_pricesUpsertArgs>(args: SelectSubset<T, event_pricesUpsertArgs<ExtArgs>>): Prisma__event_pricesClient<$Result.GetResult<Prisma.$event_pricesPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Event_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_pricesCountArgs} args - Arguments to filter Event_prices to count.
     * @example
     * // Count the number of Event_prices
     * const count = await prisma.event_prices.count({
     *   where: {
     *     // ... the filter for the Event_prices we want to count
     *   }
     * })
    **/
    count<T extends event_pricesCountArgs>(
      args?: Subset<T, event_pricesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Event_pricesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Event_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Event_pricesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Event_pricesAggregateArgs>(args: Subset<T, Event_pricesAggregateArgs>): Prisma.PrismaPromise<GetEvent_pricesAggregateType<T>>

    /**
     * Group by Event_prices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {event_pricesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends event_pricesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: event_pricesGroupByArgs['orderBy'] }
        : { orderBy?: event_pricesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, event_pricesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEvent_pricesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the event_prices model
   */
  readonly fields: event_pricesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for event_prices.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__event_pricesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    events<T extends event_prices$eventsArgs<ExtArgs> = {}>(args?: Subset<T, event_prices$eventsArgs<ExtArgs>>): Prisma__EventClient<$Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow"> | null, null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the event_prices model
   */ 
  interface event_pricesFieldRefs {
    readonly id: FieldRef<"event_prices", 'Int'>
    readonly event_id: FieldRef<"event_prices", 'Int'>
    readonly type: FieldRef<"event_prices", 'String'>
    readonly amount: FieldRef<"event_prices", 'Decimal'>
    readonly currency: FieldRef<"event_prices", 'String'>
    readonly deadline: FieldRef<"event_prices", 'DateTime'>
    readonly description: FieldRef<"event_prices", 'String'>
    readonly available: FieldRef<"event_prices", 'Boolean'>
    readonly created_at: FieldRef<"event_prices", 'DateTime'>
    readonly updated_at: FieldRef<"event_prices", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * event_prices findUnique
   */
  export type event_pricesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * Filter, which event_prices to fetch.
     */
    where: event_pricesWhereUniqueInput
  }

  /**
   * event_prices findUniqueOrThrow
   */
  export type event_pricesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * Filter, which event_prices to fetch.
     */
    where: event_pricesWhereUniqueInput
  }

  /**
   * event_prices findFirst
   */
  export type event_pricesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * Filter, which event_prices to fetch.
     */
    where?: event_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_prices to fetch.
     */
    orderBy?: event_pricesOrderByWithRelationInput | event_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_prices.
     */
    cursor?: event_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_prices.
     */
    distinct?: Event_pricesScalarFieldEnum | Event_pricesScalarFieldEnum[]
  }

  /**
   * event_prices findFirstOrThrow
   */
  export type event_pricesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * Filter, which event_prices to fetch.
     */
    where?: event_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_prices to fetch.
     */
    orderBy?: event_pricesOrderByWithRelationInput | event_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for event_prices.
     */
    cursor?: event_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_prices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of event_prices.
     */
    distinct?: Event_pricesScalarFieldEnum | Event_pricesScalarFieldEnum[]
  }

  /**
   * event_prices findMany
   */
  export type event_pricesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * Filter, which event_prices to fetch.
     */
    where?: event_pricesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of event_prices to fetch.
     */
    orderBy?: event_pricesOrderByWithRelationInput | event_pricesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing event_prices.
     */
    cursor?: event_pricesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` event_prices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` event_prices.
     */
    skip?: number
    distinct?: Event_pricesScalarFieldEnum | Event_pricesScalarFieldEnum[]
  }

  /**
   * event_prices create
   */
  export type event_pricesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * The data needed to create a event_prices.
     */
    data: XOR<event_pricesCreateInput, event_pricesUncheckedCreateInput>
  }

  /**
   * event_prices createMany
   */
  export type event_pricesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many event_prices.
     */
    data: event_pricesCreateManyInput | event_pricesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * event_prices createManyAndReturn
   */
  export type event_pricesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many event_prices.
     */
    data: event_pricesCreateManyInput | event_pricesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * event_prices update
   */
  export type event_pricesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * The data needed to update a event_prices.
     */
    data: XOR<event_pricesUpdateInput, event_pricesUncheckedUpdateInput>
    /**
     * Choose, which event_prices to update.
     */
    where: event_pricesWhereUniqueInput
  }

  /**
   * event_prices updateMany
   */
  export type event_pricesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update event_prices.
     */
    data: XOR<event_pricesUpdateManyMutationInput, event_pricesUncheckedUpdateManyInput>
    /**
     * Filter which event_prices to update
     */
    where?: event_pricesWhereInput
  }

  /**
   * event_prices upsert
   */
  export type event_pricesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * The filter to search for the event_prices to update in case it exists.
     */
    where: event_pricesWhereUniqueInput
    /**
     * In case the event_prices found by the `where` argument doesn't exist, create a new event_prices with this data.
     */
    create: XOR<event_pricesCreateInput, event_pricesUncheckedCreateInput>
    /**
     * In case the event_prices was found with the provided `where` argument, update it with this data.
     */
    update: XOR<event_pricesUpdateInput, event_pricesUncheckedUpdateInput>
  }

  /**
   * event_prices delete
   */
  export type event_pricesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
    /**
     * Filter which event_prices to delete.
     */
    where: event_pricesWhereUniqueInput
  }

  /**
   * event_prices deleteMany
   */
  export type event_pricesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which event_prices to delete
     */
    where?: event_pricesWhereInput
  }

  /**
   * event_prices.events
   */
  export type event_prices$eventsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Event
     */
    select?: EventSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EventInclude<ExtArgs> | null
    where?: EventWhereInput
  }

  /**
   * event_prices without action
   */
  export type event_pricesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the event_prices
     */
    select?: event_pricesSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: event_pricesInclude<ExtArgs> | null
  }


  /**
   * Model social_media
   */

  export type AggregateSocial_media = {
    _count: Social_mediaCountAggregateOutputType | null
    _avg: Social_mediaAvgAggregateOutputType | null
    _sum: Social_mediaSumAggregateOutputType | null
    _min: Social_mediaMinAggregateOutputType | null
    _max: Social_mediaMaxAggregateOutputType | null
  }

  export type Social_mediaAvgAggregateOutputType = {
    id: number | null
    entity_id: number | null
    follower_count: number | null
  }

  export type Social_mediaSumAggregateOutputType = {
    id: number | null
    entity_id: number | null
    follower_count: number | null
  }

  export type Social_mediaMinAggregateOutputType = {
    id: number | null
    entity_type: string | null
    entity_id: number | null
    platform: string | null
    url: string | null
    username: string | null
    is_verified: boolean | null
    follower_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Social_mediaMaxAggregateOutputType = {
    id: number | null
    entity_type: string | null
    entity_id: number | null
    platform: string | null
    url: string | null
    username: string | null
    is_verified: boolean | null
    follower_count: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Social_mediaCountAggregateOutputType = {
    id: number
    entity_type: number
    entity_id: number
    platform: number
    url: number
    username: number
    is_verified: number
    follower_count: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Social_mediaAvgAggregateInputType = {
    id?: true
    entity_id?: true
    follower_count?: true
  }

  export type Social_mediaSumAggregateInputType = {
    id?: true
    entity_id?: true
    follower_count?: true
  }

  export type Social_mediaMinAggregateInputType = {
    id?: true
    entity_type?: true
    entity_id?: true
    platform?: true
    url?: true
    username?: true
    is_verified?: true
    follower_count?: true
    created_at?: true
    updated_at?: true
  }

  export type Social_mediaMaxAggregateInputType = {
    id?: true
    entity_type?: true
    entity_id?: true
    platform?: true
    url?: true
    username?: true
    is_verified?: true
    follower_count?: true
    created_at?: true
    updated_at?: true
  }

  export type Social_mediaCountAggregateInputType = {
    id?: true
    entity_type?: true
    entity_id?: true
    platform?: true
    url?: true
    username?: true
    is_verified?: true
    follower_count?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Social_mediaAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social_media to aggregate.
     */
    where?: social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_medias to fetch.
     */
    orderBy?: social_mediaOrderByWithRelationInput | social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned social_medias
    **/
    _count?: true | Social_mediaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Social_mediaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Social_mediaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Social_mediaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Social_mediaMaxAggregateInputType
  }

  export type GetSocial_mediaAggregateType<T extends Social_mediaAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial_media]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial_media[P]>
      : GetScalarType<T[P], AggregateSocial_media[P]>
  }




  export type social_mediaGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: social_mediaWhereInput
    orderBy?: social_mediaOrderByWithAggregationInput | social_mediaOrderByWithAggregationInput[]
    by: Social_mediaScalarFieldEnum[] | Social_mediaScalarFieldEnum
    having?: social_mediaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Social_mediaCountAggregateInputType | true
    _avg?: Social_mediaAvgAggregateInputType
    _sum?: Social_mediaSumAggregateInputType
    _min?: Social_mediaMinAggregateInputType
    _max?: Social_mediaMaxAggregateInputType
  }

  export type Social_mediaGroupByOutputType = {
    id: number
    entity_type: string
    entity_id: number
    platform: string
    url: string
    username: string | null
    is_verified: boolean | null
    follower_count: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: Social_mediaCountAggregateOutputType | null
    _avg: Social_mediaAvgAggregateOutputType | null
    _sum: Social_mediaSumAggregateOutputType | null
    _min: Social_mediaMinAggregateOutputType | null
    _max: Social_mediaMaxAggregateOutputType | null
  }

  type GetSocial_mediaGroupByPayload<T extends social_mediaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Social_mediaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Social_mediaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Social_mediaGroupByOutputType[P]>
            : GetScalarType<T[P], Social_mediaGroupByOutputType[P]>
        }
      >
    >


  export type social_mediaSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity_type?: boolean
    entity_id?: boolean
    platform?: boolean
    url?: boolean
    username?: boolean
    is_verified?: boolean
    follower_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["social_media"]>

  export type social_mediaSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    entity_type?: boolean
    entity_id?: boolean
    platform?: boolean
    url?: boolean
    username?: boolean
    is_verified?: boolean
    follower_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["social_media"]>

  export type social_mediaSelectScalar = {
    id?: boolean
    entity_type?: boolean
    entity_id?: boolean
    platform?: boolean
    url?: boolean
    username?: boolean
    is_verified?: boolean
    follower_count?: boolean
    created_at?: boolean
    updated_at?: boolean
  }


  export type $social_mediaPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "social_media"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: number
      entity_type: string
      entity_id: number
      platform: string
      url: string
      username: string | null
      is_verified: boolean | null
      follower_count: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["social_media"]>
    composites: {}
  }

  type social_mediaGetPayload<S extends boolean | null | undefined | social_mediaDefaultArgs> = $Result.GetResult<Prisma.$social_mediaPayload, S>

  type social_mediaCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<social_mediaFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: Social_mediaCountAggregateInputType | true
    }

  export interface social_mediaDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['social_media'], meta: { name: 'social_media' } }
    /**
     * Find zero or one Social_media that matches the filter.
     * @param {social_mediaFindUniqueArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends social_mediaFindUniqueArgs>(args: SelectSubset<T, social_mediaFindUniqueArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Social_media that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {social_mediaFindUniqueOrThrowArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends social_mediaFindUniqueOrThrowArgs>(args: SelectSubset<T, social_mediaFindUniqueOrThrowArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Social_media that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_mediaFindFirstArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends social_mediaFindFirstArgs>(args?: SelectSubset<T, social_mediaFindFirstArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Social_media that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_mediaFindFirstOrThrowArgs} args - Arguments to find a Social_media
     * @example
     * // Get one Social_media
     * const social_media = await prisma.social_media.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends social_mediaFindFirstOrThrowArgs>(args?: SelectSubset<T, social_mediaFindFirstOrThrowArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Social_medias that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_mediaFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Social_medias
     * const social_medias = await prisma.social_media.findMany()
     * 
     * // Get first 10 Social_medias
     * const social_medias = await prisma.social_media.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const social_mediaWithIdOnly = await prisma.social_media.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends social_mediaFindManyArgs>(args?: SelectSubset<T, social_mediaFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Social_media.
     * @param {social_mediaCreateArgs} args - Arguments to create a Social_media.
     * @example
     * // Create one Social_media
     * const Social_media = await prisma.social_media.create({
     *   data: {
     *     // ... data to create a Social_media
     *   }
     * })
     * 
     */
    create<T extends social_mediaCreateArgs>(args: SelectSubset<T, social_mediaCreateArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Social_medias.
     * @param {social_mediaCreateManyArgs} args - Arguments to create many Social_medias.
     * @example
     * // Create many Social_medias
     * const social_media = await prisma.social_media.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends social_mediaCreateManyArgs>(args?: SelectSubset<T, social_mediaCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Social_medias and returns the data saved in the database.
     * @param {social_mediaCreateManyAndReturnArgs} args - Arguments to create many Social_medias.
     * @example
     * // Create many Social_medias
     * const social_media = await prisma.social_media.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Social_medias and only return the `id`
     * const social_mediaWithIdOnly = await prisma.social_media.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends social_mediaCreateManyAndReturnArgs>(args?: SelectSubset<T, social_mediaCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Social_media.
     * @param {social_mediaDeleteArgs} args - Arguments to delete one Social_media.
     * @example
     * // Delete one Social_media
     * const Social_media = await prisma.social_media.delete({
     *   where: {
     *     // ... filter to delete one Social_media
     *   }
     * })
     * 
     */
    delete<T extends social_mediaDeleteArgs>(args: SelectSubset<T, social_mediaDeleteArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Social_media.
     * @param {social_mediaUpdateArgs} args - Arguments to update one Social_media.
     * @example
     * // Update one Social_media
     * const social_media = await prisma.social_media.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends social_mediaUpdateArgs>(args: SelectSubset<T, social_mediaUpdateArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Social_medias.
     * @param {social_mediaDeleteManyArgs} args - Arguments to filter Social_medias to delete.
     * @example
     * // Delete a few Social_medias
     * const { count } = await prisma.social_media.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends social_mediaDeleteManyArgs>(args?: SelectSubset<T, social_mediaDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Social_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_mediaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Social_medias
     * const social_media = await prisma.social_media.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends social_mediaUpdateManyArgs>(args: SelectSubset<T, social_mediaUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Social_media.
     * @param {social_mediaUpsertArgs} args - Arguments to update or create a Social_media.
     * @example
     * // Update or create a Social_media
     * const social_media = await prisma.social_media.upsert({
     *   create: {
     *     // ... data to create a Social_media
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social_media we want to update
     *   }
     * })
     */
    upsert<T extends social_mediaUpsertArgs>(args: SelectSubset<T, social_mediaUpsertArgs<ExtArgs>>): Prisma__social_mediaClient<$Result.GetResult<Prisma.$social_mediaPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Social_medias.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_mediaCountArgs} args - Arguments to filter Social_medias to count.
     * @example
     * // Count the number of Social_medias
     * const count = await prisma.social_media.count({
     *   where: {
     *     // ... the filter for the Social_medias we want to count
     *   }
     * })
    **/
    count<T extends social_mediaCountArgs>(
      args?: Subset<T, social_mediaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Social_mediaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Social_mediaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Social_mediaAggregateArgs>(args: Subset<T, Social_mediaAggregateArgs>): Prisma.PrismaPromise<GetSocial_mediaAggregateType<T>>

    /**
     * Group by Social_media.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {social_mediaGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends social_mediaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: social_mediaGroupByArgs['orderBy'] }
        : { orderBy?: social_mediaGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, social_mediaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocial_mediaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the social_media model
   */
  readonly fields: social_mediaFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for social_media.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__social_mediaClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the social_media model
   */ 
  interface social_mediaFieldRefs {
    readonly id: FieldRef<"social_media", 'Int'>
    readonly entity_type: FieldRef<"social_media", 'String'>
    readonly entity_id: FieldRef<"social_media", 'Int'>
    readonly platform: FieldRef<"social_media", 'String'>
    readonly url: FieldRef<"social_media", 'String'>
    readonly username: FieldRef<"social_media", 'String'>
    readonly is_verified: FieldRef<"social_media", 'Boolean'>
    readonly follower_count: FieldRef<"social_media", 'Int'>
    readonly created_at: FieldRef<"social_media", 'DateTime'>
    readonly updated_at: FieldRef<"social_media", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * social_media findUnique
   */
  export type social_mediaFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * Filter, which social_media to fetch.
     */
    where: social_mediaWhereUniqueInput
  }

  /**
   * social_media findUniqueOrThrow
   */
  export type social_mediaFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * Filter, which social_media to fetch.
     */
    where: social_mediaWhereUniqueInput
  }

  /**
   * social_media findFirst
   */
  export type social_mediaFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * Filter, which social_media to fetch.
     */
    where?: social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_medias to fetch.
     */
    orderBy?: social_mediaOrderByWithRelationInput | social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for social_medias.
     */
    cursor?: social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of social_medias.
     */
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * social_media findFirstOrThrow
   */
  export type social_mediaFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * Filter, which social_media to fetch.
     */
    where?: social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_medias to fetch.
     */
    orderBy?: social_mediaOrderByWithRelationInput | social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for social_medias.
     */
    cursor?: social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_medias.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of social_medias.
     */
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * social_media findMany
   */
  export type social_mediaFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * Filter, which social_medias to fetch.
     */
    where?: social_mediaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of social_medias to fetch.
     */
    orderBy?: social_mediaOrderByWithRelationInput | social_mediaOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing social_medias.
     */
    cursor?: social_mediaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` social_medias from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` social_medias.
     */
    skip?: number
    distinct?: Social_mediaScalarFieldEnum | Social_mediaScalarFieldEnum[]
  }

  /**
   * social_media create
   */
  export type social_mediaCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * The data needed to create a social_media.
     */
    data: XOR<social_mediaCreateInput, social_mediaUncheckedCreateInput>
  }

  /**
   * social_media createMany
   */
  export type social_mediaCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many social_medias.
     */
    data: social_mediaCreateManyInput | social_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * social_media createManyAndReturn
   */
  export type social_mediaCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many social_medias.
     */
    data: social_mediaCreateManyInput | social_mediaCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * social_media update
   */
  export type social_mediaUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * The data needed to update a social_media.
     */
    data: XOR<social_mediaUpdateInput, social_mediaUncheckedUpdateInput>
    /**
     * Choose, which social_media to update.
     */
    where: social_mediaWhereUniqueInput
  }

  /**
   * social_media updateMany
   */
  export type social_mediaUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update social_medias.
     */
    data: XOR<social_mediaUpdateManyMutationInput, social_mediaUncheckedUpdateManyInput>
    /**
     * Filter which social_medias to update
     */
    where?: social_mediaWhereInput
  }

  /**
   * social_media upsert
   */
  export type social_mediaUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * The filter to search for the social_media to update in case it exists.
     */
    where: social_mediaWhereUniqueInput
    /**
     * In case the social_media found by the `where` argument doesn't exist, create a new social_media with this data.
     */
    create: XOR<social_mediaCreateInput, social_mediaUncheckedCreateInput>
    /**
     * In case the social_media was found with the provided `where` argument, update it with this data.
     */
    update: XOR<social_mediaUpdateInput, social_mediaUncheckedUpdateInput>
  }

  /**
   * social_media delete
   */
  export type social_mediaDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
    /**
     * Filter which social_media to delete.
     */
    where: social_mediaWhereUniqueInput
  }

  /**
   * social_media deleteMany
   */
  export type social_mediaDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which social_medias to delete
     */
    where?: social_mediaWhereInput
  }

  /**
   * social_media without action
   */
  export type social_mediaDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the social_media
     */
    select?: social_mediaSelect<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const EventScalarFieldEnum: {
    id: 'id',
    name: 'name',
    from_date: 'from_date',
    to_date: 'to_date',
    country: 'country',
    city: 'city',
    website: 'website',
    style: 'style',
    description: 'description',
    ai_quality_score: 'ai_quality_score',
    ai_completeness_score: 'ai_completeness_score',
    extraction_method: 'extraction_method',
    created_at: 'created_at',
    updated_at: 'updated_at',
    image_url: 'image_url'
  };

  export type EventScalarFieldEnum = (typeof EventScalarFieldEnum)[keyof typeof EventScalarFieldEnum]


  export const ExternalEventTeacherScalarFieldEnum: {
    event_id: 'event_id',
    teacher_id: 'teacher_id',
    role: 'role'
  };

  export type ExternalEventTeacherScalarFieldEnum = (typeof ExternalEventTeacherScalarFieldEnum)[keyof typeof ExternalEventTeacherScalarFieldEnum]


  export const ExternalEventVenueScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    name: 'name',
    address: 'address',
    type: 'type'
  };

  export type ExternalEventVenueScalarFieldEnum = (typeof ExternalEventVenueScalarFieldEnum)[keyof typeof ExternalEventVenueScalarFieldEnum]


  export const TeacherScalarFieldEnum: {
    id: 'id',
    name: 'name',
    bio: 'bio',
    website: 'website',
    ai_bio_summary: 'ai_bio_summary',
    ai_relevance_score: 'ai_relevance_score',
    image_url: 'image_url'
  };

  export type TeacherScalarFieldEnum = (typeof TeacherScalarFieldEnum)[keyof typeof TeacherScalarFieldEnum]


  export const MusicianScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    bio: 'bio',
    avatar: 'avatar',
    verified: 'verified',
    instruments: 'instruments',
    yearsActive: 'yearsActive',
    website: 'website',
    email: 'email',
    followerCount: 'followerCount',
    eventCount: 'eventCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    image_url: 'image_url'
  };

  export type MusicianScalarFieldEnum = (typeof MusicianScalarFieldEnum)[keyof typeof MusicianScalarFieldEnum]


  export const Event_musiciansScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    musician_id: 'musician_id',
    role: 'role',
    set_times: 'set_times',
    created_at: 'created_at'
  };

  export type Event_musiciansScalarFieldEnum = (typeof Event_musiciansScalarFieldEnum)[keyof typeof Event_musiciansScalarFieldEnum]


  export const Event_pricesScalarFieldEnum: {
    id: 'id',
    event_id: 'event_id',
    type: 'type',
    amount: 'amount',
    currency: 'currency',
    deadline: 'deadline',
    description: 'description',
    available: 'available',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Event_pricesScalarFieldEnum = (typeof Event_pricesScalarFieldEnum)[keyof typeof Event_pricesScalarFieldEnum]


  export const Social_mediaScalarFieldEnum: {
    id: 'id',
    entity_type: 'entity_type',
    entity_id: 'entity_id',
    platform: 'platform',
    url: 'url',
    username: 'username',
    is_verified: 'is_verified',
    follower_count: 'follower_count',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Social_mediaScalarFieldEnum = (typeof Social_mediaScalarFieldEnum)[keyof typeof Social_mediaScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type EventWhereInput = {
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    id?: IntFilter<"Event"> | number
    name?: StringFilter<"Event"> | string
    from_date?: DateTimeFilter<"Event"> | Date | string
    to_date?: DateTimeFilter<"Event"> | Date | string
    country?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    website?: StringNullableFilter<"Event"> | string | null
    style?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    ai_quality_score?: IntNullableFilter<"Event"> | number | null
    ai_completeness_score?: IntNullableFilter<"Event"> | number | null
    extraction_method?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeNullableFilter<"Event"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Event"> | Date | string | null
    image_url?: StringNullableFilter<"Event"> | string | null
    event_musicians?: Event_musiciansListRelationFilter
    event_prices?: Event_pricesListRelationFilter
    event_teachers?: ExternalEventTeacherListRelationFilter
    venues?: ExternalEventVenueListRelationFilter
  }

  export type EventOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    country?: SortOrder
    city?: SortOrder
    website?: SortOrderInput | SortOrder
    style?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ai_quality_score?: SortOrderInput | SortOrder
    ai_completeness_score?: SortOrderInput | SortOrder
    extraction_method?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    event_musicians?: event_musiciansOrderByRelationAggregateInput
    event_prices?: event_pricesOrderByRelationAggregateInput
    event_teachers?: ExternalEventTeacherOrderByRelationAggregateInput
    venues?: ExternalEventVenueOrderByRelationAggregateInput
  }

  export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: EventWhereInput | EventWhereInput[]
    OR?: EventWhereInput[]
    NOT?: EventWhereInput | EventWhereInput[]
    name?: StringFilter<"Event"> | string
    from_date?: DateTimeFilter<"Event"> | Date | string
    to_date?: DateTimeFilter<"Event"> | Date | string
    country?: StringFilter<"Event"> | string
    city?: StringFilter<"Event"> | string
    website?: StringNullableFilter<"Event"> | string | null
    style?: StringNullableFilter<"Event"> | string | null
    description?: StringNullableFilter<"Event"> | string | null
    ai_quality_score?: IntNullableFilter<"Event"> | number | null
    ai_completeness_score?: IntNullableFilter<"Event"> | number | null
    extraction_method?: StringNullableFilter<"Event"> | string | null
    created_at?: DateTimeNullableFilter<"Event"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"Event"> | Date | string | null
    image_url?: StringNullableFilter<"Event"> | string | null
    event_musicians?: Event_musiciansListRelationFilter
    event_prices?: Event_pricesListRelationFilter
    event_teachers?: ExternalEventTeacherListRelationFilter
    venues?: ExternalEventVenueListRelationFilter
  }, "id">

  export type EventOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    country?: SortOrder
    city?: SortOrder
    website?: SortOrderInput | SortOrder
    style?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    ai_quality_score?: SortOrderInput | SortOrder
    ai_completeness_score?: SortOrderInput | SortOrder
    extraction_method?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: EventCountOrderByAggregateInput
    _avg?: EventAvgOrderByAggregateInput
    _max?: EventMaxOrderByAggregateInput
    _min?: EventMinOrderByAggregateInput
    _sum?: EventSumOrderByAggregateInput
  }

  export type EventScalarWhereWithAggregatesInput = {
    AND?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    OR?: EventScalarWhereWithAggregatesInput[]
    NOT?: EventScalarWhereWithAggregatesInput | EventScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Event"> | number
    name?: StringWithAggregatesFilter<"Event"> | string
    from_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    to_date?: DateTimeWithAggregatesFilter<"Event"> | Date | string
    country?: StringWithAggregatesFilter<"Event"> | string
    city?: StringWithAggregatesFilter<"Event"> | string
    website?: StringNullableWithAggregatesFilter<"Event"> | string | null
    style?: StringNullableWithAggregatesFilter<"Event"> | string | null
    description?: StringNullableWithAggregatesFilter<"Event"> | string | null
    ai_quality_score?: IntNullableWithAggregatesFilter<"Event"> | number | null
    ai_completeness_score?: IntNullableWithAggregatesFilter<"Event"> | number | null
    extraction_method?: StringNullableWithAggregatesFilter<"Event"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"Event"> | Date | string | null
    image_url?: StringNullableWithAggregatesFilter<"Event"> | string | null
  }

  export type ExternalEventTeacherWhereInput = {
    AND?: ExternalEventTeacherWhereInput | ExternalEventTeacherWhereInput[]
    OR?: ExternalEventTeacherWhereInput[]
    NOT?: ExternalEventTeacherWhereInput | ExternalEventTeacherWhereInput[]
    event_id?: IntFilter<"ExternalEventTeacher"> | number
    teacher_id?: IntFilter<"ExternalEventTeacher"> | number
    role?: StringNullableFilter<"ExternalEventTeacher"> | string | null
    events?: XOR<EventRelationFilter, EventWhereInput>
    teachers?: XOR<TeacherRelationFilter, TeacherWhereInput>
  }

  export type ExternalEventTeacherOrderByWithRelationInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
    role?: SortOrderInput | SortOrder
    events?: EventOrderByWithRelationInput
    teachers?: TeacherOrderByWithRelationInput
  }

  export type ExternalEventTeacherWhereUniqueInput = Prisma.AtLeast<{
    event_id_teacher_id?: ExternalEventTeacherEvent_idTeacher_idCompoundUniqueInput
    AND?: ExternalEventTeacherWhereInput | ExternalEventTeacherWhereInput[]
    OR?: ExternalEventTeacherWhereInput[]
    NOT?: ExternalEventTeacherWhereInput | ExternalEventTeacherWhereInput[]
    event_id?: IntFilter<"ExternalEventTeacher"> | number
    teacher_id?: IntFilter<"ExternalEventTeacher"> | number
    role?: StringNullableFilter<"ExternalEventTeacher"> | string | null
    events?: XOR<EventRelationFilter, EventWhereInput>
    teachers?: XOR<TeacherRelationFilter, TeacherWhereInput>
  }, "event_id_teacher_id">

  export type ExternalEventTeacherOrderByWithAggregationInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
    role?: SortOrderInput | SortOrder
    _count?: ExternalEventTeacherCountOrderByAggregateInput
    _avg?: ExternalEventTeacherAvgOrderByAggregateInput
    _max?: ExternalEventTeacherMaxOrderByAggregateInput
    _min?: ExternalEventTeacherMinOrderByAggregateInput
    _sum?: ExternalEventTeacherSumOrderByAggregateInput
  }

  export type ExternalEventTeacherScalarWhereWithAggregatesInput = {
    AND?: ExternalEventTeacherScalarWhereWithAggregatesInput | ExternalEventTeacherScalarWhereWithAggregatesInput[]
    OR?: ExternalEventTeacherScalarWhereWithAggregatesInput[]
    NOT?: ExternalEventTeacherScalarWhereWithAggregatesInput | ExternalEventTeacherScalarWhereWithAggregatesInput[]
    event_id?: IntWithAggregatesFilter<"ExternalEventTeacher"> | number
    teacher_id?: IntWithAggregatesFilter<"ExternalEventTeacher"> | number
    role?: StringNullableWithAggregatesFilter<"ExternalEventTeacher"> | string | null
  }

  export type ExternalEventVenueWhereInput = {
    AND?: ExternalEventVenueWhereInput | ExternalEventVenueWhereInput[]
    OR?: ExternalEventVenueWhereInput[]
    NOT?: ExternalEventVenueWhereInput | ExternalEventVenueWhereInput[]
    id?: IntFilter<"ExternalEventVenue"> | number
    event_id?: IntNullableFilter<"ExternalEventVenue"> | number | null
    name?: StringNullableFilter<"ExternalEventVenue"> | string | null
    address?: StringNullableFilter<"ExternalEventVenue"> | string | null
    type?: StringNullableFilter<"ExternalEventVenue"> | string | null
    events?: XOR<EventNullableRelationFilter, EventWhereInput> | null
  }

  export type ExternalEventVenueOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    events?: EventOrderByWithRelationInput
  }

  export type ExternalEventVenueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ExternalEventVenueWhereInput | ExternalEventVenueWhereInput[]
    OR?: ExternalEventVenueWhereInput[]
    NOT?: ExternalEventVenueWhereInput | ExternalEventVenueWhereInput[]
    event_id?: IntNullableFilter<"ExternalEventVenue"> | number | null
    name?: StringNullableFilter<"ExternalEventVenue"> | string | null
    address?: StringNullableFilter<"ExternalEventVenue"> | string | null
    type?: StringNullableFilter<"ExternalEventVenue"> | string | null
    events?: XOR<EventNullableRelationFilter, EventWhereInput> | null
  }, "id">

  export type ExternalEventVenueOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    name?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    type?: SortOrderInput | SortOrder
    _count?: ExternalEventVenueCountOrderByAggregateInput
    _avg?: ExternalEventVenueAvgOrderByAggregateInput
    _max?: ExternalEventVenueMaxOrderByAggregateInput
    _min?: ExternalEventVenueMinOrderByAggregateInput
    _sum?: ExternalEventVenueSumOrderByAggregateInput
  }

  export type ExternalEventVenueScalarWhereWithAggregatesInput = {
    AND?: ExternalEventVenueScalarWhereWithAggregatesInput | ExternalEventVenueScalarWhereWithAggregatesInput[]
    OR?: ExternalEventVenueScalarWhereWithAggregatesInput[]
    NOT?: ExternalEventVenueScalarWhereWithAggregatesInput | ExternalEventVenueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ExternalEventVenue"> | number
    event_id?: IntNullableWithAggregatesFilter<"ExternalEventVenue"> | number | null
    name?: StringNullableWithAggregatesFilter<"ExternalEventVenue"> | string | null
    address?: StringNullableWithAggregatesFilter<"ExternalEventVenue"> | string | null
    type?: StringNullableWithAggregatesFilter<"ExternalEventVenue"> | string | null
  }

  export type TeacherWhereInput = {
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    id?: IntFilter<"Teacher"> | number
    name?: StringFilter<"Teacher"> | string
    bio?: StringNullableFilter<"Teacher"> | string | null
    website?: StringNullableFilter<"Teacher"> | string | null
    ai_bio_summary?: StringNullableFilter<"Teacher"> | string | null
    ai_relevance_score?: IntNullableFilter<"Teacher"> | number | null
    image_url?: StringNullableFilter<"Teacher"> | string | null
    event_teachers?: ExternalEventTeacherListRelationFilter
  }

  export type TeacherOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    ai_bio_summary?: SortOrderInput | SortOrder
    ai_relevance_score?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    event_teachers?: ExternalEventTeacherOrderByRelationAggregateInput
  }

  export type TeacherWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TeacherWhereInput | TeacherWhereInput[]
    OR?: TeacherWhereInput[]
    NOT?: TeacherWhereInput | TeacherWhereInput[]
    name?: StringFilter<"Teacher"> | string
    bio?: StringNullableFilter<"Teacher"> | string | null
    website?: StringNullableFilter<"Teacher"> | string | null
    ai_bio_summary?: StringNullableFilter<"Teacher"> | string | null
    ai_relevance_score?: IntNullableFilter<"Teacher"> | number | null
    image_url?: StringNullableFilter<"Teacher"> | string | null
    event_teachers?: ExternalEventTeacherListRelationFilter
  }, "id">

  export type TeacherOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    ai_bio_summary?: SortOrderInput | SortOrder
    ai_relevance_score?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: TeacherCountOrderByAggregateInput
    _avg?: TeacherAvgOrderByAggregateInput
    _max?: TeacherMaxOrderByAggregateInput
    _min?: TeacherMinOrderByAggregateInput
    _sum?: TeacherSumOrderByAggregateInput
  }

  export type TeacherScalarWhereWithAggregatesInput = {
    AND?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    OR?: TeacherScalarWhereWithAggregatesInput[]
    NOT?: TeacherScalarWhereWithAggregatesInput | TeacherScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Teacher"> | number
    name?: StringWithAggregatesFilter<"Teacher"> | string
    bio?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    website?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    ai_bio_summary?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
    ai_relevance_score?: IntNullableWithAggregatesFilter<"Teacher"> | number | null
    image_url?: StringNullableWithAggregatesFilter<"Teacher"> | string | null
  }

  export type MusicianWhereInput = {
    AND?: MusicianWhereInput | MusicianWhereInput[]
    OR?: MusicianWhereInput[]
    NOT?: MusicianWhereInput | MusicianWhereInput[]
    id?: IntFilter<"Musician"> | number
    name?: StringFilter<"Musician"> | string
    slug?: StringFilter<"Musician"> | string
    bio?: StringNullableFilter<"Musician"> | string | null
    avatar?: StringNullableFilter<"Musician"> | string | null
    verified?: BoolNullableFilter<"Musician"> | boolean | null
    instruments?: StringNullableListFilter<"Musician">
    yearsActive?: IntNullableFilter<"Musician"> | number | null
    website?: StringNullableFilter<"Musician"> | string | null
    email?: StringNullableFilter<"Musician"> | string | null
    followerCount?: IntNullableFilter<"Musician"> | number | null
    eventCount?: IntNullableFilter<"Musician"> | number | null
    createdAt?: DateTimeNullableFilter<"Musician"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Musician"> | Date | string | null
    image_url?: StringNullableFilter<"Musician"> | string | null
    event_musicians?: Event_musiciansListRelationFilter
  }

  export type MusicianOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    instruments?: SortOrder
    yearsActive?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    followerCount?: SortOrderInput | SortOrder
    eventCount?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    event_musicians?: event_musiciansOrderByRelationAggregateInput
  }

  export type MusicianWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: MusicianWhereInput | MusicianWhereInput[]
    OR?: MusicianWhereInput[]
    NOT?: MusicianWhereInput | MusicianWhereInput[]
    name?: StringFilter<"Musician"> | string
    bio?: StringNullableFilter<"Musician"> | string | null
    avatar?: StringNullableFilter<"Musician"> | string | null
    verified?: BoolNullableFilter<"Musician"> | boolean | null
    instruments?: StringNullableListFilter<"Musician">
    yearsActive?: IntNullableFilter<"Musician"> | number | null
    website?: StringNullableFilter<"Musician"> | string | null
    email?: StringNullableFilter<"Musician"> | string | null
    followerCount?: IntNullableFilter<"Musician"> | number | null
    eventCount?: IntNullableFilter<"Musician"> | number | null
    createdAt?: DateTimeNullableFilter<"Musician"> | Date | string | null
    updatedAt?: DateTimeNullableFilter<"Musician"> | Date | string | null
    image_url?: StringNullableFilter<"Musician"> | string | null
    event_musicians?: Event_musiciansListRelationFilter
  }, "id" | "slug">

  export type MusicianOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    verified?: SortOrderInput | SortOrder
    instruments?: SortOrder
    yearsActive?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    followerCount?: SortOrderInput | SortOrder
    eventCount?: SortOrderInput | SortOrder
    createdAt?: SortOrderInput | SortOrder
    updatedAt?: SortOrderInput | SortOrder
    image_url?: SortOrderInput | SortOrder
    _count?: MusicianCountOrderByAggregateInput
    _avg?: MusicianAvgOrderByAggregateInput
    _max?: MusicianMaxOrderByAggregateInput
    _min?: MusicianMinOrderByAggregateInput
    _sum?: MusicianSumOrderByAggregateInput
  }

  export type MusicianScalarWhereWithAggregatesInput = {
    AND?: MusicianScalarWhereWithAggregatesInput | MusicianScalarWhereWithAggregatesInput[]
    OR?: MusicianScalarWhereWithAggregatesInput[]
    NOT?: MusicianScalarWhereWithAggregatesInput | MusicianScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Musician"> | number
    name?: StringWithAggregatesFilter<"Musician"> | string
    slug?: StringWithAggregatesFilter<"Musician"> | string
    bio?: StringNullableWithAggregatesFilter<"Musician"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Musician"> | string | null
    verified?: BoolNullableWithAggregatesFilter<"Musician"> | boolean | null
    instruments?: StringNullableListFilter<"Musician">
    yearsActive?: IntNullableWithAggregatesFilter<"Musician"> | number | null
    website?: StringNullableWithAggregatesFilter<"Musician"> | string | null
    email?: StringNullableWithAggregatesFilter<"Musician"> | string | null
    followerCount?: IntNullableWithAggregatesFilter<"Musician"> | number | null
    eventCount?: IntNullableWithAggregatesFilter<"Musician"> | number | null
    createdAt?: DateTimeNullableWithAggregatesFilter<"Musician"> | Date | string | null
    updatedAt?: DateTimeNullableWithAggregatesFilter<"Musician"> | Date | string | null
    image_url?: StringNullableWithAggregatesFilter<"Musician"> | string | null
  }

  export type event_musiciansWhereInput = {
    AND?: event_musiciansWhereInput | event_musiciansWhereInput[]
    OR?: event_musiciansWhereInput[]
    NOT?: event_musiciansWhereInput | event_musiciansWhereInput[]
    id?: IntFilter<"event_musicians"> | number
    event_id?: IntNullableFilter<"event_musicians"> | number | null
    musician_id?: IntNullableFilter<"event_musicians"> | number | null
    role?: StringNullableFilter<"event_musicians"> | string | null
    set_times?: StringNullableListFilter<"event_musicians">
    created_at?: DateTimeNullableFilter<"event_musicians"> | Date | string | null
    events?: XOR<EventNullableRelationFilter, EventWhereInput> | null
    musicians?: XOR<MusicianNullableRelationFilter, MusicianWhereInput> | null
  }

  export type event_musiciansOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    musician_id?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    set_times?: SortOrder
    created_at?: SortOrderInput | SortOrder
    events?: EventOrderByWithRelationInput
    musicians?: MusicianOrderByWithRelationInput
  }

  export type event_musiciansWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: event_musiciansWhereInput | event_musiciansWhereInput[]
    OR?: event_musiciansWhereInput[]
    NOT?: event_musiciansWhereInput | event_musiciansWhereInput[]
    event_id?: IntNullableFilter<"event_musicians"> | number | null
    musician_id?: IntNullableFilter<"event_musicians"> | number | null
    role?: StringNullableFilter<"event_musicians"> | string | null
    set_times?: StringNullableListFilter<"event_musicians">
    created_at?: DateTimeNullableFilter<"event_musicians"> | Date | string | null
    events?: XOR<EventNullableRelationFilter, EventWhereInput> | null
    musicians?: XOR<MusicianNullableRelationFilter, MusicianWhereInput> | null
  }, "id">

  export type event_musiciansOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    musician_id?: SortOrderInput | SortOrder
    role?: SortOrderInput | SortOrder
    set_times?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: event_musiciansCountOrderByAggregateInput
    _avg?: event_musiciansAvgOrderByAggregateInput
    _max?: event_musiciansMaxOrderByAggregateInput
    _min?: event_musiciansMinOrderByAggregateInput
    _sum?: event_musiciansSumOrderByAggregateInput
  }

  export type event_musiciansScalarWhereWithAggregatesInput = {
    AND?: event_musiciansScalarWhereWithAggregatesInput | event_musiciansScalarWhereWithAggregatesInput[]
    OR?: event_musiciansScalarWhereWithAggregatesInput[]
    NOT?: event_musiciansScalarWhereWithAggregatesInput | event_musiciansScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"event_musicians"> | number
    event_id?: IntNullableWithAggregatesFilter<"event_musicians"> | number | null
    musician_id?: IntNullableWithAggregatesFilter<"event_musicians"> | number | null
    role?: StringNullableWithAggregatesFilter<"event_musicians"> | string | null
    set_times?: StringNullableListFilter<"event_musicians">
    created_at?: DateTimeNullableWithAggregatesFilter<"event_musicians"> | Date | string | null
  }

  export type event_pricesWhereInput = {
    AND?: event_pricesWhereInput | event_pricesWhereInput[]
    OR?: event_pricesWhereInput[]
    NOT?: event_pricesWhereInput | event_pricesWhereInput[]
    id?: IntFilter<"event_prices"> | number
    event_id?: IntNullableFilter<"event_prices"> | number | null
    type?: StringFilter<"event_prices"> | string
    amount?: DecimalFilter<"event_prices"> | Decimal | DecimalJsLike | number | string
    currency?: StringNullableFilter<"event_prices"> | string | null
    deadline?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    description?: StringNullableFilter<"event_prices"> | string | null
    available?: BoolNullableFilter<"event_prices"> | boolean | null
    created_at?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    events?: XOR<EventNullableRelationFilter, EventWhereInput> | null
  }

  export type event_pricesOrderByWithRelationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    events?: EventOrderByWithRelationInput
  }

  export type event_pricesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: event_pricesWhereInput | event_pricesWhereInput[]
    OR?: event_pricesWhereInput[]
    NOT?: event_pricesWhereInput | event_pricesWhereInput[]
    event_id?: IntNullableFilter<"event_prices"> | number | null
    type?: StringFilter<"event_prices"> | string
    amount?: DecimalFilter<"event_prices"> | Decimal | DecimalJsLike | number | string
    currency?: StringNullableFilter<"event_prices"> | string | null
    deadline?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    description?: StringNullableFilter<"event_prices"> | string | null
    available?: BoolNullableFilter<"event_prices"> | boolean | null
    created_at?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    events?: XOR<EventNullableRelationFilter, EventWhereInput> | null
  }, "id">

  export type event_pricesOrderByWithAggregationInput = {
    id?: SortOrder
    event_id?: SortOrderInput | SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrderInput | SortOrder
    deadline?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    available?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: event_pricesCountOrderByAggregateInput
    _avg?: event_pricesAvgOrderByAggregateInput
    _max?: event_pricesMaxOrderByAggregateInput
    _min?: event_pricesMinOrderByAggregateInput
    _sum?: event_pricesSumOrderByAggregateInput
  }

  export type event_pricesScalarWhereWithAggregatesInput = {
    AND?: event_pricesScalarWhereWithAggregatesInput | event_pricesScalarWhereWithAggregatesInput[]
    OR?: event_pricesScalarWhereWithAggregatesInput[]
    NOT?: event_pricesScalarWhereWithAggregatesInput | event_pricesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"event_prices"> | number
    event_id?: IntNullableWithAggregatesFilter<"event_prices"> | number | null
    type?: StringWithAggregatesFilter<"event_prices"> | string
    amount?: DecimalWithAggregatesFilter<"event_prices"> | Decimal | DecimalJsLike | number | string
    currency?: StringNullableWithAggregatesFilter<"event_prices"> | string | null
    deadline?: DateTimeNullableWithAggregatesFilter<"event_prices"> | Date | string | null
    description?: StringNullableWithAggregatesFilter<"event_prices"> | string | null
    available?: BoolNullableWithAggregatesFilter<"event_prices"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"event_prices"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"event_prices"> | Date | string | null
  }

  export type social_mediaWhereInput = {
    AND?: social_mediaWhereInput | social_mediaWhereInput[]
    OR?: social_mediaWhereInput[]
    NOT?: social_mediaWhereInput | social_mediaWhereInput[]
    id?: IntFilter<"social_media"> | number
    entity_type?: StringFilter<"social_media"> | string
    entity_id?: IntFilter<"social_media"> | number
    platform?: StringFilter<"social_media"> | string
    url?: StringFilter<"social_media"> | string
    username?: StringNullableFilter<"social_media"> | string | null
    is_verified?: BoolNullableFilter<"social_media"> | boolean | null
    follower_count?: IntNullableFilter<"social_media"> | number | null
    created_at?: DateTimeNullableFilter<"social_media"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"social_media"> | Date | string | null
  }

  export type social_mediaOrderByWithRelationInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    username?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    follower_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
  }

  export type social_mediaWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    entity_type_entity_id_platform?: social_mediaEntity_typeEntity_idPlatformCompoundUniqueInput
    AND?: social_mediaWhereInput | social_mediaWhereInput[]
    OR?: social_mediaWhereInput[]
    NOT?: social_mediaWhereInput | social_mediaWhereInput[]
    entity_type?: StringFilter<"social_media"> | string
    entity_id?: IntFilter<"social_media"> | number
    platform?: StringFilter<"social_media"> | string
    url?: StringFilter<"social_media"> | string
    username?: StringNullableFilter<"social_media"> | string | null
    is_verified?: BoolNullableFilter<"social_media"> | boolean | null
    follower_count?: IntNullableFilter<"social_media"> | number | null
    created_at?: DateTimeNullableFilter<"social_media"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"social_media"> | Date | string | null
  }, "id" | "entity_type_entity_id_platform">

  export type social_mediaOrderByWithAggregationInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    username?: SortOrderInput | SortOrder
    is_verified?: SortOrderInput | SortOrder
    follower_count?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: social_mediaCountOrderByAggregateInput
    _avg?: social_mediaAvgOrderByAggregateInput
    _max?: social_mediaMaxOrderByAggregateInput
    _min?: social_mediaMinOrderByAggregateInput
    _sum?: social_mediaSumOrderByAggregateInput
  }

  export type social_mediaScalarWhereWithAggregatesInput = {
    AND?: social_mediaScalarWhereWithAggregatesInput | social_mediaScalarWhereWithAggregatesInput[]
    OR?: social_mediaScalarWhereWithAggregatesInput[]
    NOT?: social_mediaScalarWhereWithAggregatesInput | social_mediaScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"social_media"> | number
    entity_type?: StringWithAggregatesFilter<"social_media"> | string
    entity_id?: IntWithAggregatesFilter<"social_media"> | number
    platform?: StringWithAggregatesFilter<"social_media"> | string
    url?: StringWithAggregatesFilter<"social_media"> | string
    username?: StringNullableWithAggregatesFilter<"social_media"> | string | null
    is_verified?: BoolNullableWithAggregatesFilter<"social_media"> | boolean | null
    follower_count?: IntNullableWithAggregatesFilter<"social_media"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"social_media"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"social_media"> | Date | string | null
  }

  export type EventCreateInput = {
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansCreateNestedManyWithoutEventsInput
    event_prices?: event_pricesCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateInput = {
    id?: number
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansUncheckedCreateNestedManyWithoutEventsInput
    event_prices?: event_pricesUncheckedCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherUncheckedCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUpdateManyWithoutEventsNestedInput
    event_prices?: event_pricesUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUncheckedUpdateManyWithoutEventsNestedInput
    event_prices?: event_pricesUncheckedUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUncheckedUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type EventCreateManyInput = {
    id?: number
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
  }

  export type EventUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventTeacherCreateInput = {
    role?: string | null
    events: EventCreateNestedOneWithoutEvent_teachersInput
    teachers: TeacherCreateNestedOneWithoutEvent_teachersInput
  }

  export type ExternalEventTeacherUncheckedCreateInput = {
    event_id: number
    teacher_id: number
    role?: string | null
  }

  export type ExternalEventTeacherUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateOneRequiredWithoutEvent_teachersNestedInput
    teachers?: TeacherUpdateOneRequiredWithoutEvent_teachersNestedInput
  }

  export type ExternalEventTeacherUncheckedUpdateInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventTeacherCreateManyInput = {
    event_id: number
    teacher_id: number
    role?: string | null
  }

  export type ExternalEventTeacherUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventTeacherUncheckedUpdateManyInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    teacher_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventVenueCreateInput = {
    name?: string | null
    address?: string | null
    type?: string | null
    events?: EventCreateNestedOneWithoutVenuesInput
  }

  export type ExternalEventVenueUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    address?: string | null
    type?: string | null
  }

  export type ExternalEventVenueUpdateInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateOneWithoutVenuesNestedInput
  }

  export type ExternalEventVenueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventVenueCreateManyInput = {
    id?: number
    event_id?: number | null
    name?: string | null
    address?: string | null
    type?: string | null
  }

  export type ExternalEventVenueUpdateManyMutationInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventVenueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherCreateInput = {
    name: string
    bio?: string | null
    website?: string | null
    ai_bio_summary?: string | null
    ai_relevance_score?: number | null
    image_url?: string | null
    event_teachers?: ExternalEventTeacherCreateNestedManyWithoutTeachersInput
  }

  export type TeacherUncheckedCreateInput = {
    id?: number
    name: string
    bio?: string | null
    website?: string | null
    ai_bio_summary?: string | null
    ai_relevance_score?: number | null
    image_url?: string | null
    event_teachers?: ExternalEventTeacherUncheckedCreateNestedManyWithoutTeachersInput
  }

  export type TeacherUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ai_bio_summary?: NullableStringFieldUpdateOperationsInput | string | null
    ai_relevance_score?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_teachers?: ExternalEventTeacherUpdateManyWithoutTeachersNestedInput
  }

  export type TeacherUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ai_bio_summary?: NullableStringFieldUpdateOperationsInput | string | null
    ai_relevance_score?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_teachers?: ExternalEventTeacherUncheckedUpdateManyWithoutTeachersNestedInput
  }

  export type TeacherCreateManyInput = {
    id?: number
    name: string
    bio?: string | null
    website?: string | null
    ai_bio_summary?: string | null
    ai_relevance_score?: number | null
    image_url?: string | null
  }

  export type TeacherUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ai_bio_summary?: NullableStringFieldUpdateOperationsInput | string | null
    ai_relevance_score?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ai_bio_summary?: NullableStringFieldUpdateOperationsInput | string | null
    ai_relevance_score?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicianCreateInput = {
    name: string
    slug: string
    bio?: string | null
    avatar?: string | null
    verified?: boolean | null
    instruments?: MusicianCreateinstrumentsInput | string[]
    yearsActive?: number | null
    website?: string | null
    email?: string | null
    followerCount?: number | null
    eventCount?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansCreateNestedManyWithoutMusiciansInput
  }

  export type MusicianUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    bio?: string | null
    avatar?: string | null
    verified?: boolean | null
    instruments?: MusicianCreateinstrumentsInput | string[]
    yearsActive?: number | null
    website?: string | null
    email?: string | null
    followerCount?: number | null
    eventCount?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansUncheckedCreateNestedManyWithoutMusiciansInput
  }

  export type MusicianUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    instruments?: MusicianUpdateinstrumentsInput | string[]
    yearsActive?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableIntFieldUpdateOperationsInput | number | null
    eventCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUpdateManyWithoutMusiciansNestedInput
  }

  export type MusicianUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    instruments?: MusicianUpdateinstrumentsInput | string[]
    yearsActive?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableIntFieldUpdateOperationsInput | number | null
    eventCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUncheckedUpdateManyWithoutMusiciansNestedInput
  }

  export type MusicianCreateManyInput = {
    id?: number
    name: string
    slug: string
    bio?: string | null
    avatar?: string | null
    verified?: boolean | null
    instruments?: MusicianCreateinstrumentsInput | string[]
    yearsActive?: number | null
    website?: string | null
    email?: string | null
    followerCount?: number | null
    eventCount?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    image_url?: string | null
  }

  export type MusicianUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    instruments?: MusicianUpdateinstrumentsInput | string[]
    yearsActive?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableIntFieldUpdateOperationsInput | number | null
    eventCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicianUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    instruments?: MusicianUpdateinstrumentsInput | string[]
    yearsActive?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableIntFieldUpdateOperationsInput | number | null
    eventCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_musiciansCreateInput = {
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
    events?: EventCreateNestedOneWithoutEvent_musiciansInput
    musicians?: MusicianCreateNestedOneWithoutEvent_musiciansInput
  }

  export type event_musiciansUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    musician_id?: number | null
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
  }

  export type event_musiciansUpdateInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateOneWithoutEvent_musiciansNestedInput
    musicians?: MusicianUpdateOneWithoutEvent_musiciansNestedInput
  }

  export type event_musiciansUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    musician_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_musiciansCreateManyInput = {
    id?: number
    event_id?: number | null
    musician_id?: number | null
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
  }

  export type event_musiciansUpdateManyMutationInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_musiciansUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    musician_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_pricesCreateInput = {
    type: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string | null
    deadline?: Date | string | null
    description?: string | null
    available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    events?: EventCreateNestedOneWithoutEvent_pricesInput
  }

  export type event_pricesUncheckedCreateInput = {
    id?: number
    event_id?: number | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string | null
    deadline?: Date | string | null
    description?: string | null
    available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type event_pricesUpdateInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateOneWithoutEvent_pricesNestedInput
  }

  export type event_pricesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_pricesCreateManyInput = {
    id?: number
    event_id?: number | null
    type: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string | null
    deadline?: Date | string | null
    description?: string | null
    available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type event_pricesUpdateManyMutationInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_pricesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type social_mediaCreateInput = {
    entity_type: string
    entity_id: number
    platform: string
    url: string
    username?: string | null
    is_verified?: boolean | null
    follower_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type social_mediaUncheckedCreateInput = {
    id?: number
    entity_type: string
    entity_id: number
    platform: string
    url: string
    username?: string | null
    is_verified?: boolean | null
    follower_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type social_mediaUpdateInput = {
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type social_mediaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type social_mediaCreateManyInput = {
    id?: number
    entity_type: string
    entity_id: number
    platform: string
    url: string
    username?: string | null
    is_verified?: boolean | null
    follower_count?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type social_mediaUpdateManyMutationInput = {
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type social_mediaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    entity_type?: StringFieldUpdateOperationsInput | string
    entity_id?: IntFieldUpdateOperationsInput | number
    platform?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    username?: NullableStringFieldUpdateOperationsInput | string | null
    is_verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    follower_count?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type Event_musiciansListRelationFilter = {
    every?: event_musiciansWhereInput
    some?: event_musiciansWhereInput
    none?: event_musiciansWhereInput
  }

  export type Event_pricesListRelationFilter = {
    every?: event_pricesWhereInput
    some?: event_pricesWhereInput
    none?: event_pricesWhereInput
  }

  export type ExternalEventTeacherListRelationFilter = {
    every?: ExternalEventTeacherWhereInput
    some?: ExternalEventTeacherWhereInput
    none?: ExternalEventTeacherWhereInput
  }

  export type ExternalEventVenueListRelationFilter = {
    every?: ExternalEventVenueWhereInput
    some?: ExternalEventVenueWhereInput
    none?: ExternalEventVenueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type event_musiciansOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type event_pricesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExternalEventTeacherOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExternalEventVenueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EventCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    country?: SortOrder
    city?: SortOrder
    website?: SortOrder
    style?: SortOrder
    description?: SortOrder
    ai_quality_score?: SortOrder
    ai_completeness_score?: SortOrder
    extraction_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type EventAvgOrderByAggregateInput = {
    id?: SortOrder
    ai_quality_score?: SortOrder
    ai_completeness_score?: SortOrder
  }

  export type EventMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    country?: SortOrder
    city?: SortOrder
    website?: SortOrder
    style?: SortOrder
    description?: SortOrder
    ai_quality_score?: SortOrder
    ai_completeness_score?: SortOrder
    extraction_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type EventMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    from_date?: SortOrder
    to_date?: SortOrder
    country?: SortOrder
    city?: SortOrder
    website?: SortOrder
    style?: SortOrder
    description?: SortOrder
    ai_quality_score?: SortOrder
    ai_completeness_score?: SortOrder
    extraction_method?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
    image_url?: SortOrder
  }

  export type EventSumOrderByAggregateInput = {
    id?: SortOrder
    ai_quality_score?: SortOrder
    ai_completeness_score?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EventRelationFilter = {
    is?: EventWhereInput
    isNot?: EventWhereInput
  }

  export type TeacherRelationFilter = {
    is?: TeacherWhereInput
    isNot?: TeacherWhereInput
  }

  export type ExternalEventTeacherEvent_idTeacher_idCompoundUniqueInput = {
    event_id: number
    teacher_id: number
  }

  export type ExternalEventTeacherCountOrderByAggregateInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
    role?: SortOrder
  }

  export type ExternalEventTeacherAvgOrderByAggregateInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type ExternalEventTeacherMaxOrderByAggregateInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
    role?: SortOrder
  }

  export type ExternalEventTeacherMinOrderByAggregateInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
    role?: SortOrder
  }

  export type ExternalEventTeacherSumOrderByAggregateInput = {
    event_id?: SortOrder
    teacher_id?: SortOrder
  }

  export type EventNullableRelationFilter = {
    is?: EventWhereInput | null
    isNot?: EventWhereInput | null
  }

  export type ExternalEventVenueCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
  }

  export type ExternalEventVenueAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type ExternalEventVenueMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
  }

  export type ExternalEventVenueMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    type?: SortOrder
  }

  export type ExternalEventVenueSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
  }

  export type TeacherCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    ai_bio_summary?: SortOrder
    ai_relevance_score?: SortOrder
    image_url?: SortOrder
  }

  export type TeacherAvgOrderByAggregateInput = {
    id?: SortOrder
    ai_relevance_score?: SortOrder
  }

  export type TeacherMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    ai_bio_summary?: SortOrder
    ai_relevance_score?: SortOrder
    image_url?: SortOrder
  }

  export type TeacherMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    bio?: SortOrder
    website?: SortOrder
    ai_bio_summary?: SortOrder
    ai_relevance_score?: SortOrder
    image_url?: SortOrder
  }

  export type TeacherSumOrderByAggregateInput = {
    id?: SortOrder
    ai_relevance_score?: SortOrder
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type MusicianCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    verified?: SortOrder
    instruments?: SortOrder
    yearsActive?: SortOrder
    website?: SortOrder
    email?: SortOrder
    followerCount?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image_url?: SortOrder
  }

  export type MusicianAvgOrderByAggregateInput = {
    id?: SortOrder
    yearsActive?: SortOrder
    followerCount?: SortOrder
    eventCount?: SortOrder
  }

  export type MusicianMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    verified?: SortOrder
    yearsActive?: SortOrder
    website?: SortOrder
    email?: SortOrder
    followerCount?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image_url?: SortOrder
  }

  export type MusicianMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    bio?: SortOrder
    avatar?: SortOrder
    verified?: SortOrder
    yearsActive?: SortOrder
    website?: SortOrder
    email?: SortOrder
    followerCount?: SortOrder
    eventCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    image_url?: SortOrder
  }

  export type MusicianSumOrderByAggregateInput = {
    id?: SortOrder
    yearsActive?: SortOrder
    followerCount?: SortOrder
    eventCount?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type MusicianNullableRelationFilter = {
    is?: MusicianWhereInput | null
    isNot?: MusicianWhereInput | null
  }

  export type event_musiciansCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    musician_id?: SortOrder
    role?: SortOrder
    set_times?: SortOrder
    created_at?: SortOrder
  }

  export type event_musiciansAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    musician_id?: SortOrder
  }

  export type event_musiciansMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    musician_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type event_musiciansMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    musician_id?: SortOrder
    role?: SortOrder
    created_at?: SortOrder
  }

  export type event_musiciansSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    musician_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type event_pricesCountOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type event_pricesAvgOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
  }

  export type event_pricesMaxOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type event_pricesMinOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    type?: SortOrder
    amount?: SortOrder
    currency?: SortOrder
    deadline?: SortOrder
    description?: SortOrder
    available?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type event_pricesSumOrderByAggregateInput = {
    id?: SortOrder
    event_id?: SortOrder
    amount?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type social_mediaEntity_typeEntity_idPlatformCompoundUniqueInput = {
    entity_type: string
    entity_id: number
    platform: string
  }

  export type social_mediaCountOrderByAggregateInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    username?: SortOrder
    is_verified?: SortOrder
    follower_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type social_mediaAvgOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    follower_count?: SortOrder
  }

  export type social_mediaMaxOrderByAggregateInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    username?: SortOrder
    is_verified?: SortOrder
    follower_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type social_mediaMinOrderByAggregateInput = {
    id?: SortOrder
    entity_type?: SortOrder
    entity_id?: SortOrder
    platform?: SortOrder
    url?: SortOrder
    username?: SortOrder
    is_verified?: SortOrder
    follower_count?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type social_mediaSumOrderByAggregateInput = {
    id?: SortOrder
    entity_id?: SortOrder
    follower_count?: SortOrder
  }

  export type event_musiciansCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_musiciansCreateWithoutEventsInput, event_musiciansUncheckedCreateWithoutEventsInput> | event_musiciansCreateWithoutEventsInput[] | event_musiciansUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutEventsInput | event_musiciansCreateOrConnectWithoutEventsInput[]
    createMany?: event_musiciansCreateManyEventsInputEnvelope
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
  }

  export type event_pricesCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_pricesCreateWithoutEventsInput, event_pricesUncheckedCreateWithoutEventsInput> | event_pricesCreateWithoutEventsInput[] | event_pricesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_pricesCreateOrConnectWithoutEventsInput | event_pricesCreateOrConnectWithoutEventsInput[]
    createMany?: event_pricesCreateManyEventsInputEnvelope
    connect?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
  }

  export type ExternalEventTeacherCreateNestedManyWithoutEventsInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutEventsInput, ExternalEventTeacherUncheckedCreateWithoutEventsInput> | ExternalEventTeacherCreateWithoutEventsInput[] | ExternalEventTeacherUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutEventsInput | ExternalEventTeacherCreateOrConnectWithoutEventsInput[]
    createMany?: ExternalEventTeacherCreateManyEventsInputEnvelope
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
  }

  export type ExternalEventVenueCreateNestedManyWithoutEventsInput = {
    create?: XOR<ExternalEventVenueCreateWithoutEventsInput, ExternalEventVenueUncheckedCreateWithoutEventsInput> | ExternalEventVenueCreateWithoutEventsInput[] | ExternalEventVenueUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventVenueCreateOrConnectWithoutEventsInput | ExternalEventVenueCreateOrConnectWithoutEventsInput[]
    createMany?: ExternalEventVenueCreateManyEventsInputEnvelope
    connect?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
  }

  export type event_musiciansUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_musiciansCreateWithoutEventsInput, event_musiciansUncheckedCreateWithoutEventsInput> | event_musiciansCreateWithoutEventsInput[] | event_musiciansUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutEventsInput | event_musiciansCreateOrConnectWithoutEventsInput[]
    createMany?: event_musiciansCreateManyEventsInputEnvelope
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
  }

  export type event_pricesUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<event_pricesCreateWithoutEventsInput, event_pricesUncheckedCreateWithoutEventsInput> | event_pricesCreateWithoutEventsInput[] | event_pricesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_pricesCreateOrConnectWithoutEventsInput | event_pricesCreateOrConnectWithoutEventsInput[]
    createMany?: event_pricesCreateManyEventsInputEnvelope
    connect?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
  }

  export type ExternalEventTeacherUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutEventsInput, ExternalEventTeacherUncheckedCreateWithoutEventsInput> | ExternalEventTeacherCreateWithoutEventsInput[] | ExternalEventTeacherUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutEventsInput | ExternalEventTeacherCreateOrConnectWithoutEventsInput[]
    createMany?: ExternalEventTeacherCreateManyEventsInputEnvelope
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
  }

  export type ExternalEventVenueUncheckedCreateNestedManyWithoutEventsInput = {
    create?: XOR<ExternalEventVenueCreateWithoutEventsInput, ExternalEventVenueUncheckedCreateWithoutEventsInput> | ExternalEventVenueCreateWithoutEventsInput[] | ExternalEventVenueUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventVenueCreateOrConnectWithoutEventsInput | ExternalEventVenueCreateOrConnectWithoutEventsInput[]
    createMany?: ExternalEventVenueCreateManyEventsInputEnvelope
    connect?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type event_musiciansUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_musiciansCreateWithoutEventsInput, event_musiciansUncheckedCreateWithoutEventsInput> | event_musiciansCreateWithoutEventsInput[] | event_musiciansUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutEventsInput | event_musiciansCreateOrConnectWithoutEventsInput[]
    upsert?: event_musiciansUpsertWithWhereUniqueWithoutEventsInput | event_musiciansUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_musiciansCreateManyEventsInputEnvelope
    set?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    disconnect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    delete?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    update?: event_musiciansUpdateWithWhereUniqueWithoutEventsInput | event_musiciansUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_musiciansUpdateManyWithWhereWithoutEventsInput | event_musiciansUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_musiciansScalarWhereInput | event_musiciansScalarWhereInput[]
  }

  export type event_pricesUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_pricesCreateWithoutEventsInput, event_pricesUncheckedCreateWithoutEventsInput> | event_pricesCreateWithoutEventsInput[] | event_pricesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_pricesCreateOrConnectWithoutEventsInput | event_pricesCreateOrConnectWithoutEventsInput[]
    upsert?: event_pricesUpsertWithWhereUniqueWithoutEventsInput | event_pricesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_pricesCreateManyEventsInputEnvelope
    set?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    disconnect?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    delete?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    connect?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    update?: event_pricesUpdateWithWhereUniqueWithoutEventsInput | event_pricesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_pricesUpdateManyWithWhereWithoutEventsInput | event_pricesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_pricesScalarWhereInput | event_pricesScalarWhereInput[]
  }

  export type ExternalEventTeacherUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutEventsInput, ExternalEventTeacherUncheckedCreateWithoutEventsInput> | ExternalEventTeacherCreateWithoutEventsInput[] | ExternalEventTeacherUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutEventsInput | ExternalEventTeacherCreateOrConnectWithoutEventsInput[]
    upsert?: ExternalEventTeacherUpsertWithWhereUniqueWithoutEventsInput | ExternalEventTeacherUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ExternalEventTeacherCreateManyEventsInputEnvelope
    set?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    disconnect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    delete?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    update?: ExternalEventTeacherUpdateWithWhereUniqueWithoutEventsInput | ExternalEventTeacherUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ExternalEventTeacherUpdateManyWithWhereWithoutEventsInput | ExternalEventTeacherUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ExternalEventTeacherScalarWhereInput | ExternalEventTeacherScalarWhereInput[]
  }

  export type ExternalEventVenueUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ExternalEventVenueCreateWithoutEventsInput, ExternalEventVenueUncheckedCreateWithoutEventsInput> | ExternalEventVenueCreateWithoutEventsInput[] | ExternalEventVenueUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventVenueCreateOrConnectWithoutEventsInput | ExternalEventVenueCreateOrConnectWithoutEventsInput[]
    upsert?: ExternalEventVenueUpsertWithWhereUniqueWithoutEventsInput | ExternalEventVenueUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ExternalEventVenueCreateManyEventsInputEnvelope
    set?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    disconnect?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    delete?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    connect?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    update?: ExternalEventVenueUpdateWithWhereUniqueWithoutEventsInput | ExternalEventVenueUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ExternalEventVenueUpdateManyWithWhereWithoutEventsInput | ExternalEventVenueUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ExternalEventVenueScalarWhereInput | ExternalEventVenueScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type event_musiciansUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_musiciansCreateWithoutEventsInput, event_musiciansUncheckedCreateWithoutEventsInput> | event_musiciansCreateWithoutEventsInput[] | event_musiciansUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutEventsInput | event_musiciansCreateOrConnectWithoutEventsInput[]
    upsert?: event_musiciansUpsertWithWhereUniqueWithoutEventsInput | event_musiciansUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_musiciansCreateManyEventsInputEnvelope
    set?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    disconnect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    delete?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    update?: event_musiciansUpdateWithWhereUniqueWithoutEventsInput | event_musiciansUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_musiciansUpdateManyWithWhereWithoutEventsInput | event_musiciansUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_musiciansScalarWhereInput | event_musiciansScalarWhereInput[]
  }

  export type event_pricesUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<event_pricesCreateWithoutEventsInput, event_pricesUncheckedCreateWithoutEventsInput> | event_pricesCreateWithoutEventsInput[] | event_pricesUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: event_pricesCreateOrConnectWithoutEventsInput | event_pricesCreateOrConnectWithoutEventsInput[]
    upsert?: event_pricesUpsertWithWhereUniqueWithoutEventsInput | event_pricesUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: event_pricesCreateManyEventsInputEnvelope
    set?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    disconnect?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    delete?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    connect?: event_pricesWhereUniqueInput | event_pricesWhereUniqueInput[]
    update?: event_pricesUpdateWithWhereUniqueWithoutEventsInput | event_pricesUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: event_pricesUpdateManyWithWhereWithoutEventsInput | event_pricesUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: event_pricesScalarWhereInput | event_pricesScalarWhereInput[]
  }

  export type ExternalEventTeacherUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutEventsInput, ExternalEventTeacherUncheckedCreateWithoutEventsInput> | ExternalEventTeacherCreateWithoutEventsInput[] | ExternalEventTeacherUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutEventsInput | ExternalEventTeacherCreateOrConnectWithoutEventsInput[]
    upsert?: ExternalEventTeacherUpsertWithWhereUniqueWithoutEventsInput | ExternalEventTeacherUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ExternalEventTeacherCreateManyEventsInputEnvelope
    set?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    disconnect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    delete?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    update?: ExternalEventTeacherUpdateWithWhereUniqueWithoutEventsInput | ExternalEventTeacherUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ExternalEventTeacherUpdateManyWithWhereWithoutEventsInput | ExternalEventTeacherUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ExternalEventTeacherScalarWhereInput | ExternalEventTeacherScalarWhereInput[]
  }

  export type ExternalEventVenueUncheckedUpdateManyWithoutEventsNestedInput = {
    create?: XOR<ExternalEventVenueCreateWithoutEventsInput, ExternalEventVenueUncheckedCreateWithoutEventsInput> | ExternalEventVenueCreateWithoutEventsInput[] | ExternalEventVenueUncheckedCreateWithoutEventsInput[]
    connectOrCreate?: ExternalEventVenueCreateOrConnectWithoutEventsInput | ExternalEventVenueCreateOrConnectWithoutEventsInput[]
    upsert?: ExternalEventVenueUpsertWithWhereUniqueWithoutEventsInput | ExternalEventVenueUpsertWithWhereUniqueWithoutEventsInput[]
    createMany?: ExternalEventVenueCreateManyEventsInputEnvelope
    set?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    disconnect?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    delete?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    connect?: ExternalEventVenueWhereUniqueInput | ExternalEventVenueWhereUniqueInput[]
    update?: ExternalEventVenueUpdateWithWhereUniqueWithoutEventsInput | ExternalEventVenueUpdateWithWhereUniqueWithoutEventsInput[]
    updateMany?: ExternalEventVenueUpdateManyWithWhereWithoutEventsInput | ExternalEventVenueUpdateManyWithWhereWithoutEventsInput[]
    deleteMany?: ExternalEventVenueScalarWhereInput | ExternalEventVenueScalarWhereInput[]
  }

  export type EventCreateNestedOneWithoutEvent_teachersInput = {
    create?: XOR<EventCreateWithoutEvent_teachersInput, EventUncheckedCreateWithoutEvent_teachersInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_teachersInput
    connect?: EventWhereUniqueInput
  }

  export type TeacherCreateNestedOneWithoutEvent_teachersInput = {
    create?: XOR<TeacherCreateWithoutEvent_teachersInput, TeacherUncheckedCreateWithoutEvent_teachersInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEvent_teachersInput
    connect?: TeacherWhereUniqueInput
  }

  export type EventUpdateOneRequiredWithoutEvent_teachersNestedInput = {
    create?: XOR<EventCreateWithoutEvent_teachersInput, EventUncheckedCreateWithoutEvent_teachersInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_teachersInput
    upsert?: EventUpsertWithoutEvent_teachersInput
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEvent_teachersInput, EventUpdateWithoutEvent_teachersInput>, EventUncheckedUpdateWithoutEvent_teachersInput>
  }

  export type TeacherUpdateOneRequiredWithoutEvent_teachersNestedInput = {
    create?: XOR<TeacherCreateWithoutEvent_teachersInput, TeacherUncheckedCreateWithoutEvent_teachersInput>
    connectOrCreate?: TeacherCreateOrConnectWithoutEvent_teachersInput
    upsert?: TeacherUpsertWithoutEvent_teachersInput
    connect?: TeacherWhereUniqueInput
    update?: XOR<XOR<TeacherUpdateToOneWithWhereWithoutEvent_teachersInput, TeacherUpdateWithoutEvent_teachersInput>, TeacherUncheckedUpdateWithoutEvent_teachersInput>
  }

  export type EventCreateNestedOneWithoutVenuesInput = {
    create?: XOR<EventCreateWithoutVenuesInput, EventUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: EventCreateOrConnectWithoutVenuesInput
    connect?: EventWhereUniqueInput
  }

  export type EventUpdateOneWithoutVenuesNestedInput = {
    create?: XOR<EventCreateWithoutVenuesInput, EventUncheckedCreateWithoutVenuesInput>
    connectOrCreate?: EventCreateOrConnectWithoutVenuesInput
    upsert?: EventUpsertWithoutVenuesInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutVenuesInput, EventUpdateWithoutVenuesInput>, EventUncheckedUpdateWithoutVenuesInput>
  }

  export type ExternalEventTeacherCreateNestedManyWithoutTeachersInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutTeachersInput, ExternalEventTeacherUncheckedCreateWithoutTeachersInput> | ExternalEventTeacherCreateWithoutTeachersInput[] | ExternalEventTeacherUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutTeachersInput | ExternalEventTeacherCreateOrConnectWithoutTeachersInput[]
    createMany?: ExternalEventTeacherCreateManyTeachersInputEnvelope
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
  }

  export type ExternalEventTeacherUncheckedCreateNestedManyWithoutTeachersInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutTeachersInput, ExternalEventTeacherUncheckedCreateWithoutTeachersInput> | ExternalEventTeacherCreateWithoutTeachersInput[] | ExternalEventTeacherUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutTeachersInput | ExternalEventTeacherCreateOrConnectWithoutTeachersInput[]
    createMany?: ExternalEventTeacherCreateManyTeachersInputEnvelope
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
  }

  export type ExternalEventTeacherUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutTeachersInput, ExternalEventTeacherUncheckedCreateWithoutTeachersInput> | ExternalEventTeacherCreateWithoutTeachersInput[] | ExternalEventTeacherUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutTeachersInput | ExternalEventTeacherCreateOrConnectWithoutTeachersInput[]
    upsert?: ExternalEventTeacherUpsertWithWhereUniqueWithoutTeachersInput | ExternalEventTeacherUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: ExternalEventTeacherCreateManyTeachersInputEnvelope
    set?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    disconnect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    delete?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    update?: ExternalEventTeacherUpdateWithWhereUniqueWithoutTeachersInput | ExternalEventTeacherUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: ExternalEventTeacherUpdateManyWithWhereWithoutTeachersInput | ExternalEventTeacherUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: ExternalEventTeacherScalarWhereInput | ExternalEventTeacherScalarWhereInput[]
  }

  export type ExternalEventTeacherUncheckedUpdateManyWithoutTeachersNestedInput = {
    create?: XOR<ExternalEventTeacherCreateWithoutTeachersInput, ExternalEventTeacherUncheckedCreateWithoutTeachersInput> | ExternalEventTeacherCreateWithoutTeachersInput[] | ExternalEventTeacherUncheckedCreateWithoutTeachersInput[]
    connectOrCreate?: ExternalEventTeacherCreateOrConnectWithoutTeachersInput | ExternalEventTeacherCreateOrConnectWithoutTeachersInput[]
    upsert?: ExternalEventTeacherUpsertWithWhereUniqueWithoutTeachersInput | ExternalEventTeacherUpsertWithWhereUniqueWithoutTeachersInput[]
    createMany?: ExternalEventTeacherCreateManyTeachersInputEnvelope
    set?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    disconnect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    delete?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    connect?: ExternalEventTeacherWhereUniqueInput | ExternalEventTeacherWhereUniqueInput[]
    update?: ExternalEventTeacherUpdateWithWhereUniqueWithoutTeachersInput | ExternalEventTeacherUpdateWithWhereUniqueWithoutTeachersInput[]
    updateMany?: ExternalEventTeacherUpdateManyWithWhereWithoutTeachersInput | ExternalEventTeacherUpdateManyWithWhereWithoutTeachersInput[]
    deleteMany?: ExternalEventTeacherScalarWhereInput | ExternalEventTeacherScalarWhereInput[]
  }

  export type MusicianCreateinstrumentsInput = {
    set: string[]
  }

  export type event_musiciansCreateNestedManyWithoutMusiciansInput = {
    create?: XOR<event_musiciansCreateWithoutMusiciansInput, event_musiciansUncheckedCreateWithoutMusiciansInput> | event_musiciansCreateWithoutMusiciansInput[] | event_musiciansUncheckedCreateWithoutMusiciansInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutMusiciansInput | event_musiciansCreateOrConnectWithoutMusiciansInput[]
    createMany?: event_musiciansCreateManyMusiciansInputEnvelope
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
  }

  export type event_musiciansUncheckedCreateNestedManyWithoutMusiciansInput = {
    create?: XOR<event_musiciansCreateWithoutMusiciansInput, event_musiciansUncheckedCreateWithoutMusiciansInput> | event_musiciansCreateWithoutMusiciansInput[] | event_musiciansUncheckedCreateWithoutMusiciansInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutMusiciansInput | event_musiciansCreateOrConnectWithoutMusiciansInput[]
    createMany?: event_musiciansCreateManyMusiciansInputEnvelope
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type MusicianUpdateinstrumentsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type event_musiciansUpdateManyWithoutMusiciansNestedInput = {
    create?: XOR<event_musiciansCreateWithoutMusiciansInput, event_musiciansUncheckedCreateWithoutMusiciansInput> | event_musiciansCreateWithoutMusiciansInput[] | event_musiciansUncheckedCreateWithoutMusiciansInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutMusiciansInput | event_musiciansCreateOrConnectWithoutMusiciansInput[]
    upsert?: event_musiciansUpsertWithWhereUniqueWithoutMusiciansInput | event_musiciansUpsertWithWhereUniqueWithoutMusiciansInput[]
    createMany?: event_musiciansCreateManyMusiciansInputEnvelope
    set?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    disconnect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    delete?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    update?: event_musiciansUpdateWithWhereUniqueWithoutMusiciansInput | event_musiciansUpdateWithWhereUniqueWithoutMusiciansInput[]
    updateMany?: event_musiciansUpdateManyWithWhereWithoutMusiciansInput | event_musiciansUpdateManyWithWhereWithoutMusiciansInput[]
    deleteMany?: event_musiciansScalarWhereInput | event_musiciansScalarWhereInput[]
  }

  export type event_musiciansUncheckedUpdateManyWithoutMusiciansNestedInput = {
    create?: XOR<event_musiciansCreateWithoutMusiciansInput, event_musiciansUncheckedCreateWithoutMusiciansInput> | event_musiciansCreateWithoutMusiciansInput[] | event_musiciansUncheckedCreateWithoutMusiciansInput[]
    connectOrCreate?: event_musiciansCreateOrConnectWithoutMusiciansInput | event_musiciansCreateOrConnectWithoutMusiciansInput[]
    upsert?: event_musiciansUpsertWithWhereUniqueWithoutMusiciansInput | event_musiciansUpsertWithWhereUniqueWithoutMusiciansInput[]
    createMany?: event_musiciansCreateManyMusiciansInputEnvelope
    set?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    disconnect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    delete?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    connect?: event_musiciansWhereUniqueInput | event_musiciansWhereUniqueInput[]
    update?: event_musiciansUpdateWithWhereUniqueWithoutMusiciansInput | event_musiciansUpdateWithWhereUniqueWithoutMusiciansInput[]
    updateMany?: event_musiciansUpdateManyWithWhereWithoutMusiciansInput | event_musiciansUpdateManyWithWhereWithoutMusiciansInput[]
    deleteMany?: event_musiciansScalarWhereInput | event_musiciansScalarWhereInput[]
  }

  export type event_musiciansCreateset_timesInput = {
    set: string[]
  }

  export type EventCreateNestedOneWithoutEvent_musiciansInput = {
    create?: XOR<EventCreateWithoutEvent_musiciansInput, EventUncheckedCreateWithoutEvent_musiciansInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_musiciansInput
    connect?: EventWhereUniqueInput
  }

  export type MusicianCreateNestedOneWithoutEvent_musiciansInput = {
    create?: XOR<MusicianCreateWithoutEvent_musiciansInput, MusicianUncheckedCreateWithoutEvent_musiciansInput>
    connectOrCreate?: MusicianCreateOrConnectWithoutEvent_musiciansInput
    connect?: MusicianWhereUniqueInput
  }

  export type event_musiciansUpdateset_timesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type EventUpdateOneWithoutEvent_musiciansNestedInput = {
    create?: XOR<EventCreateWithoutEvent_musiciansInput, EventUncheckedCreateWithoutEvent_musiciansInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_musiciansInput
    upsert?: EventUpsertWithoutEvent_musiciansInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEvent_musiciansInput, EventUpdateWithoutEvent_musiciansInput>, EventUncheckedUpdateWithoutEvent_musiciansInput>
  }

  export type MusicianUpdateOneWithoutEvent_musiciansNestedInput = {
    create?: XOR<MusicianCreateWithoutEvent_musiciansInput, MusicianUncheckedCreateWithoutEvent_musiciansInput>
    connectOrCreate?: MusicianCreateOrConnectWithoutEvent_musiciansInput
    upsert?: MusicianUpsertWithoutEvent_musiciansInput
    disconnect?: MusicianWhereInput | boolean
    delete?: MusicianWhereInput | boolean
    connect?: MusicianWhereUniqueInput
    update?: XOR<XOR<MusicianUpdateToOneWithWhereWithoutEvent_musiciansInput, MusicianUpdateWithoutEvent_musiciansInput>, MusicianUncheckedUpdateWithoutEvent_musiciansInput>
  }

  export type EventCreateNestedOneWithoutEvent_pricesInput = {
    create?: XOR<EventCreateWithoutEvent_pricesInput, EventUncheckedCreateWithoutEvent_pricesInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_pricesInput
    connect?: EventWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type EventUpdateOneWithoutEvent_pricesNestedInput = {
    create?: XOR<EventCreateWithoutEvent_pricesInput, EventUncheckedCreateWithoutEvent_pricesInput>
    connectOrCreate?: EventCreateOrConnectWithoutEvent_pricesInput
    upsert?: EventUpsertWithoutEvent_pricesInput
    disconnect?: EventWhereInput | boolean
    delete?: EventWhereInput | boolean
    connect?: EventWhereUniqueInput
    update?: XOR<XOR<EventUpdateToOneWithWhereWithoutEvent_pricesInput, EventUpdateWithoutEvent_pricesInput>, EventUncheckedUpdateWithoutEvent_pricesInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type event_musiciansCreateWithoutEventsInput = {
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
    musicians?: MusicianCreateNestedOneWithoutEvent_musiciansInput
  }

  export type event_musiciansUncheckedCreateWithoutEventsInput = {
    id?: number
    musician_id?: number | null
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
  }

  export type event_musiciansCreateOrConnectWithoutEventsInput = {
    where: event_musiciansWhereUniqueInput
    create: XOR<event_musiciansCreateWithoutEventsInput, event_musiciansUncheckedCreateWithoutEventsInput>
  }

  export type event_musiciansCreateManyEventsInputEnvelope = {
    data: event_musiciansCreateManyEventsInput | event_musiciansCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type event_pricesCreateWithoutEventsInput = {
    type: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string | null
    deadline?: Date | string | null
    description?: string | null
    available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type event_pricesUncheckedCreateWithoutEventsInput = {
    id?: number
    type: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string | null
    deadline?: Date | string | null
    description?: string | null
    available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type event_pricesCreateOrConnectWithoutEventsInput = {
    where: event_pricesWhereUniqueInput
    create: XOR<event_pricesCreateWithoutEventsInput, event_pricesUncheckedCreateWithoutEventsInput>
  }

  export type event_pricesCreateManyEventsInputEnvelope = {
    data: event_pricesCreateManyEventsInput | event_pricesCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type ExternalEventTeacherCreateWithoutEventsInput = {
    role?: string | null
    teachers: TeacherCreateNestedOneWithoutEvent_teachersInput
  }

  export type ExternalEventTeacherUncheckedCreateWithoutEventsInput = {
    teacher_id: number
    role?: string | null
  }

  export type ExternalEventTeacherCreateOrConnectWithoutEventsInput = {
    where: ExternalEventTeacherWhereUniqueInput
    create: XOR<ExternalEventTeacherCreateWithoutEventsInput, ExternalEventTeacherUncheckedCreateWithoutEventsInput>
  }

  export type ExternalEventTeacherCreateManyEventsInputEnvelope = {
    data: ExternalEventTeacherCreateManyEventsInput | ExternalEventTeacherCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type ExternalEventVenueCreateWithoutEventsInput = {
    name?: string | null
    address?: string | null
    type?: string | null
  }

  export type ExternalEventVenueUncheckedCreateWithoutEventsInput = {
    id?: number
    name?: string | null
    address?: string | null
    type?: string | null
  }

  export type ExternalEventVenueCreateOrConnectWithoutEventsInput = {
    where: ExternalEventVenueWhereUniqueInput
    create: XOR<ExternalEventVenueCreateWithoutEventsInput, ExternalEventVenueUncheckedCreateWithoutEventsInput>
  }

  export type ExternalEventVenueCreateManyEventsInputEnvelope = {
    data: ExternalEventVenueCreateManyEventsInput | ExternalEventVenueCreateManyEventsInput[]
    skipDuplicates?: boolean
  }

  export type event_musiciansUpsertWithWhereUniqueWithoutEventsInput = {
    where: event_musiciansWhereUniqueInput
    update: XOR<event_musiciansUpdateWithoutEventsInput, event_musiciansUncheckedUpdateWithoutEventsInput>
    create: XOR<event_musiciansCreateWithoutEventsInput, event_musiciansUncheckedCreateWithoutEventsInput>
  }

  export type event_musiciansUpdateWithWhereUniqueWithoutEventsInput = {
    where: event_musiciansWhereUniqueInput
    data: XOR<event_musiciansUpdateWithoutEventsInput, event_musiciansUncheckedUpdateWithoutEventsInput>
  }

  export type event_musiciansUpdateManyWithWhereWithoutEventsInput = {
    where: event_musiciansScalarWhereInput
    data: XOR<event_musiciansUpdateManyMutationInput, event_musiciansUncheckedUpdateManyWithoutEventsInput>
  }

  export type event_musiciansScalarWhereInput = {
    AND?: event_musiciansScalarWhereInput | event_musiciansScalarWhereInput[]
    OR?: event_musiciansScalarWhereInput[]
    NOT?: event_musiciansScalarWhereInput | event_musiciansScalarWhereInput[]
    id?: IntFilter<"event_musicians"> | number
    event_id?: IntNullableFilter<"event_musicians"> | number | null
    musician_id?: IntNullableFilter<"event_musicians"> | number | null
    role?: StringNullableFilter<"event_musicians"> | string | null
    set_times?: StringNullableListFilter<"event_musicians">
    created_at?: DateTimeNullableFilter<"event_musicians"> | Date | string | null
  }

  export type event_pricesUpsertWithWhereUniqueWithoutEventsInput = {
    where: event_pricesWhereUniqueInput
    update: XOR<event_pricesUpdateWithoutEventsInput, event_pricesUncheckedUpdateWithoutEventsInput>
    create: XOR<event_pricesCreateWithoutEventsInput, event_pricesUncheckedCreateWithoutEventsInput>
  }

  export type event_pricesUpdateWithWhereUniqueWithoutEventsInput = {
    where: event_pricesWhereUniqueInput
    data: XOR<event_pricesUpdateWithoutEventsInput, event_pricesUncheckedUpdateWithoutEventsInput>
  }

  export type event_pricesUpdateManyWithWhereWithoutEventsInput = {
    where: event_pricesScalarWhereInput
    data: XOR<event_pricesUpdateManyMutationInput, event_pricesUncheckedUpdateManyWithoutEventsInput>
  }

  export type event_pricesScalarWhereInput = {
    AND?: event_pricesScalarWhereInput | event_pricesScalarWhereInput[]
    OR?: event_pricesScalarWhereInput[]
    NOT?: event_pricesScalarWhereInput | event_pricesScalarWhereInput[]
    id?: IntFilter<"event_prices"> | number
    event_id?: IntNullableFilter<"event_prices"> | number | null
    type?: StringFilter<"event_prices"> | string
    amount?: DecimalFilter<"event_prices"> | Decimal | DecimalJsLike | number | string
    currency?: StringNullableFilter<"event_prices"> | string | null
    deadline?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    description?: StringNullableFilter<"event_prices"> | string | null
    available?: BoolNullableFilter<"event_prices"> | boolean | null
    created_at?: DateTimeNullableFilter<"event_prices"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"event_prices"> | Date | string | null
  }

  export type ExternalEventTeacherUpsertWithWhereUniqueWithoutEventsInput = {
    where: ExternalEventTeacherWhereUniqueInput
    update: XOR<ExternalEventTeacherUpdateWithoutEventsInput, ExternalEventTeacherUncheckedUpdateWithoutEventsInput>
    create: XOR<ExternalEventTeacherCreateWithoutEventsInput, ExternalEventTeacherUncheckedCreateWithoutEventsInput>
  }

  export type ExternalEventTeacherUpdateWithWhereUniqueWithoutEventsInput = {
    where: ExternalEventTeacherWhereUniqueInput
    data: XOR<ExternalEventTeacherUpdateWithoutEventsInput, ExternalEventTeacherUncheckedUpdateWithoutEventsInput>
  }

  export type ExternalEventTeacherUpdateManyWithWhereWithoutEventsInput = {
    where: ExternalEventTeacherScalarWhereInput
    data: XOR<ExternalEventTeacherUpdateManyMutationInput, ExternalEventTeacherUncheckedUpdateManyWithoutEventsInput>
  }

  export type ExternalEventTeacherScalarWhereInput = {
    AND?: ExternalEventTeacherScalarWhereInput | ExternalEventTeacherScalarWhereInput[]
    OR?: ExternalEventTeacherScalarWhereInput[]
    NOT?: ExternalEventTeacherScalarWhereInput | ExternalEventTeacherScalarWhereInput[]
    event_id?: IntFilter<"ExternalEventTeacher"> | number
    teacher_id?: IntFilter<"ExternalEventTeacher"> | number
    role?: StringNullableFilter<"ExternalEventTeacher"> | string | null
  }

  export type ExternalEventVenueUpsertWithWhereUniqueWithoutEventsInput = {
    where: ExternalEventVenueWhereUniqueInput
    update: XOR<ExternalEventVenueUpdateWithoutEventsInput, ExternalEventVenueUncheckedUpdateWithoutEventsInput>
    create: XOR<ExternalEventVenueCreateWithoutEventsInput, ExternalEventVenueUncheckedCreateWithoutEventsInput>
  }

  export type ExternalEventVenueUpdateWithWhereUniqueWithoutEventsInput = {
    where: ExternalEventVenueWhereUniqueInput
    data: XOR<ExternalEventVenueUpdateWithoutEventsInput, ExternalEventVenueUncheckedUpdateWithoutEventsInput>
  }

  export type ExternalEventVenueUpdateManyWithWhereWithoutEventsInput = {
    where: ExternalEventVenueScalarWhereInput
    data: XOR<ExternalEventVenueUpdateManyMutationInput, ExternalEventVenueUncheckedUpdateManyWithoutEventsInput>
  }

  export type ExternalEventVenueScalarWhereInput = {
    AND?: ExternalEventVenueScalarWhereInput | ExternalEventVenueScalarWhereInput[]
    OR?: ExternalEventVenueScalarWhereInput[]
    NOT?: ExternalEventVenueScalarWhereInput | ExternalEventVenueScalarWhereInput[]
    id?: IntFilter<"ExternalEventVenue"> | number
    event_id?: IntNullableFilter<"ExternalEventVenue"> | number | null
    name?: StringNullableFilter<"ExternalEventVenue"> | string | null
    address?: StringNullableFilter<"ExternalEventVenue"> | string | null
    type?: StringNullableFilter<"ExternalEventVenue"> | string | null
  }

  export type EventCreateWithoutEvent_teachersInput = {
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansCreateNestedManyWithoutEventsInput
    event_prices?: event_pricesCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutEvent_teachersInput = {
    id?: number
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansUncheckedCreateNestedManyWithoutEventsInput
    event_prices?: event_pricesUncheckedCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutEvent_teachersInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_teachersInput, EventUncheckedCreateWithoutEvent_teachersInput>
  }

  export type TeacherCreateWithoutEvent_teachersInput = {
    name: string
    bio?: string | null
    website?: string | null
    ai_bio_summary?: string | null
    ai_relevance_score?: number | null
    image_url?: string | null
  }

  export type TeacherUncheckedCreateWithoutEvent_teachersInput = {
    id?: number
    name: string
    bio?: string | null
    website?: string | null
    ai_bio_summary?: string | null
    ai_relevance_score?: number | null
    image_url?: string | null
  }

  export type TeacherCreateOrConnectWithoutEvent_teachersInput = {
    where: TeacherWhereUniqueInput
    create: XOR<TeacherCreateWithoutEvent_teachersInput, TeacherUncheckedCreateWithoutEvent_teachersInput>
  }

  export type EventUpsertWithoutEvent_teachersInput = {
    update: XOR<EventUpdateWithoutEvent_teachersInput, EventUncheckedUpdateWithoutEvent_teachersInput>
    create: XOR<EventCreateWithoutEvent_teachersInput, EventUncheckedCreateWithoutEvent_teachersInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEvent_teachersInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEvent_teachersInput, EventUncheckedUpdateWithoutEvent_teachersInput>
  }

  export type EventUpdateWithoutEvent_teachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUpdateManyWithoutEventsNestedInput
    event_prices?: event_pricesUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_teachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUncheckedUpdateManyWithoutEventsNestedInput
    event_prices?: event_pricesUncheckedUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type TeacherUpsertWithoutEvent_teachersInput = {
    update: XOR<TeacherUpdateWithoutEvent_teachersInput, TeacherUncheckedUpdateWithoutEvent_teachersInput>
    create: XOR<TeacherCreateWithoutEvent_teachersInput, TeacherUncheckedCreateWithoutEvent_teachersInput>
    where?: TeacherWhereInput
  }

  export type TeacherUpdateToOneWithWhereWithoutEvent_teachersInput = {
    where?: TeacherWhereInput
    data: XOR<TeacherUpdateWithoutEvent_teachersInput, TeacherUncheckedUpdateWithoutEvent_teachersInput>
  }

  export type TeacherUpdateWithoutEvent_teachersInput = {
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ai_bio_summary?: NullableStringFieldUpdateOperationsInput | string | null
    ai_relevance_score?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TeacherUncheckedUpdateWithoutEvent_teachersInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    ai_bio_summary?: NullableStringFieldUpdateOperationsInput | string | null
    ai_relevance_score?: NullableIntFieldUpdateOperationsInput | number | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateWithoutVenuesInput = {
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansCreateNestedManyWithoutEventsInput
    event_prices?: event_pricesCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutVenuesInput = {
    id?: number
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansUncheckedCreateNestedManyWithoutEventsInput
    event_prices?: event_pricesUncheckedCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutVenuesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutVenuesInput, EventUncheckedCreateWithoutVenuesInput>
  }

  export type EventUpsertWithoutVenuesInput = {
    update: XOR<EventUpdateWithoutVenuesInput, EventUncheckedUpdateWithoutVenuesInput>
    create: XOR<EventCreateWithoutVenuesInput, EventUncheckedCreateWithoutVenuesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutVenuesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutVenuesInput, EventUncheckedUpdateWithoutVenuesInput>
  }

  export type EventUpdateWithoutVenuesInput = {
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUpdateManyWithoutEventsNestedInput
    event_prices?: event_pricesUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutVenuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUncheckedUpdateManyWithoutEventsNestedInput
    event_prices?: event_pricesUncheckedUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type ExternalEventTeacherCreateWithoutTeachersInput = {
    role?: string | null
    events: EventCreateNestedOneWithoutEvent_teachersInput
  }

  export type ExternalEventTeacherUncheckedCreateWithoutTeachersInput = {
    event_id: number
    role?: string | null
  }

  export type ExternalEventTeacherCreateOrConnectWithoutTeachersInput = {
    where: ExternalEventTeacherWhereUniqueInput
    create: XOR<ExternalEventTeacherCreateWithoutTeachersInput, ExternalEventTeacherUncheckedCreateWithoutTeachersInput>
  }

  export type ExternalEventTeacherCreateManyTeachersInputEnvelope = {
    data: ExternalEventTeacherCreateManyTeachersInput | ExternalEventTeacherCreateManyTeachersInput[]
    skipDuplicates?: boolean
  }

  export type ExternalEventTeacherUpsertWithWhereUniqueWithoutTeachersInput = {
    where: ExternalEventTeacherWhereUniqueInput
    update: XOR<ExternalEventTeacherUpdateWithoutTeachersInput, ExternalEventTeacherUncheckedUpdateWithoutTeachersInput>
    create: XOR<ExternalEventTeacherCreateWithoutTeachersInput, ExternalEventTeacherUncheckedCreateWithoutTeachersInput>
  }

  export type ExternalEventTeacherUpdateWithWhereUniqueWithoutTeachersInput = {
    where: ExternalEventTeacherWhereUniqueInput
    data: XOR<ExternalEventTeacherUpdateWithoutTeachersInput, ExternalEventTeacherUncheckedUpdateWithoutTeachersInput>
  }

  export type ExternalEventTeacherUpdateManyWithWhereWithoutTeachersInput = {
    where: ExternalEventTeacherScalarWhereInput
    data: XOR<ExternalEventTeacherUpdateManyMutationInput, ExternalEventTeacherUncheckedUpdateManyWithoutTeachersInput>
  }

  export type event_musiciansCreateWithoutMusiciansInput = {
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
    events?: EventCreateNestedOneWithoutEvent_musiciansInput
  }

  export type event_musiciansUncheckedCreateWithoutMusiciansInput = {
    id?: number
    event_id?: number | null
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
  }

  export type event_musiciansCreateOrConnectWithoutMusiciansInput = {
    where: event_musiciansWhereUniqueInput
    create: XOR<event_musiciansCreateWithoutMusiciansInput, event_musiciansUncheckedCreateWithoutMusiciansInput>
  }

  export type event_musiciansCreateManyMusiciansInputEnvelope = {
    data: event_musiciansCreateManyMusiciansInput | event_musiciansCreateManyMusiciansInput[]
    skipDuplicates?: boolean
  }

  export type event_musiciansUpsertWithWhereUniqueWithoutMusiciansInput = {
    where: event_musiciansWhereUniqueInput
    update: XOR<event_musiciansUpdateWithoutMusiciansInput, event_musiciansUncheckedUpdateWithoutMusiciansInput>
    create: XOR<event_musiciansCreateWithoutMusiciansInput, event_musiciansUncheckedCreateWithoutMusiciansInput>
  }

  export type event_musiciansUpdateWithWhereUniqueWithoutMusiciansInput = {
    where: event_musiciansWhereUniqueInput
    data: XOR<event_musiciansUpdateWithoutMusiciansInput, event_musiciansUncheckedUpdateWithoutMusiciansInput>
  }

  export type event_musiciansUpdateManyWithWhereWithoutMusiciansInput = {
    where: event_musiciansScalarWhereInput
    data: XOR<event_musiciansUpdateManyMutationInput, event_musiciansUncheckedUpdateManyWithoutMusiciansInput>
  }

  export type EventCreateWithoutEvent_musiciansInput = {
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_prices?: event_pricesCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutEvent_musiciansInput = {
    id?: number
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_prices?: event_pricesUncheckedCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherUncheckedCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutEvent_musiciansInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_musiciansInput, EventUncheckedCreateWithoutEvent_musiciansInput>
  }

  export type MusicianCreateWithoutEvent_musiciansInput = {
    name: string
    slug: string
    bio?: string | null
    avatar?: string | null
    verified?: boolean | null
    instruments?: MusicianCreateinstrumentsInput | string[]
    yearsActive?: number | null
    website?: string | null
    email?: string | null
    followerCount?: number | null
    eventCount?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    image_url?: string | null
  }

  export type MusicianUncheckedCreateWithoutEvent_musiciansInput = {
    id?: number
    name: string
    slug: string
    bio?: string | null
    avatar?: string | null
    verified?: boolean | null
    instruments?: MusicianCreateinstrumentsInput | string[]
    yearsActive?: number | null
    website?: string | null
    email?: string | null
    followerCount?: number | null
    eventCount?: number | null
    createdAt?: Date | string | null
    updatedAt?: Date | string | null
    image_url?: string | null
  }

  export type MusicianCreateOrConnectWithoutEvent_musiciansInput = {
    where: MusicianWhereUniqueInput
    create: XOR<MusicianCreateWithoutEvent_musiciansInput, MusicianUncheckedCreateWithoutEvent_musiciansInput>
  }

  export type EventUpsertWithoutEvent_musiciansInput = {
    update: XOR<EventUpdateWithoutEvent_musiciansInput, EventUncheckedUpdateWithoutEvent_musiciansInput>
    create: XOR<EventCreateWithoutEvent_musiciansInput, EventUncheckedCreateWithoutEvent_musiciansInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEvent_musiciansInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEvent_musiciansInput, EventUncheckedUpdateWithoutEvent_musiciansInput>
  }

  export type EventUpdateWithoutEvent_musiciansInput = {
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_prices?: event_pricesUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_musiciansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_prices?: event_pricesUncheckedUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUncheckedUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type MusicianUpsertWithoutEvent_musiciansInput = {
    update: XOR<MusicianUpdateWithoutEvent_musiciansInput, MusicianUncheckedUpdateWithoutEvent_musiciansInput>
    create: XOR<MusicianCreateWithoutEvent_musiciansInput, MusicianUncheckedCreateWithoutEvent_musiciansInput>
    where?: MusicianWhereInput
  }

  export type MusicianUpdateToOneWithWhereWithoutEvent_musiciansInput = {
    where?: MusicianWhereInput
    data: XOR<MusicianUpdateWithoutEvent_musiciansInput, MusicianUncheckedUpdateWithoutEvent_musiciansInput>
  }

  export type MusicianUpdateWithoutEvent_musiciansInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    instruments?: MusicianUpdateinstrumentsInput | string[]
    yearsActive?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableIntFieldUpdateOperationsInput | number | null
    eventCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MusicianUncheckedUpdateWithoutEvent_musiciansInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: NullableBoolFieldUpdateOperationsInput | boolean | null
    instruments?: MusicianUpdateinstrumentsInput | string[]
    yearsActive?: NullableIntFieldUpdateOperationsInput | number | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    followerCount?: NullableIntFieldUpdateOperationsInput | number | null
    eventCount?: NullableIntFieldUpdateOperationsInput | number | null
    createdAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type EventCreateWithoutEvent_pricesInput = {
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueCreateNestedManyWithoutEventsInput
  }

  export type EventUncheckedCreateWithoutEvent_pricesInput = {
    id?: number
    name: string
    from_date: Date | string
    to_date: Date | string
    country: string
    city: string
    website?: string | null
    style?: string | null
    description?: string | null
    ai_quality_score?: number | null
    ai_completeness_score?: number | null
    extraction_method?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    image_url?: string | null
    event_musicians?: event_musiciansUncheckedCreateNestedManyWithoutEventsInput
    event_teachers?: ExternalEventTeacherUncheckedCreateNestedManyWithoutEventsInput
    venues?: ExternalEventVenueUncheckedCreateNestedManyWithoutEventsInput
  }

  export type EventCreateOrConnectWithoutEvent_pricesInput = {
    where: EventWhereUniqueInput
    create: XOR<EventCreateWithoutEvent_pricesInput, EventUncheckedCreateWithoutEvent_pricesInput>
  }

  export type EventUpsertWithoutEvent_pricesInput = {
    update: XOR<EventUpdateWithoutEvent_pricesInput, EventUncheckedUpdateWithoutEvent_pricesInput>
    create: XOR<EventCreateWithoutEvent_pricesInput, EventUncheckedCreateWithoutEvent_pricesInput>
    where?: EventWhereInput
  }

  export type EventUpdateToOneWithWhereWithoutEvent_pricesInput = {
    where?: EventWhereInput
    data: XOR<EventUpdateWithoutEvent_pricesInput, EventUncheckedUpdateWithoutEvent_pricesInput>
  }

  export type EventUpdateWithoutEvent_pricesInput = {
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUpdateManyWithoutEventsNestedInput
  }

  export type EventUncheckedUpdateWithoutEvent_pricesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    from_date?: DateTimeFieldUpdateOperationsInput | Date | string
    to_date?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    website?: NullableStringFieldUpdateOperationsInput | string | null
    style?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    ai_quality_score?: NullableIntFieldUpdateOperationsInput | number | null
    ai_completeness_score?: NullableIntFieldUpdateOperationsInput | number | null
    extraction_method?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image_url?: NullableStringFieldUpdateOperationsInput | string | null
    event_musicians?: event_musiciansUncheckedUpdateManyWithoutEventsNestedInput
    event_teachers?: ExternalEventTeacherUncheckedUpdateManyWithoutEventsNestedInput
    venues?: ExternalEventVenueUncheckedUpdateManyWithoutEventsNestedInput
  }

  export type event_musiciansCreateManyEventsInput = {
    id?: number
    musician_id?: number | null
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
  }

  export type event_pricesCreateManyEventsInput = {
    id?: number
    type: string
    amount: Decimal | DecimalJsLike | number | string
    currency?: string | null
    deadline?: Date | string | null
    description?: string | null
    available?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ExternalEventTeacherCreateManyEventsInput = {
    teacher_id: number
    role?: string | null
  }

  export type ExternalEventVenueCreateManyEventsInput = {
    id?: number
    name?: string | null
    address?: string | null
    type?: string | null
  }

  export type event_musiciansUpdateWithoutEventsInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    musicians?: MusicianUpdateOneWithoutEvent_musiciansNestedInput
  }

  export type event_musiciansUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    musician_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_musiciansUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    musician_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_pricesUpdateWithoutEventsInput = {
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_pricesUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_pricesUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    type?: StringFieldUpdateOperationsInput | string
    amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    currency?: NullableStringFieldUpdateOperationsInput | string | null
    deadline?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    available?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ExternalEventTeacherUpdateWithoutEventsInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    teachers?: TeacherUpdateOneRequiredWithoutEvent_teachersNestedInput
  }

  export type ExternalEventTeacherUncheckedUpdateWithoutEventsInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventTeacherUncheckedUpdateManyWithoutEventsInput = {
    teacher_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventVenueUpdateWithoutEventsInput = {
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventVenueUncheckedUpdateWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventVenueUncheckedUpdateManyWithoutEventsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    type?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventTeacherCreateManyTeachersInput = {
    event_id: number
    role?: string | null
  }

  export type ExternalEventTeacherUpdateWithoutTeachersInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    events?: EventUpdateOneRequiredWithoutEvent_teachersNestedInput
  }

  export type ExternalEventTeacherUncheckedUpdateWithoutTeachersInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ExternalEventTeacherUncheckedUpdateManyWithoutTeachersInput = {
    event_id?: IntFieldUpdateOperationsInput | number
    role?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type event_musiciansCreateManyMusiciansInput = {
    id?: number
    event_id?: number | null
    role?: string | null
    set_times?: event_musiciansCreateset_timesInput | string[]
    created_at?: Date | string | null
  }

  export type event_musiciansUpdateWithoutMusiciansInput = {
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    events?: EventUpdateOneWithoutEvent_musiciansNestedInput
  }

  export type event_musiciansUncheckedUpdateWithoutMusiciansInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type event_musiciansUncheckedUpdateManyWithoutMusiciansInput = {
    id?: IntFieldUpdateOperationsInput | number
    event_id?: NullableIntFieldUpdateOperationsInput | number | null
    role?: NullableStringFieldUpdateOperationsInput | string | null
    set_times?: event_musiciansUpdateset_timesInput | string[]
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use EventCountOutputTypeDefaultArgs instead
     */
    export type EventCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherCountOutputTypeDefaultArgs instead
     */
    export type TeacherCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MusicianCountOutputTypeDefaultArgs instead
     */
    export type MusicianCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MusicianCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use EventDefaultArgs instead
     */
    export type EventArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = EventDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalEventTeacherDefaultArgs instead
     */
    export type ExternalEventTeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalEventTeacherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ExternalEventVenueDefaultArgs instead
     */
    export type ExternalEventVenueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ExternalEventVenueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TeacherDefaultArgs instead
     */
    export type TeacherArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TeacherDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MusicianDefaultArgs instead
     */
    export type MusicianArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = MusicianDefaultArgs<ExtArgs>
    /**
     * @deprecated Use event_musiciansDefaultArgs instead
     */
    export type event_musiciansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = event_musiciansDefaultArgs<ExtArgs>
    /**
     * @deprecated Use event_pricesDefaultArgs instead
     */
    export type event_pricesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = event_pricesDefaultArgs<ExtArgs>
    /**
     * @deprecated Use social_mediaDefaultArgs instead
     */
    export type social_mediaArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = social_mediaDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}