export interface Response<T = any> {
    success: boolean;
    code: number;
    message: string;
    data: T;
}
export * from "./components";
export * from "./contexts";
