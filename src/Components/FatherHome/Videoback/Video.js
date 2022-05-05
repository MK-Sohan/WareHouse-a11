import React from "react";
import { Link } from "react-router-dom";
import video from "../../../images/raspberries_-_3777 (Original).mp4";
import "./Video.css";
const Video = () => {
  return (
    <div className=" main">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <p>100% Natural </p>
        <h1>Organic Fruits</h1>
        <p>Fresh New Pack Brushting Fruit</p>
        <Link to="/products">
          {" "}
          <button className="btn">Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Video;
