import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Package from "../Package/Package";
import "./Packages.css";
const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("packages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages.name);
  return (
    <div className="container mt-3">
      <div className="row">
        <h1 className="mb-3 text-primary text-center">Our Packages</h1>
        <div className="package-container">
          {packages.map((pack) => (
            <Package key={pack.id} pack={pack}></Package>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
