import React, { useState } from "react";
import geberatelogo from "../../assets/generateLogo1.png";

const Preference = ({ values, handleDislike, handleLike }) => {
  console.log(values);
  return (
    <div className="preference">
      <div className="container">
        <h2 className="text-dark">Give us your preferences</h2>
        <div className="row gy-3">
          {values?.map((value, index) => (
            <div
              key={index}
              className="col-12 col-md-6 col-lg-4 position-relative"
            >
              <img
                className="preferenceImg img-fluid"
                src={geberatelogo}
                alt="Generate Logo preference"
              />
              <div className="position-absolute  bottom-0 start-50 translate-middle d-flex gap-5 fs-3 ">
                <i
                  onClick={() => handleLike(index)}
                  className={`${
                    value === 1 ? "text-danger" : "text-secondary"
                  } fa-solid fa-heart bg-white p-2 rounded-circle fs-6`}
                ></i>
                <i
                  onClick={() => handleDislike(index)}
                  className={`${
                    value === -1 ? "text-danger" : "text-secondary"
                  } fa-solid fa-heart-crack bg-white p-2 rounded-circle fs-6`}
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
