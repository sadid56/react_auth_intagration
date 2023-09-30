import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Rout from './components/Rout/Rout.jsx';
import Home from './components/Rout/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Register/Register.jsx';
import ContaxtProvider from './contextProvider/ContactProvider.jsx';
import Order from './components/Order/order.jsx';
import PrivatRout from './PrivatRout/PrivatRout.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Rout></Rout>,
    children:[
      {
        path:'/',
        element: <Home></Home>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/order',
        element: <PrivatRout><Order></Order></PrivatRout>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ContaxtProvider>
   <RouterProvider router={router} />
   </ContaxtProvider>
  </React.StrictMode>,
)
