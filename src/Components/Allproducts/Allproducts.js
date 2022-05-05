import React, { useEffect, useState } from "react";
import HooksProducts from "../Hooks/HooksProducts";
import "./Allproducts.css";

const Allproducts = () => {
  const [fruits, setFruits] = HooksProducts();
  return (
    <div className="allproduct-maincontainer">
      <h1>Top Trend</h1>
      <p>Browse our website for the hottest items in the marketplace now.</p>
      <div className="allproduct-container">
        {fruits.map((fruit) => (
          <div className="single-container">
            <img src={fruit.image} alt="" />
            <div className="singleproduct-info">
              <h3>Name:{fruit.fruitname}</h3>
              <h4>Price:{fruit.price}</h4>
              <p>Quantity:{fruit.quantity}</p>
              <p>Discription:{fruit.description}</p>
            </div>
            <button className="btn">Update Stock</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
