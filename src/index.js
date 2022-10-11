import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes } from "react-router-dom";
import { CardTypePage, HomePage, homePageLoader, MainTemplate, mainTemplateLoader } from './components';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<MainTemplate />}
      loader={mainTemplateLoader}
    >
      <Route index loader={homePageLoader} element={<HomePage />} />
      <Route path="/types/:type" element={<CardTypePage />}/>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} fallbackElement="Loading..." />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
