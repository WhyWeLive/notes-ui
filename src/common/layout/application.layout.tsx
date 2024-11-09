import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const ApplicationLayout = () => (
  <div>
    <Outlet />

    <Toaster />
  </div>
);
