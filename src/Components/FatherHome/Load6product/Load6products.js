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
    <div className="sixproduct-container">
      {fruits.slice(0, 6).map((fruit) => (
        <div className="Product-container">
          <img src={fruit.image} alt="" />
          <div className="product-info">
            <h3>Name:</h3>
            <h4>Price:</h4>
            <p>Brand:</p>
          </div>
          {/* <button className="btn">Add to Cart</button> */}
        </div>
      ))}
    </div>
  );
};

export default Load6products;
