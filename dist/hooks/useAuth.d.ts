export default function useAuth(): {
    authToken: string | null;
    isAuth: boolean;
    login: (loginCallback: () => Promise<string | null> | (string | null)) => Promise<void>;
    logout: (logoutCallback?: ((token: string | null) => void) | undefined) => void;
};
