import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import "./PackageDetails.css";
const PackageDetails = () => {
  const { packageId } = useParams();
  const [packageDetails, setPackageDetails] = useState({});

  useEffect(() => {
    fetch(`https://api.npoint.io/4c08fb15f84b6741df83/${packageId}`)
      .then((res) => res.json())
      .then((data) => setPackageDetails(data));
  }, []);
  return (
    <div className="my-5 App">
      <h1 className="text-color">Package Name: {packageDetails.name}</h1>
      <img src={packageDetails.img} alt="" className="my-5" />
      <h3 className="my-3 text-color">Package Details:</h3>
      <h4 className="textColor">{packageDetails.description}</h4>
    </div>
  );
};

export default PackageDetails;
//https://api.npoint.io/4c08fb15f84b6741df83
