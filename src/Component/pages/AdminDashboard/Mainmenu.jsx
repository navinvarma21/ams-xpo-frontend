import React from "react";

export default function Mainmenu() {
  return (
    <div className="Mainmenu-container">
      <h1>Admin Dashboard</h1>
      <div className="Mainmenu-container-details">
        <div className="Mainmenu-container-details-1">

          <div className="report">
            <p className="Mainmenu-container-details-1-p">report1</p>
          </div>

          <div className="report">
            <p className="Mainmenu-container-details-1-p">report2</p>
          </div>

        </div>

        <div className="Mainmenu-container-details-2">

          <div className="report">
            <p className="Mainmenu-container-details-1-p">report3</p>
          </div>

          <div className="report">
            <p className="Mainmenu-container-details-1-p">report4</p>
          </div>
          
        </div>
      </div>
    </div>
  );
}
