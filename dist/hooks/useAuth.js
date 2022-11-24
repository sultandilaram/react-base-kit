import React from "react";
import { useLocalStorage } from ".";
export default function useAuth() {
  const [authToken, setAuthToken] = useLocalStorage("auth_token", null);
  const isAuth = React.useMemo(() => !!authToken, [authToken]);
  const login = React.useCallback(async loginCallback => {
    const token = await loginCallback();
    setAuthToken(token);
  }, [setAuthToken]);
  const logout = React.useCallback(logoutCallback => {
    setAuthToken(null);
    logoutCallback && logoutCallback(authToken);
  }, [authToken, setAuthToken]);
  return {
    authToken,
    isAuth,
    login,
    logout
  };
}