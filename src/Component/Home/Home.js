import React from "react";
import AboutUs from "../AboutUs/AboutUs";
import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Packages from "../Packages/Packages";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Features></Features>
      <AboutUs></AboutUs>
      <WhyChooseUs></WhyChooseUs>
    </div>
  );
};

export default Home;
