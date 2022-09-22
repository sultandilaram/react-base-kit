import React from "react";

export type BaseEnvironment = "prod" | "dev" | "local";

export type BaseConfig = {
  environment: BaseEnvironment;
  api: {
    local: string;
    dev?: string;
    prod: string;
  };
  loginMethod: (...args: any) => Promise<string>;
  logoutCallback?: () => void;
};

export interface Response<T = any> {
  success: boolean;
  code: number;
  message: string;
  data: T;
}

export type Route = {
  path: string;
  element: React.ReactNode;
};

type ArrayLengthMutationKeys =
  | "splice"
  | "push"
  | "pop"
  | "shift"
  | "unshift"
  | number;
type ArrayItems<T extends Array<any>> = T extends Array<infer TItems>
  ? TItems
  : never;

/**
 * Declare a type with fixed length and types
 *
 * ```ts
 * let myFixedLengthArray: FixedLengthArray< [string, string, number]>
 * myFixedLengthArray = [ 'a', 'b', 0 ]
 * ```
 */
export type FixedLengthArray<T extends any[]> = Pick<
  T,
  Exclude<keyof T, ArrayLengthMutationKeys>
> & { [Symbol.iterator]: () => IterableIterator<ArrayItems<T>> };
