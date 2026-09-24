import React from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import "./CartInfo.css";
import { useDispatch, useSelector } from "react-redux";
import { removeItem } from "../../redux/slice/cartSlice";

const CartInfo = () => {
  const dispatch = useDispatch();
  const cartData = useSelector((state) => state.cart || []);
  const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="menu-cart-panel">
      <div className="menu-cart-header">
        <div>
          <span className="menu-section-eyebrow">CURRENT ORDER</span>
          <h3>Order details</h3>
        </div>
        <span className="menu-item-count">
          {totalItems} item{totalItems === 1 ? "" : "s"}
        </span>
      </div>

      <div className="menu-cart-item">
        {cartData.length === 0 ? (
          <p>Your cart is empty. Start adding items.</p>
        ) : (
          cartData.map((item) => (
            <div className="menu-cart-copy" key={item.id}>
              <div className="menu-cart-item-image">CB</div>
              <div className="menu-cart-copy">
                <h4>{item.name}</h4>
                <p>
                  KES{" "}
                  {Number(item.pricePerQuantity || item.price).toLocaleString()}{" "}
                  each
                </p>
              </div>
              <div className="menu-cart-controls">
                <button type="button" aria-label="Decrease quantity">
                  <FiMinus />
                </button>
                <span>{item.quantity}</span>
                <button type="button" aria-label="Increase quantity">
                  <FiPlus />
                </button>
              </div>
              <button
                className="menu-cart-remove"
                type="button"
                aria-label="Remove item"
                onClick={() => handleRemove(item.id)}
              >
                <FiTrash2 />
              </button>
              <p className="kes">
                KES {Number(item.price || 0).toLocaleString()}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default CartInfo;
