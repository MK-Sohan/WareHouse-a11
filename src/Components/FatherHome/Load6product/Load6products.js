import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Allproducts from "../../Allproducts/Allproducts";
import { FiZap } from "react-icons/fi";
import "./Load6product.css";
import HooksProducts from "../../Hooks/HooksProducts";
const Load6products = () => {
  const [fruits, setFruits] = HooksProducts();
  const navigate = useNavigate();
  return (
    <div className="maincontainer">
      <h1>Top Trend</h1>
      <p>Browse our website for the hottest items in the marketplace now.</p>
      <div className="sixproduct-container">
        {fruits.slice(0, 6).map((fruit) => (
          <div className="Product-container">
            <img src={fruit.image} alt="" />
            <div className="product-info">
              <h3>Name:{fruit.fruitname}</h3>
              <h4>Price:{fruit.price}</h4>
              <p>Quantity:{fruit.quantity}</p>
              <p>Suppliername:{fruit.suppliername}</p>
              <p>Discription:{fruit.description}</p>
            </div>
            <button
              onClick={() => navigate(`/updatestock/${fruit._id}`)}
              className="btn btn-success mx-5"
            >
              Stock Update
            </button>
          </div>
        ))}
      </div>
      <div className="button">
        <Link to="/products">
          {" "}
          <button className="manage-inventorybutton">
            Manage Inventory <FiZap></FiZap>{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Load6products;
