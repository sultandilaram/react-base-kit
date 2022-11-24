import React from "react";
import { useLocalStorage, useBase } from ".";

export default function useAuth() {
  const [authToken, setAuthToken] = useLocalStorage<string | null>(
    "auth_token",
    null
  );

  const isAuth = React.useMemo(() => !!authToken, [authToken]);

  const login = React.useCallback(
    async (loginCallback: () => Promise<string | null> | (string | null)) => {
      const token = await loginCallback();
      setAuthToken(token);
    },
    [setAuthToken]
  );

  const logout = React.useCallback(
    (logoutCallback?: (token: string | null) => void) => {
      setAuthToken(null);
      logoutCallback && logoutCallback(authToken);
    },
    [authToken, setAuthToken]
  );

  return {
    authToken,
    isAuth,
    login,
    logout,
  };
}
