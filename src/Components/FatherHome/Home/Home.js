import React, { Component } from "react";
import Checkout from "../../Checkout/Checkout";
import Aboutservices from "../Aboutservices/Aboutservices";
import Load6products from "../Load6product/Load6products";
import Reviews from "../Reviews/Reviews";
import Video from "../Videoback/Video";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Video></Video>
      <Aboutservices></Aboutservices>
      <Load6products></Load6products>

      <Checkout></Checkout>

      <Reviews></Reviews>
    </div>
  );
};

export default Home;
