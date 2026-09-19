import React from "react";
import { FaCheckDouble } from "react-icons/fa";
const OrderCard = () => {
  return (
    <div className="order-list">
      <button className="SH-Btn">SH</button>
      <div className="text">
        <div className="name-container">
          <h1 className="name">Shadrack Kiplagat</h1>
          <p className="items">8 Items</p>
        </div>
       
        <div className="ready-container">
          <p className="Ready">
            <FaCheckDouble className="checkdouble-icon" />
            Ready
          </p>
          <p className="paragraph-serve">Ready to serve</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
