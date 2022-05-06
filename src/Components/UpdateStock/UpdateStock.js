import React from "react";
import { useParams } from "react-router-dom";

const UpdateStock = () => {
  const { productid } = useParams();
  return (
    <div>
      <h1>You can update stock Hear:{productid}</h1>
    </div>
  );
};

export default UpdateStock;
