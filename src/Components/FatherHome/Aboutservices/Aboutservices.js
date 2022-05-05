import React from "react";
import icon1 from "../../../images/about services/delivery.jpg";
import icon2 from "../../../images/about services/return.jpg";
import icon3 from "../../../images/about services/secure.png";
import icon4 from "../../../images/about services/support.png";
import "./Aboutservices.css";
const Aboutservices = () => {
  return (
    <div className="aboutservice-container">
      <div className="free-ship">
        <img src={icon1} alt="" />
        <div className="detail">
          <h5>Free Shipping</h5>
          <p>On all orders over $75.00</p>
        </div>
      </div>
      <div className="free-return">
        <img src={icon2} alt="" />
        <div className="detail">
          <h5>Free Free Returns</h5>
          <p>Returns are free within 9 days</p>
        </div>
      </div>
      <div className="payment-secure">
        <img src={icon3} alt="" />
        <div className="detail">
          <h5>100% Payment Secure</h5>
          <p>Your payment are safe with us.</p>
        </div>
      </div>
      <div className="support">
        <img src={icon4} alt="" />
        <div className="detail">
          <h5>Support 24/7</h5>
          <p>Contact us 24 hours a day</p>
        </div>
      </div>
    </div>
  );
};

export default Aboutservices;
