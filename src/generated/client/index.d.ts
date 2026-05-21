
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Hero
 * 
 */
export type Hero = $Result.DefaultSelection<Prisma.$HeroPayload>
/**
 * Model About
 * 
 */
export type About = $Result.DefaultSelection<Prisma.$AboutPayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model Experience
 * 
 */
export type Experience = $Result.DefaultSelection<Prisma.$ExperiencePayload>
/**
 * Model Social
 * 
 */
export type Social = $Result.DefaultSelection<Prisma.$SocialPayload>
/**
 * Model Contact
 * 
 */
export type Contact = $Result.DefaultSelection<Prisma.$ContactPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>
/**
 * Model Certificate
 * 
 */
export type Certificate = $Result.DefaultSelection<Prisma.$CertificatePayload>
/**
 * Model PageView
 * 
 */
export type PageView = $Result.DefaultSelection<Prisma.$PageViewPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  ADMIN: 'ADMIN',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type Role = (typeof Role)[keyof typeof Role]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.hero`: Exposes CRUD operations for the **Hero** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Heroes
    * const heroes = await prisma.hero.findMany()
    * ```
    */
  get hero(): Prisma.HeroDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.about`: Exposes CRUD operations for the **About** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Abouts
    * const abouts = await prisma.about.findMany()
    * ```
    */
  get about(): Prisma.AboutDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.experience`: Exposes CRUD operations for the **Experience** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Experiences
    * const experiences = await prisma.experience.findMany()
    * ```
    */
  get experience(): Prisma.ExperienceDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.social`: Exposes CRUD operations for the **Social** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Socials
    * const socials = await prisma.social.findMany()
    * ```
    */
  get social(): Prisma.SocialDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contact`: Exposes CRUD operations for the **Contact** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contacts
    * const contacts = await prisma.contact.findMany()
    * ```
    */
  get contact(): Prisma.ContactDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.certificate`: Exposes CRUD operations for the **Certificate** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Certificates
    * const certificates = await prisma.certificate.findMany()
    * ```
    */
  get certificate(): Prisma.CertificateDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.pageView`: Exposes CRUD operations for the **PageView** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PageViews
    * const pageViews = await prisma.pageView.findMany()
    * ```
    */
  get pageView(): Prisma.PageViewDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    User: 'User',
    Hero: 'Hero',
    About: 'About',
    Skill: 'Skill',
    Project: 'Project',
    Experience: 'Experience',
    Social: 'Social',
    Contact: 'Contact',
    Message: 'Message',
    Certificate: 'Certificate',
    PageView: 'PageView'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "hero" | "about" | "skill" | "project" | "experience" | "social" | "contact" | "message" | "certificate" | "pageView"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Hero: {
        payload: Prisma.$HeroPayload<ExtArgs>
        fields: Prisma.HeroFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HeroFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HeroFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findFirst: {
            args: Prisma.HeroFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HeroFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          findMany: {
            args: Prisma.HeroFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          create: {
            args: Prisma.HeroCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          createMany: {
            args: Prisma.HeroCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.HeroCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          delete: {
            args: Prisma.HeroDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          update: {
            args: Prisma.HeroUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          deleteMany: {
            args: Prisma.HeroDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HeroUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.HeroUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>[]
          }
          upsert: {
            args: Prisma.HeroUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HeroPayload>
          }
          aggregate: {
            args: Prisma.HeroAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHero>
          }
          groupBy: {
            args: Prisma.HeroGroupByArgs<ExtArgs>
            result: $Utils.Optional<HeroGroupByOutputType>[]
          }
          count: {
            args: Prisma.HeroCountArgs<ExtArgs>
            result: $Utils.Optional<HeroCountAggregateOutputType> | number
          }
        }
      }
      About: {
        payload: Prisma.$AboutPayload<ExtArgs>
        fields: Prisma.AboutFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AboutFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AboutFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          findFirst: {
            args: Prisma.AboutFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AboutFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          findMany: {
            args: Prisma.AboutFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          create: {
            args: Prisma.AboutCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          createMany: {
            args: Prisma.AboutCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AboutCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          delete: {
            args: Prisma.AboutDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          update: {
            args: Prisma.AboutUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          deleteMany: {
            args: Prisma.AboutDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AboutUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AboutUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>[]
          }
          upsert: {
            args: Prisma.AboutUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AboutPayload>
          }
          aggregate: {
            args: Prisma.AboutAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAbout>
          }
          groupBy: {
            args: Prisma.AboutGroupByArgs<ExtArgs>
            result: $Utils.Optional<AboutGroupByOutputType>[]
          }
          count: {
            args: Prisma.AboutCountArgs<ExtArgs>
            result: $Utils.Optional<AboutCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      Experience: {
        payload: Prisma.$ExperiencePayload<ExtArgs>
        fields: Prisma.ExperienceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExperienceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExperienceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findFirst: {
            args: Prisma.ExperienceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExperienceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          findMany: {
            args: Prisma.ExperienceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          create: {
            args: Prisma.ExperienceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          createMany: {
            args: Prisma.ExperienceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExperienceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          delete: {
            args: Prisma.ExperienceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          update: {
            args: Prisma.ExperienceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          deleteMany: {
            args: Prisma.ExperienceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExperienceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExperienceUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>[]
          }
          upsert: {
            args: Prisma.ExperienceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExperiencePayload>
          }
          aggregate: {
            args: Prisma.ExperienceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExperience>
          }
          groupBy: {
            args: Prisma.ExperienceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExperienceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExperienceCountArgs<ExtArgs>
            result: $Utils.Optional<ExperienceCountAggregateOutputType> | number
          }
        }
      }
      Social: {
        payload: Prisma.$SocialPayload<ExtArgs>
        fields: Prisma.SocialFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SocialFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SocialFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findFirst: {
            args: Prisma.SocialFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SocialFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          findMany: {
            args: Prisma.SocialFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          create: {
            args: Prisma.SocialCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          createMany: {
            args: Prisma.SocialCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SocialCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          delete: {
            args: Prisma.SocialDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          update: {
            args: Prisma.SocialUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          deleteMany: {
            args: Prisma.SocialDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SocialUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SocialUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>[]
          }
          upsert: {
            args: Prisma.SocialUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SocialPayload>
          }
          aggregate: {
            args: Prisma.SocialAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSocial>
          }
          groupBy: {
            args: Prisma.SocialGroupByArgs<ExtArgs>
            result: $Utils.Optional<SocialGroupByOutputType>[]
          }
          count: {
            args: Prisma.SocialCountArgs<ExtArgs>
            result: $Utils.Optional<SocialCountAggregateOutputType> | number
          }
        }
      }
      Contact: {
        payload: Prisma.$ContactPayload<ExtArgs>
        fields: Prisma.ContactFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContactFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContactFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findFirst: {
            args: Prisma.ContactFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContactFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          findMany: {
            args: Prisma.ContactFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          create: {
            args: Prisma.ContactCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          createMany: {
            args: Prisma.ContactCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContactCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          delete: {
            args: Prisma.ContactDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          update: {
            args: Prisma.ContactUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          deleteMany: {
            args: Prisma.ContactDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContactUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContactUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>[]
          }
          upsert: {
            args: Prisma.ContactUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContactPayload>
          }
          aggregate: {
            args: Prisma.ContactAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContact>
          }
          groupBy: {
            args: Prisma.ContactGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContactGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContactCountArgs<ExtArgs>
            result: $Utils.Optional<ContactCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
      Certificate: {
        payload: Prisma.$CertificatePayload<ExtArgs>
        fields: Prisma.CertificateFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CertificateFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CertificateFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findFirst: {
            args: Prisma.CertificateFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CertificateFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          findMany: {
            args: Prisma.CertificateFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          create: {
            args: Prisma.CertificateCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          createMany: {
            args: Prisma.CertificateCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CertificateCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          delete: {
            args: Prisma.CertificateDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          update: {
            args: Prisma.CertificateUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          deleteMany: {
            args: Prisma.CertificateDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CertificateUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CertificateUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>[]
          }
          upsert: {
            args: Prisma.CertificateUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CertificatePayload>
          }
          aggregate: {
            args: Prisma.CertificateAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCertificate>
          }
          groupBy: {
            args: Prisma.CertificateGroupByArgs<ExtArgs>
            result: $Utils.Optional<CertificateGroupByOutputType>[]
          }
          count: {
            args: Prisma.CertificateCountArgs<ExtArgs>
            result: $Utils.Optional<CertificateCountAggregateOutputType> | number
          }
        }
      }
      PageView: {
        payload: Prisma.$PageViewPayload<ExtArgs>
        fields: Prisma.PageViewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PageViewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PageViewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          findFirst: {
            args: Prisma.PageViewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PageViewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          findMany: {
            args: Prisma.PageViewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          create: {
            args: Prisma.PageViewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          createMany: {
            args: Prisma.PageViewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PageViewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          delete: {
            args: Prisma.PageViewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          update: {
            args: Prisma.PageViewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          deleteMany: {
            args: Prisma.PageViewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PageViewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PageViewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>[]
          }
          upsert: {
            args: Prisma.PageViewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PageViewPayload>
          }
          aggregate: {
            args: Prisma.PageViewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePageView>
          }
          groupBy: {
            args: Prisma.PageViewGroupByArgs<ExtArgs>
            result: $Utils.Optional<PageViewGroupByOutputType>[]
          }
          count: {
            args: Prisma.PageViewCountArgs<ExtArgs>
            result: $Utils.Optional<PageViewCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    hero?: HeroOmit
    about?: AboutOmit
    skill?: SkillOmit
    project?: ProjectOmit
    experience?: ExperienceOmit
    social?: SocialOmit
    contact?: ContactOmit
    message?: MessageOmit
    certificate?: CertificateOmit
    pageView?: PageViewOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    role: $Enums.Role | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    name: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    name: string | null
    role: $Enums.Role
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password" | "name" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string | null
      role: $Enums.Role
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Hero
   */

  export type AggregateHero = {
    _count: HeroCountAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  export type HeroMinAggregateOutputType = {
    id: string | null
    title_en: string | null
    title_id: string | null
    subtitle_en: string | null
    subtitle_id: string | null
    cta_en: string | null
    cta_id: string | null
    badge_en: string | null
    badge_id: string | null
    image: string | null
    cv_url: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroMaxAggregateOutputType = {
    id: string | null
    title_en: string | null
    title_id: string | null
    subtitle_en: string | null
    subtitle_id: string | null
    cta_en: string | null
    cta_id: string | null
    badge_en: string | null
    badge_id: string | null
    image: string | null
    cv_url: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HeroCountAggregateOutputType = {
    id: number
    title_en: number
    title_id: number
    subtitle_en: number
    subtitle_id: number
    cta_en: number
    cta_id: number
    badge_en: number
    badge_id: number
    image: number
    cv_url: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HeroMinAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    subtitle_en?: true
    subtitle_id?: true
    cta_en?: true
    cta_id?: true
    badge_en?: true
    badge_id?: true
    image?: true
    cv_url?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroMaxAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    subtitle_en?: true
    subtitle_id?: true
    cta_en?: true
    cta_id?: true
    badge_en?: true
    badge_id?: true
    image?: true
    cv_url?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HeroCountAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    subtitle_en?: true
    subtitle_id?: true
    cta_en?: true
    cta_id?: true
    badge_en?: true
    badge_id?: true
    image?: true
    cv_url?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HeroAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Hero to aggregate.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Heroes
    **/
    _count?: true | HeroCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HeroMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HeroMaxAggregateInputType
  }

  export type GetHeroAggregateType<T extends HeroAggregateArgs> = {
        [P in keyof T & keyof AggregateHero]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHero[P]>
      : GetScalarType<T[P], AggregateHero[P]>
  }




  export type HeroGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HeroWhereInput
    orderBy?: HeroOrderByWithAggregationInput | HeroOrderByWithAggregationInput[]
    by: HeroScalarFieldEnum[] | HeroScalarFieldEnum
    having?: HeroScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HeroCountAggregateInputType | true
    _min?: HeroMinAggregateInputType
    _max?: HeroMaxAggregateInputType
  }

  export type HeroGroupByOutputType = {
    id: string
    title_en: string
    title_id: string
    subtitle_en: string
    subtitle_id: string
    cta_en: string
    cta_id: string
    badge_en: string
    badge_id: string
    image: string | null
    cv_url: string | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: HeroCountAggregateOutputType | null
    _min: HeroMinAggregateOutputType | null
    _max: HeroMaxAggregateOutputType | null
  }

  type GetHeroGroupByPayload<T extends HeroGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HeroGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HeroGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HeroGroupByOutputType[P]>
            : GetScalarType<T[P], HeroGroupByOutputType[P]>
        }
      >
    >


  export type HeroSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    subtitle_en?: boolean
    subtitle_id?: boolean
    cta_en?: boolean
    cta_id?: boolean
    badge_en?: boolean
    badge_id?: boolean
    image?: boolean
    cv_url?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    subtitle_en?: boolean
    subtitle_id?: boolean
    cta_en?: boolean
    cta_id?: boolean
    badge_en?: boolean
    badge_id?: boolean
    image?: boolean
    cv_url?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    subtitle_en?: boolean
    subtitle_id?: boolean
    cta_en?: boolean
    cta_id?: boolean
    badge_en?: boolean
    badge_id?: boolean
    image?: boolean
    cv_url?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["hero"]>

  export type HeroSelectScalar = {
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    subtitle_en?: boolean
    subtitle_id?: boolean
    cta_en?: boolean
    cta_id?: boolean
    badge_en?: boolean
    badge_id?: boolean
    image?: boolean
    cv_url?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HeroOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_en" | "title_id" | "subtitle_en" | "subtitle_id" | "cta_en" | "cta_id" | "badge_en" | "badge_id" | "image" | "cv_url" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["hero"]>

  export type $HeroPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Hero"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title_en: string
      title_id: string
      subtitle_en: string
      subtitle_id: string
      cta_en: string
      cta_id: string
      badge_en: string
      badge_id: string
      image: string | null
      cv_url: string | null
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hero"]>
    composites: {}
  }

  type HeroGetPayload<S extends boolean | null | undefined | HeroDefaultArgs> = $Result.GetResult<Prisma.$HeroPayload, S>

  type HeroCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<HeroFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: HeroCountAggregateInputType | true
    }

  export interface HeroDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Hero'], meta: { name: 'Hero' } }
    /**
     * Find zero or one Hero that matches the filter.
     * @param {HeroFindUniqueArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HeroFindUniqueArgs>(args: SelectSubset<T, HeroFindUniqueArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Hero that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {HeroFindUniqueOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HeroFindUniqueOrThrowArgs>(args: SelectSubset<T, HeroFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HeroFindFirstArgs>(args?: SelectSubset<T, HeroFindFirstArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Hero that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindFirstOrThrowArgs} args - Arguments to find a Hero
     * @example
     * // Get one Hero
     * const hero = await prisma.hero.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HeroFindFirstOrThrowArgs>(args?: SelectSubset<T, HeroFindFirstOrThrowArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Heroes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Heroes
     * const heroes = await prisma.hero.findMany()
     * 
     * // Get first 10 Heroes
     * const heroes = await prisma.hero.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const heroWithIdOnly = await prisma.hero.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HeroFindManyArgs>(args?: SelectSubset<T, HeroFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Hero.
     * @param {HeroCreateArgs} args - Arguments to create a Hero.
     * @example
     * // Create one Hero
     * const Hero = await prisma.hero.create({
     *   data: {
     *     // ... data to create a Hero
     *   }
     * })
     * 
     */
    create<T extends HeroCreateArgs>(args: SelectSubset<T, HeroCreateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Heroes.
     * @param {HeroCreateManyArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HeroCreateManyArgs>(args?: SelectSubset<T, HeroCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Heroes and returns the data saved in the database.
     * @param {HeroCreateManyAndReturnArgs} args - Arguments to create many Heroes.
     * @example
     * // Create many Heroes
     * const hero = await prisma.hero.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends HeroCreateManyAndReturnArgs>(args?: SelectSubset<T, HeroCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Hero.
     * @param {HeroDeleteArgs} args - Arguments to delete one Hero.
     * @example
     * // Delete one Hero
     * const Hero = await prisma.hero.delete({
     *   where: {
     *     // ... filter to delete one Hero
     *   }
     * })
     * 
     */
    delete<T extends HeroDeleteArgs>(args: SelectSubset<T, HeroDeleteArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Hero.
     * @param {HeroUpdateArgs} args - Arguments to update one Hero.
     * @example
     * // Update one Hero
     * const hero = await prisma.hero.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HeroUpdateArgs>(args: SelectSubset<T, HeroUpdateArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Heroes.
     * @param {HeroDeleteManyArgs} args - Arguments to filter Heroes to delete.
     * @example
     * // Delete a few Heroes
     * const { count } = await prisma.hero.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HeroDeleteManyArgs>(args?: SelectSubset<T, HeroDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HeroUpdateManyArgs>(args: SelectSubset<T, HeroUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Heroes and returns the data updated in the database.
     * @param {HeroUpdateManyAndReturnArgs} args - Arguments to update many Heroes.
     * @example
     * // Update many Heroes
     * const hero = await prisma.hero.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Heroes and only return the `id`
     * const heroWithIdOnly = await prisma.hero.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends HeroUpdateManyAndReturnArgs>(args: SelectSubset<T, HeroUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Hero.
     * @param {HeroUpsertArgs} args - Arguments to update or create a Hero.
     * @example
     * // Update or create a Hero
     * const hero = await prisma.hero.upsert({
     *   create: {
     *     // ... data to create a Hero
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Hero we want to update
     *   }
     * })
     */
    upsert<T extends HeroUpsertArgs>(args: SelectSubset<T, HeroUpsertArgs<ExtArgs>>): Prisma__HeroClient<$Result.GetResult<Prisma.$HeroPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Heroes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroCountArgs} args - Arguments to filter Heroes to count.
     * @example
     * // Count the number of Heroes
     * const count = await prisma.hero.count({
     *   where: {
     *     // ... the filter for the Heroes we want to count
     *   }
     * })
    **/
    count<T extends HeroCountArgs>(
      args?: Subset<T, HeroCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HeroCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends HeroAggregateArgs>(args: Subset<T, HeroAggregateArgs>): Prisma.PrismaPromise<GetHeroAggregateType<T>>

    /**
     * Group by Hero.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HeroGroupByArgs} args - Group by arguments.
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
      T extends HeroGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HeroGroupByArgs['orderBy'] }
        : { orderBy?: HeroGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, HeroGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHeroGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Hero model
   */
  readonly fields: HeroFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Hero.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HeroClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Hero model
   */
  interface HeroFieldRefs {
    readonly id: FieldRef<"Hero", 'String'>
    readonly title_en: FieldRef<"Hero", 'String'>
    readonly title_id: FieldRef<"Hero", 'String'>
    readonly subtitle_en: FieldRef<"Hero", 'String'>
    readonly subtitle_id: FieldRef<"Hero", 'String'>
    readonly cta_en: FieldRef<"Hero", 'String'>
    readonly cta_id: FieldRef<"Hero", 'String'>
    readonly badge_en: FieldRef<"Hero", 'String'>
    readonly badge_id: FieldRef<"Hero", 'String'>
    readonly image: FieldRef<"Hero", 'String'>
    readonly cv_url: FieldRef<"Hero", 'String'>
    readonly published: FieldRef<"Hero", 'Boolean'>
    readonly createdAt: FieldRef<"Hero", 'DateTime'>
    readonly updatedAt: FieldRef<"Hero", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Hero findUnique
   */
  export type HeroFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findUniqueOrThrow
   */
  export type HeroFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero findFirst
   */
  export type HeroFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findFirstOrThrow
   */
  export type HeroFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Hero to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Heroes.
     */
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero findMany
   */
  export type HeroFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter, which Heroes to fetch.
     */
    where?: HeroWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Heroes to fetch.
     */
    orderBy?: HeroOrderByWithRelationInput | HeroOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Heroes.
     */
    cursor?: HeroWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Heroes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Heroes.
     */
    skip?: number
    distinct?: HeroScalarFieldEnum | HeroScalarFieldEnum[]
  }

  /**
   * Hero create
   */
  export type HeroCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data needed to create a Hero.
     */
    data: XOR<HeroCreateInput, HeroUncheckedCreateInput>
  }

  /**
   * Hero createMany
   */
  export type HeroCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero createManyAndReturn
   */
  export type HeroCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to create many Heroes.
     */
    data: HeroCreateManyInput | HeroCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Hero update
   */
  export type HeroUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data needed to update a Hero.
     */
    data: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
    /**
     * Choose, which Hero to update.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero updateMany
   */
  export type HeroUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero updateManyAndReturn
   */
  export type HeroUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The data used to update Heroes.
     */
    data: XOR<HeroUpdateManyMutationInput, HeroUncheckedUpdateManyInput>
    /**
     * Filter which Heroes to update
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to update.
     */
    limit?: number
  }

  /**
   * Hero upsert
   */
  export type HeroUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * The filter to search for the Hero to update in case it exists.
     */
    where: HeroWhereUniqueInput
    /**
     * In case the Hero found by the `where` argument doesn't exist, create a new Hero with this data.
     */
    create: XOR<HeroCreateInput, HeroUncheckedCreateInput>
    /**
     * In case the Hero was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HeroUpdateInput, HeroUncheckedUpdateInput>
  }

  /**
   * Hero delete
   */
  export type HeroDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
    /**
     * Filter which Hero to delete.
     */
    where: HeroWhereUniqueInput
  }

  /**
   * Hero deleteMany
   */
  export type HeroDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Heroes to delete
     */
    where?: HeroWhereInput
    /**
     * Limit how many Heroes to delete.
     */
    limit?: number
  }

  /**
   * Hero without action
   */
  export type HeroDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hero
     */
    select?: HeroSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Hero
     */
    omit?: HeroOmit<ExtArgs> | null
  }


  /**
   * Model About
   */

  export type AggregateAbout = {
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  export type AboutMinAggregateOutputType = {
    id: string | null
    description_en: string | null
    description_id: string | null
    image: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutMaxAggregateOutputType = {
    id: string | null
    description_en: string | null
    description_id: string | null
    image: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AboutCountAggregateOutputType = {
    id: number
    description_en: number
    description_id: number
    image: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AboutMinAggregateInputType = {
    id?: true
    description_en?: true
    description_id?: true
    image?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutMaxAggregateInputType = {
    id?: true
    description_en?: true
    description_id?: true
    image?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AboutCountAggregateInputType = {
    id?: true
    description_en?: true
    description_id?: true
    image?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AboutAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which About to aggregate.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Abouts
    **/
    _count?: true | AboutCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AboutMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AboutMaxAggregateInputType
  }

  export type GetAboutAggregateType<T extends AboutAggregateArgs> = {
        [P in keyof T & keyof AggregateAbout]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAbout[P]>
      : GetScalarType<T[P], AggregateAbout[P]>
  }




  export type AboutGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AboutWhereInput
    orderBy?: AboutOrderByWithAggregationInput | AboutOrderByWithAggregationInput[]
    by: AboutScalarFieldEnum[] | AboutScalarFieldEnum
    having?: AboutScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AboutCountAggregateInputType | true
    _min?: AboutMinAggregateInputType
    _max?: AboutMaxAggregateInputType
  }

  export type AboutGroupByOutputType = {
    id: string
    description_en: string
    description_id: string
    image: string | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: AboutCountAggregateOutputType | null
    _min: AboutMinAggregateOutputType | null
    _max: AboutMaxAggregateOutputType | null
  }

  type GetAboutGroupByPayload<T extends AboutGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AboutGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AboutGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AboutGroupByOutputType[P]>
            : GetScalarType<T[P], AboutGroupByOutputType[P]>
        }
      >
    >


  export type AboutSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["about"]>

  export type AboutSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["about"]>

  export type AboutSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["about"]>

  export type AboutSelectScalar = {
    id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AboutOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "description_en" | "description_id" | "image" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["about"]>

  export type $AboutPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "About"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      description_en: string
      description_id: string
      image: string | null
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["about"]>
    composites: {}
  }

  type AboutGetPayload<S extends boolean | null | undefined | AboutDefaultArgs> = $Result.GetResult<Prisma.$AboutPayload, S>

  type AboutCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AboutFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AboutCountAggregateInputType | true
    }

  export interface AboutDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['About'], meta: { name: 'About' } }
    /**
     * Find zero or one About that matches the filter.
     * @param {AboutFindUniqueArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AboutFindUniqueArgs>(args: SelectSubset<T, AboutFindUniqueArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one About that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AboutFindUniqueOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AboutFindUniqueOrThrowArgs>(args: SelectSubset<T, AboutFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first About that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AboutFindFirstArgs>(args?: SelectSubset<T, AboutFindFirstArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first About that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindFirstOrThrowArgs} args - Arguments to find a About
     * @example
     * // Get one About
     * const about = await prisma.about.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AboutFindFirstOrThrowArgs>(args?: SelectSubset<T, AboutFindFirstOrThrowArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Abouts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Abouts
     * const abouts = await prisma.about.findMany()
     * 
     * // Get first 10 Abouts
     * const abouts = await prisma.about.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const aboutWithIdOnly = await prisma.about.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AboutFindManyArgs>(args?: SelectSubset<T, AboutFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a About.
     * @param {AboutCreateArgs} args - Arguments to create a About.
     * @example
     * // Create one About
     * const About = await prisma.about.create({
     *   data: {
     *     // ... data to create a About
     *   }
     * })
     * 
     */
    create<T extends AboutCreateArgs>(args: SelectSubset<T, AboutCreateArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Abouts.
     * @param {AboutCreateManyArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AboutCreateManyArgs>(args?: SelectSubset<T, AboutCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Abouts and returns the data saved in the database.
     * @param {AboutCreateManyAndReturnArgs} args - Arguments to create many Abouts.
     * @example
     * // Create many Abouts
     * const about = await prisma.about.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Abouts and only return the `id`
     * const aboutWithIdOnly = await prisma.about.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AboutCreateManyAndReturnArgs>(args?: SelectSubset<T, AboutCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a About.
     * @param {AboutDeleteArgs} args - Arguments to delete one About.
     * @example
     * // Delete one About
     * const About = await prisma.about.delete({
     *   where: {
     *     // ... filter to delete one About
     *   }
     * })
     * 
     */
    delete<T extends AboutDeleteArgs>(args: SelectSubset<T, AboutDeleteArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one About.
     * @param {AboutUpdateArgs} args - Arguments to update one About.
     * @example
     * // Update one About
     * const about = await prisma.about.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AboutUpdateArgs>(args: SelectSubset<T, AboutUpdateArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Abouts.
     * @param {AboutDeleteManyArgs} args - Arguments to filter Abouts to delete.
     * @example
     * // Delete a few Abouts
     * const { count } = await prisma.about.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AboutDeleteManyArgs>(args?: SelectSubset<T, AboutDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AboutUpdateManyArgs>(args: SelectSubset<T, AboutUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Abouts and returns the data updated in the database.
     * @param {AboutUpdateManyAndReturnArgs} args - Arguments to update many Abouts.
     * @example
     * // Update many Abouts
     * const about = await prisma.about.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Abouts and only return the `id`
     * const aboutWithIdOnly = await prisma.about.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AboutUpdateManyAndReturnArgs>(args: SelectSubset<T, AboutUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one About.
     * @param {AboutUpsertArgs} args - Arguments to update or create a About.
     * @example
     * // Update or create a About
     * const about = await prisma.about.upsert({
     *   create: {
     *     // ... data to create a About
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the About we want to update
     *   }
     * })
     */
    upsert<T extends AboutUpsertArgs>(args: SelectSubset<T, AboutUpsertArgs<ExtArgs>>): Prisma__AboutClient<$Result.GetResult<Prisma.$AboutPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Abouts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutCountArgs} args - Arguments to filter Abouts to count.
     * @example
     * // Count the number of Abouts
     * const count = await prisma.about.count({
     *   where: {
     *     // ... the filter for the Abouts we want to count
     *   }
     * })
    **/
    count<T extends AboutCountArgs>(
      args?: Subset<T, AboutCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AboutCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AboutAggregateArgs>(args: Subset<T, AboutAggregateArgs>): Prisma.PrismaPromise<GetAboutAggregateType<T>>

    /**
     * Group by About.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AboutGroupByArgs} args - Group by arguments.
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
      T extends AboutGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AboutGroupByArgs['orderBy'] }
        : { orderBy?: AboutGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AboutGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAboutGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the About model
   */
  readonly fields: AboutFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for About.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AboutClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the About model
   */
  interface AboutFieldRefs {
    readonly id: FieldRef<"About", 'String'>
    readonly description_en: FieldRef<"About", 'String'>
    readonly description_id: FieldRef<"About", 'String'>
    readonly image: FieldRef<"About", 'String'>
    readonly published: FieldRef<"About", 'Boolean'>
    readonly createdAt: FieldRef<"About", 'DateTime'>
    readonly updatedAt: FieldRef<"About", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * About findUnique
   */
  export type AboutFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About findUniqueOrThrow
   */
  export type AboutFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About findFirst
   */
  export type AboutFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About findFirstOrThrow
   */
  export type AboutFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Filter, which About to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Abouts.
     */
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About findMany
   */
  export type AboutFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Filter, which Abouts to fetch.
     */
    where?: AboutWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Abouts to fetch.
     */
    orderBy?: AboutOrderByWithRelationInput | AboutOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Abouts.
     */
    cursor?: AboutWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Abouts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Abouts.
     */
    skip?: number
    distinct?: AboutScalarFieldEnum | AboutScalarFieldEnum[]
  }

  /**
   * About create
   */
  export type AboutCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data needed to create a About.
     */
    data: XOR<AboutCreateInput, AboutUncheckedCreateInput>
  }

  /**
   * About createMany
   */
  export type AboutCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * About createManyAndReturn
   */
  export type AboutCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data used to create many Abouts.
     */
    data: AboutCreateManyInput | AboutCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * About update
   */
  export type AboutUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data needed to update a About.
     */
    data: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
    /**
     * Choose, which About to update.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About updateMany
   */
  export type AboutUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to update.
     */
    limit?: number
  }

  /**
   * About updateManyAndReturn
   */
  export type AboutUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The data used to update Abouts.
     */
    data: XOR<AboutUpdateManyMutationInput, AboutUncheckedUpdateManyInput>
    /**
     * Filter which Abouts to update
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to update.
     */
    limit?: number
  }

  /**
   * About upsert
   */
  export type AboutUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * The filter to search for the About to update in case it exists.
     */
    where: AboutWhereUniqueInput
    /**
     * In case the About found by the `where` argument doesn't exist, create a new About with this data.
     */
    create: XOR<AboutCreateInput, AboutUncheckedCreateInput>
    /**
     * In case the About was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AboutUpdateInput, AboutUncheckedUpdateInput>
  }

  /**
   * About delete
   */
  export type AboutDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
    /**
     * Filter which About to delete.
     */
    where: AboutWhereUniqueInput
  }

  /**
   * About deleteMany
   */
  export type AboutDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Abouts to delete
     */
    where?: AboutWhereInput
    /**
     * Limit how many Abouts to delete.
     */
    limit?: number
  }

  /**
   * About without action
   */
  export type AboutDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the About
     */
    select?: AboutSelect<ExtArgs> | null
    /**
     * Omit specific fields from the About
     */
    omit?: AboutOmit<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillAvgAggregateOutputType = {
    level: number | null
    order: number | null
  }

  export type SkillSumAggregateOutputType = {
    level: number | null
    order: number | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    category: string | null
    icon: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    level: number | null
    category: string | null
    icon: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    level: number
    category: number
    icon: number
    published: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SkillAvgAggregateInputType = {
    level?: true
    order?: true
  }

  export type SkillSumAggregateInputType = {
    level?: true
    order?: true
  }

  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    level?: true
    category?: true
    icon?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    level?: true
    category?: true
    icon?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    level?: true
    category?: true
    icon?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SkillAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SkillSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _avg?: SkillAvgAggregateInputType
    _sum?: SkillSumAggregateInputType
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    level: number
    category: string
    icon: string | null
    published: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SkillCountAggregateOutputType | null
    _avg: SkillAvgAggregateOutputType | null
    _sum: SkillSumAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    category?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    category?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    level?: boolean
    category?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    level?: boolean
    category?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "level" | "category" | "icon" | "published" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["skill"]>

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      level: number
      category: string
      icon: string | null
      published: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
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
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly level: FieldRef<"Skill", 'Int'>
    readonly category: FieldRef<"Skill", 'String'>
    readonly icon: FieldRef<"Skill", 'String'>
    readonly published: FieldRef<"Skill", 'Boolean'>
    readonly order: FieldRef<"Skill", 'Int'>
    readonly createdAt: FieldRef<"Skill", 'DateTime'>
    readonly updatedAt: FieldRef<"Skill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectAvgAggregateOutputType = {
    order: number | null
  }

  export type ProjectSumAggregateOutputType = {
    order: number | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    title_en: string | null
    title_id: string | null
    description_en: string | null
    description_id: string | null
    image: string | null
    link: string | null
    github: string | null
    category: string | null
    featured: boolean | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    title_en: string | null
    title_id: string | null
    description_en: string | null
    description_id: string | null
    image: string | null
    link: string | null
    github: string | null
    category: string | null
    featured: boolean | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    title_en: number
    title_id: number
    description_en: number
    description_id: number
    image: number
    tech_stack: number
    link: number
    github: number
    category: number
    featured: number
    published: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProjectAvgAggregateInputType = {
    order?: true
  }

  export type ProjectSumAggregateInputType = {
    order?: true
  }

  export type ProjectMinAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    description_en?: true
    description_id?: true
    image?: true
    link?: true
    github?: true
    category?: true
    featured?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    description_en?: true
    description_id?: true
    image?: true
    link?: true
    github?: true
    category?: true
    featured?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    description_en?: true
    description_id?: true
    image?: true
    tech_stack?: true
    link?: true
    github?: true
    category?: true
    featured?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProjectAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProjectSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _avg?: ProjectAvgAggregateInputType
    _sum?: ProjectSumAggregateInputType
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    title_en: string
    title_id: string
    description_en: string
    description_id: string
    image: string | null
    tech_stack: string[]
    link: string | null
    github: string | null
    category: string
    featured: boolean
    published: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ProjectCountAggregateOutputType | null
    _avg: ProjectAvgAggregateOutputType | null
    _sum: ProjectSumAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    tech_stack?: boolean
    link?: boolean
    github?: boolean
    category?: boolean
    featured?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    tech_stack?: boolean
    link?: boolean
    github?: boolean
    category?: boolean
    featured?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    tech_stack?: boolean
    link?: boolean
    github?: boolean
    category?: boolean
    featured?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    description_en?: boolean
    description_id?: boolean
    image?: boolean
    tech_stack?: boolean
    link?: boolean
    github?: boolean
    category?: boolean
    featured?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_en" | "title_id" | "description_en" | "description_id" | "image" | "tech_stack" | "link" | "github" | "category" | "featured" | "published" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["project"]>

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title_en: string
      title_id: string
      description_en: string
      description_id: string
      image: string | null
      tech_stack: string[]
      link: string | null
      github: string | null
      category: string
      featured: boolean
      published: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
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
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly title_en: FieldRef<"Project", 'String'>
    readonly title_id: FieldRef<"Project", 'String'>
    readonly description_en: FieldRef<"Project", 'String'>
    readonly description_id: FieldRef<"Project", 'String'>
    readonly image: FieldRef<"Project", 'String'>
    readonly tech_stack: FieldRef<"Project", 'String[]'>
    readonly link: FieldRef<"Project", 'String'>
    readonly github: FieldRef<"Project", 'String'>
    readonly category: FieldRef<"Project", 'String'>
    readonly featured: FieldRef<"Project", 'Boolean'>
    readonly published: FieldRef<"Project", 'Boolean'>
    readonly order: FieldRef<"Project", 'Int'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
  }


  /**
   * Model Experience
   */

  export type AggregateExperience = {
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  export type ExperienceAvgAggregateOutputType = {
    order: number | null
  }

  export type ExperienceSumAggregateOutputType = {
    order: number | null
  }

  export type ExperienceMinAggregateOutputType = {
    id: string | null
    title_en: string | null
    title_id: string | null
    company: string | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    description_en: string | null
    description_id: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceMaxAggregateOutputType = {
    id: string | null
    title_en: string | null
    title_id: string | null
    company: string | null
    location: string | null
    start_date: Date | null
    end_date: Date | null
    description_en: string | null
    description_id: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExperienceCountAggregateOutputType = {
    id: number
    title_en: number
    title_id: number
    company: number
    location: number
    start_date: number
    end_date: number
    description_en: number
    description_id: number
    published: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExperienceAvgAggregateInputType = {
    order?: true
  }

  export type ExperienceSumAggregateInputType = {
    order?: true
  }

  export type ExperienceMinAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    company?: true
    location?: true
    start_date?: true
    end_date?: true
    description_en?: true
    description_id?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceMaxAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    company?: true
    location?: true
    start_date?: true
    end_date?: true
    description_en?: true
    description_id?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExperienceCountAggregateInputType = {
    id?: true
    title_en?: true
    title_id?: true
    company?: true
    location?: true
    start_date?: true
    end_date?: true
    description_en?: true
    description_id?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExperienceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experience to aggregate.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Experiences
    **/
    _count?: true | ExperienceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExperienceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExperienceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExperienceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExperienceMaxAggregateInputType
  }

  export type GetExperienceAggregateType<T extends ExperienceAggregateArgs> = {
        [P in keyof T & keyof AggregateExperience]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExperience[P]>
      : GetScalarType<T[P], AggregateExperience[P]>
  }




  export type ExperienceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExperienceWhereInput
    orderBy?: ExperienceOrderByWithAggregationInput | ExperienceOrderByWithAggregationInput[]
    by: ExperienceScalarFieldEnum[] | ExperienceScalarFieldEnum
    having?: ExperienceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExperienceCountAggregateInputType | true
    _avg?: ExperienceAvgAggregateInputType
    _sum?: ExperienceSumAggregateInputType
    _min?: ExperienceMinAggregateInputType
    _max?: ExperienceMaxAggregateInputType
  }

  export type ExperienceGroupByOutputType = {
    id: string
    title_en: string
    title_id: string
    company: string
    location: string | null
    start_date: Date
    end_date: Date | null
    description_en: string
    description_id: string
    published: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: ExperienceCountAggregateOutputType | null
    _avg: ExperienceAvgAggregateOutputType | null
    _sum: ExperienceSumAggregateOutputType | null
    _min: ExperienceMinAggregateOutputType | null
    _max: ExperienceMaxAggregateOutputType | null
  }

  type GetExperienceGroupByPayload<T extends ExperienceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExperienceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExperienceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
            : GetScalarType<T[P], ExperienceGroupByOutputType[P]>
        }
      >
    >


  export type ExperienceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    company?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    description_en?: boolean
    description_id?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    company?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    description_en?: boolean
    description_id?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    company?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    description_en?: boolean
    description_id?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["experience"]>

  export type ExperienceSelectScalar = {
    id?: boolean
    title_en?: boolean
    title_id?: boolean
    company?: boolean
    location?: boolean
    start_date?: boolean
    end_date?: boolean
    description_en?: boolean
    description_id?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExperienceOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title_en" | "title_id" | "company" | "location" | "start_date" | "end_date" | "description_en" | "description_id" | "published" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["experience"]>

  export type $ExperiencePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Experience"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title_en: string
      title_id: string
      company: string
      location: string | null
      start_date: Date
      end_date: Date | null
      description_en: string
      description_id: string
      published: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["experience"]>
    composites: {}
  }

  type ExperienceGetPayload<S extends boolean | null | undefined | ExperienceDefaultArgs> = $Result.GetResult<Prisma.$ExperiencePayload, S>

  type ExperienceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExperienceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExperienceCountAggregateInputType | true
    }

  export interface ExperienceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Experience'], meta: { name: 'Experience' } }
    /**
     * Find zero or one Experience that matches the filter.
     * @param {ExperienceFindUniqueArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExperienceFindUniqueArgs>(args: SelectSubset<T, ExperienceFindUniqueArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Experience that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExperienceFindUniqueOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExperienceFindUniqueOrThrowArgs>(args: SelectSubset<T, ExperienceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExperienceFindFirstArgs>(args?: SelectSubset<T, ExperienceFindFirstArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Experience that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindFirstOrThrowArgs} args - Arguments to find a Experience
     * @example
     * // Get one Experience
     * const experience = await prisma.experience.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExperienceFindFirstOrThrowArgs>(args?: SelectSubset<T, ExperienceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Experiences that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Experiences
     * const experiences = await prisma.experience.findMany()
     * 
     * // Get first 10 Experiences
     * const experiences = await prisma.experience.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const experienceWithIdOnly = await prisma.experience.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExperienceFindManyArgs>(args?: SelectSubset<T, ExperienceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Experience.
     * @param {ExperienceCreateArgs} args - Arguments to create a Experience.
     * @example
     * // Create one Experience
     * const Experience = await prisma.experience.create({
     *   data: {
     *     // ... data to create a Experience
     *   }
     * })
     * 
     */
    create<T extends ExperienceCreateArgs>(args: SelectSubset<T, ExperienceCreateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Experiences.
     * @param {ExperienceCreateManyArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExperienceCreateManyArgs>(args?: SelectSubset<T, ExperienceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Experiences and returns the data saved in the database.
     * @param {ExperienceCreateManyAndReturnArgs} args - Arguments to create many Experiences.
     * @example
     * // Create many Experiences
     * const experience = await prisma.experience.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExperienceCreateManyAndReturnArgs>(args?: SelectSubset<T, ExperienceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Experience.
     * @param {ExperienceDeleteArgs} args - Arguments to delete one Experience.
     * @example
     * // Delete one Experience
     * const Experience = await prisma.experience.delete({
     *   where: {
     *     // ... filter to delete one Experience
     *   }
     * })
     * 
     */
    delete<T extends ExperienceDeleteArgs>(args: SelectSubset<T, ExperienceDeleteArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Experience.
     * @param {ExperienceUpdateArgs} args - Arguments to update one Experience.
     * @example
     * // Update one Experience
     * const experience = await prisma.experience.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExperienceUpdateArgs>(args: SelectSubset<T, ExperienceUpdateArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Experiences.
     * @param {ExperienceDeleteManyArgs} args - Arguments to filter Experiences to delete.
     * @example
     * // Delete a few Experiences
     * const { count } = await prisma.experience.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExperienceDeleteManyArgs>(args?: SelectSubset<T, ExperienceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExperienceUpdateManyArgs>(args: SelectSubset<T, ExperienceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Experiences and returns the data updated in the database.
     * @param {ExperienceUpdateManyAndReturnArgs} args - Arguments to update many Experiences.
     * @example
     * // Update many Experiences
     * const experience = await prisma.experience.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Experiences and only return the `id`
     * const experienceWithIdOnly = await prisma.experience.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExperienceUpdateManyAndReturnArgs>(args: SelectSubset<T, ExperienceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Experience.
     * @param {ExperienceUpsertArgs} args - Arguments to update or create a Experience.
     * @example
     * // Update or create a Experience
     * const experience = await prisma.experience.upsert({
     *   create: {
     *     // ... data to create a Experience
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Experience we want to update
     *   }
     * })
     */
    upsert<T extends ExperienceUpsertArgs>(args: SelectSubset<T, ExperienceUpsertArgs<ExtArgs>>): Prisma__ExperienceClient<$Result.GetResult<Prisma.$ExperiencePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Experiences.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceCountArgs} args - Arguments to filter Experiences to count.
     * @example
     * // Count the number of Experiences
     * const count = await prisma.experience.count({
     *   where: {
     *     // ... the filter for the Experiences we want to count
     *   }
     * })
    **/
    count<T extends ExperienceCountArgs>(
      args?: Subset<T, ExperienceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExperienceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExperienceAggregateArgs>(args: Subset<T, ExperienceAggregateArgs>): Prisma.PrismaPromise<GetExperienceAggregateType<T>>

    /**
     * Group by Experience.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExperienceGroupByArgs} args - Group by arguments.
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
      T extends ExperienceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExperienceGroupByArgs['orderBy'] }
        : { orderBy?: ExperienceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExperienceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExperienceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Experience model
   */
  readonly fields: ExperienceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Experience.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExperienceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Experience model
   */
  interface ExperienceFieldRefs {
    readonly id: FieldRef<"Experience", 'String'>
    readonly title_en: FieldRef<"Experience", 'String'>
    readonly title_id: FieldRef<"Experience", 'String'>
    readonly company: FieldRef<"Experience", 'String'>
    readonly location: FieldRef<"Experience", 'String'>
    readonly start_date: FieldRef<"Experience", 'DateTime'>
    readonly end_date: FieldRef<"Experience", 'DateTime'>
    readonly description_en: FieldRef<"Experience", 'String'>
    readonly description_id: FieldRef<"Experience", 'String'>
    readonly published: FieldRef<"Experience", 'Boolean'>
    readonly order: FieldRef<"Experience", 'Int'>
    readonly createdAt: FieldRef<"Experience", 'DateTime'>
    readonly updatedAt: FieldRef<"Experience", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Experience findUnique
   */
  export type ExperienceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findUniqueOrThrow
   */
  export type ExperienceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience findFirst
   */
  export type ExperienceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findFirstOrThrow
   */
  export type ExperienceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experience to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Experiences.
     */
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience findMany
   */
  export type ExperienceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter, which Experiences to fetch.
     */
    where?: ExperienceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Experiences to fetch.
     */
    orderBy?: ExperienceOrderByWithRelationInput | ExperienceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Experiences.
     */
    cursor?: ExperienceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Experiences from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Experiences.
     */
    skip?: number
    distinct?: ExperienceScalarFieldEnum | ExperienceScalarFieldEnum[]
  }

  /**
   * Experience create
   */
  export type ExperienceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data needed to create a Experience.
     */
    data: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
  }

  /**
   * Experience createMany
   */
  export type ExperienceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience createManyAndReturn
   */
  export type ExperienceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to create many Experiences.
     */
    data: ExperienceCreateManyInput | ExperienceCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Experience update
   */
  export type ExperienceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data needed to update a Experience.
     */
    data: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
    /**
     * Choose, which Experience to update.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience updateMany
   */
  export type ExperienceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience updateManyAndReturn
   */
  export type ExperienceUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The data used to update Experiences.
     */
    data: XOR<ExperienceUpdateManyMutationInput, ExperienceUncheckedUpdateManyInput>
    /**
     * Filter which Experiences to update
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to update.
     */
    limit?: number
  }

  /**
   * Experience upsert
   */
  export type ExperienceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * The filter to search for the Experience to update in case it exists.
     */
    where: ExperienceWhereUniqueInput
    /**
     * In case the Experience found by the `where` argument doesn't exist, create a new Experience with this data.
     */
    create: XOR<ExperienceCreateInput, ExperienceUncheckedCreateInput>
    /**
     * In case the Experience was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExperienceUpdateInput, ExperienceUncheckedUpdateInput>
  }

  /**
   * Experience delete
   */
  export type ExperienceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
    /**
     * Filter which Experience to delete.
     */
    where: ExperienceWhereUniqueInput
  }

  /**
   * Experience deleteMany
   */
  export type ExperienceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Experiences to delete
     */
    where?: ExperienceWhereInput
    /**
     * Limit how many Experiences to delete.
     */
    limit?: number
  }

  /**
   * Experience without action
   */
  export type ExperienceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Experience
     */
    select?: ExperienceSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Experience
     */
    omit?: ExperienceOmit<ExtArgs> | null
  }


  /**
   * Model Social
   */

  export type AggregateSocial = {
    _count: SocialCountAggregateOutputType | null
    _avg: SocialAvgAggregateOutputType | null
    _sum: SocialSumAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  export type SocialAvgAggregateOutputType = {
    order: number | null
  }

  export type SocialSumAggregateOutputType = {
    order: number | null
  }

  export type SocialMinAggregateOutputType = {
    id: string | null
    name: string | null
    link: string | null
    icon: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialMaxAggregateOutputType = {
    id: string | null
    name: string | null
    link: string | null
    icon: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SocialCountAggregateOutputType = {
    id: number
    name: number
    link: number
    icon: number
    published: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SocialAvgAggregateInputType = {
    order?: true
  }

  export type SocialSumAggregateInputType = {
    order?: true
  }

  export type SocialMinAggregateInputType = {
    id?: true
    name?: true
    link?: true
    icon?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialMaxAggregateInputType = {
    id?: true
    name?: true
    link?: true
    icon?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SocialCountAggregateInputType = {
    id?: true
    name?: true
    link?: true
    icon?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SocialAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Social to aggregate.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Socials
    **/
    _count?: true | SocialCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SocialAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SocialSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SocialMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SocialMaxAggregateInputType
  }

  export type GetSocialAggregateType<T extends SocialAggregateArgs> = {
        [P in keyof T & keyof AggregateSocial]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSocial[P]>
      : GetScalarType<T[P], AggregateSocial[P]>
  }




  export type SocialGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SocialWhereInput
    orderBy?: SocialOrderByWithAggregationInput | SocialOrderByWithAggregationInput[]
    by: SocialScalarFieldEnum[] | SocialScalarFieldEnum
    having?: SocialScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SocialCountAggregateInputType | true
    _avg?: SocialAvgAggregateInputType
    _sum?: SocialSumAggregateInputType
    _min?: SocialMinAggregateInputType
    _max?: SocialMaxAggregateInputType
  }

  export type SocialGroupByOutputType = {
    id: string
    name: string
    link: string
    icon: string | null
    published: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: SocialCountAggregateOutputType | null
    _avg: SocialAvgAggregateOutputType | null
    _sum: SocialSumAggregateOutputType | null
    _min: SocialMinAggregateOutputType | null
    _max: SocialMaxAggregateOutputType | null
  }

  type GetSocialGroupByPayload<T extends SocialGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SocialGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SocialGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SocialGroupByOutputType[P]>
            : GetScalarType<T[P], SocialGroupByOutputType[P]>
        }
      >
    >


  export type SocialSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["social"]>

  export type SocialSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["social"]>

  export type SocialSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    link?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["social"]>

  export type SocialSelectScalar = {
    id?: boolean
    name?: boolean
    link?: boolean
    icon?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SocialOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "link" | "icon" | "published" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["social"]>

  export type $SocialPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Social"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      link: string
      icon: string | null
      published: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["social"]>
    composites: {}
  }

  type SocialGetPayload<S extends boolean | null | undefined | SocialDefaultArgs> = $Result.GetResult<Prisma.$SocialPayload, S>

  type SocialCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SocialFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SocialCountAggregateInputType | true
    }

  export interface SocialDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Social'], meta: { name: 'Social' } }
    /**
     * Find zero or one Social that matches the filter.
     * @param {SocialFindUniqueArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SocialFindUniqueArgs>(args: SelectSubset<T, SocialFindUniqueArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Social that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SocialFindUniqueOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SocialFindUniqueOrThrowArgs>(args: SelectSubset<T, SocialFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SocialFindFirstArgs>(args?: SelectSubset<T, SocialFindFirstArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Social that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindFirstOrThrowArgs} args - Arguments to find a Social
     * @example
     * // Get one Social
     * const social = await prisma.social.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SocialFindFirstOrThrowArgs>(args?: SelectSubset<T, SocialFindFirstOrThrowArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Socials that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Socials
     * const socials = await prisma.social.findMany()
     * 
     * // Get first 10 Socials
     * const socials = await prisma.social.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const socialWithIdOnly = await prisma.social.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SocialFindManyArgs>(args?: SelectSubset<T, SocialFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Social.
     * @param {SocialCreateArgs} args - Arguments to create a Social.
     * @example
     * // Create one Social
     * const Social = await prisma.social.create({
     *   data: {
     *     // ... data to create a Social
     *   }
     * })
     * 
     */
    create<T extends SocialCreateArgs>(args: SelectSubset<T, SocialCreateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Socials.
     * @param {SocialCreateManyArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SocialCreateManyArgs>(args?: SelectSubset<T, SocialCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Socials and returns the data saved in the database.
     * @param {SocialCreateManyAndReturnArgs} args - Arguments to create many Socials.
     * @example
     * // Create many Socials
     * const social = await prisma.social.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SocialCreateManyAndReturnArgs>(args?: SelectSubset<T, SocialCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Social.
     * @param {SocialDeleteArgs} args - Arguments to delete one Social.
     * @example
     * // Delete one Social
     * const Social = await prisma.social.delete({
     *   where: {
     *     // ... filter to delete one Social
     *   }
     * })
     * 
     */
    delete<T extends SocialDeleteArgs>(args: SelectSubset<T, SocialDeleteArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Social.
     * @param {SocialUpdateArgs} args - Arguments to update one Social.
     * @example
     * // Update one Social
     * const social = await prisma.social.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SocialUpdateArgs>(args: SelectSubset<T, SocialUpdateArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Socials.
     * @param {SocialDeleteManyArgs} args - Arguments to filter Socials to delete.
     * @example
     * // Delete a few Socials
     * const { count } = await prisma.social.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SocialDeleteManyArgs>(args?: SelectSubset<T, SocialDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SocialUpdateManyArgs>(args: SelectSubset<T, SocialUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Socials and returns the data updated in the database.
     * @param {SocialUpdateManyAndReturnArgs} args - Arguments to update many Socials.
     * @example
     * // Update many Socials
     * const social = await prisma.social.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Socials and only return the `id`
     * const socialWithIdOnly = await prisma.social.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SocialUpdateManyAndReturnArgs>(args: SelectSubset<T, SocialUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Social.
     * @param {SocialUpsertArgs} args - Arguments to update or create a Social.
     * @example
     * // Update or create a Social
     * const social = await prisma.social.upsert({
     *   create: {
     *     // ... data to create a Social
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Social we want to update
     *   }
     * })
     */
    upsert<T extends SocialUpsertArgs>(args: SelectSubset<T, SocialUpsertArgs<ExtArgs>>): Prisma__SocialClient<$Result.GetResult<Prisma.$SocialPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Socials.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialCountArgs} args - Arguments to filter Socials to count.
     * @example
     * // Count the number of Socials
     * const count = await prisma.social.count({
     *   where: {
     *     // ... the filter for the Socials we want to count
     *   }
     * })
    **/
    count<T extends SocialCountArgs>(
      args?: Subset<T, SocialCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SocialCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SocialAggregateArgs>(args: Subset<T, SocialAggregateArgs>): Prisma.PrismaPromise<GetSocialAggregateType<T>>

    /**
     * Group by Social.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SocialGroupByArgs} args - Group by arguments.
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
      T extends SocialGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SocialGroupByArgs['orderBy'] }
        : { orderBy?: SocialGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SocialGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSocialGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Social model
   */
  readonly fields: SocialFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Social.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SocialClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Social model
   */
  interface SocialFieldRefs {
    readonly id: FieldRef<"Social", 'String'>
    readonly name: FieldRef<"Social", 'String'>
    readonly link: FieldRef<"Social", 'String'>
    readonly icon: FieldRef<"Social", 'String'>
    readonly published: FieldRef<"Social", 'Boolean'>
    readonly order: FieldRef<"Social", 'Int'>
    readonly createdAt: FieldRef<"Social", 'DateTime'>
    readonly updatedAt: FieldRef<"Social", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Social findUnique
   */
  export type SocialFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findUniqueOrThrow
   */
  export type SocialFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social findFirst
   */
  export type SocialFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findFirstOrThrow
   */
  export type SocialFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Filter, which Social to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Socials.
     */
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social findMany
   */
  export type SocialFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Filter, which Socials to fetch.
     */
    where?: SocialWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Socials to fetch.
     */
    orderBy?: SocialOrderByWithRelationInput | SocialOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Socials.
     */
    cursor?: SocialWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Socials from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Socials.
     */
    skip?: number
    distinct?: SocialScalarFieldEnum | SocialScalarFieldEnum[]
  }

  /**
   * Social create
   */
  export type SocialCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data needed to create a Social.
     */
    data: XOR<SocialCreateInput, SocialUncheckedCreateInput>
  }

  /**
   * Social createMany
   */
  export type SocialCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Social createManyAndReturn
   */
  export type SocialCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to create many Socials.
     */
    data: SocialCreateManyInput | SocialCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Social update
   */
  export type SocialUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data needed to update a Social.
     */
    data: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
    /**
     * Choose, which Social to update.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social updateMany
   */
  export type SocialUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Social updateManyAndReturn
   */
  export type SocialUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The data used to update Socials.
     */
    data: XOR<SocialUpdateManyMutationInput, SocialUncheckedUpdateManyInput>
    /**
     * Filter which Socials to update
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to update.
     */
    limit?: number
  }

  /**
   * Social upsert
   */
  export type SocialUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * The filter to search for the Social to update in case it exists.
     */
    where: SocialWhereUniqueInput
    /**
     * In case the Social found by the `where` argument doesn't exist, create a new Social with this data.
     */
    create: XOR<SocialCreateInput, SocialUncheckedCreateInput>
    /**
     * In case the Social was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SocialUpdateInput, SocialUncheckedUpdateInput>
  }

  /**
   * Social delete
   */
  export type SocialDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
    /**
     * Filter which Social to delete.
     */
    where: SocialWhereUniqueInput
  }

  /**
   * Social deleteMany
   */
  export type SocialDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Socials to delete
     */
    where?: SocialWhereInput
    /**
     * Limit how many Socials to delete.
     */
    limit?: number
  }

  /**
   * Social without action
   */
  export type SocialDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Social
     */
    select?: SocialSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Social
     */
    omit?: SocialOmit<ExtArgs> | null
  }


  /**
   * Model Contact
   */

  export type AggregateContact = {
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  export type ContactMinAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    location: string | null
    title_en: string | null
    title_id: string | null
    desc_en: string | null
    desc_id: string | null
    footer_copy: string | null
    footer_made: string | null
    portfolio_extra_en: string | null
    portfolio_extra_id: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactMaxAggregateOutputType = {
    id: string | null
    email: string | null
    phone: string | null
    location: string | null
    title_en: string | null
    title_id: string | null
    desc_en: string | null
    desc_id: string | null
    footer_copy: string | null
    footer_made: string | null
    portfolio_extra_en: string | null
    portfolio_extra_id: string | null
    published: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContactCountAggregateOutputType = {
    id: number
    email: number
    phone: number
    location: number
    title_en: number
    title_id: number
    desc_en: number
    desc_id: number
    footer_copy: number
    footer_made: number
    portfolio_extra_en: number
    portfolio_extra_id: number
    published: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContactMinAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    location?: true
    title_en?: true
    title_id?: true
    desc_en?: true
    desc_id?: true
    footer_copy?: true
    footer_made?: true
    portfolio_extra_en?: true
    portfolio_extra_id?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactMaxAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    location?: true
    title_en?: true
    title_id?: true
    desc_en?: true
    desc_id?: true
    footer_copy?: true
    footer_made?: true
    portfolio_extra_en?: true
    portfolio_extra_id?: true
    published?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContactCountAggregateInputType = {
    id?: true
    email?: true
    phone?: true
    location?: true
    title_en?: true
    title_id?: true
    desc_en?: true
    desc_id?: true
    footer_copy?: true
    footer_made?: true
    portfolio_extra_en?: true
    portfolio_extra_id?: true
    published?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContactAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contact to aggregate.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contacts
    **/
    _count?: true | ContactCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContactMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContactMaxAggregateInputType
  }

  export type GetContactAggregateType<T extends ContactAggregateArgs> = {
        [P in keyof T & keyof AggregateContact]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContact[P]>
      : GetScalarType<T[P], AggregateContact[P]>
  }




  export type ContactGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContactWhereInput
    orderBy?: ContactOrderByWithAggregationInput | ContactOrderByWithAggregationInput[]
    by: ContactScalarFieldEnum[] | ContactScalarFieldEnum
    having?: ContactScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContactCountAggregateInputType | true
    _min?: ContactMinAggregateInputType
    _max?: ContactMaxAggregateInputType
  }

  export type ContactGroupByOutputType = {
    id: string
    email: string
    phone: string | null
    location: string | null
    title_en: string | null
    title_id: string | null
    desc_en: string | null
    desc_id: string | null
    footer_copy: string | null
    footer_made: string | null
    portfolio_extra_en: string | null
    portfolio_extra_id: string | null
    published: boolean
    createdAt: Date
    updatedAt: Date
    _count: ContactCountAggregateOutputType | null
    _min: ContactMinAggregateOutputType | null
    _max: ContactMaxAggregateOutputType | null
  }

  type GetContactGroupByPayload<T extends ContactGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContactGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContactGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContactGroupByOutputType[P]>
            : GetScalarType<T[P], ContactGroupByOutputType[P]>
        }
      >
    >


  export type ContactSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    title_en?: boolean
    title_id?: boolean
    desc_en?: boolean
    desc_id?: boolean
    footer_copy?: boolean
    footer_made?: boolean
    portfolio_extra_en?: boolean
    portfolio_extra_id?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    title_en?: boolean
    title_id?: boolean
    desc_en?: boolean
    desc_id?: boolean
    footer_copy?: boolean
    footer_made?: boolean
    portfolio_extra_en?: boolean
    portfolio_extra_id?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    title_en?: boolean
    title_id?: boolean
    desc_en?: boolean
    desc_id?: boolean
    footer_copy?: boolean
    footer_made?: boolean
    portfolio_extra_en?: boolean
    portfolio_extra_id?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["contact"]>

  export type ContactSelectScalar = {
    id?: boolean
    email?: boolean
    phone?: boolean
    location?: boolean
    title_en?: boolean
    title_id?: boolean
    desc_en?: boolean
    desc_id?: boolean
    footer_copy?: boolean
    footer_made?: boolean
    portfolio_extra_en?: boolean
    portfolio_extra_id?: boolean
    published?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContactOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "phone" | "location" | "title_en" | "title_id" | "desc_en" | "desc_id" | "footer_copy" | "footer_made" | "portfolio_extra_en" | "portfolio_extra_id" | "published" | "createdAt" | "updatedAt", ExtArgs["result"]["contact"]>

  export type $ContactPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contact"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      phone: string | null
      location: string | null
      title_en: string | null
      title_id: string | null
      desc_en: string | null
      desc_id: string | null
      footer_copy: string | null
      footer_made: string | null
      portfolio_extra_en: string | null
      portfolio_extra_id: string | null
      published: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contact"]>
    composites: {}
  }

  type ContactGetPayload<S extends boolean | null | undefined | ContactDefaultArgs> = $Result.GetResult<Prisma.$ContactPayload, S>

  type ContactCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContactFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContactCountAggregateInputType | true
    }

  export interface ContactDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contact'], meta: { name: 'Contact' } }
    /**
     * Find zero or one Contact that matches the filter.
     * @param {ContactFindUniqueArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContactFindUniqueArgs>(args: SelectSubset<T, ContactFindUniqueArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contact that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContactFindUniqueOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContactFindUniqueOrThrowArgs>(args: SelectSubset<T, ContactFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContactFindFirstArgs>(args?: SelectSubset<T, ContactFindFirstArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contact that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindFirstOrThrowArgs} args - Arguments to find a Contact
     * @example
     * // Get one Contact
     * const contact = await prisma.contact.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContactFindFirstOrThrowArgs>(args?: SelectSubset<T, ContactFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contacts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contacts
     * const contacts = await prisma.contact.findMany()
     * 
     * // Get first 10 Contacts
     * const contacts = await prisma.contact.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contactWithIdOnly = await prisma.contact.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContactFindManyArgs>(args?: SelectSubset<T, ContactFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contact.
     * @param {ContactCreateArgs} args - Arguments to create a Contact.
     * @example
     * // Create one Contact
     * const Contact = await prisma.contact.create({
     *   data: {
     *     // ... data to create a Contact
     *   }
     * })
     * 
     */
    create<T extends ContactCreateArgs>(args: SelectSubset<T, ContactCreateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contacts.
     * @param {ContactCreateManyArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContactCreateManyArgs>(args?: SelectSubset<T, ContactCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contacts and returns the data saved in the database.
     * @param {ContactCreateManyAndReturnArgs} args - Arguments to create many Contacts.
     * @example
     * // Create many Contacts
     * const contact = await prisma.contact.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContactCreateManyAndReturnArgs>(args?: SelectSubset<T, ContactCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contact.
     * @param {ContactDeleteArgs} args - Arguments to delete one Contact.
     * @example
     * // Delete one Contact
     * const Contact = await prisma.contact.delete({
     *   where: {
     *     // ... filter to delete one Contact
     *   }
     * })
     * 
     */
    delete<T extends ContactDeleteArgs>(args: SelectSubset<T, ContactDeleteArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contact.
     * @param {ContactUpdateArgs} args - Arguments to update one Contact.
     * @example
     * // Update one Contact
     * const contact = await prisma.contact.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContactUpdateArgs>(args: SelectSubset<T, ContactUpdateArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contacts.
     * @param {ContactDeleteManyArgs} args - Arguments to filter Contacts to delete.
     * @example
     * // Delete a few Contacts
     * const { count } = await prisma.contact.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContactDeleteManyArgs>(args?: SelectSubset<T, ContactDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContactUpdateManyArgs>(args: SelectSubset<T, ContactUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contacts and returns the data updated in the database.
     * @param {ContactUpdateManyAndReturnArgs} args - Arguments to update many Contacts.
     * @example
     * // Update many Contacts
     * const contact = await prisma.contact.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contacts and only return the `id`
     * const contactWithIdOnly = await prisma.contact.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContactUpdateManyAndReturnArgs>(args: SelectSubset<T, ContactUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contact.
     * @param {ContactUpsertArgs} args - Arguments to update or create a Contact.
     * @example
     * // Update or create a Contact
     * const contact = await prisma.contact.upsert({
     *   create: {
     *     // ... data to create a Contact
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contact we want to update
     *   }
     * })
     */
    upsert<T extends ContactUpsertArgs>(args: SelectSubset<T, ContactUpsertArgs<ExtArgs>>): Prisma__ContactClient<$Result.GetResult<Prisma.$ContactPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contacts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactCountArgs} args - Arguments to filter Contacts to count.
     * @example
     * // Count the number of Contacts
     * const count = await prisma.contact.count({
     *   where: {
     *     // ... the filter for the Contacts we want to count
     *   }
     * })
    **/
    count<T extends ContactCountArgs>(
      args?: Subset<T, ContactCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContactCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ContactAggregateArgs>(args: Subset<T, ContactAggregateArgs>): Prisma.PrismaPromise<GetContactAggregateType<T>>

    /**
     * Group by Contact.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContactGroupByArgs} args - Group by arguments.
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
      T extends ContactGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContactGroupByArgs['orderBy'] }
        : { orderBy?: ContactGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ContactGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContactGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contact model
   */
  readonly fields: ContactFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contact.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContactClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Contact model
   */
  interface ContactFieldRefs {
    readonly id: FieldRef<"Contact", 'String'>
    readonly email: FieldRef<"Contact", 'String'>
    readonly phone: FieldRef<"Contact", 'String'>
    readonly location: FieldRef<"Contact", 'String'>
    readonly title_en: FieldRef<"Contact", 'String'>
    readonly title_id: FieldRef<"Contact", 'String'>
    readonly desc_en: FieldRef<"Contact", 'String'>
    readonly desc_id: FieldRef<"Contact", 'String'>
    readonly footer_copy: FieldRef<"Contact", 'String'>
    readonly footer_made: FieldRef<"Contact", 'String'>
    readonly portfolio_extra_en: FieldRef<"Contact", 'String'>
    readonly portfolio_extra_id: FieldRef<"Contact", 'String'>
    readonly published: FieldRef<"Contact", 'Boolean'>
    readonly createdAt: FieldRef<"Contact", 'DateTime'>
    readonly updatedAt: FieldRef<"Contact", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contact findUnique
   */
  export type ContactFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findUniqueOrThrow
   */
  export type ContactFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact findFirst
   */
  export type ContactFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findFirstOrThrow
   */
  export type ContactFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contact to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contacts.
     */
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact findMany
   */
  export type ContactFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter, which Contacts to fetch.
     */
    where?: ContactWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contacts to fetch.
     */
    orderBy?: ContactOrderByWithRelationInput | ContactOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contacts.
     */
    cursor?: ContactWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contacts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contacts.
     */
    skip?: number
    distinct?: ContactScalarFieldEnum | ContactScalarFieldEnum[]
  }

  /**
   * Contact create
   */
  export type ContactCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to create a Contact.
     */
    data: XOR<ContactCreateInput, ContactUncheckedCreateInput>
  }

  /**
   * Contact createMany
   */
  export type ContactCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact createManyAndReturn
   */
  export type ContactCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to create many Contacts.
     */
    data: ContactCreateManyInput | ContactCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contact update
   */
  export type ContactUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data needed to update a Contact.
     */
    data: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
    /**
     * Choose, which Contact to update.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact updateMany
   */
  export type ContactUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact updateManyAndReturn
   */
  export type ContactUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The data used to update Contacts.
     */
    data: XOR<ContactUpdateManyMutationInput, ContactUncheckedUpdateManyInput>
    /**
     * Filter which Contacts to update
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to update.
     */
    limit?: number
  }

  /**
   * Contact upsert
   */
  export type ContactUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * The filter to search for the Contact to update in case it exists.
     */
    where: ContactWhereUniqueInput
    /**
     * In case the Contact found by the `where` argument doesn't exist, create a new Contact with this data.
     */
    create: XOR<ContactCreateInput, ContactUncheckedCreateInput>
    /**
     * In case the Contact was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContactUpdateInput, ContactUncheckedUpdateInput>
  }

  /**
   * Contact delete
   */
  export type ContactDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
    /**
     * Filter which Contact to delete.
     */
    where: ContactWhereUniqueInput
  }

  /**
   * Contact deleteMany
   */
  export type ContactDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contacts to delete
     */
    where?: ContactWhereInput
    /**
     * Limit how many Contacts to delete.
     */
    limit?: number
  }

  /**
   * Contact without action
   */
  export type ContactDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contact
     */
    select?: ContactSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contact
     */
    omit?: ContactOmit<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    subject: string | null
    message: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    name: number
    email: number
    subject: number
    message: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    subject?: true
    message?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    name: string
    email: string
    subject: string | null
    message: string
    isRead: boolean
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    subject?: boolean
    message?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "subject" | "message" | "isRead" | "createdAt", ExtArgs["result"]["message"]>

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      subject: string | null
      message: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
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
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly name: FieldRef<"Message", 'String'>
    readonly email: FieldRef<"Message", 'String'>
    readonly subject: FieldRef<"Message", 'String'>
    readonly message: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
  }


  /**
   * Model Certificate
   */

  export type AggregateCertificate = {
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  export type CertificateAvgAggregateOutputType = {
    order: number | null
  }

  export type CertificateSumAggregateOutputType = {
    order: number | null
  }

  export type CertificateMinAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    issue_date: Date | null
    credential_id: string | null
    link: string | null
    file_url: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateMaxAggregateOutputType = {
    id: string | null
    name: string | null
    issuer: string | null
    issue_date: Date | null
    credential_id: string | null
    link: string | null
    file_url: string | null
    published: boolean | null
    order: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CertificateCountAggregateOutputType = {
    id: number
    name: number
    issuer: number
    issue_date: number
    credential_id: number
    link: number
    file_url: number
    published: number
    order: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CertificateAvgAggregateInputType = {
    order?: true
  }

  export type CertificateSumAggregateInputType = {
    order?: true
  }

  export type CertificateMinAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    issue_date?: true
    credential_id?: true
    link?: true
    file_url?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateMaxAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    issue_date?: true
    credential_id?: true
    link?: true
    file_url?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CertificateCountAggregateInputType = {
    id?: true
    name?: true
    issuer?: true
    issue_date?: true
    credential_id?: true
    link?: true
    file_url?: true
    published?: true
    order?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CertificateAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificate to aggregate.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Certificates
    **/
    _count?: true | CertificateCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CertificateAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CertificateSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CertificateMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CertificateMaxAggregateInputType
  }

  export type GetCertificateAggregateType<T extends CertificateAggregateArgs> = {
        [P in keyof T & keyof AggregateCertificate]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCertificate[P]>
      : GetScalarType<T[P], AggregateCertificate[P]>
  }




  export type CertificateGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CertificateWhereInput
    orderBy?: CertificateOrderByWithAggregationInput | CertificateOrderByWithAggregationInput[]
    by: CertificateScalarFieldEnum[] | CertificateScalarFieldEnum
    having?: CertificateScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CertificateCountAggregateInputType | true
    _avg?: CertificateAvgAggregateInputType
    _sum?: CertificateSumAggregateInputType
    _min?: CertificateMinAggregateInputType
    _max?: CertificateMaxAggregateInputType
  }

  export type CertificateGroupByOutputType = {
    id: string
    name: string
    issuer: string
    issue_date: Date
    credential_id: string | null
    link: string | null
    file_url: string | null
    published: boolean
    order: number
    createdAt: Date
    updatedAt: Date
    _count: CertificateCountAggregateOutputType | null
    _avg: CertificateAvgAggregateOutputType | null
    _sum: CertificateSumAggregateOutputType | null
    _min: CertificateMinAggregateOutputType | null
    _max: CertificateMaxAggregateOutputType | null
  }

  type GetCertificateGroupByPayload<T extends CertificateGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CertificateGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CertificateGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CertificateGroupByOutputType[P]>
            : GetScalarType<T[P], CertificateGroupByOutputType[P]>
        }
      >
    >


  export type CertificateSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    issue_date?: boolean
    credential_id?: boolean
    link?: boolean
    file_url?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    issue_date?: boolean
    credential_id?: boolean
    link?: boolean
    file_url?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    issuer?: boolean
    issue_date?: boolean
    credential_id?: boolean
    link?: boolean
    file_url?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["certificate"]>

  export type CertificateSelectScalar = {
    id?: boolean
    name?: boolean
    issuer?: boolean
    issue_date?: boolean
    credential_id?: boolean
    link?: boolean
    file_url?: boolean
    published?: boolean
    order?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CertificateOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "issuer" | "issue_date" | "credential_id" | "link" | "file_url" | "published" | "order" | "createdAt" | "updatedAt", ExtArgs["result"]["certificate"]>

  export type $CertificatePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Certificate"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      issuer: string
      issue_date: Date
      credential_id: string | null
      link: string | null
      file_url: string | null
      published: boolean
      order: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["certificate"]>
    composites: {}
  }

  type CertificateGetPayload<S extends boolean | null | undefined | CertificateDefaultArgs> = $Result.GetResult<Prisma.$CertificatePayload, S>

  type CertificateCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CertificateFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CertificateCountAggregateInputType | true
    }

  export interface CertificateDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Certificate'], meta: { name: 'Certificate' } }
    /**
     * Find zero or one Certificate that matches the filter.
     * @param {CertificateFindUniqueArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CertificateFindUniqueArgs>(args: SelectSubset<T, CertificateFindUniqueArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Certificate that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CertificateFindUniqueOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CertificateFindUniqueOrThrowArgs>(args: SelectSubset<T, CertificateFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CertificateFindFirstArgs>(args?: SelectSubset<T, CertificateFindFirstArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Certificate that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindFirstOrThrowArgs} args - Arguments to find a Certificate
     * @example
     * // Get one Certificate
     * const certificate = await prisma.certificate.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CertificateFindFirstOrThrowArgs>(args?: SelectSubset<T, CertificateFindFirstOrThrowArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Certificates that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Certificates
     * const certificates = await prisma.certificate.findMany()
     * 
     * // Get first 10 Certificates
     * const certificates = await prisma.certificate.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const certificateWithIdOnly = await prisma.certificate.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CertificateFindManyArgs>(args?: SelectSubset<T, CertificateFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Certificate.
     * @param {CertificateCreateArgs} args - Arguments to create a Certificate.
     * @example
     * // Create one Certificate
     * const Certificate = await prisma.certificate.create({
     *   data: {
     *     // ... data to create a Certificate
     *   }
     * })
     * 
     */
    create<T extends CertificateCreateArgs>(args: SelectSubset<T, CertificateCreateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Certificates.
     * @param {CertificateCreateManyArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CertificateCreateManyArgs>(args?: SelectSubset<T, CertificateCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Certificates and returns the data saved in the database.
     * @param {CertificateCreateManyAndReturnArgs} args - Arguments to create many Certificates.
     * @example
     * // Create many Certificates
     * const certificate = await prisma.certificate.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CertificateCreateManyAndReturnArgs>(args?: SelectSubset<T, CertificateCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Certificate.
     * @param {CertificateDeleteArgs} args - Arguments to delete one Certificate.
     * @example
     * // Delete one Certificate
     * const Certificate = await prisma.certificate.delete({
     *   where: {
     *     // ... filter to delete one Certificate
     *   }
     * })
     * 
     */
    delete<T extends CertificateDeleteArgs>(args: SelectSubset<T, CertificateDeleteArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Certificate.
     * @param {CertificateUpdateArgs} args - Arguments to update one Certificate.
     * @example
     * // Update one Certificate
     * const certificate = await prisma.certificate.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CertificateUpdateArgs>(args: SelectSubset<T, CertificateUpdateArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Certificates.
     * @param {CertificateDeleteManyArgs} args - Arguments to filter Certificates to delete.
     * @example
     * // Delete a few Certificates
     * const { count } = await prisma.certificate.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CertificateDeleteManyArgs>(args?: SelectSubset<T, CertificateDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CertificateUpdateManyArgs>(args: SelectSubset<T, CertificateUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Certificates and returns the data updated in the database.
     * @param {CertificateUpdateManyAndReturnArgs} args - Arguments to update many Certificates.
     * @example
     * // Update many Certificates
     * const certificate = await prisma.certificate.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Certificates and only return the `id`
     * const certificateWithIdOnly = await prisma.certificate.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CertificateUpdateManyAndReturnArgs>(args: SelectSubset<T, CertificateUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Certificate.
     * @param {CertificateUpsertArgs} args - Arguments to update or create a Certificate.
     * @example
     * // Update or create a Certificate
     * const certificate = await prisma.certificate.upsert({
     *   create: {
     *     // ... data to create a Certificate
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Certificate we want to update
     *   }
     * })
     */
    upsert<T extends CertificateUpsertArgs>(args: SelectSubset<T, CertificateUpsertArgs<ExtArgs>>): Prisma__CertificateClient<$Result.GetResult<Prisma.$CertificatePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Certificates.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateCountArgs} args - Arguments to filter Certificates to count.
     * @example
     * // Count the number of Certificates
     * const count = await prisma.certificate.count({
     *   where: {
     *     // ... the filter for the Certificates we want to count
     *   }
     * })
    **/
    count<T extends CertificateCountArgs>(
      args?: Subset<T, CertificateCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CertificateCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CertificateAggregateArgs>(args: Subset<T, CertificateAggregateArgs>): Prisma.PrismaPromise<GetCertificateAggregateType<T>>

    /**
     * Group by Certificate.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CertificateGroupByArgs} args - Group by arguments.
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
      T extends CertificateGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CertificateGroupByArgs['orderBy'] }
        : { orderBy?: CertificateGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CertificateGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCertificateGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Certificate model
   */
  readonly fields: CertificateFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Certificate.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CertificateClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the Certificate model
   */
  interface CertificateFieldRefs {
    readonly id: FieldRef<"Certificate", 'String'>
    readonly name: FieldRef<"Certificate", 'String'>
    readonly issuer: FieldRef<"Certificate", 'String'>
    readonly issue_date: FieldRef<"Certificate", 'DateTime'>
    readonly credential_id: FieldRef<"Certificate", 'String'>
    readonly link: FieldRef<"Certificate", 'String'>
    readonly file_url: FieldRef<"Certificate", 'String'>
    readonly published: FieldRef<"Certificate", 'Boolean'>
    readonly order: FieldRef<"Certificate", 'Int'>
    readonly createdAt: FieldRef<"Certificate", 'DateTime'>
    readonly updatedAt: FieldRef<"Certificate", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Certificate findUnique
   */
  export type CertificateFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findUniqueOrThrow
   */
  export type CertificateFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate findFirst
   */
  export type CertificateFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findFirstOrThrow
   */
  export type CertificateFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificate to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Certificates.
     */
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate findMany
   */
  export type CertificateFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter, which Certificates to fetch.
     */
    where?: CertificateWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Certificates to fetch.
     */
    orderBy?: CertificateOrderByWithRelationInput | CertificateOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Certificates.
     */
    cursor?: CertificateWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Certificates from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Certificates.
     */
    skip?: number
    distinct?: CertificateScalarFieldEnum | CertificateScalarFieldEnum[]
  }

  /**
   * Certificate create
   */
  export type CertificateCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data needed to create a Certificate.
     */
    data: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
  }

  /**
   * Certificate createMany
   */
  export type CertificateCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate createManyAndReturn
   */
  export type CertificateCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to create many Certificates.
     */
    data: CertificateCreateManyInput | CertificateCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Certificate update
   */
  export type CertificateUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data needed to update a Certificate.
     */
    data: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
    /**
     * Choose, which Certificate to update.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate updateMany
   */
  export type CertificateUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate updateManyAndReturn
   */
  export type CertificateUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The data used to update Certificates.
     */
    data: XOR<CertificateUpdateManyMutationInput, CertificateUncheckedUpdateManyInput>
    /**
     * Filter which Certificates to update
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to update.
     */
    limit?: number
  }

  /**
   * Certificate upsert
   */
  export type CertificateUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * The filter to search for the Certificate to update in case it exists.
     */
    where: CertificateWhereUniqueInput
    /**
     * In case the Certificate found by the `where` argument doesn't exist, create a new Certificate with this data.
     */
    create: XOR<CertificateCreateInput, CertificateUncheckedCreateInput>
    /**
     * In case the Certificate was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CertificateUpdateInput, CertificateUncheckedUpdateInput>
  }

  /**
   * Certificate delete
   */
  export type CertificateDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
    /**
     * Filter which Certificate to delete.
     */
    where: CertificateWhereUniqueInput
  }

  /**
   * Certificate deleteMany
   */
  export type CertificateDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Certificates to delete
     */
    where?: CertificateWhereInput
    /**
     * Limit how many Certificates to delete.
     */
    limit?: number
  }

  /**
   * Certificate without action
   */
  export type CertificateDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Certificate
     */
    select?: CertificateSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Certificate
     */
    omit?: CertificateOmit<ExtArgs> | null
  }


  /**
   * Model PageView
   */

  export type AggregatePageView = {
    _count: PageViewCountAggregateOutputType | null
    _avg: PageViewAvgAggregateOutputType | null
    _sum: PageViewSumAggregateOutputType | null
    _min: PageViewMinAggregateOutputType | null
    _max: PageViewMaxAggregateOutputType | null
  }

  export type PageViewAvgAggregateOutputType = {
    count: number | null
  }

  export type PageViewSumAggregateOutputType = {
    count: number | null
  }

  export type PageViewMinAggregateOutputType = {
    id: string | null
    path: string | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageViewMaxAggregateOutputType = {
    id: string | null
    path: string | null
    count: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type PageViewCountAggregateOutputType = {
    id: number
    path: number
    count: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type PageViewAvgAggregateInputType = {
    count?: true
  }

  export type PageViewSumAggregateInputType = {
    count?: true
  }

  export type PageViewMinAggregateInputType = {
    id?: true
    path?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageViewMaxAggregateInputType = {
    id?: true
    path?: true
    count?: true
    createdAt?: true
    updatedAt?: true
  }

  export type PageViewCountAggregateInputType = {
    id?: true
    path?: true
    count?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type PageViewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageView to aggregate.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PageViews
    **/
    _count?: true | PageViewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PageViewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PageViewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PageViewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PageViewMaxAggregateInputType
  }

  export type GetPageViewAggregateType<T extends PageViewAggregateArgs> = {
        [P in keyof T & keyof AggregatePageView]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePageView[P]>
      : GetScalarType<T[P], AggregatePageView[P]>
  }




  export type PageViewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PageViewWhereInput
    orderBy?: PageViewOrderByWithAggregationInput | PageViewOrderByWithAggregationInput[]
    by: PageViewScalarFieldEnum[] | PageViewScalarFieldEnum
    having?: PageViewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PageViewCountAggregateInputType | true
    _avg?: PageViewAvgAggregateInputType
    _sum?: PageViewSumAggregateInputType
    _min?: PageViewMinAggregateInputType
    _max?: PageViewMaxAggregateInputType
  }

  export type PageViewGroupByOutputType = {
    id: string
    path: string
    count: number
    createdAt: Date
    updatedAt: Date
    _count: PageViewCountAggregateOutputType | null
    _avg: PageViewAvgAggregateOutputType | null
    _sum: PageViewSumAggregateOutputType | null
    _min: PageViewMinAggregateOutputType | null
    _max: PageViewMaxAggregateOutputType | null
  }

  type GetPageViewGroupByPayload<T extends PageViewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PageViewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PageViewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PageViewGroupByOutputType[P]>
            : GetScalarType<T[P], PageViewGroupByOutputType[P]>
        }
      >
    >


  export type PageViewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["pageView"]>

  export type PageViewSelectScalar = {
    id?: boolean
    path?: boolean
    count?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type PageViewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "count" | "createdAt" | "updatedAt", ExtArgs["result"]["pageView"]>

  export type $PageViewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PageView"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      count: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["pageView"]>
    composites: {}
  }

  type PageViewGetPayload<S extends boolean | null | undefined | PageViewDefaultArgs> = $Result.GetResult<Prisma.$PageViewPayload, S>

  type PageViewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PageViewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PageViewCountAggregateInputType | true
    }

  export interface PageViewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PageView'], meta: { name: 'PageView' } }
    /**
     * Find zero or one PageView that matches the filter.
     * @param {PageViewFindUniqueArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PageViewFindUniqueArgs>(args: SelectSubset<T, PageViewFindUniqueArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PageView that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PageViewFindUniqueOrThrowArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PageViewFindUniqueOrThrowArgs>(args: SelectSubset<T, PageViewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageView that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindFirstArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PageViewFindFirstArgs>(args?: SelectSubset<T, PageViewFindFirstArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PageView that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindFirstOrThrowArgs} args - Arguments to find a PageView
     * @example
     * // Get one PageView
     * const pageView = await prisma.pageView.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PageViewFindFirstOrThrowArgs>(args?: SelectSubset<T, PageViewFindFirstOrThrowArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PageViews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PageViews
     * const pageViews = await prisma.pageView.findMany()
     * 
     * // Get first 10 PageViews
     * const pageViews = await prisma.pageView.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const pageViewWithIdOnly = await prisma.pageView.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PageViewFindManyArgs>(args?: SelectSubset<T, PageViewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PageView.
     * @param {PageViewCreateArgs} args - Arguments to create a PageView.
     * @example
     * // Create one PageView
     * const PageView = await prisma.pageView.create({
     *   data: {
     *     // ... data to create a PageView
     *   }
     * })
     * 
     */
    create<T extends PageViewCreateArgs>(args: SelectSubset<T, PageViewCreateArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PageViews.
     * @param {PageViewCreateManyArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageView = await prisma.pageView.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PageViewCreateManyArgs>(args?: SelectSubset<T, PageViewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PageViews and returns the data saved in the database.
     * @param {PageViewCreateManyAndReturnArgs} args - Arguments to create many PageViews.
     * @example
     * // Create many PageViews
     * const pageView = await prisma.pageView.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PageViews and only return the `id`
     * const pageViewWithIdOnly = await prisma.pageView.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PageViewCreateManyAndReturnArgs>(args?: SelectSubset<T, PageViewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PageView.
     * @param {PageViewDeleteArgs} args - Arguments to delete one PageView.
     * @example
     * // Delete one PageView
     * const PageView = await prisma.pageView.delete({
     *   where: {
     *     // ... filter to delete one PageView
     *   }
     * })
     * 
     */
    delete<T extends PageViewDeleteArgs>(args: SelectSubset<T, PageViewDeleteArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PageView.
     * @param {PageViewUpdateArgs} args - Arguments to update one PageView.
     * @example
     * // Update one PageView
     * const pageView = await prisma.pageView.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PageViewUpdateArgs>(args: SelectSubset<T, PageViewUpdateArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PageViews.
     * @param {PageViewDeleteManyArgs} args - Arguments to filter PageViews to delete.
     * @example
     * // Delete a few PageViews
     * const { count } = await prisma.pageView.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PageViewDeleteManyArgs>(args?: SelectSubset<T, PageViewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PageViews
     * const pageView = await prisma.pageView.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PageViewUpdateManyArgs>(args: SelectSubset<T, PageViewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PageViews and returns the data updated in the database.
     * @param {PageViewUpdateManyAndReturnArgs} args - Arguments to update many PageViews.
     * @example
     * // Update many PageViews
     * const pageView = await prisma.pageView.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PageViews and only return the `id`
     * const pageViewWithIdOnly = await prisma.pageView.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PageViewUpdateManyAndReturnArgs>(args: SelectSubset<T, PageViewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PageView.
     * @param {PageViewUpsertArgs} args - Arguments to update or create a PageView.
     * @example
     * // Update or create a PageView
     * const pageView = await prisma.pageView.upsert({
     *   create: {
     *     // ... data to create a PageView
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PageView we want to update
     *   }
     * })
     */
    upsert<T extends PageViewUpsertArgs>(args: SelectSubset<T, PageViewUpsertArgs<ExtArgs>>): Prisma__PageViewClient<$Result.GetResult<Prisma.$PageViewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PageViews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewCountArgs} args - Arguments to filter PageViews to count.
     * @example
     * // Count the number of PageViews
     * const count = await prisma.pageView.count({
     *   where: {
     *     // ... the filter for the PageViews we want to count
     *   }
     * })
    **/
    count<T extends PageViewCountArgs>(
      args?: Subset<T, PageViewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PageViewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PageViewAggregateArgs>(args: Subset<T, PageViewAggregateArgs>): Prisma.PrismaPromise<GetPageViewAggregateType<T>>

    /**
     * Group by PageView.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PageViewGroupByArgs} args - Group by arguments.
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
      T extends PageViewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PageViewGroupByArgs['orderBy'] }
        : { orderBy?: PageViewGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PageViewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPageViewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PageView model
   */
  readonly fields: PageViewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PageView.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PageViewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
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
   * Fields of the PageView model
   */
  interface PageViewFieldRefs {
    readonly id: FieldRef<"PageView", 'String'>
    readonly path: FieldRef<"PageView", 'String'>
    readonly count: FieldRef<"PageView", 'Int'>
    readonly createdAt: FieldRef<"PageView", 'DateTime'>
    readonly updatedAt: FieldRef<"PageView", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * PageView findUnique
   */
  export type PageViewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView findUniqueOrThrow
   */
  export type PageViewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView findFirst
   */
  export type PageViewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * PageView findFirstOrThrow
   */
  export type PageViewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageView to fetch.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PageViews.
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PageViews.
     */
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * PageView findMany
   */
  export type PageViewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter, which PageViews to fetch.
     */
    where?: PageViewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PageViews to fetch.
     */
    orderBy?: PageViewOrderByWithRelationInput | PageViewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PageViews.
     */
    cursor?: PageViewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PageViews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PageViews.
     */
    skip?: number
    distinct?: PageViewScalarFieldEnum | PageViewScalarFieldEnum[]
  }

  /**
   * PageView create
   */
  export type PageViewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data needed to create a PageView.
     */
    data: XOR<PageViewCreateInput, PageViewUncheckedCreateInput>
  }

  /**
   * PageView createMany
   */
  export type PageViewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PageViews.
     */
    data: PageViewCreateManyInput | PageViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageView createManyAndReturn
   */
  export type PageViewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data used to create many PageViews.
     */
    data: PageViewCreateManyInput | PageViewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * PageView update
   */
  export type PageViewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data needed to update a PageView.
     */
    data: XOR<PageViewUpdateInput, PageViewUncheckedUpdateInput>
    /**
     * Choose, which PageView to update.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView updateMany
   */
  export type PageViewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewWhereInput
    /**
     * Limit how many PageViews to update.
     */
    limit?: number
  }

  /**
   * PageView updateManyAndReturn
   */
  export type PageViewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The data used to update PageViews.
     */
    data: XOR<PageViewUpdateManyMutationInput, PageViewUncheckedUpdateManyInput>
    /**
     * Filter which PageViews to update
     */
    where?: PageViewWhereInput
    /**
     * Limit how many PageViews to update.
     */
    limit?: number
  }

  /**
   * PageView upsert
   */
  export type PageViewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * The filter to search for the PageView to update in case it exists.
     */
    where: PageViewWhereUniqueInput
    /**
     * In case the PageView found by the `where` argument doesn't exist, create a new PageView with this data.
     */
    create: XOR<PageViewCreateInput, PageViewUncheckedCreateInput>
    /**
     * In case the PageView was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PageViewUpdateInput, PageViewUncheckedUpdateInput>
  }

  /**
   * PageView delete
   */
  export type PageViewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
    /**
     * Filter which PageView to delete.
     */
    where: PageViewWhereUniqueInput
  }

  /**
   * PageView deleteMany
   */
  export type PageViewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PageViews to delete
     */
    where?: PageViewWhereInput
    /**
     * Limit how many PageViews to delete.
     */
    limit?: number
  }

  /**
   * PageView without action
   */
  export type PageViewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PageView
     */
    select?: PageViewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PageView
     */
    omit?: PageViewOmit<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const HeroScalarFieldEnum: {
    id: 'id',
    title_en: 'title_en',
    title_id: 'title_id',
    subtitle_en: 'subtitle_en',
    subtitle_id: 'subtitle_id',
    cta_en: 'cta_en',
    cta_id: 'cta_id',
    badge_en: 'badge_en',
    badge_id: 'badge_id',
    image: 'image',
    cv_url: 'cv_url',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HeroScalarFieldEnum = (typeof HeroScalarFieldEnum)[keyof typeof HeroScalarFieldEnum]


  export const AboutScalarFieldEnum: {
    id: 'id',
    description_en: 'description_en',
    description_id: 'description_id',
    image: 'image',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AboutScalarFieldEnum = (typeof AboutScalarFieldEnum)[keyof typeof AboutScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    level: 'level',
    category: 'category',
    icon: 'icon',
    published: 'published',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    title_en: 'title_en',
    title_id: 'title_id',
    description_en: 'description_en',
    description_id: 'description_id',
    image: 'image',
    tech_stack: 'tech_stack',
    link: 'link',
    github: 'github',
    category: 'category',
    featured: 'featured',
    published: 'published',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const ExperienceScalarFieldEnum: {
    id: 'id',
    title_en: 'title_en',
    title_id: 'title_id',
    company: 'company',
    location: 'location',
    start_date: 'start_date',
    end_date: 'end_date',
    description_en: 'description_en',
    description_id: 'description_id',
    published: 'published',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExperienceScalarFieldEnum = (typeof ExperienceScalarFieldEnum)[keyof typeof ExperienceScalarFieldEnum]


  export const SocialScalarFieldEnum: {
    id: 'id',
    name: 'name',
    link: 'link',
    icon: 'icon',
    published: 'published',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SocialScalarFieldEnum = (typeof SocialScalarFieldEnum)[keyof typeof SocialScalarFieldEnum]


  export const ContactScalarFieldEnum: {
    id: 'id',
    email: 'email',
    phone: 'phone',
    location: 'location',
    title_en: 'title_en',
    title_id: 'title_id',
    desc_en: 'desc_en',
    desc_id: 'desc_id',
    footer_copy: 'footer_copy',
    footer_made: 'footer_made',
    portfolio_extra_en: 'portfolio_extra_en',
    portfolio_extra_id: 'portfolio_extra_id',
    published: 'published',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContactScalarFieldEnum = (typeof ContactScalarFieldEnum)[keyof typeof ContactScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    subject: 'subject',
    message: 'message',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const CertificateScalarFieldEnum: {
    id: 'id',
    name: 'name',
    issuer: 'issuer',
    issue_date: 'issue_date',
    credential_id: 'credential_id',
    link: 'link',
    file_url: 'file_url',
    published: 'published',
    order: 'order',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CertificateScalarFieldEnum = (typeof CertificateScalarFieldEnum)[keyof typeof CertificateScalarFieldEnum]


  export const PageViewScalarFieldEnum: {
    id: 'id',
    path: 'path',
    count: 'count',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type PageViewScalarFieldEnum = (typeof PageViewScalarFieldEnum)[keyof typeof PageViewScalarFieldEnum]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type HeroWhereInput = {
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    id?: StringFilter<"Hero"> | string
    title_en?: StringFilter<"Hero"> | string
    title_id?: StringFilter<"Hero"> | string
    subtitle_en?: StringFilter<"Hero"> | string
    subtitle_id?: StringFilter<"Hero"> | string
    cta_en?: StringFilter<"Hero"> | string
    cta_id?: StringFilter<"Hero"> | string
    badge_en?: StringFilter<"Hero"> | string
    badge_id?: StringFilter<"Hero"> | string
    image?: StringNullableFilter<"Hero"> | string | null
    cv_url?: StringNullableFilter<"Hero"> | string | null
    published?: BoolFilter<"Hero"> | boolean
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
  }

  export type HeroOrderByWithRelationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    subtitle_en?: SortOrder
    subtitle_id?: SortOrder
    cta_en?: SortOrder
    cta_id?: SortOrder
    badge_en?: SortOrder
    badge_id?: SortOrder
    image?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: HeroWhereInput | HeroWhereInput[]
    OR?: HeroWhereInput[]
    NOT?: HeroWhereInput | HeroWhereInput[]
    title_en?: StringFilter<"Hero"> | string
    title_id?: StringFilter<"Hero"> | string
    subtitle_en?: StringFilter<"Hero"> | string
    subtitle_id?: StringFilter<"Hero"> | string
    cta_en?: StringFilter<"Hero"> | string
    cta_id?: StringFilter<"Hero"> | string
    badge_en?: StringFilter<"Hero"> | string
    badge_id?: StringFilter<"Hero"> | string
    image?: StringNullableFilter<"Hero"> | string | null
    cv_url?: StringNullableFilter<"Hero"> | string | null
    published?: BoolFilter<"Hero"> | boolean
    createdAt?: DateTimeFilter<"Hero"> | Date | string
    updatedAt?: DateTimeFilter<"Hero"> | Date | string
  }, "id">

  export type HeroOrderByWithAggregationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    subtitle_en?: SortOrder
    subtitle_id?: SortOrder
    cta_en?: SortOrder
    cta_id?: SortOrder
    badge_en?: SortOrder
    badge_id?: SortOrder
    image?: SortOrderInput | SortOrder
    cv_url?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HeroCountOrderByAggregateInput
    _max?: HeroMaxOrderByAggregateInput
    _min?: HeroMinOrderByAggregateInput
  }

  export type HeroScalarWhereWithAggregatesInput = {
    AND?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    OR?: HeroScalarWhereWithAggregatesInput[]
    NOT?: HeroScalarWhereWithAggregatesInput | HeroScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Hero"> | string
    title_en?: StringWithAggregatesFilter<"Hero"> | string
    title_id?: StringWithAggregatesFilter<"Hero"> | string
    subtitle_en?: StringWithAggregatesFilter<"Hero"> | string
    subtitle_id?: StringWithAggregatesFilter<"Hero"> | string
    cta_en?: StringWithAggregatesFilter<"Hero"> | string
    cta_id?: StringWithAggregatesFilter<"Hero"> | string
    badge_en?: StringWithAggregatesFilter<"Hero"> | string
    badge_id?: StringWithAggregatesFilter<"Hero"> | string
    image?: StringNullableWithAggregatesFilter<"Hero"> | string | null
    cv_url?: StringNullableWithAggregatesFilter<"Hero"> | string | null
    published?: BoolWithAggregatesFilter<"Hero"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Hero"> | Date | string
  }

  export type AboutWhereInput = {
    AND?: AboutWhereInput | AboutWhereInput[]
    OR?: AboutWhereInput[]
    NOT?: AboutWhereInput | AboutWhereInput[]
    id?: StringFilter<"About"> | string
    description_en?: StringFilter<"About"> | string
    description_id?: StringFilter<"About"> | string
    image?: StringNullableFilter<"About"> | string | null
    published?: BoolFilter<"About"> | boolean
    createdAt?: DateTimeFilter<"About"> | Date | string
    updatedAt?: DateTimeFilter<"About"> | Date | string
  }

  export type AboutOrderByWithRelationInput = {
    id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AboutWhereInput | AboutWhereInput[]
    OR?: AboutWhereInput[]
    NOT?: AboutWhereInput | AboutWhereInput[]
    description_en?: StringFilter<"About"> | string
    description_id?: StringFilter<"About"> | string
    image?: StringNullableFilter<"About"> | string | null
    published?: BoolFilter<"About"> | boolean
    createdAt?: DateTimeFilter<"About"> | Date | string
    updatedAt?: DateTimeFilter<"About"> | Date | string
  }, "id">

  export type AboutOrderByWithAggregationInput = {
    id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AboutCountOrderByAggregateInput
    _max?: AboutMaxOrderByAggregateInput
    _min?: AboutMinOrderByAggregateInput
  }

  export type AboutScalarWhereWithAggregatesInput = {
    AND?: AboutScalarWhereWithAggregatesInput | AboutScalarWhereWithAggregatesInput[]
    OR?: AboutScalarWhereWithAggregatesInput[]
    NOT?: AboutScalarWhereWithAggregatesInput | AboutScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"About"> | string
    description_en?: StringWithAggregatesFilter<"About"> | string
    description_id?: StringWithAggregatesFilter<"About"> | string
    image?: StringNullableWithAggregatesFilter<"About"> | string | null
    published?: BoolWithAggregatesFilter<"About"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"About"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"About"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    level?: IntFilter<"Skill"> | number
    category?: StringFilter<"Skill"> | string
    icon?: StringNullableFilter<"Skill"> | string | null
    published?: BoolFilter<"Skill"> | boolean
    order?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    category?: SortOrder
    icon?: SortOrderInput | SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    level?: IntFilter<"Skill"> | number
    category?: StringFilter<"Skill"> | string
    icon?: StringNullableFilter<"Skill"> | string | null
    published?: BoolFilter<"Skill"> | boolean
    order?: IntFilter<"Skill"> | number
    createdAt?: DateTimeFilter<"Skill"> | Date | string
    updatedAt?: DateTimeFilter<"Skill"> | Date | string
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    category?: SortOrder
    icon?: SortOrderInput | SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _avg?: SkillAvgOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
    _sum?: SkillSumOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    level?: IntWithAggregatesFilter<"Skill"> | number
    category?: StringWithAggregatesFilter<"Skill"> | string
    icon?: StringNullableWithAggregatesFilter<"Skill"> | string | null
    published?: BoolWithAggregatesFilter<"Skill"> | boolean
    order?: IntWithAggregatesFilter<"Skill"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Skill"> | Date | string
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    title_en?: StringFilter<"Project"> | string
    title_id?: StringFilter<"Project"> | string
    description_en?: StringFilter<"Project"> | string
    description_id?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    tech_stack?: StringNullableListFilter<"Project">
    link?: StringNullableFilter<"Project"> | string | null
    github?: StringNullableFilter<"Project"> | string | null
    category?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    published?: BoolFilter<"Project"> | boolean
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrderInput | SortOrder
    tech_stack?: SortOrder
    link?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    category?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    title_en?: StringFilter<"Project"> | string
    title_id?: StringFilter<"Project"> | string
    description_en?: StringFilter<"Project"> | string
    description_id?: StringFilter<"Project"> | string
    image?: StringNullableFilter<"Project"> | string | null
    tech_stack?: StringNullableListFilter<"Project">
    link?: StringNullableFilter<"Project"> | string | null
    github?: StringNullableFilter<"Project"> | string | null
    category?: StringFilter<"Project"> | string
    featured?: BoolFilter<"Project"> | boolean
    published?: BoolFilter<"Project"> | boolean
    order?: IntFilter<"Project"> | number
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrderInput | SortOrder
    tech_stack?: SortOrder
    link?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    category?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _avg?: ProjectAvgOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
    _sum?: ProjectSumOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    title_en?: StringWithAggregatesFilter<"Project"> | string
    title_id?: StringWithAggregatesFilter<"Project"> | string
    description_en?: StringWithAggregatesFilter<"Project"> | string
    description_id?: StringWithAggregatesFilter<"Project"> | string
    image?: StringNullableWithAggregatesFilter<"Project"> | string | null
    tech_stack?: StringNullableListFilter<"Project">
    link?: StringNullableWithAggregatesFilter<"Project"> | string | null
    github?: StringNullableWithAggregatesFilter<"Project"> | string | null
    category?: StringWithAggregatesFilter<"Project"> | string
    featured?: BoolWithAggregatesFilter<"Project"> | boolean
    published?: BoolWithAggregatesFilter<"Project"> | boolean
    order?: IntWithAggregatesFilter<"Project"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
  }

  export type ExperienceWhereInput = {
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    id?: StringFilter<"Experience"> | string
    title_en?: StringFilter<"Experience"> | string
    title_id?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    start_date?: DateTimeFilter<"Experience"> | Date | string
    end_date?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description_en?: StringFilter<"Experience"> | string
    description_id?: StringFilter<"Experience"> | string
    published?: BoolFilter<"Experience"> | boolean
    order?: IntFilter<"Experience"> | number
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
  }

  export type ExperienceOrderByWithRelationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    company?: SortOrder
    location?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExperienceWhereInput | ExperienceWhereInput[]
    OR?: ExperienceWhereInput[]
    NOT?: ExperienceWhereInput | ExperienceWhereInput[]
    title_en?: StringFilter<"Experience"> | string
    title_id?: StringFilter<"Experience"> | string
    company?: StringFilter<"Experience"> | string
    location?: StringNullableFilter<"Experience"> | string | null
    start_date?: DateTimeFilter<"Experience"> | Date | string
    end_date?: DateTimeNullableFilter<"Experience"> | Date | string | null
    description_en?: StringFilter<"Experience"> | string
    description_id?: StringFilter<"Experience"> | string
    published?: BoolFilter<"Experience"> | boolean
    order?: IntFilter<"Experience"> | number
    createdAt?: DateTimeFilter<"Experience"> | Date | string
    updatedAt?: DateTimeFilter<"Experience"> | Date | string
  }, "id">

  export type ExperienceOrderByWithAggregationInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    company?: SortOrder
    location?: SortOrderInput | SortOrder
    start_date?: SortOrder
    end_date?: SortOrderInput | SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExperienceCountOrderByAggregateInput
    _avg?: ExperienceAvgOrderByAggregateInput
    _max?: ExperienceMaxOrderByAggregateInput
    _min?: ExperienceMinOrderByAggregateInput
    _sum?: ExperienceSumOrderByAggregateInput
  }

  export type ExperienceScalarWhereWithAggregatesInput = {
    AND?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    OR?: ExperienceScalarWhereWithAggregatesInput[]
    NOT?: ExperienceScalarWhereWithAggregatesInput | ExperienceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Experience"> | string
    title_en?: StringWithAggregatesFilter<"Experience"> | string
    title_id?: StringWithAggregatesFilter<"Experience"> | string
    company?: StringWithAggregatesFilter<"Experience"> | string
    location?: StringNullableWithAggregatesFilter<"Experience"> | string | null
    start_date?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    end_date?: DateTimeNullableWithAggregatesFilter<"Experience"> | Date | string | null
    description_en?: StringWithAggregatesFilter<"Experience"> | string
    description_id?: StringWithAggregatesFilter<"Experience"> | string
    published?: BoolWithAggregatesFilter<"Experience"> | boolean
    order?: IntWithAggregatesFilter<"Experience"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Experience"> | Date | string
  }

  export type SocialWhereInput = {
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    id?: StringFilter<"Social"> | string
    name?: StringFilter<"Social"> | string
    link?: StringFilter<"Social"> | string
    icon?: StringNullableFilter<"Social"> | string | null
    published?: BoolFilter<"Social"> | boolean
    order?: IntFilter<"Social"> | number
    createdAt?: DateTimeFilter<"Social"> | Date | string
    updatedAt?: DateTimeFilter<"Social"> | Date | string
  }

  export type SocialOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    icon?: SortOrderInput | SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SocialWhereInput | SocialWhereInput[]
    OR?: SocialWhereInput[]
    NOT?: SocialWhereInput | SocialWhereInput[]
    name?: StringFilter<"Social"> | string
    link?: StringFilter<"Social"> | string
    icon?: StringNullableFilter<"Social"> | string | null
    published?: BoolFilter<"Social"> | boolean
    order?: IntFilter<"Social"> | number
    createdAt?: DateTimeFilter<"Social"> | Date | string
    updatedAt?: DateTimeFilter<"Social"> | Date | string
  }, "id">

  export type SocialOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    icon?: SortOrderInput | SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SocialCountOrderByAggregateInput
    _avg?: SocialAvgOrderByAggregateInput
    _max?: SocialMaxOrderByAggregateInput
    _min?: SocialMinOrderByAggregateInput
    _sum?: SocialSumOrderByAggregateInput
  }

  export type SocialScalarWhereWithAggregatesInput = {
    AND?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    OR?: SocialScalarWhereWithAggregatesInput[]
    NOT?: SocialScalarWhereWithAggregatesInput | SocialScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Social"> | string
    name?: StringWithAggregatesFilter<"Social"> | string
    link?: StringWithAggregatesFilter<"Social"> | string
    icon?: StringNullableWithAggregatesFilter<"Social"> | string | null
    published?: BoolWithAggregatesFilter<"Social"> | boolean
    order?: IntWithAggregatesFilter<"Social"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Social"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Social"> | Date | string
  }

  export type ContactWhereInput = {
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    id?: StringFilter<"Contact"> | string
    email?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    location?: StringNullableFilter<"Contact"> | string | null
    title_en?: StringNullableFilter<"Contact"> | string | null
    title_id?: StringNullableFilter<"Contact"> | string | null
    desc_en?: StringNullableFilter<"Contact"> | string | null
    desc_id?: StringNullableFilter<"Contact"> | string | null
    footer_copy?: StringNullableFilter<"Contact"> | string | null
    footer_made?: StringNullableFilter<"Contact"> | string | null
    portfolio_extra_en?: StringNullableFilter<"Contact"> | string | null
    portfolio_extra_id?: StringNullableFilter<"Contact"> | string | null
    published?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }

  export type ContactOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_id?: SortOrderInput | SortOrder
    desc_en?: SortOrderInput | SortOrder
    desc_id?: SortOrderInput | SortOrder
    footer_copy?: SortOrderInput | SortOrder
    footer_made?: SortOrderInput | SortOrder
    portfolio_extra_en?: SortOrderInput | SortOrder
    portfolio_extra_id?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ContactWhereInput | ContactWhereInput[]
    OR?: ContactWhereInput[]
    NOT?: ContactWhereInput | ContactWhereInput[]
    email?: StringFilter<"Contact"> | string
    phone?: StringNullableFilter<"Contact"> | string | null
    location?: StringNullableFilter<"Contact"> | string | null
    title_en?: StringNullableFilter<"Contact"> | string | null
    title_id?: StringNullableFilter<"Contact"> | string | null
    desc_en?: StringNullableFilter<"Contact"> | string | null
    desc_id?: StringNullableFilter<"Contact"> | string | null
    footer_copy?: StringNullableFilter<"Contact"> | string | null
    footer_made?: StringNullableFilter<"Contact"> | string | null
    portfolio_extra_en?: StringNullableFilter<"Contact"> | string | null
    portfolio_extra_id?: StringNullableFilter<"Contact"> | string | null
    published?: BoolFilter<"Contact"> | boolean
    createdAt?: DateTimeFilter<"Contact"> | Date | string
    updatedAt?: DateTimeFilter<"Contact"> | Date | string
  }, "id">

  export type ContactOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    title_en?: SortOrderInput | SortOrder
    title_id?: SortOrderInput | SortOrder
    desc_en?: SortOrderInput | SortOrder
    desc_id?: SortOrderInput | SortOrder
    footer_copy?: SortOrderInput | SortOrder
    footer_made?: SortOrderInput | SortOrder
    portfolio_extra_en?: SortOrderInput | SortOrder
    portfolio_extra_id?: SortOrderInput | SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContactCountOrderByAggregateInput
    _max?: ContactMaxOrderByAggregateInput
    _min?: ContactMinOrderByAggregateInput
  }

  export type ContactScalarWhereWithAggregatesInput = {
    AND?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    OR?: ContactScalarWhereWithAggregatesInput[]
    NOT?: ContactScalarWhereWithAggregatesInput | ContactScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contact"> | string
    email?: StringWithAggregatesFilter<"Contact"> | string
    phone?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    location?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    title_en?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    title_id?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    desc_en?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    desc_id?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    footer_copy?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    footer_made?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    portfolio_extra_en?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    portfolio_extra_id?: StringNullableWithAggregatesFilter<"Contact"> | string | null
    published?: BoolWithAggregatesFilter<"Contact"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contact"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: StringFilter<"Message"> | string
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    message?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    name?: StringFilter<"Message"> | string
    email?: StringFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    message?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrderInput | SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Message"> | string
    name?: StringWithAggregatesFilter<"Message"> | string
    email?: StringWithAggregatesFilter<"Message"> | string
    subject?: StringNullableWithAggregatesFilter<"Message"> | string | null
    message?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type CertificateWhereInput = {
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    id?: StringFilter<"Certificate"> | string
    name?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    issue_date?: DateTimeFilter<"Certificate"> | Date | string
    credential_id?: StringNullableFilter<"Certificate"> | string | null
    link?: StringNullableFilter<"Certificate"> | string | null
    file_url?: StringNullableFilter<"Certificate"> | string | null
    published?: BoolFilter<"Certificate"> | boolean
    order?: IntFilter<"Certificate"> | number
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }

  export type CertificateOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    issue_date?: SortOrder
    credential_id?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CertificateWhereInput | CertificateWhereInput[]
    OR?: CertificateWhereInput[]
    NOT?: CertificateWhereInput | CertificateWhereInput[]
    name?: StringFilter<"Certificate"> | string
    issuer?: StringFilter<"Certificate"> | string
    issue_date?: DateTimeFilter<"Certificate"> | Date | string
    credential_id?: StringNullableFilter<"Certificate"> | string | null
    link?: StringNullableFilter<"Certificate"> | string | null
    file_url?: StringNullableFilter<"Certificate"> | string | null
    published?: BoolFilter<"Certificate"> | boolean
    order?: IntFilter<"Certificate"> | number
    createdAt?: DateTimeFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeFilter<"Certificate"> | Date | string
  }, "id">

  export type CertificateOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    issue_date?: SortOrder
    credential_id?: SortOrderInput | SortOrder
    link?: SortOrderInput | SortOrder
    file_url?: SortOrderInput | SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CertificateCountOrderByAggregateInput
    _avg?: CertificateAvgOrderByAggregateInput
    _max?: CertificateMaxOrderByAggregateInput
    _min?: CertificateMinOrderByAggregateInput
    _sum?: CertificateSumOrderByAggregateInput
  }

  export type CertificateScalarWhereWithAggregatesInput = {
    AND?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    OR?: CertificateScalarWhereWithAggregatesInput[]
    NOT?: CertificateScalarWhereWithAggregatesInput | CertificateScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Certificate"> | string
    name?: StringWithAggregatesFilter<"Certificate"> | string
    issuer?: StringWithAggregatesFilter<"Certificate"> | string
    issue_date?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    credential_id?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    link?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    file_url?: StringNullableWithAggregatesFilter<"Certificate"> | string | null
    published?: BoolWithAggregatesFilter<"Certificate"> | boolean
    order?: IntWithAggregatesFilter<"Certificate"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Certificate"> | Date | string
  }

  export type PageViewWhereInput = {
    AND?: PageViewWhereInput | PageViewWhereInput[]
    OR?: PageViewWhereInput[]
    NOT?: PageViewWhereInput | PageViewWhereInput[]
    id?: StringFilter<"PageView"> | string
    path?: StringFilter<"PageView"> | string
    count?: IntFilter<"PageView"> | number
    createdAt?: DateTimeFilter<"PageView"> | Date | string
    updatedAt?: DateTimeFilter<"PageView"> | Date | string
  }

  export type PageViewOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageViewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    path?: string
    AND?: PageViewWhereInput | PageViewWhereInput[]
    OR?: PageViewWhereInput[]
    NOT?: PageViewWhereInput | PageViewWhereInput[]
    count?: IntFilter<"PageView"> | number
    createdAt?: DateTimeFilter<"PageView"> | Date | string
    updatedAt?: DateTimeFilter<"PageView"> | Date | string
  }, "id" | "path">

  export type PageViewOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: PageViewCountOrderByAggregateInput
    _avg?: PageViewAvgOrderByAggregateInput
    _max?: PageViewMaxOrderByAggregateInput
    _min?: PageViewMinOrderByAggregateInput
    _sum?: PageViewSumOrderByAggregateInput
  }

  export type PageViewScalarWhereWithAggregatesInput = {
    AND?: PageViewScalarWhereWithAggregatesInput | PageViewScalarWhereWithAggregatesInput[]
    OR?: PageViewScalarWhereWithAggregatesInput[]
    NOT?: PageViewScalarWhereWithAggregatesInput | PageViewScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PageView"> | string
    path?: StringWithAggregatesFilter<"PageView"> | string
    count?: IntWithAggregatesFilter<"PageView"> | number
    createdAt?: DateTimeWithAggregatesFilter<"PageView"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"PageView"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name?: string | null
    role?: $Enums.Role
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroCreateInput = {
    id?: string
    title_en: string
    title_id: string
    subtitle_en: string
    subtitle_id: string
    cta_en?: string
    cta_id?: string
    badge_en?: string
    badge_id?: string
    image?: string | null
    cv_url?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroUncheckedCreateInput = {
    id?: string
    title_en: string
    title_id: string
    subtitle_en: string
    subtitle_id: string
    cta_en?: string
    cta_id?: string
    badge_en?: string
    badge_id?: string
    image?: string | null
    cv_url?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    subtitle_en?: StringFieldUpdateOperationsInput | string
    subtitle_id?: StringFieldUpdateOperationsInput | string
    cta_en?: StringFieldUpdateOperationsInput | string
    cta_id?: StringFieldUpdateOperationsInput | string
    badge_en?: StringFieldUpdateOperationsInput | string
    badge_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    subtitle_en?: StringFieldUpdateOperationsInput | string
    subtitle_id?: StringFieldUpdateOperationsInput | string
    cta_en?: StringFieldUpdateOperationsInput | string
    cta_id?: StringFieldUpdateOperationsInput | string
    badge_en?: StringFieldUpdateOperationsInput | string
    badge_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroCreateManyInput = {
    id?: string
    title_en: string
    title_id: string
    subtitle_en: string
    subtitle_id: string
    cta_en?: string
    cta_id?: string
    badge_en?: string
    badge_id?: string
    image?: string | null
    cv_url?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HeroUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    subtitle_en?: StringFieldUpdateOperationsInput | string
    subtitle_id?: StringFieldUpdateOperationsInput | string
    cta_en?: StringFieldUpdateOperationsInput | string
    cta_id?: StringFieldUpdateOperationsInput | string
    badge_en?: StringFieldUpdateOperationsInput | string
    badge_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HeroUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    subtitle_en?: StringFieldUpdateOperationsInput | string
    subtitle_id?: StringFieldUpdateOperationsInput | string
    cta_en?: StringFieldUpdateOperationsInput | string
    cta_id?: StringFieldUpdateOperationsInput | string
    badge_en?: StringFieldUpdateOperationsInput | string
    badge_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    cv_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutCreateInput = {
    id?: string
    description_en: string
    description_id: string
    image?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUncheckedCreateInput = {
    id?: string
    description_en: string
    description_id: string
    image?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutCreateManyInput = {
    id?: string
    description_en: string
    description_id: string
    image?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AboutUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AboutUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    level?: number
    category?: string
    icon?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    level?: number
    category?: string
    icon?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    level?: number
    category?: string
    icon?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    level?: IntFieldUpdateOperationsInput | number
    category?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateInput = {
    id?: string
    title_en: string
    title_id: string
    description_en: string
    description_id: string
    image?: string | null
    tech_stack?: ProjectCreatetech_stackInput | string[]
    link?: string | null
    github?: string | null
    category?: string
    featured?: boolean
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    title_en: string
    title_id: string
    description_en: string
    description_id: string
    image?: string | null
    tech_stack?: ProjectCreatetech_stackInput | string[]
    link?: string | null
    github?: string | null
    category?: string
    featured?: boolean
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tech_stack?: ProjectUpdatetech_stackInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tech_stack?: ProjectUpdatetech_stackInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectCreateManyInput = {
    id?: string
    title_en: string
    title_id: string
    description_en: string
    description_id: string
    image?: string | null
    tech_stack?: ProjectCreatetech_stackInput | string[]
    link?: string | null
    github?: string | null
    category?: string
    featured?: boolean
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tech_stack?: ProjectUpdatetech_stackInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    image?: NullableStringFieldUpdateOperationsInput | string | null
    tech_stack?: ProjectUpdatetech_stackInput | string[]
    link?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    category?: StringFieldUpdateOperationsInput | string
    featured?: BoolFieldUpdateOperationsInput | boolean
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateInput = {
    id?: string
    title_en: string
    title_id: string
    company: string
    location?: string | null
    start_date: Date | string
    end_date?: Date | string | null
    description_en: string
    description_id: string
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUncheckedCreateInput = {
    id?: string
    title_en: string
    title_id: string
    company: string
    location?: string | null
    start_date: Date | string
    end_date?: Date | string | null
    description_en: string
    description_id: string
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceCreateManyInput = {
    id?: string
    title_en: string
    title_id: string
    company: string
    location?: string | null
    start_date: Date | string
    end_date?: Date | string | null
    description_en: string
    description_id: string
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExperienceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExperienceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title_en?: StringFieldUpdateOperationsInput | string
    title_id?: StringFieldUpdateOperationsInput | string
    company?: StringFieldUpdateOperationsInput | string
    location?: NullableStringFieldUpdateOperationsInput | string | null
    start_date?: DateTimeFieldUpdateOperationsInput | Date | string
    end_date?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    description_en?: StringFieldUpdateOperationsInput | string
    description_id?: StringFieldUpdateOperationsInput | string
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCreateInput = {
    id?: string
    name: string
    link: string
    icon?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUncheckedCreateInput = {
    id?: string
    name: string
    link: string
    icon?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialCreateManyInput = {
    id?: string
    name: string
    link: string
    icon?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SocialUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SocialUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateInput = {
    id?: string
    email: string
    phone?: string | null
    location?: string | null
    title_en?: string | null
    title_id?: string | null
    desc_en?: string | null
    desc_id?: string | null
    footer_copy?: string | null
    footer_made?: string | null
    portfolio_extra_en?: string | null
    portfolio_extra_id?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUncheckedCreateInput = {
    id?: string
    email: string
    phone?: string | null
    location?: string | null
    title_en?: string | null
    title_id?: string | null
    desc_en?: string | null
    desc_id?: string | null
    footer_copy?: string | null
    footer_made?: string | null
    portfolio_extra_en?: string | null
    portfolio_extra_id?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    desc_en?: NullableStringFieldUpdateOperationsInput | string | null
    desc_id?: NullableStringFieldUpdateOperationsInput | string | null
    footer_copy?: NullableStringFieldUpdateOperationsInput | string | null
    footer_made?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_en?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_id?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    desc_en?: NullableStringFieldUpdateOperationsInput | string | null
    desc_id?: NullableStringFieldUpdateOperationsInput | string | null
    footer_copy?: NullableStringFieldUpdateOperationsInput | string | null
    footer_made?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_en?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_id?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactCreateManyInput = {
    id?: string
    email: string
    phone?: string | null
    location?: string | null
    title_en?: string | null
    title_id?: string | null
    desc_en?: string | null
    desc_id?: string | null
    footer_copy?: string | null
    footer_made?: string | null
    portfolio_extra_en?: string | null
    portfolio_extra_id?: string | null
    published?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContactUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    desc_en?: NullableStringFieldUpdateOperationsInput | string | null
    desc_id?: NullableStringFieldUpdateOperationsInput | string | null
    footer_copy?: NullableStringFieldUpdateOperationsInput | string | null
    footer_made?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_en?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_id?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContactUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    title_en?: NullableStringFieldUpdateOperationsInput | string | null
    title_id?: NullableStringFieldUpdateOperationsInput | string | null
    desc_en?: NullableStringFieldUpdateOperationsInput | string | null
    desc_id?: NullableStringFieldUpdateOperationsInput | string | null
    footer_copy?: NullableStringFieldUpdateOperationsInput | string | null
    footer_made?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_en?: NullableStringFieldUpdateOperationsInput | string | null
    portfolio_extra_id?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    name: string
    email: string
    subject?: string | null
    message: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateInput = {
    id?: string
    name: string
    issuer: string
    issue_date: Date | string
    credential_id?: string | null
    link?: string | null
    file_url?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUncheckedCreateInput = {
    id?: string
    name: string
    issuer: string
    issue_date: Date | string
    credential_id?: string | null
    link?: string | null
    file_url?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    credential_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    credential_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateCreateManyInput = {
    id?: string
    name: string
    issuer: string
    issue_date: Date | string
    credential_id?: string | null
    link?: string | null
    file_url?: string | null
    published?: boolean
    order?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CertificateUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    credential_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CertificateUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    issuer?: StringFieldUpdateOperationsInput | string
    issue_date?: DateTimeFieldUpdateOperationsInput | Date | string
    credential_id?: NullableStringFieldUpdateOperationsInput | string | null
    link?: NullableStringFieldUpdateOperationsInput | string | null
    file_url?: NullableStringFieldUpdateOperationsInput | string | null
    published?: BoolFieldUpdateOperationsInput | boolean
    order?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewCreateInput = {
    id?: string
    path: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUncheckedCreateInput = {
    id?: string
    path: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewCreateManyInput = {
    id?: string
    path: string
    count?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type PageViewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PageViewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    count?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type HeroCountOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    subtitle_en?: SortOrder
    subtitle_id?: SortOrder
    cta_en?: SortOrder
    cta_id?: SortOrder
    badge_en?: SortOrder
    badge_id?: SortOrder
    image?: SortOrder
    cv_url?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroMaxOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    subtitle_en?: SortOrder
    subtitle_id?: SortOrder
    cta_en?: SortOrder
    cta_id?: SortOrder
    badge_en?: SortOrder
    badge_id?: SortOrder
    image?: SortOrder
    cv_url?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HeroMinOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    subtitle_en?: SortOrder
    subtitle_id?: SortOrder
    cta_en?: SortOrder
    cta_id?: SortOrder
    badge_en?: SortOrder
    badge_id?: SortOrder
    image?: SortOrder
    cv_url?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AboutCountOrderByAggregateInput = {
    id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutMaxOrderByAggregateInput = {
    id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AboutMinOrderByAggregateInput = {
    id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillAvgOrderByAggregateInput = {
    level?: SortOrder
    order?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    level?: SortOrder
    category?: SortOrder
    icon?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SkillSumOrderByAggregateInput = {
    level?: SortOrder
    order?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrder
    tech_stack?: SortOrder
    link?: SortOrder
    github?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrder
    link?: SortOrder
    github?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    image?: SortOrder
    link?: SortOrder
    github?: SortOrder
    category?: SortOrder
    featured?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProjectSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type ExperienceCountOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    company?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ExperienceMaxOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    company?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceMinOrderByAggregateInput = {
    id?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    company?: SortOrder
    location?: SortOrder
    start_date?: SortOrder
    end_date?: SortOrder
    description_en?: SortOrder
    description_id?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExperienceSumOrderByAggregateInput = {
    order?: SortOrder
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

  export type SocialCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type SocialMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    link?: SortOrder
    icon?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SocialSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type ContactCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    desc_en?: SortOrder
    desc_id?: SortOrder
    footer_copy?: SortOrder
    footer_made?: SortOrder
    portfolio_extra_en?: SortOrder
    portfolio_extra_id?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    desc_en?: SortOrder
    desc_id?: SortOrder
    footer_copy?: SortOrder
    footer_made?: SortOrder
    portfolio_extra_en?: SortOrder
    portfolio_extra_id?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContactMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    title_en?: SortOrder
    title_id?: SortOrder
    desc_en?: SortOrder
    desc_id?: SortOrder
    footer_copy?: SortOrder
    footer_made?: SortOrder
    portfolio_extra_en?: SortOrder
    portfolio_extra_id?: SortOrder
    published?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    subject?: SortOrder
    message?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type CertificateCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    issue_date?: SortOrder
    credential_id?: SortOrder
    link?: SortOrder
    file_url?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateAvgOrderByAggregateInput = {
    order?: SortOrder
  }

  export type CertificateMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    issue_date?: SortOrder
    credential_id?: SortOrder
    link?: SortOrder
    file_url?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    issuer?: SortOrder
    issue_date?: SortOrder
    credential_id?: SortOrder
    link?: SortOrder
    file_url?: SortOrder
    published?: SortOrder
    order?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CertificateSumOrderByAggregateInput = {
    order?: SortOrder
  }

  export type PageViewCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageViewAvgOrderByAggregateInput = {
    count?: SortOrder
  }

  export type PageViewMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageViewMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    count?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type PageViewSumOrderByAggregateInput = {
    count?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProjectCreatetech_stackInput = {
    set: string[]
  }

  export type ProjectUpdatetech_stackInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
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

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
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

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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