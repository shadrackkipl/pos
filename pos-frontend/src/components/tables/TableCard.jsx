import React from "react";
import "./TableCard.css";

const TableCard = ({ name, status, initials, color, onClick }) => {
  const handleKeyDown = (event) => {
    if (onClick && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      onClick();
    }
  };

  return (
    <article
      className={`table-card${onClick ? " clickable" : ""}`}
      onClick={onClick}
      onKeyDown={handleKeyDown}
      role={onClick ? "button" : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      <div className="table-card-header">
        <h2>{name}</h2>
        <span className={`table-status ${status.toLowerCase()}`}>{status}</span>
      </div>
      <div className="table-avatar" style={{ backgroundColor: color }}>
        {initials}
      </div>
    </article>
  );
};

export default TableCard