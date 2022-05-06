import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HooksProducts from "../Hooks/HooksProducts";
import "./Allproducts.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
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
              <h4 className="text-center">{fruit.fruitname}</h4>
              <h5 className="text-center text-success">Price:{fruit.price}</h5>
              <p>Stock:{fruit.quantity}</p>
              <p>Suppliername:{fruit.suppliername}</p>
              <p>Description:{fruit.description}</p>
            </div>

            <button
              onClick={() => navigatetoupdatestock(fruit._id)}
              className="btnn-1"
            >
              Stock Update <GrUpdate></GrUpdate>
            </button>
            <button className=" delet  mx-50 ">
              Delete <AiTwotoneDelete></AiTwotoneDelete>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
