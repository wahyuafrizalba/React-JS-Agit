import React, { Component } from "react";
import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import DetailPage from "./pages/DetailPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";

export default class App extends Component {
  render() {
    return (
      <Container>
        <h1></h1>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/jobs" element={<HomePage />} />
          <Route path="/jobs/:id" element={<DetailPage />} />
        </Routes>
      </Container>
    );
  }
}
