import React from "react";
import { Row } from "react-bootstrap";
import JobItem from "./JobItem";

export default function JobList({ jobs }) {
  return (
    <Row>
      {jobs.map((job) => (
        <JobItem key={job.id} id={job.id} {...job} />
      ))}
    </Row>
  );
}
