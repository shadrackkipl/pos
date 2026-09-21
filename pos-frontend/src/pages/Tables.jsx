import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Tables.css";
import TableCard from "../components/tables/TableCard";
import BottomNav from "../components/shared/BottomNav";
import Header from "../components/shared/Header";

const tables = [
  ["Table 1", "Booked", "SH", "#ffb400"],
  ["Table 2", "Available", "MB", "#00c83c"],
  ["Table 3", "Booked", "JS", "#00c83c"],
  ["Table 4", "Available", "HR", "#c83b41"],
  ["Table 5", "Booked", "PL", "#ffb400"],
  ["Table 6", "Available", "RT", "#00c83c"],
  ["Table 7", "Booked", "LC", "#c83b41"],
  ["Table 8", "Available", "DP", "#c83b41"],
  ["Table 9", "Booked", "NK", "#c83b41"],
  ["Table 10", "Available", "SB", "#ffb400"],
  ["Table 11", "Booked", "GT", "#0869d1"],
  ["Table 12", "Available", "JS", "#0869d1"],
  ["Table 13", "Booked", "EK", "#c83b41"],
  ["Table 14", "Available", "QN", "#0869d1"],
  ["Table 16", "Booked", "DW", "#0869d1"],
  ["Table 17", "Booked", "MN", "#0869d1"],
  ["Table 18", "Booked", "FM", "#0869d1"],
  ["Table 19", "Booked", "XM", "#0869d1"],
  ["Table 20", "Booked", "PW", "#0869d1"],

];

const Tables = () => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");

  const visibleTables =
    filter === "All"
      ? tables
      : tables.filter(([, status]) => status === filter);

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
          {visibleTables.map(([name, status, initials, color]) => (
            <TableCard
              key={name}
              name={name}
              status={status}
              initials={initials}
              color={color}
            />
          ))}
        </div>
      </section>
      <BottomNav />
    </div>
  );
};

export default Tables;
