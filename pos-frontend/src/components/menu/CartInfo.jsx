import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import "./CartInfo.css";

const Cartinfo = () => {
  return (
    <div className="menu-cart-panel">
      <div className="menu-cart-header">
        <div>
          <span className="menu-section-eyebrow">CURRENT ORDER</span>
          <h3>Order details</h3>
        </div>
        <span className="menu-item-count">1 item</span>
      </div>

      <div className="menu-cart-item">
        <div className="menu-cart-copy">
          <div className="menu-cart-item-image">CB</div>
          <div className="menu-cart-copy">
            <h4>Chicken Biryani</h4>
            <p>KES 1,250 each</p>
          </div>
          <div className="menu-cart-controls">
            <button type="button" aria-label="Decrease quantity">
              <FiMinus />
            </button>
            <span>2</span>
            <button type="button" aria-label="Increase quantity">
              <FiPlus />
            </button>
          </div>
          <button
            className="menu-cart-remove"
            type="button"
            aria-label="Remove item"
          >
            <FiTrash2 />
          </button>
          <p className="kes">KES 2,500</p>
        </div>
      </div>
    </div>
  );
};

export default Cartinfo;
