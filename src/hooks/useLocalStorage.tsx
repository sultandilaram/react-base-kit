import React from "react";

export default function useLocalStorage<T = any>(
  key: string,
  initialState: T extends Function ? never : T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [value, setValueState] = React.useState<T>(() => {
    try {
      const item = localStorage.getItem(key);

      if (item && item !== "null") {
        try {
          return JSON.parse(item);
        } catch {
          return item;
        }
      } else {
        const defaultValue =
          typeof initialState === "function" ? initialState() : initialState;
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } catch (e) {
      console.error(e);
      return typeof initialState === "function" ? initialState() : initialState;
    }
  });

  const setValue = React.useCallback(
    (value: React.SetStateAction<T>) => {
      try {
        localStorage.setItem(key, JSON.stringify(value));
        setValueState(value);
      } catch (e) {
        console.error(e);
        console.error(
          `Above error occured while updating localstorage: ${key}`
        );
      }
    },
    [setValueState]
  );

  return [value, setValue];
}
