import React, { useState } from "react";
import { useApiData } from "../context/ApiDataContext";
import { useNavigate } from "react-router-dom";

const GenerateLogo = () => {
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
      body: JSON.stringify({ companyValue, inputValue }),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log("POST Response:", json);
        setTimeout(() => {
          setIsLoading(false);
          navigate("/final-logo");
        }, 10000);
      });
  };
  return (
    <div>
      <div className="container">
        <form
          onSubmit={handleSubmit}
          className="generate d-flex justify-content-between align-items-center gap-3"
        >
          <input
            type="text"
            name="generate"
            onChange={(e) => setCompanyValue(e.target.value)}
            placeholder="My Company is a...called...our moto is... we are situated in...our client is..."
          />

          {isLoading ? (
            <div className="spinner-border text-secondary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            <button>Generate Logos</button>
          )}
        </form>
      </div>
    </div>
  );
};

export default GenerateLogo;
