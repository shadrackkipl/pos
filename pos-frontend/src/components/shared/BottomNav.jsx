import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import "./BottomNav.css";
import { NavLink, useNavigate } from "react-router-dom";
import Modal from "./Modal.jsx";

const BottomNav = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [guestCount, setGuestCount] = useState(0);

  const increment = () => {
    if (guestCount >= 6) return;
    setGuestCount((prev) => prev + 1);
  };

  const decrement = () => {
    setGuestCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleCreateOrder = () => {
    closeModal();
    navigate("/tables");
  };

  return (
    <div className="bottom-nav">
      <NavLink to="/home" className="nav-item">
        <FaHome className="nav-icon" />
        Home
      </NavLink>
      <NavLink to="/orders" className="nav-item">
        <MdOutlineReorder className="nav-orders" />
        Orders
      </NavLink>
      <button onClick={openModal} type="button" className="nav-item nav-dish">
        <BiSolidDish />
      </button>
      <NavLink to="/tables" className="nav-item">
        <MdTableBar className="nav-tables" />
        Tables
      </NavLink>
      <button type="button" className="nav-item">
        <CiCircleMore className="nav-more" />
        More
      </button>
      <Modal isOpen={isModalOpen} onClose={closeModal} title="Create Order">
        <div className="modal-form">
          <div className="form-field">
            <label className="form-label">Customer Name</label>
            <input
              className="form-input"
              type="text"
              placeholder="Enter customer name"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Customer Phone</label>
            <input
              className="form-input"
              type="tel"
              placeholder="Enter customer phone"
            />
          </div>

          <div className="form-field">
            <label className="form-label">Guest Count</label>
            <div className="guest-box">
              <div className="guest-meta">
                <span className="guest-label">Party size</span>
                <span className="guest-value">{guestCount} Guest{guestCount === 1 ? "" : "s"}</span>
              </div>

              <div className="stepper">
                <button type="button" className="stepper-btn" onClick={decrement} aria-label="Decrease guest count">
                  −
                </button>
                <span className="stepper-count">{guestCount}</span>
                <button type="button" className="stepper-btn" onClick={increment} aria-label="Increase guest count">
                  +
                </button>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" className="secondary-btn" onClick={closeModal}>
              Cancel
            </button>
            <button type="button" className="primary-btn" onClick={handleCreateOrder}>
              Create Order
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default BottomNav;
