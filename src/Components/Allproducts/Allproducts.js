import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HooksProducts from "../Hooks/HooksProducts";
import "./Allproducts.css";
import { FaArrowCircleDown } from "react-icons/fa";
const Allproducts = () => {
  const { productid } = useParams();
  console.log(productid);
  const [fruits, setFruits] = HooksProducts();

  console.log(fruits);
  const navigate = useNavigate();
  const navigatetoupdatestock = (id) => {
    navigate(`/updatestock/${id}`);
  };

  const navigatetoaddProduct = () => {
    navigate("/addproduct");
  };
  return (
    <div className="allproduct-maincontainer">
      <h1 className="text-warning">Top Trend</h1>

      <div className="addproduct-button text-center">
        <h1>
          WANNA ADD A PRODUCT <br /> <FaArrowCircleDown></FaArrowCircleDown>
        </h1>
        <button onClick={navigatetoaddProduct} className="btn btn-primary ">
          Add Product
        </button>
      </div>
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
              onClick={() => navigatetoupdatestock(fruit._id)}
              className="btnn"
            >
              Stock Update
            </button>
            <button className="btn mx-5 btn-danger">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
