import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import "./Myitems.css";
const MyItems = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);
  const [myItems, setItems] = useState([]);
  const email = user?.email;
  console.log(myItems);
  useEffect(() => {
    const url = `https://fathomless-forest-20620.herokuapp.com/myitems?email=${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, [myItems]);

  return (
    <div className="allproduct-maincontainer">
      <div className="allproduct-container">
        {myItems?.map((item) => (
          <div className="single-container">
            <img src={item.image} alt="" />
            <div className="singleproduct-info">
              <h4 className="text-center">{item.fruitname}</h4>
              <h5 className="text-center text-success">Price:{item.price}</h5>
              <p>Stock:{item.quantity}</p>
              <p>Suppliername:{item.suppliername}</p>
              <p>Description:{item.description}</p>
            </div>
            <button
              onClick={() => navigate(`/updatestock/${item._id}`)}
              className="btn btn-success mx-5"
            >
              Stock Update
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyItems;
