export type BaseEnvironment = "prod" | "dev" | "local";

export type BaseConfig<C = any> = {
  environment: BaseEnvironment;
  api: {
    local: string;
    dev?: string;
    prod: string;
  };
  custom?: C;
};
