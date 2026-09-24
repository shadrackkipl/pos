import React, { useState } from "react";
import { menus } from "../../constants";
import { GrRadialSelected } from "react-icons/gr";
import "./MenuContainer.css";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addItems } from "../../redux/slice/cartSlice";

const MenuContainer = () => {
  const [selected, setSelected] = useState(menus[0]);
  const [itemCount, setItemCount] = useState(0);
  const [itemId, setItemId] = useState(null);
  const dispatch = useDispatch();

  const increment = (id) => {
    setItemId(id);
    if (itemCount >= 4) return;
    setItemCount((prev) => prev + 1);
  };

  const decrement = (id) => {
    setItemId(id);
    setItemCount((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const handleAddCart = (item) => {
    if (!item) return;

    const quantity = itemCount > 0 ? itemCount : 1;
    const newObj = {
      id: `${item.id}-${Date.now()}`,
      name: item.name,
      pricePerQuantity: item.price,
      quantity,
      price: item.price * quantity,
    };

    dispatch(addItems(newObj));
    setItemCount(0);
    setItemId(null);
  };

  return (
    <section className="menu-container" aria-label="Restaurant menu">
      <div className="menu-container-header">
        <div>
          <p className="menu-eyebrow">ORDER FROM MENU</p>
          <h2 className="menu-heading">Explore dishes</h2>
        </div>
        <span className="menu-item-total">{selected.items.length} dishes</span>
      </div>

      <div
        className="menu-categories"
        role="tablist"
        aria-label="Menu categories"
      >
        {menus.map((category) => {
          const isSelected = selected.id === category.id;

          return (
            <button
              key={category.id}
              type="button"
              className={`menu-category-card ${isSelected ? "is-selected" : ""}`}
              style={{ backgroundColor: category.bgColor }}
              onClick={() => {
                setSelected(category);
                setItemCount(0);
                setItemId(null);
              }}
              role="tab"
              aria-selected={isSelected}
            >
              <div className="menu-category-topline">
                <span className="menu-category-icon" aria-hidden="true">
                  {category.icon} {category.name}
                </span>
                {isSelected && <GrRadialSelected />}
              </div>
              <span className="menu-category-count">
                {category.items.length}
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
        {selected.items.map((item) => (
          <article className="menu-item-card" key={item.id}>
            <div className="menu-item-info">
              <div className="menu-item-topline">
                <span className="menu-item-icon" aria-hidden="true">
                  {item.name}
                </span>
                <button
                  type="button"
                  className="cart-button"
                  aria-label={`Add ${item.name} to cart`}
                  title={`Add ${item.name} to cart`}
                  onClick={() => handleAddCart(item)}
                >
                  <FaShoppingCart aria-hidden="true" />
                </button>
              </div>
              <span className="menu-item-category">
                {item.category || "Chef's choice"}
              </span>
            </div>
            <div className="menu-item-footer">
              <p className="menu-item-price">
                <span>KES</span> {item.price}
              </p>

              <div className="stepper" aria-label={`Quantity for ${item.name}`}>
                <button
                  type="button"
                  className="stepper-btn"
                  aria-label={`Remove one ${item.name}`}
                  onClick={() => decrement(item.id)}
                >
                  −
                </button>
                <span className="stepper-count">
                  {item.id === itemId ? itemCount : "0"}
                </span>
                <button
                  type="button"
                  className="stepper-btn"
                  aria-label={`Add one ${item.name}`}
                  onClick={() => increment(item.id)}
                >
                  +
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default MenuContainer;
