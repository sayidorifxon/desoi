import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ErrorPage from './pages/ErrorPage';
import HomePage from './pages/HomePage';
import MyBag from './pages/MyBag';
import Shop from './pages/Shop';
import PdpPage from './pages/PdpPage';

const appRouter = createBrowserRouter([{
  path:"/",
  element:<App/>,
  errorElement:<ErrorPage/>,
  children:[
    {
      path:"/",
      element:<HomePage/>
    },
    {
      path:"/bag",
      element:<MyBag/>
    },
    {
      path:"/pdp",
      element:<PdpPage/>
    },
    {
      path:"/shop",
      element:<Shop/>
    }
  ]

}])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);


