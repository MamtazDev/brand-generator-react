import React, { useState } from "react";
import geberatelogo from "../../assets/generateLogo1.png";
import { useApiData } from "../context/ApiDataContext";
import { useNavigate } from "react-router-dom";

const Preference = ({ values, handleDislike, handleLike }) => {
  const { inputValue } = useApiData();
  const navigate = useNavigate();
  const [companyValue, setCompanyValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ inputValue, values }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("POST Response:", json);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/final-logo");
        }, 3000);
      });
  };
  return (
    <div className="preference">
      <div className="container">
        <h2 className="text-dark">Your Possible Logos</h2>
        <form onSubmit={handleSubmit}>
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
                      value === 1
                        ? "text-white bg-danger"
                        : "text-danger bg-white"
                    } fa-solid fa-heart py-1 px-3 rounded-circle fs-6 pointer`}
                  ></i>
                  <i
                    onClick={() => handleDislike(index)}
                    className={`${
                      value === -1
                        ? "text-white bg-danger"
                        : "text-danger bg-white"
                    } fa-solid fa-heart-crack  py-1 px-3 rounded-circle fs-6 pointer`}
                  ></i>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            {isLoading ? (
              <div className="spinner-border text-secondary" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            ) : (
              <button
                className="text-white px-3 py-2 rounded"
                style={{ background: "#007bff" }}
              >
                Generate Final Logo
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Preference;
