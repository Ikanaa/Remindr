
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Utilisateur
 * 
 */
export type Utilisateur = $Result.DefaultSelection<Prisma.$UtilisateurPayload>
/**
 * Model Groupe
 * 
 */
export type Groupe = $Result.DefaultSelection<Prisma.$GroupePayload>
/**
 * Model UserXGroup
 * 
 */
export type UserXGroup = $Result.DefaultSelection<Prisma.$UserXGroupPayload>
/**
 * Model Reminder
 * 
 */
export type Reminder = $Result.DefaultSelection<Prisma.$ReminderPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Utilisateurs
 * const utilisateurs = await prisma.utilisateur.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
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
   * // Fetch zero or more Utilisateurs
   * const utilisateurs = await prisma.utilisateur.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.utilisateur`: Exposes CRUD operations for the **Utilisateur** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Utilisateurs
    * const utilisateurs = await prisma.utilisateur.findMany()
    * ```
    */
  get utilisateur(): Prisma.UtilisateurDelegate<ExtArgs>;

  /**
   * `prisma.groupe`: Exposes CRUD operations for the **Groupe** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Groupes
    * const groupes = await prisma.groupe.findMany()
    * ```
    */
  get groupe(): Prisma.GroupeDelegate<ExtArgs>;

  /**
   * `prisma.userXGroup`: Exposes CRUD operations for the **UserXGroup** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserXGroups
    * const userXGroups = await prisma.userXGroup.findMany()
    * ```
    */
  get userXGroup(): Prisma.UserXGroupDelegate<ExtArgs>;

  /**
   * `prisma.reminder`: Exposes CRUD operations for the **Reminder** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reminders
    * const reminders = await prisma.reminder.findMany()
    * ```
    */
  get reminder(): Prisma.ReminderDelegate<ExtArgs>;
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
   * Prisma Client JS version: 5.7.0
   * Query Engine version: 79fb5193cf0a8fdbef536e4b4a159cad677ab1b9
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
    Utilisateur: 'Utilisateur',
    Groupe: 'Groupe',
    UserXGroup: 'UserXGroup',
    Reminder: 'Reminder'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'utilisateur' | 'groupe' | 'userXGroup' | 'reminder'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Utilisateur: {
        payload: Prisma.$UtilisateurPayload<ExtArgs>
        fields: Prisma.UtilisateurFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UtilisateurFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UtilisateurFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findFirst: {
            args: Prisma.UtilisateurFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UtilisateurFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          findMany: {
            args: Prisma.UtilisateurFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>[]
          }
          create: {
            args: Prisma.UtilisateurCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          createMany: {
            args: Prisma.UtilisateurCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UtilisateurDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          update: {
            args: Prisma.UtilisateurUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          deleteMany: {
            args: Prisma.UtilisateurDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UtilisateurUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UtilisateurUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UtilisateurPayload>
          }
          aggregate: {
            args: Prisma.UtilisateurAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUtilisateur>
          }
          groupBy: {
            args: Prisma.UtilisateurGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UtilisateurGroupByOutputType>[]
          }
          count: {
            args: Prisma.UtilisateurCountArgs<ExtArgs>,
            result: $Utils.Optional<UtilisateurCountAggregateOutputType> | number
          }
        }
      }
      Groupe: {
        payload: Prisma.$GroupePayload<ExtArgs>
        fields: Prisma.GroupeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GroupeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GroupeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findFirst: {
            args: Prisma.GroupeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GroupeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          findMany: {
            args: Prisma.GroupeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>[]
          }
          create: {
            args: Prisma.GroupeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          createMany: {
            args: Prisma.GroupeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GroupeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          update: {
            args: Prisma.GroupeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          deleteMany: {
            args: Prisma.GroupeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GroupeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GroupeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GroupePayload>
          }
          aggregate: {
            args: Prisma.GroupeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGroupe>
          }
          groupBy: {
            args: Prisma.GroupeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GroupeGroupByOutputType>[]
          }
          count: {
            args: Prisma.GroupeCountArgs<ExtArgs>,
            result: $Utils.Optional<GroupeCountAggregateOutputType> | number
          }
        }
      }
      UserXGroup: {
        payload: Prisma.$UserXGroupPayload<ExtArgs>
        fields: Prisma.UserXGroupFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserXGroupFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserXGroupFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>
          }
          findFirst: {
            args: Prisma.UserXGroupFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserXGroupFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>
          }
          findMany: {
            args: Prisma.UserXGroupFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>[]
          }
          create: {
            args: Prisma.UserXGroupCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>
          }
          createMany: {
            args: Prisma.UserXGroupCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserXGroupDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>
          }
          update: {
            args: Prisma.UserXGroupUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>
          }
          deleteMany: {
            args: Prisma.UserXGroupDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserXGroupUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserXGroupUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserXGroupPayload>
          }
          aggregate: {
            args: Prisma.UserXGroupAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserXGroup>
          }
          groupBy: {
            args: Prisma.UserXGroupGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserXGroupGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserXGroupCountArgs<ExtArgs>,
            result: $Utils.Optional<UserXGroupCountAggregateOutputType> | number
          }
        }
      }
      Reminder: {
        payload: Prisma.$ReminderPayload<ExtArgs>
        fields: Prisma.ReminderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReminderFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReminderFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findFirst: {
            args: Prisma.ReminderFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReminderFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          findMany: {
            args: Prisma.ReminderFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>[]
          }
          create: {
            args: Prisma.ReminderCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          createMany: {
            args: Prisma.ReminderCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ReminderDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          update: {
            args: Prisma.ReminderUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          deleteMany: {
            args: Prisma.ReminderDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ReminderUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ReminderUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ReminderPayload>
          }
          aggregate: {
            args: Prisma.ReminderAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateReminder>
          }
          groupBy: {
            args: Prisma.ReminderGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ReminderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReminderCountArgs<ExtArgs>,
            result: $Utils.Optional<ReminderCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
   * Count Type UtilisateurCountOutputType
   */

  export type UtilisateurCountOutputType = {
    Owned: number
    UserXGroup: number
  }

  export type UtilisateurCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Owned?: boolean | UtilisateurCountOutputTypeCountOwnedArgs
    UserXGroup?: boolean | UtilisateurCountOutputTypeCountUserXGroupArgs
  }

  // Custom InputTypes

  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UtilisateurCountOutputType
     */
    select?: UtilisateurCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountOwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupeWhereInput
  }


  /**
   * UtilisateurCountOutputType without action
   */
  export type UtilisateurCountOutputTypeCountUserXGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserXGroupWhereInput
  }



  /**
   * Count Type GroupeCountOutputType
   */

  export type GroupeCountOutputType = {
    UserXGroup: number
    Reminder: number
  }

  export type GroupeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserXGroup?: boolean | GroupeCountOutputTypeCountUserXGroupArgs
    Reminder?: boolean | GroupeCountOutputTypeCountReminderArgs
  }

  // Custom InputTypes

  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GroupeCountOutputType
     */
    select?: GroupeCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeCountUserXGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserXGroupWhereInput
  }


  /**
   * GroupeCountOutputType without action
   */
  export type GroupeCountOutputTypeCountReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Utilisateur
   */

  export type AggregateUtilisateur = {
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  export type UtilisateurAvgAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurSumAggregateOutputType = {
    id: number | null
  }

  export type UtilisateurMinAggregateOutputType = {
    id: number | null
    password: string | null
    username: string | null
    email: string | null
  }

  export type UtilisateurMaxAggregateOutputType = {
    id: number | null
    password: string | null
    username: string | null
    email: string | null
  }

  export type UtilisateurCountAggregateOutputType = {
    id: number
    password: number
    username: number
    email: number
    _all: number
  }


  export type UtilisateurAvgAggregateInputType = {
    id?: true
  }

  export type UtilisateurSumAggregateInputType = {
    id?: true
  }

  export type UtilisateurMinAggregateInputType = {
    id?: true
    password?: true
    username?: true
    email?: true
  }

  export type UtilisateurMaxAggregateInputType = {
    id?: true
    password?: true
    username?: true
    email?: true
  }

  export type UtilisateurCountAggregateInputType = {
    id?: true
    password?: true
    username?: true
    email?: true
    _all?: true
  }

  export type UtilisateurAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateur to aggregate.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Utilisateurs
    **/
    _count?: true | UtilisateurCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UtilisateurAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UtilisateurSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UtilisateurMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UtilisateurMaxAggregateInputType
  }

  export type GetUtilisateurAggregateType<T extends UtilisateurAggregateArgs> = {
        [P in keyof T & keyof AggregateUtilisateur]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUtilisateur[P]>
      : GetScalarType<T[P], AggregateUtilisateur[P]>
  }




  export type UtilisateurGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UtilisateurWhereInput
    orderBy?: UtilisateurOrderByWithAggregationInput | UtilisateurOrderByWithAggregationInput[]
    by: UtilisateurScalarFieldEnum[] | UtilisateurScalarFieldEnum
    having?: UtilisateurScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UtilisateurCountAggregateInputType | true
    _avg?: UtilisateurAvgAggregateInputType
    _sum?: UtilisateurSumAggregateInputType
    _min?: UtilisateurMinAggregateInputType
    _max?: UtilisateurMaxAggregateInputType
  }

  export type UtilisateurGroupByOutputType = {
    id: number
    password: string
    username: string
    email: string
    _count: UtilisateurCountAggregateOutputType | null
    _avg: UtilisateurAvgAggregateOutputType | null
    _sum: UtilisateurSumAggregateOutputType | null
    _min: UtilisateurMinAggregateOutputType | null
    _max: UtilisateurMaxAggregateOutputType | null
  }

  type GetUtilisateurGroupByPayload<T extends UtilisateurGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UtilisateurGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UtilisateurGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
            : GetScalarType<T[P], UtilisateurGroupByOutputType[P]>
        }
      >
    >


  export type UtilisateurSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    password?: boolean
    username?: boolean
    email?: boolean
    Owned?: boolean | Utilisateur$OwnedArgs<ExtArgs>
    UserXGroup?: boolean | Utilisateur$UserXGroupArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["utilisateur"]>

  export type UtilisateurSelectScalar = {
    id?: boolean
    password?: boolean
    username?: boolean
    email?: boolean
  }

  export type UtilisateurInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Owned?: boolean | Utilisateur$OwnedArgs<ExtArgs>
    UserXGroup?: boolean | Utilisateur$UserXGroupArgs<ExtArgs>
    _count?: boolean | UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UtilisateurPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Utilisateur"
    objects: {
      Owned: Prisma.$GroupePayload<ExtArgs>[]
      UserXGroup: Prisma.$UserXGroupPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      password: string
      username: string
      email: string
    }, ExtArgs["result"]["utilisateur"]>
    composites: {}
  }


  type UtilisateurGetPayload<S extends boolean | null | undefined | UtilisateurDefaultArgs> = $Result.GetResult<Prisma.$UtilisateurPayload, S>

  type UtilisateurCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UtilisateurFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UtilisateurCountAggregateInputType | true
    }

  export interface UtilisateurDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Utilisateur'], meta: { name: 'Utilisateur' } }
    /**
     * Find zero or one Utilisateur that matches the filter.
     * @param {UtilisateurFindUniqueArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UtilisateurFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurFindUniqueArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Utilisateur that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UtilisateurFindUniqueOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UtilisateurFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Utilisateur that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UtilisateurFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindFirstArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Utilisateur that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindFirstOrThrowArgs} args - Arguments to find a Utilisateur
     * @example
     * // Get one Utilisateur
     * const utilisateur = await prisma.utilisateur.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UtilisateurFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Utilisateurs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany()
     * 
     * // Get first 10 Utilisateurs
     * const utilisateurs = await prisma.utilisateur.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const utilisateurWithIdOnly = await prisma.utilisateur.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UtilisateurFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Utilisateur.
     * @param {UtilisateurCreateArgs} args - Arguments to create a Utilisateur.
     * @example
     * // Create one Utilisateur
     * const Utilisateur = await prisma.utilisateur.create({
     *   data: {
     *     // ... data to create a Utilisateur
     *   }
     * })
     * 
    **/
    create<T extends UtilisateurCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurCreateArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Utilisateurs.
     *     @param {UtilisateurCreateManyArgs} args - Arguments to create many Utilisateurs.
     *     @example
     *     // Create many Utilisateurs
     *     const utilisateur = await prisma.utilisateur.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UtilisateurCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Utilisateur.
     * @param {UtilisateurDeleteArgs} args - Arguments to delete one Utilisateur.
     * @example
     * // Delete one Utilisateur
     * const Utilisateur = await prisma.utilisateur.delete({
     *   where: {
     *     // ... filter to delete one Utilisateur
     *   }
     * })
     * 
    **/
    delete<T extends UtilisateurDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurDeleteArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Utilisateur.
     * @param {UtilisateurUpdateArgs} args - Arguments to update one Utilisateur.
     * @example
     * // Update one Utilisateur
     * const utilisateur = await prisma.utilisateur.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UtilisateurUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpdateArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Utilisateurs.
     * @param {UtilisateurDeleteManyArgs} args - Arguments to filter Utilisateurs to delete.
     * @example
     * // Delete a few Utilisateurs
     * const { count } = await prisma.utilisateur.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UtilisateurDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UtilisateurDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Utilisateurs
     * const utilisateur = await prisma.utilisateur.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UtilisateurUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Utilisateur.
     * @param {UtilisateurUpsertArgs} args - Arguments to update or create a Utilisateur.
     * @example
     * // Update or create a Utilisateur
     * const utilisateur = await prisma.utilisateur.upsert({
     *   create: {
     *     // ... data to create a Utilisateur
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Utilisateur we want to update
     *   }
     * })
    **/
    upsert<T extends UtilisateurUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UtilisateurUpsertArgs<ExtArgs>>
    ): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Utilisateurs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurCountArgs} args - Arguments to filter Utilisateurs to count.
     * @example
     * // Count the number of Utilisateurs
     * const count = await prisma.utilisateur.count({
     *   where: {
     *     // ... the filter for the Utilisateurs we want to count
     *   }
     * })
    **/
    count<T extends UtilisateurCountArgs>(
      args?: Subset<T, UtilisateurCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UtilisateurCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UtilisateurAggregateArgs>(args: Subset<T, UtilisateurAggregateArgs>): Prisma.PrismaPromise<GetUtilisateurAggregateType<T>>

    /**
     * Group by Utilisateur.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UtilisateurGroupByArgs} args - Group by arguments.
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
      T extends UtilisateurGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UtilisateurGroupByArgs['orderBy'] }
        : { orderBy?: UtilisateurGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UtilisateurGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUtilisateurGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Utilisateur model
   */
  readonly fields: UtilisateurFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Utilisateur.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UtilisateurClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Owned<T extends Utilisateur$OwnedArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$OwnedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findMany'> | Null>;

    UserXGroup<T extends Utilisateur$UserXGroupArgs<ExtArgs> = {}>(args?: Subset<T, Utilisateur$UserXGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Utilisateur model
   */ 
  interface UtilisateurFieldRefs {
    readonly id: FieldRef<"Utilisateur", 'Int'>
    readonly password: FieldRef<"Utilisateur", 'String'>
    readonly username: FieldRef<"Utilisateur", 'String'>
    readonly email: FieldRef<"Utilisateur", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Utilisateur findUnique
   */
  export type UtilisateurFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur findUniqueOrThrow
   */
  export type UtilisateurFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur findFirst
   */
  export type UtilisateurFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur findFirstOrThrow
   */
  export type UtilisateurFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateur to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Utilisateurs.
     */
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur findMany
   */
  export type UtilisateurFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter, which Utilisateurs to fetch.
     */
    where?: UtilisateurWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Utilisateurs to fetch.
     */
    orderBy?: UtilisateurOrderByWithRelationInput | UtilisateurOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Utilisateurs.
     */
    cursor?: UtilisateurWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Utilisateurs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Utilisateurs.
     */
    skip?: number
    distinct?: UtilisateurScalarFieldEnum | UtilisateurScalarFieldEnum[]
  }


  /**
   * Utilisateur create
   */
  export type UtilisateurCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to create a Utilisateur.
     */
    data: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
  }


  /**
   * Utilisateur createMany
   */
  export type UtilisateurCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Utilisateurs.
     */
    data: UtilisateurCreateManyInput | UtilisateurCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Utilisateur update
   */
  export type UtilisateurUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The data needed to update a Utilisateur.
     */
    data: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
    /**
     * Choose, which Utilisateur to update.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur updateMany
   */
  export type UtilisateurUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Utilisateurs.
     */
    data: XOR<UtilisateurUpdateManyMutationInput, UtilisateurUncheckedUpdateManyInput>
    /**
     * Filter which Utilisateurs to update
     */
    where?: UtilisateurWhereInput
  }


  /**
   * Utilisateur upsert
   */
  export type UtilisateurUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * The filter to search for the Utilisateur to update in case it exists.
     */
    where: UtilisateurWhereUniqueInput
    /**
     * In case the Utilisateur found by the `where` argument doesn't exist, create a new Utilisateur with this data.
     */
    create: XOR<UtilisateurCreateInput, UtilisateurUncheckedCreateInput>
    /**
     * In case the Utilisateur was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UtilisateurUpdateInput, UtilisateurUncheckedUpdateInput>
  }


  /**
   * Utilisateur delete
   */
  export type UtilisateurDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
    /**
     * Filter which Utilisateur to delete.
     */
    where: UtilisateurWhereUniqueInput
  }


  /**
   * Utilisateur deleteMany
   */
  export type UtilisateurDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Utilisateurs to delete
     */
    where?: UtilisateurWhereInput
  }


  /**
   * Utilisateur.Owned
   */
  export type Utilisateur$OwnedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    where?: GroupeWhereInput
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    cursor?: GroupeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }


  /**
   * Utilisateur.UserXGroup
   */
  export type Utilisateur$UserXGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    where?: UserXGroupWhereInput
    orderBy?: UserXGroupOrderByWithRelationInput | UserXGroupOrderByWithRelationInput[]
    cursor?: UserXGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserXGroupScalarFieldEnum | UserXGroupScalarFieldEnum[]
  }


  /**
   * Utilisateur without action
   */
  export type UtilisateurDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Utilisateur
     */
    select?: UtilisateurSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UtilisateurInclude<ExtArgs> | null
  }



  /**
   * Model Groupe
   */

  export type AggregateGroupe = {
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  export type GroupeAvgAggregateOutputType = {
    id: number | null
    ownerid: number | null
  }

  export type GroupeSumAggregateOutputType = {
    id: number | null
    ownerid: number | null
  }

  export type GroupeMinAggregateOutputType = {
    id: number | null
    name: string | null
    ownerid: number | null
  }

  export type GroupeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    ownerid: number | null
  }

  export type GroupeCountAggregateOutputType = {
    id: number
    name: number
    ownerid: number
    _all: number
  }


  export type GroupeAvgAggregateInputType = {
    id?: true
    ownerid?: true
  }

  export type GroupeSumAggregateInputType = {
    id?: true
    ownerid?: true
  }

  export type GroupeMinAggregateInputType = {
    id?: true
    name?: true
    ownerid?: true
  }

  export type GroupeMaxAggregateInputType = {
    id?: true
    name?: true
    ownerid?: true
  }

  export type GroupeCountAggregateInputType = {
    id?: true
    name?: true
    ownerid?: true
    _all?: true
  }

  export type GroupeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupe to aggregate.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Groupes
    **/
    _count?: true | GroupeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: GroupeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: GroupeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GroupeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GroupeMaxAggregateInputType
  }

  export type GetGroupeAggregateType<T extends GroupeAggregateArgs> = {
        [P in keyof T & keyof AggregateGroupe]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGroupe[P]>
      : GetScalarType<T[P], AggregateGroupe[P]>
  }




  export type GroupeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GroupeWhereInput
    orderBy?: GroupeOrderByWithAggregationInput | GroupeOrderByWithAggregationInput[]
    by: GroupeScalarFieldEnum[] | GroupeScalarFieldEnum
    having?: GroupeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GroupeCountAggregateInputType | true
    _avg?: GroupeAvgAggregateInputType
    _sum?: GroupeSumAggregateInputType
    _min?: GroupeMinAggregateInputType
    _max?: GroupeMaxAggregateInputType
  }

  export type GroupeGroupByOutputType = {
    id: number
    name: string
    ownerid: number
    _count: GroupeCountAggregateOutputType | null
    _avg: GroupeAvgAggregateOutputType | null
    _sum: GroupeSumAggregateOutputType | null
    _min: GroupeMinAggregateOutputType | null
    _max: GroupeMaxAggregateOutputType | null
  }

  type GetGroupeGroupByPayload<T extends GroupeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GroupeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GroupeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GroupeGroupByOutputType[P]>
            : GetScalarType<T[P], GroupeGroupByOutputType[P]>
        }
      >
    >


  export type GroupeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    ownerid?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    UserXGroup?: boolean | Groupe$UserXGroupArgs<ExtArgs>
    Reminder?: boolean | Groupe$ReminderArgs<ExtArgs>
    _count?: boolean | GroupeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["groupe"]>

  export type GroupeSelectScalar = {
    id?: boolean
    name?: boolean
    ownerid?: boolean
  }

  export type GroupeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    UserXGroup?: boolean | Groupe$UserXGroupArgs<ExtArgs>
    Reminder?: boolean | Groupe$ReminderArgs<ExtArgs>
    _count?: boolean | GroupeCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GroupePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Groupe"
    objects: {
      Utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      UserXGroup: Prisma.$UserXGroupPayload<ExtArgs>[]
      Reminder: Prisma.$ReminderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      ownerid: number
    }, ExtArgs["result"]["groupe"]>
    composites: {}
  }


  type GroupeGetPayload<S extends boolean | null | undefined | GroupeDefaultArgs> = $Result.GetResult<Prisma.$GroupePayload, S>

  type GroupeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GroupeFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: GroupeCountAggregateInputType | true
    }

  export interface GroupeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Groupe'], meta: { name: 'Groupe' } }
    /**
     * Find zero or one Groupe that matches the filter.
     * @param {GroupeFindUniqueArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GroupeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GroupeFindUniqueArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Groupe that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GroupeFindUniqueOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GroupeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Groupe that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GroupeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupeFindFirstArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Groupe that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindFirstOrThrowArgs} args - Arguments to find a Groupe
     * @example
     * // Get one Groupe
     * const groupe = await prisma.groupe.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GroupeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Groupes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Groupes
     * const groupes = await prisma.groupe.findMany()
     * 
     * // Get first 10 Groupes
     * const groupes = await prisma.groupe.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const groupeWithIdOnly = await prisma.groupe.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GroupeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Groupe.
     * @param {GroupeCreateArgs} args - Arguments to create a Groupe.
     * @example
     * // Create one Groupe
     * const Groupe = await prisma.groupe.create({
     *   data: {
     *     // ... data to create a Groupe
     *   }
     * })
     * 
    **/
    create<T extends GroupeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupeCreateArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Groupes.
     *     @param {GroupeCreateManyArgs} args - Arguments to create many Groupes.
     *     @example
     *     // Create many Groupes
     *     const groupe = await prisma.groupe.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GroupeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Groupe.
     * @param {GroupeDeleteArgs} args - Arguments to delete one Groupe.
     * @example
     * // Delete one Groupe
     * const Groupe = await prisma.groupe.delete({
     *   where: {
     *     // ... filter to delete one Groupe
     *   }
     * })
     * 
    **/
    delete<T extends GroupeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GroupeDeleteArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Groupe.
     * @param {GroupeUpdateArgs} args - Arguments to update one Groupe.
     * @example
     * // Update one Groupe
     * const groupe = await prisma.groupe.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GroupeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GroupeUpdateArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Groupes.
     * @param {GroupeDeleteManyArgs} args - Arguments to filter Groupes to delete.
     * @example
     * // Delete a few Groupes
     * const { count } = await prisma.groupe.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GroupeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GroupeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Groupes
     * const groupe = await prisma.groupe.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GroupeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GroupeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Groupe.
     * @param {GroupeUpsertArgs} args - Arguments to update or create a Groupe.
     * @example
     * // Update or create a Groupe
     * const groupe = await prisma.groupe.upsert({
     *   create: {
     *     // ... data to create a Groupe
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Groupe we want to update
     *   }
     * })
    **/
    upsert<T extends GroupeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GroupeUpsertArgs<ExtArgs>>
    ): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Groupes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeCountArgs} args - Arguments to filter Groupes to count.
     * @example
     * // Count the number of Groupes
     * const count = await prisma.groupe.count({
     *   where: {
     *     // ... the filter for the Groupes we want to count
     *   }
     * })
    **/
    count<T extends GroupeCountArgs>(
      args?: Subset<T, GroupeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GroupeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends GroupeAggregateArgs>(args: Subset<T, GroupeAggregateArgs>): Prisma.PrismaPromise<GetGroupeAggregateType<T>>

    /**
     * Group by Groupe.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GroupeGroupByArgs} args - Group by arguments.
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
      T extends GroupeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GroupeGroupByArgs['orderBy'] }
        : { orderBy?: GroupeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, GroupeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGroupeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Groupe model
   */
  readonly fields: GroupeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Groupe.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GroupeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    UserXGroup<T extends Groupe$UserXGroupArgs<ExtArgs> = {}>(args?: Subset<T, Groupe$UserXGroupArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findMany'> | Null>;

    Reminder<T extends Groupe$ReminderArgs<ExtArgs> = {}>(args?: Subset<T, Groupe$ReminderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Groupe model
   */ 
  interface GroupeFieldRefs {
    readonly id: FieldRef<"Groupe", 'Int'>
    readonly name: FieldRef<"Groupe", 'String'>
    readonly ownerid: FieldRef<"Groupe", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Groupe findUnique
   */
  export type GroupeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }


  /**
   * Groupe findUniqueOrThrow
   */
  export type GroupeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where: GroupeWhereUniqueInput
  }


  /**
   * Groupe findFirst
   */
  export type GroupeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }


  /**
   * Groupe findFirstOrThrow
   */
  export type GroupeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupe to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Groupes.
     */
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }


  /**
   * Groupe findMany
   */
  export type GroupeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter, which Groupes to fetch.
     */
    where?: GroupeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Groupes to fetch.
     */
    orderBy?: GroupeOrderByWithRelationInput | GroupeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Groupes.
     */
    cursor?: GroupeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Groupes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Groupes.
     */
    skip?: number
    distinct?: GroupeScalarFieldEnum | GroupeScalarFieldEnum[]
  }


  /**
   * Groupe create
   */
  export type GroupeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The data needed to create a Groupe.
     */
    data: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
  }


  /**
   * Groupe createMany
   */
  export type GroupeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Groupes.
     */
    data: GroupeCreateManyInput | GroupeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Groupe update
   */
  export type GroupeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The data needed to update a Groupe.
     */
    data: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
    /**
     * Choose, which Groupe to update.
     */
    where: GroupeWhereUniqueInput
  }


  /**
   * Groupe updateMany
   */
  export type GroupeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Groupes.
     */
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyInput>
    /**
     * Filter which Groupes to update
     */
    where?: GroupeWhereInput
  }


  /**
   * Groupe upsert
   */
  export type GroupeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * The filter to search for the Groupe to update in case it exists.
     */
    where: GroupeWhereUniqueInput
    /**
     * In case the Groupe found by the `where` argument doesn't exist, create a new Groupe with this data.
     */
    create: XOR<GroupeCreateInput, GroupeUncheckedCreateInput>
    /**
     * In case the Groupe was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GroupeUpdateInput, GroupeUncheckedUpdateInput>
  }


  /**
   * Groupe delete
   */
  export type GroupeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
    /**
     * Filter which Groupe to delete.
     */
    where: GroupeWhereUniqueInput
  }


  /**
   * Groupe deleteMany
   */
  export type GroupeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Groupes to delete
     */
    where?: GroupeWhereInput
  }


  /**
   * Groupe.UserXGroup
   */
  export type Groupe$UserXGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    where?: UserXGroupWhereInput
    orderBy?: UserXGroupOrderByWithRelationInput | UserXGroupOrderByWithRelationInput[]
    cursor?: UserXGroupWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserXGroupScalarFieldEnum | UserXGroupScalarFieldEnum[]
  }


  /**
   * Groupe.Reminder
   */
  export type Groupe$ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    cursor?: ReminderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }


  /**
   * Groupe without action
   */
  export type GroupeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Groupe
     */
    select?: GroupeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GroupeInclude<ExtArgs> | null
  }



  /**
   * Model UserXGroup
   */

  export type AggregateUserXGroup = {
    _count: UserXGroupCountAggregateOutputType | null
    _avg: UserXGroupAvgAggregateOutputType | null
    _sum: UserXGroupSumAggregateOutputType | null
    _min: UserXGroupMinAggregateOutputType | null
    _max: UserXGroupMaxAggregateOutputType | null
  }

  export type UserXGroupAvgAggregateOutputType = {
    id: number | null
    userid: number | null
    groupid: number | null
  }

  export type UserXGroupSumAggregateOutputType = {
    id: number | null
    userid: number | null
    groupid: number | null
  }

  export type UserXGroupMinAggregateOutputType = {
    id: number | null
    userid: number | null
    groupid: number | null
  }

  export type UserXGroupMaxAggregateOutputType = {
    id: number | null
    userid: number | null
    groupid: number | null
  }

  export type UserXGroupCountAggregateOutputType = {
    id: number
    userid: number
    groupid: number
    _all: number
  }


  export type UserXGroupAvgAggregateInputType = {
    id?: true
    userid?: true
    groupid?: true
  }

  export type UserXGroupSumAggregateInputType = {
    id?: true
    userid?: true
    groupid?: true
  }

  export type UserXGroupMinAggregateInputType = {
    id?: true
    userid?: true
    groupid?: true
  }

  export type UserXGroupMaxAggregateInputType = {
    id?: true
    userid?: true
    groupid?: true
  }

  export type UserXGroupCountAggregateInputType = {
    id?: true
    userid?: true
    groupid?: true
    _all?: true
  }

  export type UserXGroupAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserXGroup to aggregate.
     */
    where?: UserXGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXGroups to fetch.
     */
    orderBy?: UserXGroupOrderByWithRelationInput | UserXGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserXGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserXGroups
    **/
    _count?: true | UserXGroupCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserXGroupAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserXGroupSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserXGroupMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserXGroupMaxAggregateInputType
  }

  export type GetUserXGroupAggregateType<T extends UserXGroupAggregateArgs> = {
        [P in keyof T & keyof AggregateUserXGroup]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserXGroup[P]>
      : GetScalarType<T[P], AggregateUserXGroup[P]>
  }




  export type UserXGroupGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserXGroupWhereInput
    orderBy?: UserXGroupOrderByWithAggregationInput | UserXGroupOrderByWithAggregationInput[]
    by: UserXGroupScalarFieldEnum[] | UserXGroupScalarFieldEnum
    having?: UserXGroupScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserXGroupCountAggregateInputType | true
    _avg?: UserXGroupAvgAggregateInputType
    _sum?: UserXGroupSumAggregateInputType
    _min?: UserXGroupMinAggregateInputType
    _max?: UserXGroupMaxAggregateInputType
  }

  export type UserXGroupGroupByOutputType = {
    id: number
    userid: number
    groupid: number
    _count: UserXGroupCountAggregateOutputType | null
    _avg: UserXGroupAvgAggregateOutputType | null
    _sum: UserXGroupSumAggregateOutputType | null
    _min: UserXGroupMinAggregateOutputType | null
    _max: UserXGroupMaxAggregateOutputType | null
  }

  type GetUserXGroupGroupByPayload<T extends UserXGroupGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserXGroupGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserXGroupGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserXGroupGroupByOutputType[P]>
            : GetScalarType<T[P], UserXGroupGroupByOutputType[P]>
        }
      >
    >


  export type UserXGroupSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userid?: boolean
    groupid?: boolean
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userXGroup"]>

  export type UserXGroupSelectScalar = {
    id?: boolean
    userid?: boolean
    groupid?: boolean
  }

  export type UserXGroupInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Utilisateur?: boolean | UtilisateurDefaultArgs<ExtArgs>
    Groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }


  export type $UserXGroupPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserXGroup"
    objects: {
      Utilisateur: Prisma.$UtilisateurPayload<ExtArgs>
      Groupe: Prisma.$GroupePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userid: number
      groupid: number
    }, ExtArgs["result"]["userXGroup"]>
    composites: {}
  }


  type UserXGroupGetPayload<S extends boolean | null | undefined | UserXGroupDefaultArgs> = $Result.GetResult<Prisma.$UserXGroupPayload, S>

  type UserXGroupCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserXGroupFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: UserXGroupCountAggregateInputType | true
    }

  export interface UserXGroupDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserXGroup'], meta: { name: 'UserXGroup' } }
    /**
     * Find zero or one UserXGroup that matches the filter.
     * @param {UserXGroupFindUniqueArgs} args - Arguments to find a UserXGroup
     * @example
     * // Get one UserXGroup
     * const userXGroup = await prisma.userXGroup.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserXGroupFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserXGroupFindUniqueArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserXGroup that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserXGroupFindUniqueOrThrowArgs} args - Arguments to find a UserXGroup
     * @example
     * // Get one UserXGroup
     * const userXGroup = await prisma.userXGroup.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserXGroupFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserXGroupFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserXGroup that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupFindFirstArgs} args - Arguments to find a UserXGroup
     * @example
     * // Get one UserXGroup
     * const userXGroup = await prisma.userXGroup.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserXGroupFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserXGroupFindFirstArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserXGroup that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupFindFirstOrThrowArgs} args - Arguments to find a UserXGroup
     * @example
     * // Get one UserXGroup
     * const userXGroup = await prisma.userXGroup.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserXGroupFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserXGroupFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserXGroups that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserXGroups
     * const userXGroups = await prisma.userXGroup.findMany()
     * 
     * // Get first 10 UserXGroups
     * const userXGroups = await prisma.userXGroup.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userXGroupWithIdOnly = await prisma.userXGroup.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserXGroupFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserXGroupFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserXGroup.
     * @param {UserXGroupCreateArgs} args - Arguments to create a UserXGroup.
     * @example
     * // Create one UserXGroup
     * const UserXGroup = await prisma.userXGroup.create({
     *   data: {
     *     // ... data to create a UserXGroup
     *   }
     * })
     * 
    **/
    create<T extends UserXGroupCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserXGroupCreateArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserXGroups.
     *     @param {UserXGroupCreateManyArgs} args - Arguments to create many UserXGroups.
     *     @example
     *     // Create many UserXGroups
     *     const userXGroup = await prisma.userXGroup.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserXGroupCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserXGroupCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserXGroup.
     * @param {UserXGroupDeleteArgs} args - Arguments to delete one UserXGroup.
     * @example
     * // Delete one UserXGroup
     * const UserXGroup = await prisma.userXGroup.delete({
     *   where: {
     *     // ... filter to delete one UserXGroup
     *   }
     * })
     * 
    **/
    delete<T extends UserXGroupDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserXGroupDeleteArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserXGroup.
     * @param {UserXGroupUpdateArgs} args - Arguments to update one UserXGroup.
     * @example
     * // Update one UserXGroup
     * const userXGroup = await prisma.userXGroup.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserXGroupUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserXGroupUpdateArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserXGroups.
     * @param {UserXGroupDeleteManyArgs} args - Arguments to filter UserXGroups to delete.
     * @example
     * // Delete a few UserXGroups
     * const { count } = await prisma.userXGroup.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserXGroupDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserXGroupDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserXGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserXGroups
     * const userXGroup = await prisma.userXGroup.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserXGroupUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserXGroupUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserXGroup.
     * @param {UserXGroupUpsertArgs} args - Arguments to update or create a UserXGroup.
     * @example
     * // Update or create a UserXGroup
     * const userXGroup = await prisma.userXGroup.upsert({
     *   create: {
     *     // ... data to create a UserXGroup
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserXGroup we want to update
     *   }
     * })
    **/
    upsert<T extends UserXGroupUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserXGroupUpsertArgs<ExtArgs>>
    ): Prisma__UserXGroupClient<$Result.GetResult<Prisma.$UserXGroupPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of UserXGroups.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupCountArgs} args - Arguments to filter UserXGroups to count.
     * @example
     * // Count the number of UserXGroups
     * const count = await prisma.userXGroup.count({
     *   where: {
     *     // ... the filter for the UserXGroups we want to count
     *   }
     * })
    **/
    count<T extends UserXGroupCountArgs>(
      args?: Subset<T, UserXGroupCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserXGroupCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserXGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserXGroupAggregateArgs>(args: Subset<T, UserXGroupAggregateArgs>): Prisma.PrismaPromise<GetUserXGroupAggregateType<T>>

    /**
     * Group by UserXGroup.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserXGroupGroupByArgs} args - Group by arguments.
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
      T extends UserXGroupGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserXGroupGroupByArgs['orderBy'] }
        : { orderBy?: UserXGroupGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserXGroupGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserXGroupGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserXGroup model
   */
  readonly fields: UserXGroupFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserXGroup.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserXGroupClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Utilisateur<T extends UtilisateurDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UtilisateurDefaultArgs<ExtArgs>>): Prisma__UtilisateurClient<$Result.GetResult<Prisma.$UtilisateurPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    Groupe<T extends GroupeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupeDefaultArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserXGroup model
   */ 
  interface UserXGroupFieldRefs {
    readonly id: FieldRef<"UserXGroup", 'Int'>
    readonly userid: FieldRef<"UserXGroup", 'Int'>
    readonly groupid: FieldRef<"UserXGroup", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * UserXGroup findUnique
   */
  export type UserXGroupFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserXGroup to fetch.
     */
    where: UserXGroupWhereUniqueInput
  }


  /**
   * UserXGroup findUniqueOrThrow
   */
  export type UserXGroupFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserXGroup to fetch.
     */
    where: UserXGroupWhereUniqueInput
  }


  /**
   * UserXGroup findFirst
   */
  export type UserXGroupFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserXGroup to fetch.
     */
    where?: UserXGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXGroups to fetch.
     */
    orderBy?: UserXGroupOrderByWithRelationInput | UserXGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXGroups.
     */
    cursor?: UserXGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXGroups.
     */
    distinct?: UserXGroupScalarFieldEnum | UserXGroupScalarFieldEnum[]
  }


  /**
   * UserXGroup findFirstOrThrow
   */
  export type UserXGroupFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserXGroup to fetch.
     */
    where?: UserXGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXGroups to fetch.
     */
    orderBy?: UserXGroupOrderByWithRelationInput | UserXGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserXGroups.
     */
    cursor?: UserXGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXGroups.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserXGroups.
     */
    distinct?: UserXGroupScalarFieldEnum | UserXGroupScalarFieldEnum[]
  }


  /**
   * UserXGroup findMany
   */
  export type UserXGroupFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * Filter, which UserXGroups to fetch.
     */
    where?: UserXGroupWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserXGroups to fetch.
     */
    orderBy?: UserXGroupOrderByWithRelationInput | UserXGroupOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserXGroups.
     */
    cursor?: UserXGroupWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserXGroups from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserXGroups.
     */
    skip?: number
    distinct?: UserXGroupScalarFieldEnum | UserXGroupScalarFieldEnum[]
  }


  /**
   * UserXGroup create
   */
  export type UserXGroupCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * The data needed to create a UserXGroup.
     */
    data: XOR<UserXGroupCreateInput, UserXGroupUncheckedCreateInput>
  }


  /**
   * UserXGroup createMany
   */
  export type UserXGroupCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserXGroups.
     */
    data: UserXGroupCreateManyInput | UserXGroupCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * UserXGroup update
   */
  export type UserXGroupUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * The data needed to update a UserXGroup.
     */
    data: XOR<UserXGroupUpdateInput, UserXGroupUncheckedUpdateInput>
    /**
     * Choose, which UserXGroup to update.
     */
    where: UserXGroupWhereUniqueInput
  }


  /**
   * UserXGroup updateMany
   */
  export type UserXGroupUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserXGroups.
     */
    data: XOR<UserXGroupUpdateManyMutationInput, UserXGroupUncheckedUpdateManyInput>
    /**
     * Filter which UserXGroups to update
     */
    where?: UserXGroupWhereInput
  }


  /**
   * UserXGroup upsert
   */
  export type UserXGroupUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * The filter to search for the UserXGroup to update in case it exists.
     */
    where: UserXGroupWhereUniqueInput
    /**
     * In case the UserXGroup found by the `where` argument doesn't exist, create a new UserXGroup with this data.
     */
    create: XOR<UserXGroupCreateInput, UserXGroupUncheckedCreateInput>
    /**
     * In case the UserXGroup was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserXGroupUpdateInput, UserXGroupUncheckedUpdateInput>
  }


  /**
   * UserXGroup delete
   */
  export type UserXGroupDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
    /**
     * Filter which UserXGroup to delete.
     */
    where: UserXGroupWhereUniqueInput
  }


  /**
   * UserXGroup deleteMany
   */
  export type UserXGroupDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserXGroups to delete
     */
    where?: UserXGroupWhereInput
  }


  /**
   * UserXGroup without action
   */
  export type UserXGroupDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserXGroup
     */
    select?: UserXGroupSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserXGroupInclude<ExtArgs> | null
  }



  /**
   * Model Reminder
   */

  export type AggregateReminder = {
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  export type ReminderAvgAggregateOutputType = {
    id: number | null
    groupeid: number | null
  }

  export type ReminderSumAggregateOutputType = {
    id: number | null
    groupeid: number | null
  }

  export type ReminderMinAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    creation: Date | null
    expiration: Date | null
    color: string | null
    author: string | null
    groupeid: number | null
  }

  export type ReminderMaxAggregateOutputType = {
    id: number | null
    title: string | null
    body: string | null
    creation: Date | null
    expiration: Date | null
    color: string | null
    author: string | null
    groupeid: number | null
  }

  export type ReminderCountAggregateOutputType = {
    id: number
    title: number
    body: number
    creation: number
    expiration: number
    color: number
    author: number
    groupeid: number
    _all: number
  }


  export type ReminderAvgAggregateInputType = {
    id?: true
    groupeid?: true
  }

  export type ReminderSumAggregateInputType = {
    id?: true
    groupeid?: true
  }

  export type ReminderMinAggregateInputType = {
    id?: true
    title?: true
    body?: true
    creation?: true
    expiration?: true
    color?: true
    author?: true
    groupeid?: true
  }

  export type ReminderMaxAggregateInputType = {
    id?: true
    title?: true
    body?: true
    creation?: true
    expiration?: true
    color?: true
    author?: true
    groupeid?: true
  }

  export type ReminderCountAggregateInputType = {
    id?: true
    title?: true
    body?: true
    creation?: true
    expiration?: true
    color?: true
    author?: true
    groupeid?: true
    _all?: true
  }

  export type ReminderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminder to aggregate.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reminders
    **/
    _count?: true | ReminderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReminderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReminderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReminderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReminderMaxAggregateInputType
  }

  export type GetReminderAggregateType<T extends ReminderAggregateArgs> = {
        [P in keyof T & keyof AggregateReminder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReminder[P]>
      : GetScalarType<T[P], AggregateReminder[P]>
  }




  export type ReminderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReminderWhereInput
    orderBy?: ReminderOrderByWithAggregationInput | ReminderOrderByWithAggregationInput[]
    by: ReminderScalarFieldEnum[] | ReminderScalarFieldEnum
    having?: ReminderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReminderCountAggregateInputType | true
    _avg?: ReminderAvgAggregateInputType
    _sum?: ReminderSumAggregateInputType
    _min?: ReminderMinAggregateInputType
    _max?: ReminderMaxAggregateInputType
  }

  export type ReminderGroupByOutputType = {
    id: number
    title: string
    body: string | null
    creation: Date
    expiration: Date
    color: string
    author: string
    groupeid: number
    _count: ReminderCountAggregateOutputType | null
    _avg: ReminderAvgAggregateOutputType | null
    _sum: ReminderSumAggregateOutputType | null
    _min: ReminderMinAggregateOutputType | null
    _max: ReminderMaxAggregateOutputType | null
  }

  type GetReminderGroupByPayload<T extends ReminderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReminderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReminderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReminderGroupByOutputType[P]>
            : GetScalarType<T[P], ReminderGroupByOutputType[P]>
        }
      >
    >


  export type ReminderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    body?: boolean
    creation?: boolean
    expiration?: boolean
    color?: boolean
    author?: boolean
    groupeid?: boolean
    Groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reminder"]>

  export type ReminderSelectScalar = {
    id?: boolean
    title?: boolean
    body?: boolean
    creation?: boolean
    expiration?: boolean
    color?: boolean
    author?: boolean
    groupeid?: boolean
  }

  export type ReminderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    Groupe?: boolean | GroupeDefaultArgs<ExtArgs>
  }


  export type $ReminderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reminder"
    objects: {
      Groupe: Prisma.$GroupePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      body: string | null
      creation: Date
      expiration: Date
      color: string
      author: string
      groupeid: number
    }, ExtArgs["result"]["reminder"]>
    composites: {}
  }


  type ReminderGetPayload<S extends boolean | null | undefined | ReminderDefaultArgs> = $Result.GetResult<Prisma.$ReminderPayload, S>

  type ReminderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ReminderFindManyArgs, 'select' | 'include' | 'distinct' > & {
      select?: ReminderCountAggregateInputType | true
    }

  export interface ReminderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reminder'], meta: { name: 'Reminder' } }
    /**
     * Find zero or one Reminder that matches the filter.
     * @param {ReminderFindUniqueArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ReminderFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ReminderFindUniqueArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Reminder that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ReminderFindUniqueOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ReminderFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReminderFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Reminder that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ReminderFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ReminderFindFirstArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Reminder that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindFirstOrThrowArgs} args - Arguments to find a Reminder
     * @example
     * // Get one Reminder
     * const reminder = await prisma.reminder.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ReminderFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ReminderFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Reminders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reminders
     * const reminders = await prisma.reminder.findMany()
     * 
     * // Get first 10 Reminders
     * const reminders = await prisma.reminder.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reminderWithIdOnly = await prisma.reminder.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ReminderFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReminderFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Reminder.
     * @param {ReminderCreateArgs} args - Arguments to create a Reminder.
     * @example
     * // Create one Reminder
     * const Reminder = await prisma.reminder.create({
     *   data: {
     *     // ... data to create a Reminder
     *   }
     * })
     * 
    **/
    create<T extends ReminderCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ReminderCreateArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Reminders.
     *     @param {ReminderCreateManyArgs} args - Arguments to create many Reminders.
     *     @example
     *     // Create many Reminders
     *     const reminder = await prisma.reminder.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ReminderCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReminderCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Reminder.
     * @param {ReminderDeleteArgs} args - Arguments to delete one Reminder.
     * @example
     * // Delete one Reminder
     * const Reminder = await prisma.reminder.delete({
     *   where: {
     *     // ... filter to delete one Reminder
     *   }
     * })
     * 
    **/
    delete<T extends ReminderDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ReminderDeleteArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Reminder.
     * @param {ReminderUpdateArgs} args - Arguments to update one Reminder.
     * @example
     * // Update one Reminder
     * const reminder = await prisma.reminder.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ReminderUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ReminderUpdateArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Reminders.
     * @param {ReminderDeleteManyArgs} args - Arguments to filter Reminders to delete.
     * @example
     * // Delete a few Reminders
     * const { count } = await prisma.reminder.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ReminderDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ReminderDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reminders
     * const reminder = await prisma.reminder.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ReminderUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ReminderUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Reminder.
     * @param {ReminderUpsertArgs} args - Arguments to update or create a Reminder.
     * @example
     * // Update or create a Reminder
     * const reminder = await prisma.reminder.upsert({
     *   create: {
     *     // ... data to create a Reminder
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reminder we want to update
     *   }
     * })
    **/
    upsert<T extends ReminderUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ReminderUpsertArgs<ExtArgs>>
    ): Prisma__ReminderClient<$Result.GetResult<Prisma.$ReminderPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Reminders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderCountArgs} args - Arguments to filter Reminders to count.
     * @example
     * // Count the number of Reminders
     * const count = await prisma.reminder.count({
     *   where: {
     *     // ... the filter for the Reminders we want to count
     *   }
     * })
    **/
    count<T extends ReminderCountArgs>(
      args?: Subset<T, ReminderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReminderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReminderAggregateArgs>(args: Subset<T, ReminderAggregateArgs>): Prisma.PrismaPromise<GetReminderAggregateType<T>>

    /**
     * Group by Reminder.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReminderGroupByArgs} args - Group by arguments.
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
      T extends ReminderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReminderGroupByArgs['orderBy'] }
        : { orderBy?: ReminderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReminderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReminderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reminder model
   */
  readonly fields: ReminderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reminder.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReminderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    Groupe<T extends GroupeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GroupeDefaultArgs<ExtArgs>>): Prisma__GroupeClient<$Result.GetResult<Prisma.$GroupePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Reminder model
   */ 
  interface ReminderFieldRefs {
    readonly id: FieldRef<"Reminder", 'Int'>
    readonly title: FieldRef<"Reminder", 'String'>
    readonly body: FieldRef<"Reminder", 'String'>
    readonly creation: FieldRef<"Reminder", 'DateTime'>
    readonly expiration: FieldRef<"Reminder", 'DateTime'>
    readonly color: FieldRef<"Reminder", 'String'>
    readonly author: FieldRef<"Reminder", 'String'>
    readonly groupeid: FieldRef<"Reminder", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Reminder findUnique
   */
  export type ReminderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }


  /**
   * Reminder findUniqueOrThrow
   */
  export type ReminderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where: ReminderWhereUniqueInput
  }


  /**
   * Reminder findFirst
   */
  export type ReminderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }


  /**
   * Reminder findFirstOrThrow
   */
  export type ReminderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminder to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reminders.
     */
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }


  /**
   * Reminder findMany
   */
  export type ReminderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter, which Reminders to fetch.
     */
    where?: ReminderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reminders to fetch.
     */
    orderBy?: ReminderOrderByWithRelationInput | ReminderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reminders.
     */
    cursor?: ReminderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reminders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reminders.
     */
    skip?: number
    distinct?: ReminderScalarFieldEnum | ReminderScalarFieldEnum[]
  }


  /**
   * Reminder create
   */
  export type ReminderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to create a Reminder.
     */
    data: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
  }


  /**
   * Reminder createMany
   */
  export type ReminderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reminders.
     */
    data: ReminderCreateManyInput | ReminderCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Reminder update
   */
  export type ReminderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The data needed to update a Reminder.
     */
    data: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
    /**
     * Choose, which Reminder to update.
     */
    where: ReminderWhereUniqueInput
  }


  /**
   * Reminder updateMany
   */
  export type ReminderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reminders.
     */
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyInput>
    /**
     * Filter which Reminders to update
     */
    where?: ReminderWhereInput
  }


  /**
   * Reminder upsert
   */
  export type ReminderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * The filter to search for the Reminder to update in case it exists.
     */
    where: ReminderWhereUniqueInput
    /**
     * In case the Reminder found by the `where` argument doesn't exist, create a new Reminder with this data.
     */
    create: XOR<ReminderCreateInput, ReminderUncheckedCreateInput>
    /**
     * In case the Reminder was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReminderUpdateInput, ReminderUncheckedUpdateInput>
  }


  /**
   * Reminder delete
   */
  export type ReminderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
    /**
     * Filter which Reminder to delete.
     */
    where: ReminderWhereUniqueInput
  }


  /**
   * Reminder deleteMany
   */
  export type ReminderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reminders to delete
     */
    where?: ReminderWhereInput
  }


  /**
   * Reminder without action
   */
  export type ReminderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reminder
     */
    select?: ReminderSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ReminderInclude<ExtArgs> | null
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


  export const UtilisateurScalarFieldEnum: {
    id: 'id',
    password: 'password',
    username: 'username',
    email: 'email'
  };

  export type UtilisateurScalarFieldEnum = (typeof UtilisateurScalarFieldEnum)[keyof typeof UtilisateurScalarFieldEnum]


  export const GroupeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    ownerid: 'ownerid'
  };

  export type GroupeScalarFieldEnum = (typeof GroupeScalarFieldEnum)[keyof typeof GroupeScalarFieldEnum]


  export const UserXGroupScalarFieldEnum: {
    id: 'id',
    userid: 'userid',
    groupid: 'groupid'
  };

  export type UserXGroupScalarFieldEnum = (typeof UserXGroupScalarFieldEnum)[keyof typeof UserXGroupScalarFieldEnum]


  export const ReminderScalarFieldEnum: {
    id: 'id',
    title: 'title',
    body: 'body',
    creation: 'creation',
    expiration: 'expiration',
    color: 'color',
    author: 'author',
    groupeid: 'groupeid'
  };

  export type ReminderScalarFieldEnum = (typeof ReminderScalarFieldEnum)[keyof typeof ReminderScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


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
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UtilisateurWhereInput = {
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    id?: IntFilter<"Utilisateur"> | number
    password?: StringFilter<"Utilisateur"> | string
    username?: StringFilter<"Utilisateur"> | string
    email?: StringFilter<"Utilisateur"> | string
    Owned?: GroupeListRelationFilter
    UserXGroup?: UserXGroupListRelationFilter
  }

  export type UtilisateurOrderByWithRelationInput = {
    id?: SortOrder
    password?: SortOrder
    username?: SortOrder
    email?: SortOrder
    Owned?: GroupeOrderByRelationAggregateInput
    UserXGroup?: UserXGroupOrderByRelationAggregateInput
  }

  export type UtilisateurWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    username?: string
    email?: string
    AND?: UtilisateurWhereInput | UtilisateurWhereInput[]
    OR?: UtilisateurWhereInput[]
    NOT?: UtilisateurWhereInput | UtilisateurWhereInput[]
    password?: StringFilter<"Utilisateur"> | string
    Owned?: GroupeListRelationFilter
    UserXGroup?: UserXGroupListRelationFilter
  }, "id" | "username" | "email">

  export type UtilisateurOrderByWithAggregationInput = {
    id?: SortOrder
    password?: SortOrder
    username?: SortOrder
    email?: SortOrder
    _count?: UtilisateurCountOrderByAggregateInput
    _avg?: UtilisateurAvgOrderByAggregateInput
    _max?: UtilisateurMaxOrderByAggregateInput
    _min?: UtilisateurMinOrderByAggregateInput
    _sum?: UtilisateurSumOrderByAggregateInput
  }

  export type UtilisateurScalarWhereWithAggregatesInput = {
    AND?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    OR?: UtilisateurScalarWhereWithAggregatesInput[]
    NOT?: UtilisateurScalarWhereWithAggregatesInput | UtilisateurScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Utilisateur"> | number
    password?: StringWithAggregatesFilter<"Utilisateur"> | string
    username?: StringWithAggregatesFilter<"Utilisateur"> | string
    email?: StringWithAggregatesFilter<"Utilisateur"> | string
  }

  export type GroupeWhereInput = {
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    id?: IntFilter<"Groupe"> | number
    name?: StringFilter<"Groupe"> | string
    ownerid?: IntFilter<"Groupe"> | number
    Utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    UserXGroup?: UserXGroupListRelationFilter
    Reminder?: ReminderListRelationFilter
  }

  export type GroupeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerid?: SortOrder
    Utilisateur?: UtilisateurOrderByWithRelationInput
    UserXGroup?: UserXGroupOrderByRelationAggregateInput
    Reminder?: ReminderOrderByRelationAggregateInput
  }

  export type GroupeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    name?: string
    AND?: GroupeWhereInput | GroupeWhereInput[]
    OR?: GroupeWhereInput[]
    NOT?: GroupeWhereInput | GroupeWhereInput[]
    ownerid?: IntFilter<"Groupe"> | number
    Utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    UserXGroup?: UserXGroupListRelationFilter
    Reminder?: ReminderListRelationFilter
  }, "id" | "name">

  export type GroupeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    ownerid?: SortOrder
    _count?: GroupeCountOrderByAggregateInput
    _avg?: GroupeAvgOrderByAggregateInput
    _max?: GroupeMaxOrderByAggregateInput
    _min?: GroupeMinOrderByAggregateInput
    _sum?: GroupeSumOrderByAggregateInput
  }

  export type GroupeScalarWhereWithAggregatesInput = {
    AND?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    OR?: GroupeScalarWhereWithAggregatesInput[]
    NOT?: GroupeScalarWhereWithAggregatesInput | GroupeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Groupe"> | number
    name?: StringWithAggregatesFilter<"Groupe"> | string
    ownerid?: IntWithAggregatesFilter<"Groupe"> | number
  }

  export type UserXGroupWhereInput = {
    AND?: UserXGroupWhereInput | UserXGroupWhereInput[]
    OR?: UserXGroupWhereInput[]
    NOT?: UserXGroupWhereInput | UserXGroupWhereInput[]
    id?: IntFilter<"UserXGroup"> | number
    userid?: IntFilter<"UserXGroup"> | number
    groupid?: IntFilter<"UserXGroup"> | number
    Utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    Groupe?: XOR<GroupeRelationFilter, GroupeWhereInput>
  }

  export type UserXGroupOrderByWithRelationInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
    Utilisateur?: UtilisateurOrderByWithRelationInput
    Groupe?: GroupeOrderByWithRelationInput
  }

  export type UserXGroupWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserXGroupWhereInput | UserXGroupWhereInput[]
    OR?: UserXGroupWhereInput[]
    NOT?: UserXGroupWhereInput | UserXGroupWhereInput[]
    userid?: IntFilter<"UserXGroup"> | number
    groupid?: IntFilter<"UserXGroup"> | number
    Utilisateur?: XOR<UtilisateurRelationFilter, UtilisateurWhereInput>
    Groupe?: XOR<GroupeRelationFilter, GroupeWhereInput>
  }, "id">

  export type UserXGroupOrderByWithAggregationInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
    _count?: UserXGroupCountOrderByAggregateInput
    _avg?: UserXGroupAvgOrderByAggregateInput
    _max?: UserXGroupMaxOrderByAggregateInput
    _min?: UserXGroupMinOrderByAggregateInput
    _sum?: UserXGroupSumOrderByAggregateInput
  }

  export type UserXGroupScalarWhereWithAggregatesInput = {
    AND?: UserXGroupScalarWhereWithAggregatesInput | UserXGroupScalarWhereWithAggregatesInput[]
    OR?: UserXGroupScalarWhereWithAggregatesInput[]
    NOT?: UserXGroupScalarWhereWithAggregatesInput | UserXGroupScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserXGroup"> | number
    userid?: IntWithAggregatesFilter<"UserXGroup"> | number
    groupid?: IntWithAggregatesFilter<"UserXGroup"> | number
  }

  export type ReminderWhereInput = {
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    id?: IntFilter<"Reminder"> | number
    title?: StringFilter<"Reminder"> | string
    body?: StringNullableFilter<"Reminder"> | string | null
    creation?: DateTimeFilter<"Reminder"> | Date | string
    expiration?: DateTimeFilter<"Reminder"> | Date | string
    color?: StringFilter<"Reminder"> | string
    author?: StringFilter<"Reminder"> | string
    groupeid?: IntFilter<"Reminder"> | number
    Groupe?: XOR<GroupeRelationFilter, GroupeWhereInput>
  }

  export type ReminderOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    creation?: SortOrder
    expiration?: SortOrder
    color?: SortOrder
    author?: SortOrder
    groupeid?: SortOrder
    Groupe?: GroupeOrderByWithRelationInput
  }

  export type ReminderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ReminderWhereInput | ReminderWhereInput[]
    OR?: ReminderWhereInput[]
    NOT?: ReminderWhereInput | ReminderWhereInput[]
    title?: StringFilter<"Reminder"> | string
    body?: StringNullableFilter<"Reminder"> | string | null
    creation?: DateTimeFilter<"Reminder"> | Date | string
    expiration?: DateTimeFilter<"Reminder"> | Date | string
    color?: StringFilter<"Reminder"> | string
    author?: StringFilter<"Reminder"> | string
    groupeid?: IntFilter<"Reminder"> | number
    Groupe?: XOR<GroupeRelationFilter, GroupeWhereInput>
  }, "id">

  export type ReminderOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrderInput | SortOrder
    creation?: SortOrder
    expiration?: SortOrder
    color?: SortOrder
    author?: SortOrder
    groupeid?: SortOrder
    _count?: ReminderCountOrderByAggregateInput
    _avg?: ReminderAvgOrderByAggregateInput
    _max?: ReminderMaxOrderByAggregateInput
    _min?: ReminderMinOrderByAggregateInput
    _sum?: ReminderSumOrderByAggregateInput
  }

  export type ReminderScalarWhereWithAggregatesInput = {
    AND?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    OR?: ReminderScalarWhereWithAggregatesInput[]
    NOT?: ReminderScalarWhereWithAggregatesInput | ReminderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Reminder"> | number
    title?: StringWithAggregatesFilter<"Reminder"> | string
    body?: StringNullableWithAggregatesFilter<"Reminder"> | string | null
    creation?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    expiration?: DateTimeWithAggregatesFilter<"Reminder"> | Date | string
    color?: StringWithAggregatesFilter<"Reminder"> | string
    author?: StringWithAggregatesFilter<"Reminder"> | string
    groupeid?: IntWithAggregatesFilter<"Reminder"> | number
  }

  export type UtilisateurCreateInput = {
    password: string
    username: string
    email: string
    Owned?: GroupeCreateNestedManyWithoutUtilisateurInput
    UserXGroup?: UserXGroupCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateInput = {
    id?: number
    password: string
    username: string
    email: string
    Owned?: GroupeUncheckedCreateNestedManyWithoutUtilisateurInput
    UserXGroup?: UserXGroupUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUpdateInput = {
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Owned?: GroupeUpdateManyWithoutUtilisateurNestedInput
    UserXGroup?: UserXGroupUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Owned?: GroupeUncheckedUpdateManyWithoutUtilisateurNestedInput
    UserXGroup?: UserXGroupUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurCreateManyInput = {
    id?: number
    password: string
    username: string
    email: string
  }

  export type UtilisateurUpdateManyMutationInput = {
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type UtilisateurUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
  }

  export type GroupeCreateInput = {
    name: string
    Utilisateur: UtilisateurCreateNestedOneWithoutOwnedInput
    UserXGroup?: UserXGroupCreateNestedManyWithoutGroupeInput
    Reminder?: ReminderCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateInput = {
    id?: number
    name: string
    ownerid: number
    UserXGroup?: UserXGroupUncheckedCreateNestedManyWithoutGroupeInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutOwnedNestedInput
    UserXGroup?: UserXGroupUpdateManyWithoutGroupeNestedInput
    Reminder?: ReminderUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerid?: IntFieldUpdateOperationsInput | number
    UserXGroup?: UserXGroupUncheckedUpdateManyWithoutGroupeNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeCreateManyInput = {
    id?: number
    name: string
    ownerid: number
  }

  export type GroupeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GroupeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerid?: IntFieldUpdateOperationsInput | number
  }

  export type UserXGroupCreateInput = {
    Utilisateur: UtilisateurCreateNestedOneWithoutUserXGroupInput
    Groupe: GroupeCreateNestedOneWithoutUserXGroupInput
  }

  export type UserXGroupUncheckedCreateInput = {
    id?: number
    userid: number
    groupid: number
  }

  export type UserXGroupUpdateInput = {
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutUserXGroupNestedInput
    Groupe?: GroupeUpdateOneRequiredWithoutUserXGroupNestedInput
  }

  export type UserXGroupUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    groupid?: IntFieldUpdateOperationsInput | number
  }

  export type UserXGroupCreateManyInput = {
    id?: number
    userid: number
    groupid: number
  }

  export type UserXGroupUpdateManyMutationInput = {

  }

  export type UserXGroupUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
    groupid?: IntFieldUpdateOperationsInput | number
  }

  export type ReminderCreateInput = {
    title: string
    body?: string | null
    creation: Date | string
    expiration: Date | string
    color: string
    author: string
    Groupe: GroupeCreateNestedOneWithoutReminderInput
  }

  export type ReminderUncheckedCreateInput = {
    id?: number
    title: string
    body?: string | null
    creation: Date | string
    expiration: Date | string
    color: string
    author: string
    groupeid: number
  }

  export type ReminderUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    Groupe?: GroupeUpdateOneRequiredWithoutReminderNestedInput
  }

  export type ReminderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    groupeid?: IntFieldUpdateOperationsInput | number
  }

  export type ReminderCreateManyInput = {
    id?: number
    title: string
    body?: string | null
    creation: Date | string
    expiration: Date | string
    color: string
    author: string
    groupeid: number
  }

  export type ReminderUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
    groupeid?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type GroupeListRelationFilter = {
    every?: GroupeWhereInput
    some?: GroupeWhereInput
    none?: GroupeWhereInput
  }

  export type UserXGroupListRelationFilter = {
    every?: UserXGroupWhereInput
    some?: UserXGroupWhereInput
    none?: UserXGroupWhereInput
  }

  export type GroupeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserXGroupOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UtilisateurCountOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UtilisateurAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UtilisateurMaxOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UtilisateurMinOrderByAggregateInput = {
    id?: SortOrder
    password?: SortOrder
    username?: SortOrder
    email?: SortOrder
  }

  export type UtilisateurSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: string[]
    notIn?: string[]
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

  export type UtilisateurRelationFilter = {
    is?: UtilisateurWhereInput
    isNot?: UtilisateurWhereInput
  }

  export type ReminderListRelationFilter = {
    every?: ReminderWhereInput
    some?: ReminderWhereInput
    none?: ReminderWhereInput
  }

  export type ReminderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GroupeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerid?: SortOrder
  }

  export type GroupeAvgOrderByAggregateInput = {
    id?: SortOrder
    ownerid?: SortOrder
  }

  export type GroupeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerid?: SortOrder
  }

  export type GroupeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    ownerid?: SortOrder
  }

  export type GroupeSumOrderByAggregateInput = {
    id?: SortOrder
    ownerid?: SortOrder
  }

  export type GroupeRelationFilter = {
    is?: GroupeWhereInput
    isNot?: GroupeWhereInput
  }

  export type UserXGroupCountOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
  }

  export type UserXGroupAvgOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
  }

  export type UserXGroupMaxOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
  }

  export type UserXGroupMinOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
  }

  export type UserXGroupSumOrderByAggregateInput = {
    id?: SortOrder
    userid?: SortOrder
    groupid?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
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

  export type ReminderCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    creation?: SortOrder
    expiration?: SortOrder
    color?: SortOrder
    author?: SortOrder
    groupeid?: SortOrder
  }

  export type ReminderAvgOrderByAggregateInput = {
    id?: SortOrder
    groupeid?: SortOrder
  }

  export type ReminderMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    creation?: SortOrder
    expiration?: SortOrder
    color?: SortOrder
    author?: SortOrder
    groupeid?: SortOrder
  }

  export type ReminderMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    body?: SortOrder
    creation?: SortOrder
    expiration?: SortOrder
    color?: SortOrder
    author?: SortOrder
    groupeid?: SortOrder
  }

  export type ReminderSumOrderByAggregateInput = {
    id?: SortOrder
    groupeid?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroupeCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<GroupeCreateWithoutUtilisateurInput, GroupeUncheckedCreateWithoutUtilisateurInput> | GroupeCreateWithoutUtilisateurInput[] | GroupeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutUtilisateurInput | GroupeCreateOrConnectWithoutUtilisateurInput[]
    createMany?: GroupeCreateManyUtilisateurInputEnvelope
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
  }

  export type UserXGroupCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<UserXGroupCreateWithoutUtilisateurInput, UserXGroupUncheckedCreateWithoutUtilisateurInput> | UserXGroupCreateWithoutUtilisateurInput[] | UserXGroupUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutUtilisateurInput | UserXGroupCreateOrConnectWithoutUtilisateurInput[]
    createMany?: UserXGroupCreateManyUtilisateurInputEnvelope
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
  }

  export type GroupeUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<GroupeCreateWithoutUtilisateurInput, GroupeUncheckedCreateWithoutUtilisateurInput> | GroupeCreateWithoutUtilisateurInput[] | GroupeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutUtilisateurInput | GroupeCreateOrConnectWithoutUtilisateurInput[]
    createMany?: GroupeCreateManyUtilisateurInputEnvelope
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
  }

  export type UserXGroupUncheckedCreateNestedManyWithoutUtilisateurInput = {
    create?: XOR<UserXGroupCreateWithoutUtilisateurInput, UserXGroupUncheckedCreateWithoutUtilisateurInput> | UserXGroupCreateWithoutUtilisateurInput[] | UserXGroupUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutUtilisateurInput | UserXGroupCreateOrConnectWithoutUtilisateurInput[]
    createMany?: UserXGroupCreateManyUtilisateurInputEnvelope
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type GroupeUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<GroupeCreateWithoutUtilisateurInput, GroupeUncheckedCreateWithoutUtilisateurInput> | GroupeCreateWithoutUtilisateurInput[] | GroupeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutUtilisateurInput | GroupeCreateOrConnectWithoutUtilisateurInput[]
    upsert?: GroupeUpsertWithWhereUniqueWithoutUtilisateurInput | GroupeUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: GroupeCreateManyUtilisateurInputEnvelope
    set?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    disconnect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    delete?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    update?: GroupeUpdateWithWhereUniqueWithoutUtilisateurInput | GroupeUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: GroupeUpdateManyWithWhereWithoutUtilisateurInput | GroupeUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
  }

  export type UserXGroupUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<UserXGroupCreateWithoutUtilisateurInput, UserXGroupUncheckedCreateWithoutUtilisateurInput> | UserXGroupCreateWithoutUtilisateurInput[] | UserXGroupUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutUtilisateurInput | UserXGroupCreateOrConnectWithoutUtilisateurInput[]
    upsert?: UserXGroupUpsertWithWhereUniqueWithoutUtilisateurInput | UserXGroupUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: UserXGroupCreateManyUtilisateurInputEnvelope
    set?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    disconnect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    delete?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    update?: UserXGroupUpdateWithWhereUniqueWithoutUtilisateurInput | UserXGroupUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: UserXGroupUpdateManyWithWhereWithoutUtilisateurInput | UserXGroupUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: UserXGroupScalarWhereInput | UserXGroupScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type GroupeUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<GroupeCreateWithoutUtilisateurInput, GroupeUncheckedCreateWithoutUtilisateurInput> | GroupeCreateWithoutUtilisateurInput[] | GroupeUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: GroupeCreateOrConnectWithoutUtilisateurInput | GroupeCreateOrConnectWithoutUtilisateurInput[]
    upsert?: GroupeUpsertWithWhereUniqueWithoutUtilisateurInput | GroupeUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: GroupeCreateManyUtilisateurInputEnvelope
    set?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    disconnect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    delete?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    connect?: GroupeWhereUniqueInput | GroupeWhereUniqueInput[]
    update?: GroupeUpdateWithWhereUniqueWithoutUtilisateurInput | GroupeUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: GroupeUpdateManyWithWhereWithoutUtilisateurInput | GroupeUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
  }

  export type UserXGroupUncheckedUpdateManyWithoutUtilisateurNestedInput = {
    create?: XOR<UserXGroupCreateWithoutUtilisateurInput, UserXGroupUncheckedCreateWithoutUtilisateurInput> | UserXGroupCreateWithoutUtilisateurInput[] | UserXGroupUncheckedCreateWithoutUtilisateurInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutUtilisateurInput | UserXGroupCreateOrConnectWithoutUtilisateurInput[]
    upsert?: UserXGroupUpsertWithWhereUniqueWithoutUtilisateurInput | UserXGroupUpsertWithWhereUniqueWithoutUtilisateurInput[]
    createMany?: UserXGroupCreateManyUtilisateurInputEnvelope
    set?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    disconnect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    delete?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    update?: UserXGroupUpdateWithWhereUniqueWithoutUtilisateurInput | UserXGroupUpdateWithWhereUniqueWithoutUtilisateurInput[]
    updateMany?: UserXGroupUpdateManyWithWhereWithoutUtilisateurInput | UserXGroupUpdateManyWithWhereWithoutUtilisateurInput[]
    deleteMany?: UserXGroupScalarWhereInput | UserXGroupScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutOwnedInput = {
    create?: XOR<UtilisateurCreateWithoutOwnedInput, UtilisateurUncheckedCreateWithoutOwnedInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutOwnedInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type UserXGroupCreateNestedManyWithoutGroupeInput = {
    create?: XOR<UserXGroupCreateWithoutGroupeInput, UserXGroupUncheckedCreateWithoutGroupeInput> | UserXGroupCreateWithoutGroupeInput[] | UserXGroupUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutGroupeInput | UserXGroupCreateOrConnectWithoutGroupeInput[]
    createMany?: UserXGroupCreateManyGroupeInputEnvelope
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
  }

  export type ReminderCreateNestedManyWithoutGroupeInput = {
    create?: XOR<ReminderCreateWithoutGroupeInput, ReminderUncheckedCreateWithoutGroupeInput> | ReminderCreateWithoutGroupeInput[] | ReminderUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutGroupeInput | ReminderCreateOrConnectWithoutGroupeInput[]
    createMany?: ReminderCreateManyGroupeInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type UserXGroupUncheckedCreateNestedManyWithoutGroupeInput = {
    create?: XOR<UserXGroupCreateWithoutGroupeInput, UserXGroupUncheckedCreateWithoutGroupeInput> | UserXGroupCreateWithoutGroupeInput[] | UserXGroupUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutGroupeInput | UserXGroupCreateOrConnectWithoutGroupeInput[]
    createMany?: UserXGroupCreateManyGroupeInputEnvelope
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
  }

  export type ReminderUncheckedCreateNestedManyWithoutGroupeInput = {
    create?: XOR<ReminderCreateWithoutGroupeInput, ReminderUncheckedCreateWithoutGroupeInput> | ReminderCreateWithoutGroupeInput[] | ReminderUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutGroupeInput | ReminderCreateOrConnectWithoutGroupeInput[]
    createMany?: ReminderCreateManyGroupeInputEnvelope
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
  }

  export type UtilisateurUpdateOneRequiredWithoutOwnedNestedInput = {
    create?: XOR<UtilisateurCreateWithoutOwnedInput, UtilisateurUncheckedCreateWithoutOwnedInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutOwnedInput
    upsert?: UtilisateurUpsertWithoutOwnedInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutOwnedInput, UtilisateurUpdateWithoutOwnedInput>, UtilisateurUncheckedUpdateWithoutOwnedInput>
  }

  export type UserXGroupUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<UserXGroupCreateWithoutGroupeInput, UserXGroupUncheckedCreateWithoutGroupeInput> | UserXGroupCreateWithoutGroupeInput[] | UserXGroupUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutGroupeInput | UserXGroupCreateOrConnectWithoutGroupeInput[]
    upsert?: UserXGroupUpsertWithWhereUniqueWithoutGroupeInput | UserXGroupUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: UserXGroupCreateManyGroupeInputEnvelope
    set?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    disconnect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    delete?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    update?: UserXGroupUpdateWithWhereUniqueWithoutGroupeInput | UserXGroupUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: UserXGroupUpdateManyWithWhereWithoutGroupeInput | UserXGroupUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: UserXGroupScalarWhereInput | UserXGroupScalarWhereInput[]
  }

  export type ReminderUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<ReminderCreateWithoutGroupeInput, ReminderUncheckedCreateWithoutGroupeInput> | ReminderCreateWithoutGroupeInput[] | ReminderUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutGroupeInput | ReminderCreateOrConnectWithoutGroupeInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutGroupeInput | ReminderUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: ReminderCreateManyGroupeInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutGroupeInput | ReminderUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutGroupeInput | ReminderUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type UserXGroupUncheckedUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<UserXGroupCreateWithoutGroupeInput, UserXGroupUncheckedCreateWithoutGroupeInput> | UserXGroupCreateWithoutGroupeInput[] | UserXGroupUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: UserXGroupCreateOrConnectWithoutGroupeInput | UserXGroupCreateOrConnectWithoutGroupeInput[]
    upsert?: UserXGroupUpsertWithWhereUniqueWithoutGroupeInput | UserXGroupUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: UserXGroupCreateManyGroupeInputEnvelope
    set?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    disconnect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    delete?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    connect?: UserXGroupWhereUniqueInput | UserXGroupWhereUniqueInput[]
    update?: UserXGroupUpdateWithWhereUniqueWithoutGroupeInput | UserXGroupUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: UserXGroupUpdateManyWithWhereWithoutGroupeInput | UserXGroupUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: UserXGroupScalarWhereInput | UserXGroupScalarWhereInput[]
  }

  export type ReminderUncheckedUpdateManyWithoutGroupeNestedInput = {
    create?: XOR<ReminderCreateWithoutGroupeInput, ReminderUncheckedCreateWithoutGroupeInput> | ReminderCreateWithoutGroupeInput[] | ReminderUncheckedCreateWithoutGroupeInput[]
    connectOrCreate?: ReminderCreateOrConnectWithoutGroupeInput | ReminderCreateOrConnectWithoutGroupeInput[]
    upsert?: ReminderUpsertWithWhereUniqueWithoutGroupeInput | ReminderUpsertWithWhereUniqueWithoutGroupeInput[]
    createMany?: ReminderCreateManyGroupeInputEnvelope
    set?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    disconnect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    delete?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    connect?: ReminderWhereUniqueInput | ReminderWhereUniqueInput[]
    update?: ReminderUpdateWithWhereUniqueWithoutGroupeInput | ReminderUpdateWithWhereUniqueWithoutGroupeInput[]
    updateMany?: ReminderUpdateManyWithWhereWithoutGroupeInput | ReminderUpdateManyWithWhereWithoutGroupeInput[]
    deleteMany?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
  }

  export type UtilisateurCreateNestedOneWithoutUserXGroupInput = {
    create?: XOR<UtilisateurCreateWithoutUserXGroupInput, UtilisateurUncheckedCreateWithoutUserXGroupInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutUserXGroupInput
    connect?: UtilisateurWhereUniqueInput
  }

  export type GroupeCreateNestedOneWithoutUserXGroupInput = {
    create?: XOR<GroupeCreateWithoutUserXGroupInput, GroupeUncheckedCreateWithoutUserXGroupInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutUserXGroupInput
    connect?: GroupeWhereUniqueInput
  }

  export type UtilisateurUpdateOneRequiredWithoutUserXGroupNestedInput = {
    create?: XOR<UtilisateurCreateWithoutUserXGroupInput, UtilisateurUncheckedCreateWithoutUserXGroupInput>
    connectOrCreate?: UtilisateurCreateOrConnectWithoutUserXGroupInput
    upsert?: UtilisateurUpsertWithoutUserXGroupInput
    connect?: UtilisateurWhereUniqueInput
    update?: XOR<XOR<UtilisateurUpdateToOneWithWhereWithoutUserXGroupInput, UtilisateurUpdateWithoutUserXGroupInput>, UtilisateurUncheckedUpdateWithoutUserXGroupInput>
  }

  export type GroupeUpdateOneRequiredWithoutUserXGroupNestedInput = {
    create?: XOR<GroupeCreateWithoutUserXGroupInput, GroupeUncheckedCreateWithoutUserXGroupInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutUserXGroupInput
    upsert?: GroupeUpsertWithoutUserXGroupInput
    connect?: GroupeWhereUniqueInput
    update?: XOR<XOR<GroupeUpdateToOneWithWhereWithoutUserXGroupInput, GroupeUpdateWithoutUserXGroupInput>, GroupeUncheckedUpdateWithoutUserXGroupInput>
  }

  export type GroupeCreateNestedOneWithoutReminderInput = {
    create?: XOR<GroupeCreateWithoutReminderInput, GroupeUncheckedCreateWithoutReminderInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutReminderInput
    connect?: GroupeWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type GroupeUpdateOneRequiredWithoutReminderNestedInput = {
    create?: XOR<GroupeCreateWithoutReminderInput, GroupeUncheckedCreateWithoutReminderInput>
    connectOrCreate?: GroupeCreateOrConnectWithoutReminderInput
    upsert?: GroupeUpsertWithoutReminderInput
    connect?: GroupeWhereUniqueInput
    update?: XOR<XOR<GroupeUpdateToOneWithWhereWithoutReminderInput, GroupeUpdateWithoutReminderInput>, GroupeUncheckedUpdateWithoutReminderInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
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
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
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

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
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
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type GroupeCreateWithoutUtilisateurInput = {
    name: string
    UserXGroup?: UserXGroupCreateNestedManyWithoutGroupeInput
    Reminder?: ReminderCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    name: string
    UserXGroup?: UserXGroupUncheckedCreateNestedManyWithoutGroupeInput
    Reminder?: ReminderUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeCreateOrConnectWithoutUtilisateurInput = {
    where: GroupeWhereUniqueInput
    create: XOR<GroupeCreateWithoutUtilisateurInput, GroupeUncheckedCreateWithoutUtilisateurInput>
  }

  export type GroupeCreateManyUtilisateurInputEnvelope = {
    data: GroupeCreateManyUtilisateurInput | GroupeCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type UserXGroupCreateWithoutUtilisateurInput = {
    Groupe: GroupeCreateNestedOneWithoutUserXGroupInput
  }

  export type UserXGroupUncheckedCreateWithoutUtilisateurInput = {
    id?: number
    groupid: number
  }

  export type UserXGroupCreateOrConnectWithoutUtilisateurInput = {
    where: UserXGroupWhereUniqueInput
    create: XOR<UserXGroupCreateWithoutUtilisateurInput, UserXGroupUncheckedCreateWithoutUtilisateurInput>
  }

  export type UserXGroupCreateManyUtilisateurInputEnvelope = {
    data: UserXGroupCreateManyUtilisateurInput | UserXGroupCreateManyUtilisateurInput[]
    skipDuplicates?: boolean
  }

  export type GroupeUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: GroupeWhereUniqueInput
    update: XOR<GroupeUpdateWithoutUtilisateurInput, GroupeUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<GroupeCreateWithoutUtilisateurInput, GroupeUncheckedCreateWithoutUtilisateurInput>
  }

  export type GroupeUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: GroupeWhereUniqueInput
    data: XOR<GroupeUpdateWithoutUtilisateurInput, GroupeUncheckedUpdateWithoutUtilisateurInput>
  }

  export type GroupeUpdateManyWithWhereWithoutUtilisateurInput = {
    where: GroupeScalarWhereInput
    data: XOR<GroupeUpdateManyMutationInput, GroupeUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type GroupeScalarWhereInput = {
    AND?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
    OR?: GroupeScalarWhereInput[]
    NOT?: GroupeScalarWhereInput | GroupeScalarWhereInput[]
    id?: IntFilter<"Groupe"> | number
    name?: StringFilter<"Groupe"> | string
    ownerid?: IntFilter<"Groupe"> | number
  }

  export type UserXGroupUpsertWithWhereUniqueWithoutUtilisateurInput = {
    where: UserXGroupWhereUniqueInput
    update: XOR<UserXGroupUpdateWithoutUtilisateurInput, UserXGroupUncheckedUpdateWithoutUtilisateurInput>
    create: XOR<UserXGroupCreateWithoutUtilisateurInput, UserXGroupUncheckedCreateWithoutUtilisateurInput>
  }

  export type UserXGroupUpdateWithWhereUniqueWithoutUtilisateurInput = {
    where: UserXGroupWhereUniqueInput
    data: XOR<UserXGroupUpdateWithoutUtilisateurInput, UserXGroupUncheckedUpdateWithoutUtilisateurInput>
  }

  export type UserXGroupUpdateManyWithWhereWithoutUtilisateurInput = {
    where: UserXGroupScalarWhereInput
    data: XOR<UserXGroupUpdateManyMutationInput, UserXGroupUncheckedUpdateManyWithoutUtilisateurInput>
  }

  export type UserXGroupScalarWhereInput = {
    AND?: UserXGroupScalarWhereInput | UserXGroupScalarWhereInput[]
    OR?: UserXGroupScalarWhereInput[]
    NOT?: UserXGroupScalarWhereInput | UserXGroupScalarWhereInput[]
    id?: IntFilter<"UserXGroup"> | number
    userid?: IntFilter<"UserXGroup"> | number
    groupid?: IntFilter<"UserXGroup"> | number
  }

  export type UtilisateurCreateWithoutOwnedInput = {
    password: string
    username: string
    email: string
    UserXGroup?: UserXGroupCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutOwnedInput = {
    id?: number
    password: string
    username: string
    email: string
    UserXGroup?: UserXGroupUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutOwnedInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutOwnedInput, UtilisateurUncheckedCreateWithoutOwnedInput>
  }

  export type UserXGroupCreateWithoutGroupeInput = {
    Utilisateur: UtilisateurCreateNestedOneWithoutUserXGroupInput
  }

  export type UserXGroupUncheckedCreateWithoutGroupeInput = {
    id?: number
    userid: number
  }

  export type UserXGroupCreateOrConnectWithoutGroupeInput = {
    where: UserXGroupWhereUniqueInput
    create: XOR<UserXGroupCreateWithoutGroupeInput, UserXGroupUncheckedCreateWithoutGroupeInput>
  }

  export type UserXGroupCreateManyGroupeInputEnvelope = {
    data: UserXGroupCreateManyGroupeInput | UserXGroupCreateManyGroupeInput[]
    skipDuplicates?: boolean
  }

  export type ReminderCreateWithoutGroupeInput = {
    title: string
    body?: string | null
    creation: Date | string
    expiration: Date | string
    color: string
    author: string
  }

  export type ReminderUncheckedCreateWithoutGroupeInput = {
    id?: number
    title: string
    body?: string | null
    creation: Date | string
    expiration: Date | string
    color: string
    author: string
  }

  export type ReminderCreateOrConnectWithoutGroupeInput = {
    where: ReminderWhereUniqueInput
    create: XOR<ReminderCreateWithoutGroupeInput, ReminderUncheckedCreateWithoutGroupeInput>
  }

  export type ReminderCreateManyGroupeInputEnvelope = {
    data: ReminderCreateManyGroupeInput | ReminderCreateManyGroupeInput[]
    skipDuplicates?: boolean
  }

  export type UtilisateurUpsertWithoutOwnedInput = {
    update: XOR<UtilisateurUpdateWithoutOwnedInput, UtilisateurUncheckedUpdateWithoutOwnedInput>
    create: XOR<UtilisateurCreateWithoutOwnedInput, UtilisateurUncheckedCreateWithoutOwnedInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutOwnedInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutOwnedInput, UtilisateurUncheckedUpdateWithoutOwnedInput>
  }

  export type UtilisateurUpdateWithoutOwnedInput = {
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    UserXGroup?: UserXGroupUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutOwnedInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    UserXGroup?: UserXGroupUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type UserXGroupUpsertWithWhereUniqueWithoutGroupeInput = {
    where: UserXGroupWhereUniqueInput
    update: XOR<UserXGroupUpdateWithoutGroupeInput, UserXGroupUncheckedUpdateWithoutGroupeInput>
    create: XOR<UserXGroupCreateWithoutGroupeInput, UserXGroupUncheckedCreateWithoutGroupeInput>
  }

  export type UserXGroupUpdateWithWhereUniqueWithoutGroupeInput = {
    where: UserXGroupWhereUniqueInput
    data: XOR<UserXGroupUpdateWithoutGroupeInput, UserXGroupUncheckedUpdateWithoutGroupeInput>
  }

  export type UserXGroupUpdateManyWithWhereWithoutGroupeInput = {
    where: UserXGroupScalarWhereInput
    data: XOR<UserXGroupUpdateManyMutationInput, UserXGroupUncheckedUpdateManyWithoutGroupeInput>
  }

  export type ReminderUpsertWithWhereUniqueWithoutGroupeInput = {
    where: ReminderWhereUniqueInput
    update: XOR<ReminderUpdateWithoutGroupeInput, ReminderUncheckedUpdateWithoutGroupeInput>
    create: XOR<ReminderCreateWithoutGroupeInput, ReminderUncheckedCreateWithoutGroupeInput>
  }

  export type ReminderUpdateWithWhereUniqueWithoutGroupeInput = {
    where: ReminderWhereUniqueInput
    data: XOR<ReminderUpdateWithoutGroupeInput, ReminderUncheckedUpdateWithoutGroupeInput>
  }

  export type ReminderUpdateManyWithWhereWithoutGroupeInput = {
    where: ReminderScalarWhereInput
    data: XOR<ReminderUpdateManyMutationInput, ReminderUncheckedUpdateManyWithoutGroupeInput>
  }

  export type ReminderScalarWhereInput = {
    AND?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    OR?: ReminderScalarWhereInput[]
    NOT?: ReminderScalarWhereInput | ReminderScalarWhereInput[]
    id?: IntFilter<"Reminder"> | number
    title?: StringFilter<"Reminder"> | string
    body?: StringNullableFilter<"Reminder"> | string | null
    creation?: DateTimeFilter<"Reminder"> | Date | string
    expiration?: DateTimeFilter<"Reminder"> | Date | string
    color?: StringFilter<"Reminder"> | string
    author?: StringFilter<"Reminder"> | string
    groupeid?: IntFilter<"Reminder"> | number
  }

  export type UtilisateurCreateWithoutUserXGroupInput = {
    password: string
    username: string
    email: string
    Owned?: GroupeCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurUncheckedCreateWithoutUserXGroupInput = {
    id?: number
    password: string
    username: string
    email: string
    Owned?: GroupeUncheckedCreateNestedManyWithoutUtilisateurInput
  }

  export type UtilisateurCreateOrConnectWithoutUserXGroupInput = {
    where: UtilisateurWhereUniqueInput
    create: XOR<UtilisateurCreateWithoutUserXGroupInput, UtilisateurUncheckedCreateWithoutUserXGroupInput>
  }

  export type GroupeCreateWithoutUserXGroupInput = {
    name: string
    Utilisateur: UtilisateurCreateNestedOneWithoutOwnedInput
    Reminder?: ReminderCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateWithoutUserXGroupInput = {
    id?: number
    name: string
    ownerid: number
    Reminder?: ReminderUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeCreateOrConnectWithoutUserXGroupInput = {
    where: GroupeWhereUniqueInput
    create: XOR<GroupeCreateWithoutUserXGroupInput, GroupeUncheckedCreateWithoutUserXGroupInput>
  }

  export type UtilisateurUpsertWithoutUserXGroupInput = {
    update: XOR<UtilisateurUpdateWithoutUserXGroupInput, UtilisateurUncheckedUpdateWithoutUserXGroupInput>
    create: XOR<UtilisateurCreateWithoutUserXGroupInput, UtilisateurUncheckedCreateWithoutUserXGroupInput>
    where?: UtilisateurWhereInput
  }

  export type UtilisateurUpdateToOneWithWhereWithoutUserXGroupInput = {
    where?: UtilisateurWhereInput
    data: XOR<UtilisateurUpdateWithoutUserXGroupInput, UtilisateurUncheckedUpdateWithoutUserXGroupInput>
  }

  export type UtilisateurUpdateWithoutUserXGroupInput = {
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Owned?: GroupeUpdateManyWithoutUtilisateurNestedInput
  }

  export type UtilisateurUncheckedUpdateWithoutUserXGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    password?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    Owned?: GroupeUncheckedUpdateManyWithoutUtilisateurNestedInput
  }

  export type GroupeUpsertWithoutUserXGroupInput = {
    update: XOR<GroupeUpdateWithoutUserXGroupInput, GroupeUncheckedUpdateWithoutUserXGroupInput>
    create: XOR<GroupeCreateWithoutUserXGroupInput, GroupeUncheckedCreateWithoutUserXGroupInput>
    where?: GroupeWhereInput
  }

  export type GroupeUpdateToOneWithWhereWithoutUserXGroupInput = {
    where?: GroupeWhereInput
    data: XOR<GroupeUpdateWithoutUserXGroupInput, GroupeUncheckedUpdateWithoutUserXGroupInput>
  }

  export type GroupeUpdateWithoutUserXGroupInput = {
    name?: StringFieldUpdateOperationsInput | string
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutOwnedNestedInput
    Reminder?: ReminderUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateWithoutUserXGroupInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerid?: IntFieldUpdateOperationsInput | number
    Reminder?: ReminderUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeCreateWithoutReminderInput = {
    name: string
    Utilisateur: UtilisateurCreateNestedOneWithoutOwnedInput
    UserXGroup?: UserXGroupCreateNestedManyWithoutGroupeInput
  }

  export type GroupeUncheckedCreateWithoutReminderInput = {
    id?: number
    name: string
    ownerid: number
    UserXGroup?: UserXGroupUncheckedCreateNestedManyWithoutGroupeInput
  }

  export type GroupeCreateOrConnectWithoutReminderInput = {
    where: GroupeWhereUniqueInput
    create: XOR<GroupeCreateWithoutReminderInput, GroupeUncheckedCreateWithoutReminderInput>
  }

  export type GroupeUpsertWithoutReminderInput = {
    update: XOR<GroupeUpdateWithoutReminderInput, GroupeUncheckedUpdateWithoutReminderInput>
    create: XOR<GroupeCreateWithoutReminderInput, GroupeUncheckedCreateWithoutReminderInput>
    where?: GroupeWhereInput
  }

  export type GroupeUpdateToOneWithWhereWithoutReminderInput = {
    where?: GroupeWhereInput
    data: XOR<GroupeUpdateWithoutReminderInput, GroupeUncheckedUpdateWithoutReminderInput>
  }

  export type GroupeUpdateWithoutReminderInput = {
    name?: StringFieldUpdateOperationsInput | string
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutOwnedNestedInput
    UserXGroup?: UserXGroupUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateWithoutReminderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    ownerid?: IntFieldUpdateOperationsInput | number
    UserXGroup?: UserXGroupUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeCreateManyUtilisateurInput = {
    id?: number
    name: string
  }

  export type UserXGroupCreateManyUtilisateurInput = {
    id?: number
    groupid: number
  }

  export type GroupeUpdateWithoutUtilisateurInput = {
    name?: StringFieldUpdateOperationsInput | string
    UserXGroup?: UserXGroupUpdateManyWithoutGroupeNestedInput
    Reminder?: ReminderUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    UserXGroup?: UserXGroupUncheckedUpdateManyWithoutGroupeNestedInput
    Reminder?: ReminderUncheckedUpdateManyWithoutGroupeNestedInput
  }

  export type GroupeUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
  }

  export type UserXGroupUpdateWithoutUtilisateurInput = {
    Groupe?: GroupeUpdateOneRequiredWithoutUserXGroupNestedInput
  }

  export type UserXGroupUncheckedUpdateWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupid?: IntFieldUpdateOperationsInput | number
  }

  export type UserXGroupUncheckedUpdateManyWithoutUtilisateurInput = {
    id?: IntFieldUpdateOperationsInput | number
    groupid?: IntFieldUpdateOperationsInput | number
  }

  export type UserXGroupCreateManyGroupeInput = {
    id?: number
    userid: number
  }

  export type ReminderCreateManyGroupeInput = {
    id?: number
    title: string
    body?: string | null
    creation: Date | string
    expiration: Date | string
    color: string
    author: string
  }

  export type UserXGroupUpdateWithoutGroupeInput = {
    Utilisateur?: UtilisateurUpdateOneRequiredWithoutUserXGroupNestedInput
  }

  export type UserXGroupUncheckedUpdateWithoutGroupeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type UserXGroupUncheckedUpdateManyWithoutGroupeInput = {
    id?: IntFieldUpdateOperationsInput | number
    userid?: IntFieldUpdateOperationsInput | number
  }

  export type ReminderUpdateWithoutGroupeInput = {
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateWithoutGroupeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }

  export type ReminderUncheckedUpdateManyWithoutGroupeInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    body?: NullableStringFieldUpdateOperationsInput | string | null
    creation?: DateTimeFieldUpdateOperationsInput | Date | string
    expiration?: DateTimeFieldUpdateOperationsInput | Date | string
    color?: StringFieldUpdateOperationsInput | string
    author?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UtilisateurCountOutputTypeDefaultArgs instead
     */
    export type UtilisateurCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtilisateurCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupeCountOutputTypeDefaultArgs instead
     */
    export type GroupeCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupeCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UtilisateurDefaultArgs instead
     */
    export type UtilisateurArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UtilisateurDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GroupeDefaultArgs instead
     */
    export type GroupeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GroupeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserXGroupDefaultArgs instead
     */
    export type UserXGroupArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserXGroupDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ReminderDefaultArgs instead
     */
    export type ReminderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ReminderDefaultArgs<ExtArgs>

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