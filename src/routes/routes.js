import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Homepage from '../pages/homepage/Homepage';
import Signup from '../pages/form/Signup';
import Login from '../pages/form/Login';

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
      {
        path: '/signup',
        element: <Signup />,
      },
      {
        path: '/login',
        element: <Login />,
      },
    ],
  },
]);

export default router;
