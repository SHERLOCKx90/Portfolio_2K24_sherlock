import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, Route, RouterProvider } from 'react-router-dom'
import About from './pages/About'
import Projects from './pages/Projects'

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
    },
    {
        path: '/about',
        element: <About />,
    },
    {
        path: '/projects',
        element: <Projects />,
    },
])

const Container = document.getElementById('root');
const root = ReactDOM.createRoot(Container);
root.render(
    <RouterProvider router={router} />
);