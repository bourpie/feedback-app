import React from 'react'
import ReactDOM  from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import App from './App'
import AboutPage from './pages/About'

import './index.css'

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container); 

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/about",
        element: <AboutPage />
    }
  ]);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);