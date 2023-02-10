import { Form, Col, Row } from "react-bootstrap";

import React from "react";

export default function Search({
  onSearchJobs,
  onSearchLocations,
  onFullTimeFilter,
}) {
  return (
    <Form className="mb-4">
      <Row>
        <Col>
          <Form.Group>
            <Form.Label>Position</Form.Label>
            <Form.Control
              onChange={onSearchJobs}
              name="description"
              type="text"
            />
          </Form.Group>
        </Col>

        <Col>
          <Form.Group>
            <Form.Label>Location</Form.Label>
            <Form.Control
              onChange={onSearchLocations}
              name="location"
              type="text"
            />
          </Form.Group>
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }}>
          <Form.Group>
            <Form.Check
              onChange={onFullTimeFilter}
              name="full_time"
              id="full-time"
              label="Only Full Time"
              type="checkbox"
              className="mt-4"
            />
          </Form.Group>
        </Col>
      </Row>
    </Form>
  );
}
