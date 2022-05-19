import React, { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import Package from "../Package/Package";

const Packages = () => {
  const [packages, setPackages] = useState([]);
  useEffect(() => {
    fetch("packages.json")
      .then((res) => res.json())
      .then((data) => setPackages(data));
  }, []);
  console.log(packages.name);
  return (
    <div>
      <h1>Our Classes</h1>

      {packages.map((pack) => (
        <Package key={pack.id} pack={pack}></Package>
      ))}
    </div>
  );
};

export default Packages;
