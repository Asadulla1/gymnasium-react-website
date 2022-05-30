import React from "react";
import { Card, CardGroup } from "react-bootstrap";
import img1 from "../../images/FeaturesImage/Cardio Exercise.jpg";
import img2 from "../../images/FeaturesImage/last exercise.jpg";
import img3 from "../../images/FeaturesImage/muscleLifting.jpg";
import "./Features.css";
const Features = () => {
  return (
    <div>
      <h1 className="text-design mt-3 mb-4 text-center ">Our Features</h1>
      <div className="w-75 mx-auto features-container ">
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img
            variant="top"
            src={img3}
            className="w-25 mx-auto mt-3 mb-3"
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              Muscle Lifting
            </Card.Title>
            <Card.Text className="text-center">
              When you lift weights, your muscles work together, and concentric
              and eccentric muscle contractions happen at the same time. As you
              lift the weight up toward your shoulder during an arm curl, your
              bicep muscle shortens (concentric muscle contraction) and your
              triceps lengthen (eccentric muscle contraction).
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img
            variant="top"
            src={img1}
            className="w-25 mx-auto mt-3 mb-3"
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              Cardio Exercise
            </Card.Title>
            <Card.Text className="text-center">
              Aerobic exercise is physical exercise of low to high intensity
              that depends primarily on the aerobic energy-generating process.
              "Aerobic" is defined as "relating to, involving, or requiring
              oxygen", and refers to the use of oxygen to meet energy demands
              during exercise via aerobic metabolism adequately.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="shadow p-3 mb-5 bg-white rounded">
          <Card.Img
            className="w-25 mx-auto mt-3 mb-3"
            variant="top"
            src={img2}
          />
          <Card.Body>
            <Card.Title className="fw-bold text-center">
              Specific Training
            </Card.Title>
            <Card.Text className="text-center">
              Sport-specific training is simply fitness and performance training
              designed specifically for athletic performance enhancement. If
              done correctly this type of training can be very beneficial for
              athletes however if it is not done properly it can be very
              detrimental.
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Features;
