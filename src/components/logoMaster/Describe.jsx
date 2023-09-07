import React from "react";

const Describe = () => {
  return (
    <div className="describe">
      <div className="container">
        <h2>Step 1: Describe Your Company</h2>
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center gap-5">
          <div>
            <p>
              Briefly describe your company, its industry, and its values. Our
              API will analyze the input and generate 6 unique SVG logos
              specifically tailored to your brand.
            </p>
          </div>
          <div>
            <p>
              Don’t worry if you can’t quite articulate your vision. Our smart
              API will grab the essential elements and throw in a pinch of
              creativity to make sure your logo is unforgettable!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Describe;
