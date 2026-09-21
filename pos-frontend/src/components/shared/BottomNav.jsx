import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import "./BottomNav.css";
import { NavLink } from "react-router-dom";

const BottomNav = () => {
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
      <button type="button" className="nav-item nav-dish">
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
    </div>
  );
};

export default BottomNav;
