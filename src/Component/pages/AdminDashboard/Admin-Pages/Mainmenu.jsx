import React from "react";
import { FaUserGraduate, FaChalkboardTeacher } from "react-icons/fa";
import { BsCurrencyRupee } from "react-icons/bs";
import { GiClassicalKnowledge } from "react-icons/gi"; // For classes icon
import IMAGES from "../../../../Images/images";
export default function Mainmenu() {
  return (
    <>
      <h1 className="Mainmenu-title">Admin Dashboard</h1>
      <div className="Mainmenu-container">
        <div className="Mainmenu-container-details">
          <div className="Mainmenu-container-details-1">
            <div className="report">
              <div className="report-icon">
                <FaUserGraduate size={30} />
              </div>
              <p className="Mainmenu-container-details-1-p">Total Students</p>
              <p className="Mainmenu-container-details-2-p">2,500</p>
            </div>

            <div className="report">
              <div
                className="report-icon"
                style={{ backgroundColor: "#22C55E" }}
              >
                <FaChalkboardTeacher size={30} />
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
                <GiClassicalKnowledge size={30} />
              </div>
              <p className="Mainmenu-container-details-1-p">Total Classes</p>
              <p className="Mainmenu-container-details-2-p">30</p>
            </div>

            <div className="report">
              <div
                className="report-icon"
                style={{ backgroundColor: "#A855F7" }}
              >
                <BsCurrencyRupee size={30} />
              </div>
              <p className="Mainmenu-container-details-1-p">Fee Collected</p>
              <p className="Mainmenu-container-details-2-p">₹42.3L</p>
            </div>
          </div>
        </div>

        {/* Report Container */}
        <div className="report-container">
          <div className="report-card">
            <div className="report-heading">
              <img
                style={{ height: "30px", width: "30px" }}
                src={IMAGES.image6}
              />
              <p style={{ fontWeight: "bold", color: "#8130A7" }}>Finance</p>
            </div>

            <h5 style={{ fontSize: "14px", marginTop: "10px" }}>
              Fee Collection Report
            </h5>

            <button className="generate-button">Generate</button>
          </div>

          <div className="report-card">
            <div className="report-heading">
              <img
                style={{ height: "30px", width: "30px" }}
                src={IMAGES.image6}
              />
              <p style={{ fontWeight: "bold", color: "#1C5DC9" }}>Academic</p>
            </div>

            <h5 style={{ fontSize: "14px", marginTop: "10px" }}>
              Fee Collection Report
            </h5>

            <button className="generate-button">Generate</button>
          </div>
          <div className="report-card">
            <div className="report-heading">
              <img
                style={{ height: "30px", width: "30px" }}
                src={IMAGES.image6}
              />
              <p style={{ fontWeight: "bold", color: "#166534" }}>Attendance</p>
            </div>

            <h5 style={{ fontSize: "14px", marginTop: "10px" }}>
              Fee Collection Report
            </h5>

            <button className="generate-button">Generate</button>
          </div>
        </div>
      </div>
    </>
  );
}
