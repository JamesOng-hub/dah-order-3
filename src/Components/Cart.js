import React from "react";
import {
  Navbar,
  Card,
  Container,
  Col,
  Row,
  ListGroup,
  Button,
} from "react-bootstrap";

// function Cart() {
//   return (
//     <div>
//       <Navbar bg="light" expand="lg">
//         <Navbar.Brand href="/">
//           <img
//             src="/logo.png"
//             width="60"
//             height="60'"
//             className="d-inline-block align-top"
//             alt="React Bootstrap logo"
//           />
//         </Navbar.Brand>
//       </Navbar>
//       <Card style={{ width: "18rem" }}>
//         <Card.Body>
//           <Card.Title>Checkout:</Card.Title>
//         </Card.Body>
//       </Card>
//       <Container className="cart__list-bar">
//         <Row>
//           <Col>
//             <b>Num</b>
//           </Col>

//           <Col xs={5}>
//             <b>Items</b>
//           </Col>
//           <Col>
//             <b>Qty</b>
//           </Col>
//           <Col>
//             <b>Price</b>
//           </Col>
//         </Row>
//       </Container>
//       <ListGroup variant="flush">
//         <ListGroup.Item>
//           {/* can put borders above and below.  */}
//           <Container>
//             <Row>
//               <Col>/</Col>
//               <Col xs={7}>
//                 <div>
//                   <mark>Banana Yogurt</mark>
//                 </div>
//                 <div>
//                   <i>- less sugar</i>
//                 </div>
//                 <div>
//                   <i>- less ice</i>
//                 </div>
//               </Col>
//               <Col>1</Col>
//               <Col>RM20</Col>
//             </Row>
//           </Container>
//         </ListGroup.Item>
//         <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
//         <ListGroup.Item>Morbi leo risus</ListGroup.Item>
//         <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
//       </ListGroup>
//       <Container>
//         <Row>
//           <Button>Pay</Button>
//         </Row>
//       </Container>
//       <div>
//         <b>Banana Yogurt</b>
//       </div>
//       <div>
//         <i>Banana Yogurt</i>
//       </div>
//       <div>
//         <strong>Banana Yogurt</strong>
//       </div>
//       <div>
//         <em>Banana Yogurt</em>
//       </div>
//       <div>
//         <mark>Banana Yogurt</mark>
//       </div>
//       <div>
//         <small>Banana Yogurt</small>
//       </div>
//       <div>
//         <sub>Banana Yogurt</sub>
//       </div>
//       <div>
//         <sup>Banana Yogurt</sup>
//       </div>
//     </div>
//   );
// }

// export default Cart;

export default function Cart() {
  return (
    <div>
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">
          <img
            src="/logo.png"
            width="60"
            height="60'"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
      <div className="cart__checkout-list-grid ">
        {/* border-bottom is a default class */}
        <b>Num</b>
        <b>Item</b>
        <b>Qty</b>
        <b>Price</b>
        <i>1</i>
        <div>
          <i>Name</i>
          <div>
            <i>- no sugar</i>
          </div>
          <div>
            <i>- no ice </i>
          </div>
        </div>
        <i>2</i>
        <i>price x 2</i>
      </div>
    </div>
  );
}
