import React from "react";
import { FaHome } from "react-icons/fa";
import { MdOutlineReorder } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { CiCircleMore } from "react-icons/ci";
import { BiSolidDish } from "react-icons/bi";
import "./BottomNav.css";
import { useNavigate } from "react-router-dom";

const BottomNav = () => {
  const navigate = useNavigate();

  return (
    <div className="bottom-nav">
      <button onClick={() => navigate("/home")} className="nav-item active">
        <FaHome className="nav-icon" />
        Home
      </button>
      <button onClick={() => navigate("/orders")} className="nav-item">
        <MdOutlineReorder className="nav-orders" />
        Orders
      </button>
      <button className="nav-item nav-dish">
        <BiSolidDish />
      </button>
      <button className="nav-item">
        <MdTableBar className="nav-tables" />
        Tables
      </button>
      <button className="nav-item">
        <CiCircleMore className="nav-more" />
        More
      </button>
    </div>
  );
};

export default BottomNav;
