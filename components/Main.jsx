import React, { useState } from "react";
import Content from "./Content";

export default function Main() {
  const [selectedTimeFrame, setSelectedTimeFrame] = useState("Weekly");

  const handleDailyClick = () => {
    setSelectedTimeFrame("Daily");
  };

  const handleWeeklyClick = () => {
    setSelectedTimeFrame("Weekly");
  };

  const handleMonthlyClick = () => {
    setSelectedTimeFrame("Monthly");
  };

  return (
    <main>
      <div className="second-card">
        <div className="main-card">
          <img
            className="avatar-logo"
            src="/images/image-jeremy.png"
            alt="Avatar"
          />
          <div className="main-card-details">
            <p>Report for</p>
            <h1>Jeremy Robson</h1>
          </div>
        </div>

        <div className="stats">
          <button className="daily" onClick={handleDailyClick}>
            Daily
          </button>
          <button className="weekly" onClick={handleWeeklyClick}>
            Weekly
          </button>
          <button className="monthly" onClick={handleMonthlyClick}>
            Monthly
          </button>
        </div>
      </div>

      {/* Pass selectedTimeFrame as prop to Content */}
      <Content selectedTimeFrame={selectedTimeFrame} />
    </main>
  );
}
