import React from "react";
import BottomNav from "../components/shared/BottomNav";
import "./Orders.css";
import OrderCard from "../components/orders/OrderCard";

const Order = () => {
  return (
    <div>
      <section className="ordercontainer">
        <div className="Orderscont">
          <h1 className="orderh1">Orders</h1>
          <div className="order-tabs">
            <button className="active">All</button>
            <button>In Progress</button>
            <button>Ready</button>
            <button>Completed</button>
          </div>
        </div>
    
      <div>
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Order;
