import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Tables.css";
import TableCard from "../components/tables/TableCard";
import BottomNav from "../components/shared/BottomNav";
import Header from "../components/shared/Header";
import { getBgColor } from "../constants";

const tables = [
  ["Table 1", "Booked", "SH"],
  ["Table 2", "Available", "MB"],
  ["Table 3", "Booked", "JS"],
  ["Table 4", "Available", "HR"],
  ["Table 5", "Booked", "PL"],
  ["Table 6", "Available", "RT"],
  ["Table 7", "Booked", "LC"],
  ["Table 8", "Available", "DP"],
  ["Table 9", "Booked", "NK"],
  ["Table 10", "Available", "SB"],
  ["Table 11", "Booked", "GT"],
  ["Table 12", "Available", "JS"],
  ["Table 13", "Booked", "EK"],
  ["Table 14", "Available", "QN"],
  ["Table 16", "Booked", "DW"],
  ["Table 17", "Booked", "MN"],
  ["Table 18", "Booked", "FM"],
  ["Table 19", "Booked", "XM"],
  ["Table 20", "Booked", "PW"],
];

const Tables = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const [tablesWithColors] = useState(() =>
    tables.map(([name, status, initials]) => ({
      name,
      status,
      initials,
      color: getBgColor(),
    })),
  );

  const visibleTables =
    filter === "All"
      ? tablesWithColors
      : tablesWithColors.filter(({ status }) => status === filter);

  return (
    <div className="tables-page">
      <Header />
      <section className="tables-container">
        <div className="tables-cont">
          <div className="tables-title">
            <button
              className="tables-back"
              type="button"
              onClick={() => navigate(-1)}
              aria-label="Go back"
            >
              <FaArrowLeft />
            </button>
            <h1 className="tables-heading">Tables</h1>
          </div>
          <div
            className="tables-filters"
            role="group"
            aria-label="Filter tables"
          >
            {["All", "Booked"].map((option) => (
              <button
                key={option}
                type="button"
                className={filter === option ? "active" : ""}
                onClick={() => setFilter(option)}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
        <div className="tables-grid">
          {visibleTables.map(({ name, status, initials, color }) => (
            <TableCard
              key={name}
              name={name}
              status={status}
              initials={initials}
              color={color}
              onClick={
                status === "Available" ? () => navigate("/menu") : undefined
              }
            />
          ))}
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Tables;
