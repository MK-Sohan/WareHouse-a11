import React, { useEffect, useState } from "react";

const HooksProducts = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/fruit")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return [fruits, setFruits];
};

export default HooksProducts;
