import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Homepage from '../pages/homepage/Homepage';
import Signup from '../pages/form/Signup';
import Login from '../pages/form/Login';
import Services from '../pages/others/Services';
import AddService from '../pages/shared/AddService';
import MyReviews from '../pages/shared/MyReviews';
import Blogs from '../pages/shared/Blogs';
import Contacts from '../pages/shared/Contacts';
import Protected from './Protected';
import ServiceDetails from '../pages/others/ServiceDetails';

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
        path: '/services',
        element: <Services />,
      },
      {
        path: '/servicedetails/:id',
        element: <ServiceDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: '/addservice',
        element: (
          <Protected>
            <AddService />
          </Protected>
        ),
      },
      {
        path: '/myreviews',
        element: (
          <Protected>
            <MyReviews />
          </Protected>
        ),
      },
      {
        path: '/blogs',
        element: <Blogs />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
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
