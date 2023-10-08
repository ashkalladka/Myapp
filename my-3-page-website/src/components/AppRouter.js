// src/components/AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//import { Link } from 'react-router-dom';
//import Home from '../Home';
//import About from '../About';
//import Contact from '../Contact';
import Home from '../home';
import About from '../about';
import Contact from '../contact';
const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
