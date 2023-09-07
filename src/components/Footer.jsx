import React from "react";
import twitter from "../assets/twitter.png";
import ig from "../assets/ig.png";
import fb from "../assets/fb.png";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="text-center d-flex justify-content-center align-items-center gap-3 mb-3">
          <a href="#">
            <img src={twitter} alt="twitter" />
          </a>
          <a href="#">
            <img src={ig} alt="twitter" />
          </a>
          <a href="#">
            <img src={fb} alt="twitter" />
          </a>
        </div>
        <p>© 2023 BrandGenerator. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
