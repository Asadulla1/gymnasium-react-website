import React from "react";
import img from "../../images/About us webp.webp";
import "./AboutUs.css";
const AboutUs = () => {
  return (
    <div>
      <div className="about-us-container w-75 mx-auto shadow p-5 mb-5 bg-white rounded ">
        <div>
          <img src={img} />
        </div>
        <div className="learn-about-us-text">
          <h1>Learn More About Us</h1>
          <p>
            CrossFit has been Forging Elite Fitness™ since 2001 and can be used
            to accomplish any goal, from improved health to better performance.
            The program works for everyone — people who have never worked out
            and those who have trained for years share equally in the benefits
            of CrossFit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
