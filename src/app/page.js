import React from "react";
import BannerSection from "./components/banner/page";
import ServiceSection from "./components/serviceSection/page";
import TeamSection from "./components/team/page";
import AboutSection from "./components/aboutSection/page";
import TestimonialsSection from "./components/testimonials/page";

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
      <TestimonialsSection></TestimonialsSection>
    </div>
  );
};

export default HomePage;