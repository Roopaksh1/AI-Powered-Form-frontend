import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import NavBar from './components/Navbar';
import Error from './components/Error';
import Home from './pages/Home/Home';
import Dashboard from './pages/Dashboard/Dashboard';
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <NavBar />,
      children: [
        { index: true, element: <Home /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'contact', element: <Contact /> },
        { path: 'about', element: <About /> },
      ],
    },
    {
      path: '*',
      element: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
};

export default Router;
