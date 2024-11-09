import { createBrowserRouter } from 'react-router-dom';
import { ApplicationLayout } from '../layout/application.layout.tsx';
import { Help } from '../help/help.component.tsx';
import { Auth } from '../auth/auth.component.tsx';

export const routing = createBrowserRouter([
  {
    path: '/',
    element: <ApplicationLayout />,
    children: [
      {
        path: '/auth',
        element: <Auth />,
      },
    ],
  },
  {
    path: '*',
    element: <Help />,
  },
]);
