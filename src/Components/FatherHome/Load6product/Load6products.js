import React, { useEffect, useState } from "react";
import Allproducts from "../../Allproducts/Allproducts";
import "./Load6product.css";
const Load6products = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruit")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
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
            </div>
            {/* <button className="btn">Add to Cart</button> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Load6products;
