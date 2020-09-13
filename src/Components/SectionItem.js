import React from "react";
import { Card, Button } from "react-bootstrap";
// import ManageCart from "./ManageCart";

export default function SectionItem({ item }) {
  return (
    <Card>
      <Card.Body>
        <div className="section-item__title">
          <div>
            <Card.Title>{item.Name} </Card.Title>
          </div>
          <div>
            <Card.Title>RM{item.Price}</Card.Title>
          </div>
        </div>

        <Card.Text>{item.Description}</Card.Text>
      </Card.Body>
    </Card>
  );
}
