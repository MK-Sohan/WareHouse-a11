import React, { useEffect, useState } from "react";

const HooksProducts = () => {
  const [fruits, setFruits] = useState([]);
  useEffect(() => {
    fetch("https://fathomless-forest-20620.herokuapp.com/inventory")
      .then((res) => res.json())
      .then((data) => setFruits(data));
  }, []);
  return [fruits, setFruits];
};

export default HooksProducts;
