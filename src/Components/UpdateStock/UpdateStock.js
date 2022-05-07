import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateStock.css";
import img from "../../images/products/apple.jpg";
import Addproduct from "../Addproduct/Addproduct";
const UpdateStock = () => {
  const { productid } = useParams();
  const [fruitdetail, setFruitdetail] = useState({});

  useEffect(() => {
    const url = `https://fathomless-forest-20620.herokuapp.com/inventory/${productid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruitdetail(data));
  }, [fruitdetail]);

  const stockUpdate = (event) => {
    event.preventDefault();
    const quantity = event.target.stock.value;
    if (!quantity) {
      alert("input field can't be empty");
    } else {
      const newQuantity = parseInt(fruitdetail.quantity) + parseInt(quantity);
      const newQuantityObj = { newQuantity };
      const url = `https://fathomless-forest-20620.herokuapp.com/inventory/${productid}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newQuantityObj),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);

          //    toast('item restock successfully')
        });
      event.target.reset();
    }
  };

  const handleDeliver = (id) => {
    const quantity = fruitdetail.quantity;
    console.log(id);
    if (quantity > 0) {
      const quantityObj = { quantity };
      const url = ` https://fathomless-forest-20620.herokuapp.com/deliver/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(quantityObj),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("success", data);

          //    toast('item restock successfully')
        });
    } else {
      alert("Stock out");
    }
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
        <button onClick={() => handleDeliver(productid)} className="btnn-1">
          Deliver
        </button>
        <div className="updatestock-form  d-flex justify-content-center ">
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
