import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Pictototext from './pictotext/Pictototext.jsx';
import reportWebVitals from './reportWebVitals';
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
      element: <Pictototext/>
    }
  ])

root.render(
  <React.StrictMode>
    <RouterProvider router={Home}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
