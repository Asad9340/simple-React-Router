import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Error from './Error/Error';
import Posts from './components/Posts/Posts';
import Users from './components/Users/Users';
import UserDetails from './components/UserDetails/UserDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/posts`),
        element: <Posts />,
      },
      {
        path: '/users',
        loader: () => fetch(`https://jsonplaceholder.typicode.com/users`),
        element: <Users />,
      },
      {
        path: '/users/:userId',
        loader: ({ params }) =>
          fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element: <UserDetails></UserDetails>,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '/footer',
        element: <Footer />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
