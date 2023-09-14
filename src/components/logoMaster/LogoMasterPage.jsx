import React, { useState } from "react";
import MasterBanner from "./MasterBanner";
import LogoHeader from "./LogoHeader";
// import GenerateLogo from "./GenerateLogo";
import Describe from "./Describe";
import Preference from "./Preference";
import Review from "./Review";
import LogoFooter from "./LogoFooter";

const LogoMasterPage = () => {
  const initialArray = [0, 0, 0, 0, 0, 0];
  const [values, setValues] = useState(initialArray);

  const handleLike = (index) => {
    const updatedValues = [...values];
    updatedValues[index] = 1;
    setValues(updatedValues);
  };

  const handleDislike = (index) => {
    const updatedValues = [...values];
    updatedValues[index] = -1;
    setValues(updatedValues);
  };
  return (
    <div>
      <LogoHeader />
      <MasterBanner />
      {/* <GenerateLogo values={values} /> */}
      <Describe />
      <Preference
        values={values}
        handleLike={handleLike}
        handleDislike={handleDislike}
      />
      <Review />
      <LogoFooter />
    </div>
  );
};

export default LogoMasterPage;
