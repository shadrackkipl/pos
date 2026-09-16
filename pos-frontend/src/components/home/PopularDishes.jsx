import React from "react";
import "./PopularDishes.css";
import { popularDishes } from "../../constants";

export const PopularDishes = () => {
  return (
    <section className="popular-dishes">
      <div className="popular-dishes-header">
        <h1>Popular Dishes</h1>

        <button type="button" className="popular-dishes-view-all">
          View all
        </button>
      </div>

      <div className="popular-dishes-body">
        {popularDishes.map((dish) => (
          <div className="popular-dish-card" key={dish.id}>
            <img
              src={dish.Image}
              alt={dish.name}
              className="popular-dish-image"
            />

            <div className="popular-dish-info">
              <p className="popular-dish-name">{dish.name}</p>
              <div className="popular-dish-orders">
                <span>Orders</span>
                <strong>{dish.numberOfOrders}</strong>
              </div>
            </div>
            <span className="popular-dish-trend">Hot</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PopularDishes;
