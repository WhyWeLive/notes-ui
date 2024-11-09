import { QueryClientProvider } from '@tanstack/react-query';

import { Router } from '../router/router.tsx';
import { queryClient } from '../query/query.client.ts';

import './application.css';
import { AuthContextProvider } from '../auth/auth.context.tsx';

export const Application = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </QueryClientProvider>
  );
};
