import React, { useState, useEffect } from "react";
import "./Greetings.css";

const Greetings = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Cleanup interval to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`;
  };

  const formatTime = (date) => {
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const seconds = date.getSeconds().toString().padStart(2, "0");
    return `${hours}:${minutes}:${seconds}`;
  };

  return (
    <div className="greetings">
      <div>
        <h1 className="greeting-title">Good Evening, Shadrack</h1>
        <p className="greeting-subtitle">
          Give your best services for customers
        </p>
      </div>
      <div className="greetings-right">
        <h1 className="greeting-time">{formatTime(date)}</h1>
        <p className="greeting-date">{formatDate(date)}</p>
      </div>
    </div>
  );
};

export default Greetings;
