import React from "react";

import img1 from "../../images/freeFitnessSuggestion.jpg";
import img2 from "../../images/PersonalTrainer.jpg";
import img3 from "../../images/mebership.jpg";
import "./WhyChooseUs.css";
import { Card } from "react-bootstrap";
const WhyChooseUs = () => {
  return (
    <div className="bg">
      <h1 className="text-design mt-3 mb-5 text-center">Why You Choose Us?</h1>
      <div className="w-75 mx-auto choose-us-container">
        <Card className="shadow p-3 mb-5 bg-white rounded card-design">
          <Card.Img
            variant="top"
            src={img1}
            className="w-25 mx-auto mt-3 mb-3"
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              Free Fitness Suggestion
            </Card.Title>
            <Card.Text className="text-justify">
              This is the first time in the country that any gym is providing
              free fitness suggestion. Where other gym charged you for fitness
              suggestion, here we are offering you free fitness suggestion.We
              can assure that you'll get best fitness suggestion of the country
              in our gym.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded card-design">
          <Card.Img
            variant="top"
            src={img2}
            className="w-25 mx-auto mt-3 mb-3"
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              Personal Trainer
            </Card.Title>
            <Card.Text className="text-justify">
              A personal trainer is an individual who has earned a certification
              that demonstrates they have achieved a level of competency for
              creating and delivering safe and effective exercise programs for
              apparently healthy individuals and groups or those with medical
              clearance to exercise.We are also offering personal trainer free
              of cost.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded card-design">
          <Card.Img
            className="w-25 mx-auto mt-3 mb-3 rounded"
            variant="top"
            src={img3}
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              No Commitment Membership
            </Card.Title>
            <Card.Text className="text-justify">
              With our no commitment membership, there is no lengthy minimum
              term. Enjoy a rolling monthly membership that you can cancel or
              change at any time, perfect if you want to give us a try.So what
              are you waiting for? Join today to the country's best gym.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default WhyChooseUs;
