import React from "react";

const Package = ({ pack }) => {
  const { name, img, description } = pack;
  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};

export default Package;
