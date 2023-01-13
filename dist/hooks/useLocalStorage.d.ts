import React from "react";
export default function useLocalStorage<T = any>(key: string, initialState: T extends Function ? never : T | (() => T)): [T, React.Dispatch<React.SetStateAction<T>>];
