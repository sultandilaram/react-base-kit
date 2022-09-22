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
