import React from 'react'
import { NavLink } from 'react-router-dom'
import ReactDOM  from 'react-dom/client';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Header from './components/Header';
import App from './App'
import AboutPage from './pages/About'
import Post from './components/Post';
import Notfound from './pages/Notfound';

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
    },
    {
        path: "/post/*",
        element: <Post />
    },
    {
        path: "/post/:id/:name",
        element: <Post />
    },
    {
        path: "/notfound",
        element: <Notfound />
    }
  ]);

root.render(
    <React.StrictMode>
        <Header />
        <RouterProvider router={router} />
    </React.StrictMode>
);