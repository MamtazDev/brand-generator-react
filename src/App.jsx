import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import FinalLogoPage from "./components/finalLogo/FinalLogoPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/final-logo" element={<FinalLogoPage />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
