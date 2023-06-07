import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import PictoToText from "./pictotext/PictoToText.js";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));

  const Home = createBrowserRouter ([
    {
      path: "/",
      element: <App/>
    },

    {
      path: "/pictototext",
      element: <PictoToText/>
    }
  ])

root.render(
  <React.StrictMode>
    <RouterProvider router={Home}/>
  </React.StrictMode>
);
