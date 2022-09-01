import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const Package = ({ pack }) => {
  const { name, img, description, id } = pack;
  return (
    <Card className="shadow p-3 mb-5 bg-white rounded">
      <Card.Img variant="top" src={img} className="rounded" />
      <Card.Body>
        <Card.Title className="text-primary fw-bold mt-2 mb-2 text-center">
          {name}
        </Card.Title>
        <Card.Text className="text-center">{description}</Card.Text>
        <div className="text-center">
          <Link to={`/package/${id - 1}`}>
            <Button variant="primary" className="mb-2 px-2">
              <span className="text-white fw-bold ">See Details</span>
            </Button>
          </Link>
        </div>
      </Card.Body>
    </Card>
  );
};

export default Package;
