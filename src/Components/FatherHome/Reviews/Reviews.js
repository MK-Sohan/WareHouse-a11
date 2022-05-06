import React, { useEffect, useState } from "react";
import "./Reviews.css";
const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="mainn-container">
      <h1 className="text-center mt-5 ">
        What People Say <br /> <span className="text-warning">About Us</span>{" "}
      </h1>
      <div
        style={{ height: "1px", width: "290px" }}
        className="bg-primary mx-auto mb-5"
      >
        {" "}
      </div>
      <div className="mainreview-container">
        {reviews.map((review) => (
          <div className="review-container">
            <img src={review.image} alt="" />
            <div className="review-info">
              <h5>Name:{review.name}</h5>

              <p>Review:{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
