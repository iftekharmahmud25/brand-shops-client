import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayOut from './MainLayout/MainLayOut';
import ErrorPage from './MainLayout/Pages/ErrorPage/ErrorPage';
import Home from './MainLayout/Pages/Home/Home';
import Login from './MainLayout/Pages/Login/Login';
import AuthProvider from './components/Provider/AuthProvider';
import SignUp from './MainLayout/Pages/signup/SignUp';
import AddProducts from './MainLayout/Pages/addProducts/AddProducts';
import PrivateRoute from './components/Provider/PrivateRoute';
import Cart from './MainLayout/Pages/cart/Cart';
import BrandDetails from './MainLayout/Pages/BrandDetails/BrandDetails';
import UpdateProduct from './MainLayout/Pages/updateProduct/UpdateProduct';
import ProductDetails from './MainLayout/Pages/ProductDetails/ProductDetails';
import { DataProvider } from './components/hook/DataContext';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('/services.json')
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>
      },
      {
        path: '/addProducts',
        element: <PrivateRoute><AddProducts></AddProducts></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: '/brand/:id',
        element: <BrandDetails></BrandDetails>,
        loader: ({params})=> fetch(`https://apple-server-80zq1e59s-iftekahr-mahmuds-projects.vercel.app/services/${params.id}`)
      },
      {
        path: "/update-product/:productName",
        element: <UpdateProduct></UpdateProduct>
      },
      {
        path: "/brand/:id/details/:name",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>
      }


    ],
  },
]);








ReactDOM.createRoot(document.getElementById('root')).render(
  <DataProvider>
    <React.StrictMode>
      <AuthProvider> <RouterProvider router={router} /></AuthProvider>
    </React.StrictMode>
  </DataProvider>,
)
