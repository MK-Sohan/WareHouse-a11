import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";
const Loading = () => {
  return (
    <div className="main-loading">
      <div
        style={{ marginTop: "200px" }}
        className="d-flex justify-content-center align-items-center"
      >
        <Spinner animation="border" />
      </div>
    </div>
  );
};

export default Loading;
