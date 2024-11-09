import { createContext, PropsWithChildren, useContext, useMemo } from 'react';
import { User } from '@supabase/supabase-js';
import { useQueries } from '@tanstack/react-query';
import { supabaseClient } from '../supabase/client.ts';

export type AuthContextType = {
  user?: User;
  isLoggedIn?: boolean;
};

export const AuthContext = createContext<AuthContextType>(
  {} as AuthContextType,
);

export const AuthContextProvider = ({ children }: PropsWithChildren) => {
  const [user] = useQueries({
    queries: [
      {
        queryKey: ['user'],
        queryFn: async () =>
          supabaseClient.auth.getUser().then(data => {
            if (data.error || !data.data) {
              return undefined;
            }

            return data.data.user!;
          }),
      },
    ],
  });

  const value = useMemo(
    () => ({ user: user.data, isLoggedIn: !!user }),
    [user],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
