import React from "react";
import "./TableCard.css";

const TableCard = ({ name, status, initials, color }) => {
  return (
    <article className="table-card">
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