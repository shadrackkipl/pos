import React from "react";
import { FiCreditCard, FiPrinter } from "react-icons/fi";
import "./Bills.css";
import { useSelector } from 'react-redux'
import { getTotalPrice } from "../../redux/slice/cartSlice";

const Bill = () => {

  const cartData = useSelector(state => state.cart);
  const total = useSelector(getTotalPrice);
  const taxRate = 5.25;
  const tax = (total * taxRate) /100;
  const totalPriceWithTax = total + tax;

  return (
    <div className="menu-bill-panel">
      <div className="menu-section-heading">
        <div>
          <span className="menu-section-eyebrow">PAYMENT SUMMARY</span>
          <h3>Bill details</h3>
        </div>
        <FiCreditCard className="menu-bill-icon" aria-hidden="true" />
      </div>
      <div className="menu-bill-row">
        <span>{cartData.length}</span>
        <strong>KES {tax.toFixed(2)}</strong>
      </div>
      <div className="menu-bill-row">
        <span>Tax (5.25%)</span>
        <strong>KES {tax.toFixed(2)}</strong>
      </div>
      <div className="menu-bill-row total">
        <span>Total with tax</span>
        <strong>KES {totalPriceWithTax.toFixed(2)}</strong>
      </div>

      <p className="menu-payment-label">Payment method</p>
      <div className="menu-payment-options">
        <button className="payment-button active" type="button">
          Cash
        </button>
        <button className="payment-button" type="button">
          Online
        </button>
      </div>

      <div className="menu-action-buttons">
        <button className="secondary-action" type="button">
          <FiPrinter aria-hidden="true" /> Print receipt
        </button>
        <button className="primary-action" type="button">
          Place Order
        </button>
      </div>
    </div>
  );
};

export default Bill;
