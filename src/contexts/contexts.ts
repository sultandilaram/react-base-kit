import React from "react";

export interface IBaseContext {
  api_url: string;
  loginMethod: (...args: any) => Promise<string>;
  logoutCallback?: () => void;
}
export const BaseContext = React.createContext<IBaseContext | undefined>(
  undefined
);
