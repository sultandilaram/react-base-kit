export default function useAsync<T = any, R = any>(cb: (args?: T) => Promise<R>, immediate?: boolean): {
    execute: () => Promise<void>;
    status: string;
    value: R | null;
    error: null;
};
