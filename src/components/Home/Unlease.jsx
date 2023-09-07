import React from "react";

const Unlease = () => {
  return (
    <div className="unleash">
      <div className="container">
        <div className="imgUnleash mx-auto">
          <svg viewBox="0 0 200 200">
            <path
              d="M 103.972 45.671 C 103.69 46.902 102.341 47.647 101.524 48.614 C 99.35 51.182 97.507 54.141 95.651 56.891 C 90.145 65.038 84.134 72.906 78.542 81.02 C 73.249 88.702 70.117 96.634 65.786 104.598 C 65.412 105.281 63.73 107.807 65.575 106.915 C 68.846 105.332 75.965 106.583 79.598 106.583 C 80.845 106.583 96.27 105.769 96.369 107.246 C 96.866 114.621 93.509 123.032 92.567 130.419 C 91.881 135.79 90.549 141.154 89.356 146.455 C 88.637 149.661 88.88 153.209 87.413 156.239 C 86.482 158.168 87.848 156.028 88.048 155.247 C 88.949 151.715 91.035 147.957 92.609 144.616 C 98.632 131.832 107.931 120.695 115.336 108.606 C 120.958 99.427 127.672 90.492 133.245 81.756 C 133.701 81.04 135.63 78.968 134.217 79.953 C 132.797 80.942 128.847 81.338 127.12 81.424 C 118.001 81.878 108.673 85.628 99.789 87.346 C 98.261 87.643 91.76 90.976 93.496 87.382 C 96.044 82.114 96.197 75.986 97.889 70.463 C 99.7 64.553 100.154 58.205 102.281 52.44 C 102.873 50.843 104.372 43.512 105.496 43.023"
              strokeWidth="5"
              stroke="rgb(0, 135, 208)"
              strokeLinecap="round"
              fill="none"
              strokeMiterlimit="10"
            ></path>
          </svg>
        </div>
        <div className="d-flex flex-column" style={{ gap: "35px" }}>
          <h2>Unleash Your Brand Identity</h2>
          <p>
            Describe your company and we'll craft the perfect logo in seconds.
            Stop stressing over design and let brand generator do the magic for
            you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unlease;
