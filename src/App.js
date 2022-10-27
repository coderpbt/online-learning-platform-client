
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import Course from './component/Course/Course';
import RightSide from './component/Course/RightSide';
import CourseDetails from './component/CourseDetails/CourseDetails';
import ErrorElement from './component/ErrorElement/ErrorElement';
import Home from './component/Home/Home';

import Main from './component/Layout/Main';
import CheckOut from './component/Pages/CheckOut/CheckOut';
import Faq from './component/Pages/Faq/Faq';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';




function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement : <ErrorElement />,
      children : [
        {
          path : '/',
          element : <Home />
        },
        {
          path : '/home',
          element : <Home />
        },
        {
          path : '/blog',
          element : <Blog />
        },
        {
          path : '/faq',
          element : <Faq />
        },
        {
          path : '/courses',
          loader : () => fetch(`http://localhost:5000/courses`),
          element : <Course />
        },
        {
          path : '/catagory/:id',
          loader : ({params}) => fetch(`http://localhost:5000/categorisid/${params.id}`),
          element : <Course />
        },
        {
          path : '/courses/:id',
          loader : ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
          element : <CourseDetails />
         },
        {
          path : '/login',
          element : <Login />
        },
        {
          path : '/register',
          element : <Register />
        },
        {
          path : '/rightside',
          element : <RightSide />,
        },
        {
          path : '/checkout',
          element : <CheckOut />
        },
        {
          path : '/checkout/:id',
          loader : ({params}) => fetch(`http://localhost:5000/courses/${params.id}`),
          element : <PrivateRoute><CheckOut /></PrivateRoute>,
        },
        
  
      ]
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
