import React from "react";

export default function Mainmenu() {
  return (
    <div className="Mainmenu-container">
      <h1>Admin Dashboard</h1>
      <div className="Mainmenu-container-details">
        <div className="Mainmenu-container-details-1">
          <div className="report">
            <div className="report-icon">icon1</div>

            <p className="Mainmenu-container-details-1-p">Total Students</p>
            <p className="Mainmenu-container-details-2-p">2,500</p>
          </div>

          <div className="report">
            <div className="report-icon" style={{ backgroundColor: "#22C55E" }}>
              icon1
            </div>

            <p className="Mainmenu-container-details-1-p">Total Students</p>
            <p className="Mainmenu-container-details-2-p">2,500</p>
          </div>
        </div>

        <div className="Mainmenu-container-details-2">
          <div className="report">
            <div className="report-icon" style={{ backgroundColor: "#EAB308" }}>
              icon1
            </div>

            <p className="Mainmenu-container-details-1-p">Total Students</p>
            <p className="Mainmenu-container-details-2-p">2,500</p>
          </div>

          <div className="report">
            <div className="report-icon" style={{ backgroundColor: "#A855F7" }}>
              icon1
            </div>

            <p className="Mainmenu-container-details-1-p">Total Students</p>
            <p className="Mainmenu-container-details-2-p">2,500</p>
          </div>
        </div>


      </div>
      
    </div>
  );
}
