import { useState } from "react";
import { Container, Col, Row } from "react-bootstrap";

import "./App.css";
import Register from "./components/Register/Register";

function App() {
  return (
    <div className="app">
      <Container>
        <Row>
          <Col xs={12} sm={12} md={6} lg={6}>
            <Register />
          </Col>
          <Col xs={12} sm={12} md={6} lg={6}></Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
