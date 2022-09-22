import React from 'react';
import { useLocalStorage, useBase } from ".";

export default function useAuth() {

  const { loginMethod, logoutCallback } = useBase();

  const [authToken, setAuthToken] = useLocalStorage<string | null>('auth_token', null);

  const isAuth = React.useMemo(() => authToken === null ? true : false, [authToken]);

  const login = React.useCallback(async (...args: any) => {
    const token = await loginMethod(...args);
    setAuthToken(token)
  }, [loginMethod, setAuthToken]);

  const logout = React.useCallback(() => {
    setAuthToken(null)
    logoutCallback && logoutCallback();
  }, [logoutCallback, setAuthToken]);

  return {
    authToken,
    isAuth,
    login,
    logout,
  }
}
