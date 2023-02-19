import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import LeaderBoard from './pages/LeaderBoard';
import Tournament from './pages/Tournament';
import Profile from './components/Profile';
import Home from './pages/Home';
import Streamers from './pages/Streamers';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />,
        children: [
            {
                path: '/',
                element: <LeaderBoard />,
                children: [{ path: ':username', element: <Profile /> }],
            },
            {
                path: '/streamers',
                element: <Streamers />,
            },
            {
                path: '/tournament',
                element: <Tournament />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
);
