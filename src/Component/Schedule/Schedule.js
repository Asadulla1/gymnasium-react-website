import React from "react";
import "./Schedule.css";
const Schedule = () => {
  return (
    <div className="shadow p-3  bg-dark  text-white">
      <h1 className="heading-design">Schedule</h1>
      <div className="schedule-container-one">
        <div>
          <h1>MONDAY</h1>
          <h5>8:00 - 8:50</h5>
          <h5>Air yoga</h5>
          <h5>2:00 - 2:45</h5>
          <h5>Body building</h5>
        </div>
        <div>
          <h1>TUESDAY</h1>
          <h5>4:30 - 5:30</h5>
          <h5>Air yoga</h5>
          <h5>5:30 - 6:30</h5>
          <h5>Body building</h5>
        </div>
      </div>
      <div className="schedule-container-two">
        <div>
          <h1>WEDNESDAY</h1>
          <h5>8:00 - 8:50</h5>
          <h5>Air yoga</h5>
          <h5>2:00 - 2:45</h5>
          <h5>Body building</h5>
        </div>
        <div>
          <h1>THURSDAY</h1>
          <h5>4:30 - 5:30</h5>
          <h5>Air yoga</h5>
          <h5>5:30 - 6:30</h5>
          <h5>Body building</h5>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
