import React from "react";
import { Container, Image } from "react-bootstrap";

export default function JobDetail({
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
    <Container>
      <Image
        src={company_logo}
        style={{ padding: 50 }}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null;
          currentTarget.src = "/images/default.png";
        }}
      />
      <h1>{title}</h1>
      <h6>
        {company} - {location} - {type}
      </h6>
      <h3 className="mt-4">Description</h3>
      <div dangerouslySetInnerHTML={{ __html: description }}></div>
      <h3 className="mt-4">How to Apply</h3>
      <div dangerouslySetInnerHTML={{ __html: how_to_apply }}></div>
    </Container>
  );
}
