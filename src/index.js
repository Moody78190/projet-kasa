import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Rentals from './Pages/Rentals/Rentals';
import NotFound from './Pages/NotFound/NotFound';
import About from './Pages/About/About';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/Home" element={<Home />} />
                <Route path="/About" element={<About />} />
                <Route path="/Rentals" element={<Rentals/>} />
                <Route path="/NotFound" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
