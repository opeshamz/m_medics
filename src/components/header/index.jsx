import React from "react";
import {
  Container,
  Col,
  Row,
  InputGroup,
  Button,
  FormControl,
} from "react-bootstrap";
import { FaCartPlus } from "react-icons/fa";
function Header() {
  return (
    <div>
      <Container fluid className="header align-self-center">
        <Row md={7} className="justify-content-around inerrow align-self-start">
          <Col md={3} className="logo">
            logo
          </Col>
          <Col md={5} className="search align-self-center">
            <InputGroup className="forminput">
              <FormControl placeholder="Search items" />
              <Button className="button">Search</Button>
            </InputGroup>
          </Col>
          <Col md={3} className="cartlogin align-self-center">
            <Row className="justify-content-center align-self-center">
              <Col>
                <div>{"Login/Signup"}</div>
              </Col>
              <Col className="cart">
                <div>
                  <FaCartPlus /> {"My Cart"}
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Header;
