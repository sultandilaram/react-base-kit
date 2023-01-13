import React from "react";
export default function useAsync(cb, immediate = true) {
  const [status, setStatus] = React.useState("idle");
  const [value, setValue] = React.useState(null);
  const [error, setError] = React.useState(null);
  const execute = React.useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);
    return cb().then(response => {
      setValue(response);
      setStatus("success");
    }).catch(error => {
      setError(error);
      setStatus("error");
    });
  }, [cb]);
  // Call execute if we want to fire it right away.
  // Otherwise execute can be called later, such as
  // in an onClick handler.
  React.useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);
  return {
    execute,
    status,
    value,
    error
  };
}