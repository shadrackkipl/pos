import React from "react";
import "./RecentOrders.css";
import { FaSearch } from "react-icons/fa";
import OrderList from "./OrderList";

const RecentOrders = () => {
  return (
    <div className="recent-orders">
      <div className="recent-orders-header">
        <div className="recent-orders-title">
          <h1>Recent Orders</h1>
        </div>
        <button className="recent-orders-view-all">View all</button>
      </div>
      <div className="search-contain">
        <FaSearch className="search-icon" />
        <input
          className="search-inputs"
          type="text"
          placeholder="Search recent orders"
        />
      </div>
      <div className="Order-list">
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
        <OrderList />
      </div>
    </div>
  );
};

export default RecentOrders;
