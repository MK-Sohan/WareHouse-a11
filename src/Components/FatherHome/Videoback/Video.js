import React from "react";
import video from "../../../images/raspberries_-_3777 (Original).mp4";
import "./Video.css";
const Video = () => {
  return (
    <div className="main">
      <video src={video} autoPlay loop muted></video>
      <div className="content">
        <h1>Welcome To FruitTastic</h1>
      </div>
    </div>
  );
};

export default Video;
