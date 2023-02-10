import React, { Component } from "react";
import { Container } from "react-bootstrap";
import dummyData from "../utils/positions.json";
import JobList from "../components/JobList";
import Search from "../components/Search";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      jobs: dummyData,
      checked: false,
    };

    this.onSearchJobs = this.onSearchJobs.bind(this);
    this.onSearchLocations = this.onSearchLocations.bind(this);
    this.onFullTimeFilter = this.onFullTimeFilter.bind(this);
  }

  onSearchJobs(keyword) {
    const filtered = dummyData.filter((job) =>
      job.title.toLowerCase().includes(keyword.target.value.toLowerCase())
    );
    this.setState({ jobs: filtered });
  }

  onSearchLocations(keyword) {
    const filtered = dummyData.filter((job) =>
      job.location.toLowerCase().includes(keyword.target.value.toLowerCase())
    );
    this.setState({ jobs: filtered });
    console.log(this.state.checked);
  }

  onFullTimeFilter() {
    this.setState(
      {
        checked: !this.state.checked,
      },
      () => {
        if (this.state.checked) {
          const filtered = dummyData.filter((job) => job.type == "Full Time");
          this.setState({ jobs: filtered });
        } else {
          this.setState({ jobs: dummyData });
        }
      }
    );
  }

  render() {
    return (
      <Container>
        <h1 style={{ marginTop: 50, marginBottom: 30 }}>Developer Test</h1>
        <Search
          onSearchJobs={this.onSearchJobs}
          onSearchLocations={this.onSearchLocations}
          onFullTimeFilter={this.onFullTimeFilter}
        />
        <JobList jobs={this.state.jobs} />
      </Container>
    );
  }
}
