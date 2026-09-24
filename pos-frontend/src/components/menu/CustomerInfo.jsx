import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import "./CustomerInfo.css";
import { useSelector } from "react-redux";

const CustomerInfo = () => {
  const customerData = useSelector((state) => state.customer);
  return (
    <div className="menu-customer-panel">
      <div className="menu-section-heading">
        <div>
          <span className="menu-section-eyebrow">CUSTOMER</span>
          <h3>{customerData.customerName || "Walk-in customer"}</h3>
        </div>
        <span className="menu-status-badge">{customerData.orderId} /Dine in</span>
      </div>
      <div className="menu-customer-row">
        <span>
          <FiPhone aria-hidden="true" /> Contact
        </span>
        <strong>{customerData.customerPhone || "Not provided"}</strong>
      </div>
      <div className="menu-customer-row">
        <span>
          <FiMapPin aria-hidden="true" /> Table
        </span>
        <strong>{customerData.tableNo || "Not assigned"}</strong>
      </div>
    </div>
  );
};

export default CustomerInfo;
