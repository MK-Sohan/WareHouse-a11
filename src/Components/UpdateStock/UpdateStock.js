import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateStock.css";
import img from "../../images/products/apple.jpg";
const UpdateStock = () => {
  const { productid } = useParams();
  const [fruitdetail, setFruitdetail] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${productid}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setFruitdetail(data));
  }, []);
  console.log(fruitdetail.image);
  return (
    <div className="maindetail-container">
      <div className="detail-container">
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
          <p>Description:{fruitdetail.description}</p>
        </div>
      </div>

      {/* <button
      onClick={() => navigatetoupdatestock(fruit._id)}
      className="btnn-1"
    >
      Stock Update <GrUpdate></GrUpdate>
    </button>
    <button className=" delet  mx-50 ">
      Delete <AiTwotoneDelete></AiTwotoneDelete>
    </button> */}
    </div>
  );
};

export default UpdateStock;
