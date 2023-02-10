import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function JobItem({
  id,
  type,
  url,
  created_at,
  company,
  company_url,
  location,
  title,
  description,
  how_to_apply,
  company_logo,
}) {
  return (
    <Col lg={3}>
      <Card className="mb-4" style={{ height: 450 }}>
        <Card.Img
          variant="top"
          src={company_logo}
          style={{ padding: 50 }}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null;
            currentTarget.src = "/images/default.png";
          }}
        />
        <Card.Body>
          <Card.Title>
            <Link to={`/jobs/${id}`}>{title}</Link>
          </Card.Title>
          <Card.Text>{company}</Card.Text>
        </Card.Body>
        <Card.Footer>
          {location} - {type}
        </Card.Footer>
      </Card>
    </Col>
  );
}
