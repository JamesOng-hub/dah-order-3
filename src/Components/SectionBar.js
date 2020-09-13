import React, { useContext } from "react";
import {
  Nav,
  Navbar,
  Button,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import { MenuContext } from "./Home";

export default function SectionBar() {
  const { handleSectionSelect } = useContext(MenuContext);
  return (
    <Navbar bg="light" expand="lg">
      <div className="section-bar">
        {/* <div className="section-bar__search">
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </div> */}
        <div className="section-bar__section">
          <Button
            variant="outline-secondary"
            onClick={() => handleSectionSelect("Fruit Yogurt")}
          >
            Fruit Yogurt
          </Button>
        </div>
        <div className="section-bar__section">
          <Button
            variant="outline-secondary"
            onClick={() => handleSectionSelect("Rice Yogurt")}
          >
            Rice Yogurt
          </Button>
        </div>
        <div className="section-bar__section">
          <Button
            variant="outline-secondary"
            onClick={() => handleSectionSelect("Fruit Tea")}
          >
            Fruit Tea
          </Button>
        </div>
        <div className="section-bar__section">
          <Button variant="outline-secondary">SECTION 4</Button>
        </div>
        <div className="section-bar__section">
          <Button variant="outline-secondary">SECTION 5</Button>
        </div>
      </div>
    </Navbar>
  );
}
