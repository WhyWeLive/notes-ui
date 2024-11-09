import { RouterProvider } from 'react-router-dom';
import { routing } from './routing.tsx';

export const Router = () => {
  return <RouterProvider router={routing} />;
};
