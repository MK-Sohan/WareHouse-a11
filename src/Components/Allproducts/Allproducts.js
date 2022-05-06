import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HooksProducts from "../Hooks/HooksProducts";
import "./Allproducts.css";

const Allproducts = () => {
  const { productid } = useParams();
  console.log(productid);
  const [fruits, setFruits] = HooksProducts();

  console.log(fruits);
  const navigate = useNavigate();

  return (
    <div className="allproduct-maincontainer">
      <h1>Top Trend</h1>
      <p className="text-warning">
        Browse our website for the hottest items in the marketplace now.
      </p>
      <div className="allproduct-container">
        {fruits?.map((fruit) => (
          <div className="single-container">
            <img src={fruit.image} alt="" />
            <div className="singleproduct-info">
              <h3>Name:{fruit.fruitname}</h3>
              <h4>Price:{fruit.price}</h4>
              <p>Stock:{fruit.quantity}</p>
              <p>Suppliername:{fruit.suppliername}</p>
              <p>Description:{fruit.description}</p>
            </div>

            <button
              onClick={() => navigate(`/updatestock/${fruit._id}`)}
              className="btnn"
            >
              Stock Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
