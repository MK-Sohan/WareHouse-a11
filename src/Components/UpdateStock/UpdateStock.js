import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateStock.css";
import img from "../../images/products/apple.jpg";
import Addproduct from "../Addproduct/Addproduct";
const UpdateStock = () => {
  const { productid } = useParams();
  const [fruitdetail, setFruitdetail] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${productid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruitdetail(data));
  }, []);

  const stockUpdate = (e) => {
    e.preventDefault();
  };

  return (
    <div className="maindetaill-container ">
      <div className="detaill-container">
        <div className="detail-image">
          <img src={fruitdetail.image} alt="" />
        </div>
        <div className="productdetail">
          <h4 className="text-center">{fruitdetail.fruitname}</h4>
          <h5 className="text-center text-success">
            Price:{fruitdetail.price}
          </h5>
          <p>Stock:{fruitdetail.quantity}</p>
          <p>Suppliername:{fruitdetail.suppliername}</p>
          <p className="text-center ">Description:{fruitdetail.description}</p>
        </div>
        <button className="btnn-1">Deliver</button>
        <div className="updatestock-form d-flex justify-content-center align-items-center">
          <form onSubmit={stockUpdate}>
            <input type="number" name="stock" id="" /> <br />
            <button className="btn btn-primary mt-3 ms-4  mx-50 ">
              Update Stock
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateStock;
