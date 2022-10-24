
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import ErrorElement from './component/ErrorElement/ErrorElement';
import Home from './component/Home/Home';

import Main from './component/Layout/Main';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Register/Register';




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
          path : '/blog',
          element : <Blog />
        },
        {
          path : '/login',
          element : <Login />
        },
        {
          path : '/register',
          element : <Register />
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
