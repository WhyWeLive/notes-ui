import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import { User } from '@supabase/supabase-js';
import { useQueries } from '@tanstack/react-query';
import { supabaseClient } from '../supabase/client.ts';
import toast from 'react-hot-toast';

export type AuthContextType = {
  user: User | null;
  isAuthenticating: boolean;
  isLoggedIn: boolean;

  login: (email: string, password: string) => void;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [isAuthenticating, setIsAuthenticating] = useState<boolean>(false);

  const [user] = useQueries({
    queries: [
      {
        queryKey: ['user'],
        queryFn: async () =>
          supabaseClient.auth.getUser().then(data => {
            if (data.error || !data.data) {
              return null;
            }

            return data.data.user!;
          }),
      },
    ],
  });

  const login = useCallback(async (email: string, password: string) => {
    setIsAuthenticating(true);

    await toast
      .promise(
        supabaseClient.auth
          .signInWithPassword({
            email,
            password,
          })
          .then(data => {
            if (data.error || !data.data) {
              return null;
            }

            return data.data.user!;
          }),
        {
          loading: 'Signing in...',
          success: <b>Sign in succeed</b>,
          error: <b>Could not sign in</b>,
        },
      )
      .finally(() => setIsAuthenticating(false));
  }, []);

  const value = useMemo(
    () => ({
      user: user.data || null,
      isLoggedIn: user.data !== null,

      isAuthenticating,

      login,
    }),
    [user, login],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
