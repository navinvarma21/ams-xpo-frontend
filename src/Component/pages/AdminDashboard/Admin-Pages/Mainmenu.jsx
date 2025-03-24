import React from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { GiClassicalKnowledge } from "react-icons/gi"; // For classes icon

export default function Mainmenu() {
  return (
    <>
      <div className="Mainmenu-container">
        <h1>Admin Dashboard</h1>
        <div className="Mainmenu-container-details">
          <div className="Mainmenu-container-details-1">
            <div className="report">
              <div className="report-icon">
                <FaUserGraduate size={24} />
              </div>
              <p className="Mainmenu-container-details-1-p">Total Students</p>
              <p className="Mainmenu-container-details-2-p">2,500</p>
            </div>

            <div className="report">
              <div
                className="report-icon"
                style={{ backgroundColor: "#22C55E" }}
              >
                <FaChalkboardTeacher size={24} />
              </div>
              <p className="Mainmenu-container-details-1-p">Total Teachers</p>
              <p className="Mainmenu-container-details-2-p">150</p>
            </div>
          </div>

          <div className="Mainmenu-container-details-2">
            <div className="report">
              <div
                className="report-icon"
                style={{ backgroundColor: "#EAB308" }}
              >
                <GiClassicalKnowledge size={24} />
              </div>
              <p className="Mainmenu-container-details-1-p">Total Classes</p>
              <p className="Mainmenu-container-details-2-p">30</p>
            </div>

            <div className="report">
              <div
                className="report-icon"
                style={{ backgroundColor: "#A855F7" }}
              >
                <BsCurrencyRupee size={24} />
              </div>
              <p className="Mainmenu-container-details-1-p">Fee Collected</p>
              <p className="Mainmenu-container-details-2-p">₹42.3L</p>
            </div>
          </div>
        </div>

        {/* Report Container */}
        <div className="report-container">
          <div className="report-card finance">
            <h5 style={{fontSize:"14px"}}>Fee Collection Report</h5>
            <p className="finance">Finance</p>
            <button className="generate-button">Generate</button>
          </div>

          <div className="report-card academic">
            <h5>Student Performance Report</h5>
            <p>Academic</p>
            <button className="generate-button">Generate</button>
          </div>

          <div className="report-card academic">
            <h5 >Attendance Report</h5>
            <p>Academic</p>
            <button className="generate-button">Generate</button>
          </div>
        </div>
      </div>
    </>
  );
}