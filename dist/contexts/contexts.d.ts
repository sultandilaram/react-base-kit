import React from "react";
export interface IBaseContext<C = any> {
    api_url: string;
    custom?: C;
}
export declare const BaseContext: React.Context<IBaseContext<any> | undefined>;
