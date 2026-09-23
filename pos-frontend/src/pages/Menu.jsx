import React from "react";
import BottomNav from "../components/shared/BottomNav";
import "./Menu.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";

import Cartinfo from "../components/menu/Cartinfo";
import Bills from "../components/menu/Bills";

const Menu = () => {
  const navigate = useNavigate();

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
          {/*LOGGED USER DETAILS*/}
          <div className="customer-details">
            <div className="customer-icon-container" aria-hidden="true">
              <MdRestaurantMenu className="menu-icon" />
            </div>
            <div className="customer-copy">
              <span className="customer-name">Customer Name</span>
              <span className="Table-No">Table No: 2</span>
            </div>
          </div>
        </div>
        <MenuContainer />
      </div>

      <aside className="menu-right-panel" aria-label="Order summary panel">
        <div className="menu-order-panel">
          <div className="menu-order-header">
            <div className="menu-order-meta">
              <h2>Customer Name</h2>
              <p>#101 / Dine</p>
              <p>January 19, 2025 05:34 PM</p>
            </div>
            <button className="menu-order-avatar" type="button">
              CN
            </button>
          </div>

          <div className="menu-order-divider" />

          <div className="menu-order-content">
            <Cartinfo />
            <Bills />
          </div>
        </div>
      </aside>

      <BottomNav />
    </section>
  );
};

export default Menu;
