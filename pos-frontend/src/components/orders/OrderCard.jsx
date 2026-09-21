import React from "react";
import { FaCheckDouble } from "react-icons/fa";
import "./OrderCard.css";


const OrderCard = () => {
  return (
    <article className="order-card">
      <div className="order-card__top">
        <div className="order-card__identity">
          <div className="order-card__avatar">SH</div>
          <div className="order-card__customer">
            <h2 className="order-card__name">Shadrack Kiplagat</h2>
            <p className="order-card__table">#101/ Dine in</p>
          </div>
        </div>
        <div className="order-card__status">
          <p className="order-card__badge"><FaCheckDouble />Ready</p>
          <p className="order-card__description"><span />Ready to serve</p>
        </div>
      </div>
      <div className="order-card__details">
        <p>January 18, 2025 08:32 PM</p>
        <p>8 Items</p>
      </div>
      <div className="order-card__total"><strong>Total</strong><strong>250 Ksh</strong></div>
    </article>
  );
};

export default OrderCard;
