import React, { Component } from "react";
import Aboutservices from "../Aboutservices/Aboutservices";
import Load6products from "../Load6product/Load6products";
import Reviews from "../Reviews/Reviews";
import Video from "../Videoback/Video";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Video></Video>
      <Aboutservices></Aboutservices>
      <Load6products></Load6products>
      <Reviews></Reviews>
    </div>
  );
};

export default Home;
