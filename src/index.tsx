import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/Home';
import About from './About/About';
import Nav from './Nav/Nav';

import reportWebVitals from './reportWebVitals';

import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import Footer from "./ReUsableComponents/Footer/Footer";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
     <BrowserRouter>
         <Nav />
         <Routes>
             <Route path="/" element={<Home />} />
             <Route path="/vendido" element={<Navigate to="/" />} />
             <Route path="/about" element={<About />} />
         </Routes>
         <Footer />
     </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
