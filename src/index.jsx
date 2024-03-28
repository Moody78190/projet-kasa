import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Rentals from "./Pages/Rentals/Rentals";
import About from "./Pages/About/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Error404 from "./components/Error404";

createRoot(document.getElementById("root")).render(
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="*" element={<Error404 />} />
      <Route path="/Rentals/:id" element={<Rentals />} />
    </Routes>
    <Footer />
  </Router>
);
