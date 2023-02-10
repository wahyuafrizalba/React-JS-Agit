import React from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <Form
      className="mb-4"
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Form.Group>
        <Form.Label>Username</Form.Label>
        <Form.Control name="description" type="text" />
      </Form.Group>

      <Form.Group>
        <Form.Label>Password</Form.Label>
        <Form.Control name="location" type="text" />
      </Form.Group>

      <Button style={{ width: 100, marginTop: 20 }} variant="primary">
        <Link to={`/jobs`} style={{ color: "white", textDecoration: "none" }}>
          Login
        </Link>
      </Button>
    </Form>
  );
}
