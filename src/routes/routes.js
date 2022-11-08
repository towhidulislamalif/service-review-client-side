import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Homepage from '../pages/homepage/Homepage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Errorpage />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/home',
        element: <Homepage />,
      },
    ],
  },
]);

export default router;
