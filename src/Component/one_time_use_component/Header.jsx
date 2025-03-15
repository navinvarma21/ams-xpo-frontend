import React, { useEffect, useState } from "react";

export default function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Updates every second

    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  const formatDate = (date) => {
    return date.toLocaleDateString("en-GB"); // Format: dd/mm/yyyy
  };

  const formatDay = (date) => {
    return date.toLocaleDateString("en-US", { weekday: "long" }); // Full weekday name (e.g., Monday)
  };

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="Header-Container">
      <div className="Header-Contaier-Navbar">
        <div className="Header-Contaier-Navbar-start">
          <p>Logo</p>
          <p className="schoolname">SCHOOL NAME</p>
        </div>

        <div className="Header-Contaier-Navbar-end">
          <p className="Header-Contaier-Navbar-end-1">{formatDate(currentDate)}</p>
          <p className="Header-Contaier-Navbar-end-1">{formatDay(currentDate)}</p>
          <p className="Header-Contaier-Navbar-end-1">{formatTime(currentDate)}</p>
        </div>
      </div>
    </div>
  );
}
