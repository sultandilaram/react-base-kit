import { Response } from "../types";
export default function useApi(api_url?: string): {
    get: <R = any>(endpoint: string, opts?: {
        auth: boolean;
    }) => Promise<Response<R>>;
    post: <T = any, R_1 = any>(endpoint: string, data: T, opts?: {
        auth: boolean;
    }) => Promise<Response<R_1>>;
    put: <T_1 = any, R_2 = any>(endpoint: string, data: T_1, opts?: {
        auth: boolean;
    }) => Promise<Response<R_2>>;
    del: <R_3 = any>(endpoint: string, opts?: {
        auth: boolean;
    }) => Promise<Response<R_3>>;
};
