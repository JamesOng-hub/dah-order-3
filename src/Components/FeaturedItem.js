import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { MenuContext } from "./Home";

export default function FeaturedItem(props) {
  const { id, Name, Description, Price, Picture } = props;
  const { handleShow } = useContext(MenuContext);
  return (
    //rmb to change the css names from 'food' to 'featureditem'
    <div className="featured-item">
      {/* <img src={Picture} alt="" />
      <div className="food__info-container">
        <div className="food__info">
          <div>{Name}</div>
          <div>{Description}</div>
        </div>
        <div>${Price}</div>
      </div> */}
      <Card style={{ width: "17rem" }}>
        <Card.Img variant="top" src={Picture} height="225px" />
        <Card.Body>
          <div className="featured-list-title-tag">
            <div>
              <Card.Title>{Name}</Card.Title>
            </div>
            <Card.Title>RM{Price}</Card.Title>
          </div>

          <Card.Text>{Description}</Card.Text>
          <Button variant="primary" onClick={() => handleShow(id)}>
            Add To Cart
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}
