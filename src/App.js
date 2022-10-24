
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './component/Blog/Blog';
import ErrorElement from './component/ErrorElement/ErrorElement';
import Home from './component/Home/Home';

import Main from './component/Layout/Main';




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
