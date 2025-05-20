import React from "react";
import BannerSection from "./components/banner/page";
import ServiceSection from "./components/serviceSection/page";
import TeamSection from "./components/team/page";
import AboutSection from "./components/aboutSection/page";

export const metadata = {
  title: "Home | ProCleaning",
};
const HomePage = () => {
  return (
    <div>
      <BannerSection></BannerSection>
      <ServiceSection></ServiceSection>
      <TeamSection></TeamSection>
      <AboutSection></AboutSection>
    </div>
  );
};

export default HomePage;