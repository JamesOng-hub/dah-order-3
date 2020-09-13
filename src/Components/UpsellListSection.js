import React, { useContext } from "react";
import { Form, Card, ListGroup, FormCheck } from "react-bootstrap";
// import { MenuContext } from "./Home";

export default function UpsellListSection({
  id,
  Name,
  Details,
  handleUpsellDetailsChange,
}) {
  function checkItem(id, id2, change) {
    const newDetails = [...Details];
    const index = newDetails.findIndex((item) => item.id === id);
    const selectedDetailItem = newDetails.find((item) => item.id === id);
    const newDetailItem = { ...selectedDetailItem, ...change };
    newDetails[index] = newDetailItem;
    handleUpsellDetailsChange(id2, newDetails);
  
  }

  return (
    <Card.Body>
      <Card.Title>{Name}</Card.Title>
      <ListGroup variant="flush">
        {Details.map((i) => {
          return (
            <div>
              <ListGroup.Item>
                <FormCheck>
                  <FormCheck.Input
                    className="form-check-input"
                    type="checkbox"
                    id={i.id}
                    onChange={(e) =>
                      checkItem(i.id, id, { isChecked: e.target.checked })
                    }
                    // checked={i.isChecked === true}
                  />
                  <FormCheck.Label htmlFor={i.id}>{i.name}</FormCheck.Label>
                </FormCheck>
              </ListGroup.Item>
            </div>
          );
        })}
      </ListGroup>
    </Card.Body>
  );
}
