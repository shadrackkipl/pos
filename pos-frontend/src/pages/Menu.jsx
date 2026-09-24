import React, { useState } from "react";
import BottomNav from "../components/shared/BottomNav";
import "./Menu.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

import CartInfo from "../components/menu/CartInfo";
import Bills from "../components/menu/Bills";
import CustomerInfo from "../components/menu/CustomerInfo";
import { useSelector } from "react-redux";
import { formatDate } from "../utils";

const Menu = () => {
  const navigate = useNavigate();
  const customerData = useSelector((state) => state.customer);
  const [dateTime] = useState(new Date());

  return (
    <section className="menu-page">
      <div className="menu-left-panel">
        <div className="menu-title">
          <button
            className="menu-back"
            type="button"
            onClick={() => navigate(-1)}
            aria-label="Go back"
          >
            <FaArrowLeft />
          </button>
          <h1 className="menuh1">Menu</h1>
          <div className="customer-details">
            <div className="customer-icon-container" aria-hidden="true">
              <MdRestaurantMenu className="menu-icon" />
            </div>
            <div className="customer-copy">
              <span className="customer-name">{customerData.customerName}</span>
              <span className="Table-No">{customerData.tableNo}</span>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      <aside className="menu-right-panel" aria-label="Order summary panel">
        <div className="menu-order-panel">
          <div className="menu-order-header">
            <div className="menu-order-meta">
              <span className="menu-order-kicker">ORDER SUMMARY</span>
              <h2>RESTRO</h2>
              <p className="menu-order-number">
                Order #101 <span>•</span> Dine in
              </p>
              <p>
                {formatDate(dateTime)} <span>•</span>{" "}
                {dateTime.toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
            <span className="menu-order-status">OPEN</span>
          </div>

          <div className="menu-order-divider" />

          <div className="menu-order-content">
            <CustomerInfo />
            <CartInfo />
            <Bills />
          </div>
        </div>
      </aside>

      <BottomNav />
    </section>
  );
};

export default Menu;
