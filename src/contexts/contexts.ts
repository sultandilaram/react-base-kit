import React from "react";

export interface IBaseContext<C = any> {
  api_url: string;
  custom?: C;
}
export const BaseContext = React.createContext<IBaseContext | undefined>(
  undefined
);
