import { createBrowserRouter } from 'react-router-dom';
import Root from '../pages/root/Root';
import Errorpage from '../pages/errorpage/Errorpage';
import Homepage from '../pages/homepage/Homepage';
import ServiceFeed from '../pages/others/ServiceFeed';
import Signup from '../pages/form/Signup';
import Login from '../pages/form/Login';
import AddService from '../pages/shared/AddService';
import MyReviews from '../pages/shared/MyReviews';
import Blogs from '../pages/shared/Blogs';
import Contacts from '../pages/shared/Contacts';
import Protected from './Protected';
import ServiceDetails from '../pages/others/ServiceDetails';
import EditReview from '../pages/shared/EditReview';

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
        path: '/servicefeed',
        element: <ServiceFeed />,
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
        path: '/editreview/:id',
        element: <EditReview />,
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
