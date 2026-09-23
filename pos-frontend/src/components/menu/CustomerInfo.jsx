import React from "react";
import { FiMapPin, FiPhone } from "react-icons/fi";
import "./CustomerInfo.css";

const CustomerInfo = () => {
  return (
    <div className="menu-customer-panel">
      <div className="menu-section-heading">
        <div>
          <span className="menu-section-eyebrow">CUSTOMER</span>
          <h3>Customer information</h3>
        </div>
        <span className="menu-status-badge">Dine in</span>
      </div>
      <div className="menu-customer-row">
        <span>
          <FiPhone aria-hidden="true" /> Contact
        </span>
        <strong>+254 712 345 678</strong>
      </div>
      <div className="menu-customer-row">
        <span>
          <FiMapPin aria-hidden="true" /> Table
        </span>
        <strong>Table 02</strong>
      </div>
    </div>
  );
};

export default CustomerInfo;
