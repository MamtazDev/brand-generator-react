import React, { useState } from "react";
import geberatelogo from "../../assets/generateLogo1.png";

const Preference = ({ values, handleDislike, handleLike }) => {
  console.log(values);
  return (
    <div className="preference">
      <div className="container">
        <h2 className="text-dark">Give us your preferences</h2>
        <div className="row gy-3">
          {values.map((value, index) => (
            <div key={index} className="col-6 position-relative">
              <img
                className="preferenceImg img-fluid"
                src={geberatelogo}
                alt="Generate Logo preference"
              />
              <div className="position-absolute  top-50 start-50 translate-middle d-flex gap-3 fs-3 ">
                <i
                  onClick={() => handleLike(index)}
                  className={`${
                    value === 1 ? "text-black" : "text-secondary"
                  } fa-solid fa-thumbs-up`}
                ></i>
                <i
                  onClick={() => handleDislike(index)}
                  className={`${
                    value === -1 ? "text-black" : "text-secondary"
                  } fa-solid fa-thumbs-down`}
                ></i>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preference;
