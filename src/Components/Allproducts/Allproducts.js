import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import HooksProducts from "../Hooks/HooksProducts";
import "./Allproducts.css";
import { FaArrowCircleDown } from "react-icons/fa";
import { AiTwotoneDelete } from "react-icons/ai";
import { GrUpdate } from "react-icons/gr";
import Addproduct from "../Addproduct/Addproduct";
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

  const handleDeletitem = (id) => {
    const confirm = window.confirm("Are You Shure?");
    if (confirm) {
      const url = `https://fathomless-forest-20620.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          const remaining = fruits.filter((fruit) => fruit._id !== id);
          setFruits(remaining);
          console.log(data);
        });
    }
  };

  return (
    <div className="allproduct-maincontainer">
      <h1 className="text-warning">Top Trend</h1>

      <div className="  addproduct-button text-center">
        <button
          onClick={navigatetoaddProduct}
          className=" mt-5 btn btn-primary "
        >
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
              className="ms-3 mb-4 btnnn btnn-primary1"
            >
              Stock Update
            </button>
            <button
              onClick={() => handleDeletitem(fruit._id)}
              className=" mb-4 btnnn btnn-secondary1 ms-3   "
            >
              Delete <AiTwotoneDelete></AiTwotoneDelete>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Allproducts;
