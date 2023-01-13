import React from "react";
export default function useMedia(queries, values, defaultValue) {
  const mediaQueryLists = React.useMemo(() => queries.map(q => window.matchMedia(q)), []);
  const getValue = React.useCallback(() => {
    const index = mediaQueryLists.findIndex(mql => mql.matches);
    return typeof values[index] !== "undefined" ? values[index] : defaultValue;
  }, [mediaQueryLists]);
  const [value, setValue] = React.useState(getValue);
  React.useEffect(() => {
    const handler = () => setValue(getValue);
    mediaQueryLists.forEach(mql => mql.addListener(handler));
    return () => mediaQueryLists.forEach(mql => mql.removeListener(handler));
  }, []);
  return value;
}