import React from "react";
import { useNavigate } from "react-router-dom";
import notFoundImg from "../../images/404.webp";
const NotFound = () => {
  const history = useNavigate();
  return (
    <div className="App">
      <div>
        <img src={notFoundImg} alt="" />
      </div>
      <div className="my-5">
        <button
          onClick={() => {
            history("/home");
          }}
          className="btn btn-success"
        >
          Go to Homepage
        </button>
      </div>
    </div>
  );
};

export default NotFound;
