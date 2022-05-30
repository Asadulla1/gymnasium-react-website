import React from "react";
import "./PriceAndPlans.css";
const PricesAndPlans = () => {
  return (
    <div className="shadow p-3  bg-dark  text-white ">
      <h1 className="heading mx-5">Prices & Plans</h1>
      <div className="price-container">
        <div>
          <div className="container-one">
            <div>
              <h2>BASIC</h2>
            </div>
            <div>
              <h1>3000 Tk</h1>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h5>Included:</h5>
            <ul>
              <li> 2x group workouts of your choice</li>
              <li>Unlimited gym access</li>
              <li>Personal workout</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="container-one">
            <div>
              <h2>UNLIMITED</h2>
            </div>
            <div>
              <h1>5000 Tk</h1>
            </div>
          </div>
          <div className="mt-4 mb-4">
            <h5>Included:</h5>
            <ul>
              <li> Unlimited group workouts of your choice</li>
              <li>Unlimited gym access</li>
              <li>3x personal workouts</li>
              <li>Personal nutrition plan</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container-two">
        <div className="container-one ">
          <div>
            <h1>PROFESSIONAL</h1>
          </div>
          <div>
            <h1>10,000 TK</h1>
          </div>
        </div>
        <div className="mt-4 mb-4">
          <h5>Included:</h5>
          <ul>
            <li>Unlimited group workouts of your choice</li>
            <li>Unlimited gym access</li>
            <li>10x personal workouts</li>
            <li>Personal nutrition plan</li>
            <li>Olympic weighting</li>
            <li>Foundation training</li>
            <li>Personal Trainer</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default PricesAndPlans;
