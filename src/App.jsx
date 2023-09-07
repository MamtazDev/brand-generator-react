import React from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
import Footer from "./components/Footer";
import FinalLogoPage from "./components/finalLogo/FinalLogoPage";
import LogoMasterPage from "./components/logoMaster/LogoMasterPage";

const App = () => {
  let location = useLocation();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/final-logo" element={<FinalLogoPage />} />
        <Route path="/logo-master" element={<LogoMasterPage />} />
      </Routes>
      {location.pathname !== "/logo-master" && <Footer />}
    </div>
  );
};

export default App;
