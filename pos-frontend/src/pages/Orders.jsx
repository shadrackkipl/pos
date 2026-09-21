import React from "react";
import BottomNav from "../components/shared/BottomNav";
import "./Orders.css";
import OrderCard from "../components/orders/OrderCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <div className="orders-page">
      <section className="ordercontainer">
        <div className="Orderscont">
          <div className="orders-title">
            <button className="orders-back" type="button" onClick={() => navigate(-1)} aria-label="Go back">
              <FaArrowLeft />
            </button>
            <h1 className="orderh1">Orders</h1>
          </div>
          <div className="order-tabs">
            <button className="active">All</button>
            <button>In Progress</button>
            <button>Ready</button>
            <button>Completed</button>
          </div>
        </div>

        <div className="orders-grid">
          {Array.from({ length: 15 }, (_, index) => (
            <OrderCard key={index} />
          ))}
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Order;
