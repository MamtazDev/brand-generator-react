import React from "react";
import leaf from "../../assets/leaf.png";

const MasterPiece = () => {
  return (
    <div className="masterPiece">
      <div className="container">
        <h2>Your Logo Masterpiece</h2>
        <div className="d-flex flex-column flex-md-row gap-4 gap-md-0 justify-content-between align-items-start align-items-md-center">
          <div className="imgLeaf">
            <img className="img-fluid" src={leaf} alt="Image" />
          </div>
          <div className="d-flex flex-column gap-4">
            <div>
              <span>Bold Design</span>
              <p>
                Bold and attention grabbing design that
                <br /> captures the essence of your brand.
              </p>
            </div>
            <div>
              <span>Personalized</span>
              <p>
                A logo crafted just for you based on your <br />
                unique preferences and style.
              </p>
            </div>
            <div>
              <span>Final Creation</span>
              <p>This is it your logo masterpiece is here.</p>
              <p>Are you ready to unveil it?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterPiece;
