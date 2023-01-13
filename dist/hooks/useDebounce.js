import React from "react";
export default function useDebounce(state, delay = 500) {
  const [debouncedState, setDebouncedState] = React.useState(state);
  React.useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedState(state);
    }, delay);
  }, [state, delay]);
  return debouncedState;
}