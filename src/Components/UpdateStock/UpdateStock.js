import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./UpdateStock.css";
const UpdateStock = () => {
  const { productid } = useParams();
  // const [fruitdetail, setFruitdetail] = useState({});
  // useEffect(() => {
  //   const url = `http://localhost:5000/fruit/${productid}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setFruitdetail(data));
  // }, []);
  // console.log(fruitdetail);
  return (
    <div className="mainupdate-container">
      <h1>You can update stock Hear:{productid}</h1>
    </div>
  );
};

export default UpdateStock;
