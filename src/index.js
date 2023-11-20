import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './components/home';
import Read from './components/read';
import Create from './components/create';
import Edit from './components/edit';
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';


// Creating route for app

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/read",
    element: <Read />,
  },
  {
    path: "/create",
    element: <Create />,
  },
  {
    path: "/edit/:id",
    element: <Edit />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
