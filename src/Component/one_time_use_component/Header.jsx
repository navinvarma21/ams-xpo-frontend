import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for toastify

export default function Header() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const navigate = useNavigate(); // Hook to navigate between routes

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

  const handleLogout = () => {
    // Simulate logout logic here (e.g., clearing local storage)
    localStorage.removeItem("token"); // Example: Remove token from local storage

    // Navigate to login page
    navigate("/");

    // Show toast notification
    toast.success("Logout successful!");
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
          <button className="logout" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
}
