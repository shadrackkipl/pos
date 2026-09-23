import React from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import "./MenuContainer.css";

import { useState } from "react";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [ItemId, setItemId] = useState();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    setItemCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <section className="menu-container" aria-label="Restaurant menu">
      <div className="menu-container-header">
        <div>
          <p className="menu-eyebrow">ORDER FROM MENU</p>
          <h2 className="menu-heading">Explore dishes</h2>
        </div>
        <span className="menu-item-total">{selected?.items.length} dishes</span>
      </div>

      <div
        className="menu-categories"
        role="tablist"
        aria-label="Menu categories"
      >
        {menus.map((menu) => {
          return (
            <button
              key={menu.id}
              type="button"
              className={`menu-category-card ${selected.id === menu.id ? "is-selected" : ""}`}
              style={{ backgroundColor: menu.bgColor }}
              onClick={() => {
                setSelected(menu);
                setItemCount(0);
                setItemId(0);
              }}
              role="tab"
              aria-selected={selected.id === menu.id}
            >
              <div className="menu-category-topline">
                <span className="menu-category-icon" aria-hidden="true">
                  {menu.icon} {menu.name}
                </span>
                {selected.id == menu.id && <GrRadialSelected />}
              </div>
              <span className="menu-category-count">
                {menu.items.length} items
              </span>
            </button>
          );
        })}
      </div>

      <div className="menu-section-heading">
        <div>
          <p className="menu-eyebrow">{selected?.name}</p>
          <h3>Available dishes</h3>
        </div>
        <span className="menu-section-line" />
      </div>

      <div className="menu-items-grid">
        {selected?.items.map((menu) => {
          return (
            <article className="menu-item-card" key={menu.id}>
              <div className="menu-item-info">
                <span className="menu-item-icon" aria-hidden="true">
                  {menu.icon} {menu.name}
                </span>
                <span className="menu-item-category">
                  {menu.category || "Chef's choice"}
                </span>
              </div>
              <div className="menu-item-footer">
                <p className="menu-item-price">
                  <span>KES</span> {menu.price}
                </p>

                <div
                  className="stepper"
                  aria-label={`Quantity for ${menu.name}`}
                >
                  <button
                    type="button"
                    className="stepper-btn"
                    aria-label={`Remove one ${menu.name}`}
                    onClick={() => decrement(menu.id)}
                  >
                    −
                  </button>
                  <span className="stepper-count">
                    {menu.id === ItemId ? itemCount : "0"}
                  </span>
                  <button
                    type="button"
                    className="stepper-btn"
                    aria-label={`Add one ${menu.name}`}
                    onClick={() => increment(menu.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default MenuContainer;
