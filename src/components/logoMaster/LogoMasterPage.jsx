import React from "react";
import MasterBanner from "./MasterBanner";
import LogoHeader from "./LogoHeader";
import GenerateLogo from "./GenerateLogo";
import Describe from "./Describe";
import Preference from "./Preference";
import Review from "./Review";
import LogoFooter from "./LogoFooter";

const LogoMasterPage = () => {
  return (
    <div>
      <LogoHeader />
      <MasterBanner />
      <GenerateLogo />
      <Describe />
      <Preference />
      <Review />
      <LogoFooter />
    </div>
  );
};

export default LogoMasterPage;
