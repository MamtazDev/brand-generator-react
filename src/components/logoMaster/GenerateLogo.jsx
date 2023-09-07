import React from "react";

const GenerateLogo = () => {
  return (
    <div>
      <div className="container">
        <form className="generate d-flex justify-content-between align-items-center gap-3">
          <input
            type="text"
            name="generate"
            placeholder="My Company is a...called...our moto is... we are situated in...our client is..."
          />
          <button>Generate Logos</button>
        </form>
      </div>
    </div>
  );
};

export default GenerateLogo;
