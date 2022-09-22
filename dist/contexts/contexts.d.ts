import React from "react";
export interface IBaseContext {
    api_url: string;
    loginMethod: (...args: any) => Promise<string>;
    logoutCallback?: () => void;
}
export declare const BaseContext: React.Context<IBaseContext | undefined>;
