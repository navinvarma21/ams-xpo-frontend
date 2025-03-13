
import React from "react";

export default function Header() {
  return (
    <div className="Header-Container">
      <div className="Header-Contaier-Navbar">
            <div className="Header-Contaier-Navbar-start">
                <p>Logo</p>
                <p className="schoolname">SCHOOL NAME</p>
            </div>

            <div className="Header-Contaier-Navbar-end">
                <p className="Header-Contaier-Navbar-end-1">dd/mm/yy</p>
                <p className="Header-Contaier-Navbar-end-1">Date</p>
                <p className="Header-Contaier-Navbar-end-1">00:00 </p>
            </div>
      </div>
    </div>
  );
}
