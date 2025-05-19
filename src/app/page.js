import React from "react";
import BannerSection from "./components/banner/page";
import ServiceSection from "./components/serviceSection/page";
import TeamSection from "./components/team/page";

export const metadata = {
  title: "Home | ProCleaning",
};
const HomePage = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <ServiceSection></ServiceSection>
      <TeamSection></TeamSection>
    </div>
  );
};

export default HomePage;