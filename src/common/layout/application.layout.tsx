import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const ApplicationLayout = () => {
  return (
    <div>
      <Outlet />

      <Toaster position={'bottom-right'} />
    </div>
  );
};
