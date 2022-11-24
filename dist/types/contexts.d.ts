export declare type BaseEnvironment = "prod" | "dev" | "local";
export declare type BaseConfig<C = any> = {
    environment: BaseEnvironment;
    api: {
        local: string;
        dev?: string;
        prod: string;
    };
    custom?: C;
};
