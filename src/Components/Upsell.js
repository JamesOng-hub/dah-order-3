import React, { useContext } from "react";
import { Modal, Button, Form, Card, ListGroup } from "react-bootstrap";
import { MenuContext } from "./Home";
import UpsellListSection from "./UpsellListSection";

export default function Upsell({ MenuId, show, UpsellList }) {
  const { handleClose, handleMenuChange } = useContext(MenuContext);

  function handleUpsellDetailsChange(upselldetailsId, Details) {
    const newUpsellDetials = [...UpsellList];
    const index = newUpsellDetials.findIndex(
      (item) => item.id === upselldetailsId
    );
    newUpsellDetials[index].Details = Details;
    handleMenuChange(MenuId, newUpsellDetials);
  }
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Customise Your Food</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* add some styling to saperate the cards.  */}
          <Card style={{ width: "18rem" }}>
            {UpsellList.map((section) => {
              return (
                <UpsellListSection
                  key={section.id}
                  {...section}
                  handleUpsellDetailsChange={handleUpsellDetailsChange}
                />
              );
            })}
          </Card>

          {/* <Form>
            {["checkbox", "radio"].map((type) => (
              <div key={`default-${type}`} className="mb-3">
                <Form.Check
                  type={type}
                  id={`default-${type}`}
                  label={`default ${type}`}
                />

                <Form.Check
                  disabled
                  type={type}
                  label={`disabled ${type}`}
                  id={`disabled-default-${type}`}
                />
              </div>
            ))}
          </Form> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => handleClose(MenuId)}>
            Add To Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
