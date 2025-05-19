import React from "react";
import BannerSection from "./components/banner/page";
import ServiceSection from "./components/serviceSection/page";

export const metadata = {
  title: "Home | ProCleaning",
};
const HomePage = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <ServiceSection></ServiceSection>
    </div>
  );
};

export default HomePage;
