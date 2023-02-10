import React, { Component } from "react";
import { useParams } from "react-router-dom";
import JobDetail from "../components/JobDetail";
import dummyData from "../utils/positions.json";

function DetailPageWrapper() {
  const { id } = useParams();
  return <DetailPage id={id} />;
}

function getJob(id) {
  if (!id) {
    return null;
  }

  const filteredJob = dummyData.filter((job) => job.id === id);

  if (!filteredJob.length) {
    return null;
  }

  return filteredJob[0];
}

class DetailPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      job: getJob(props.id),
    };
  }

  render() {
    if (this.state.job === null) {
      return <p>Job is not found!</p>;
    }
    return <JobDetail {...this.state.job} />;
  }
}

export default DetailPageWrapper;
