import React from "react";
import BottomNav from "../components/shared/BottomNav";
import "./Menu.css";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { MdRestaurantMenu } from "react-icons/md";
import MenuContainer from "../components/menu/MenuContainer";


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
                  <MdRestaurantMenu  className="menu-icon" />
                </div>
                <div className="customer-copy">
                  <span className="customer-name">Customer Name</span>
                  <span className="Table-No">Table No: 2</span>
                </div>
              </div>
        </div>
        <MenuContainer />
      </div>

      <aside className="menu-right-panel" aria-label="Menu categories">
        
      </aside>

      <BottomNav />
    </section>
  );
};

export default Menu;
