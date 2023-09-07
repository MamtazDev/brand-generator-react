import React from "react";
import geberatelogo from "../../assets/generateLogo1.png";

const Preference = () => {
  return (
    <div className="preference">
      <div className="container">
        <h2 className="text-dark">Give us your preferences</h2>
        <div className="row gy-3">
          {[1, 2, 3, 4, 5, 6].map((data, index) => (
            <div key={index} className="col-6">
              <img
                className="preferenceImg img-fluid"
                src={geberatelogo}
                alt="Generate Logo preference"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preference;
