import React, { useState } from "react";
import Header from "../one_time_use_component/Header";
import SideNavbar from "../one_time_use_component/Side_Navbar";
import Footer from "../one_time_use_component/Footer";

import Add_Subject_Details from "../pages/AdminDashboard/Add_Subject_Details";
import Attendane from "../pages/AdminDashboard/Attendane";
import View_Attendance from "../pages/AdminDashboard/View_Attendance";
import Subject_and_Grades from "../pages/AdminDashboard/Subject_and_Grades_1to9";
import Subject_and_Grades_10to12 from "../pages/AdminDashboard/Subject_and_Grades_10to12";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage the active component

  // Function to handle rendering a specific component
  const renderComponent = () => {
    switch (activeComponent) {
      case "AddSubjectDetails":
        return <Add_Subject_Details/>;

      case "Attendance":
        return <Attendane/>;

      case "ViewAttendance":
        return <View_Attendance />;

      case "Subject_and_Grades":
        return <Subject_and_Grades />;

      case "Subject_and_Grades_10to12":
        return <Subject_and_Grades_10to12/>;

      default:
        return <p>Please select an option from the sidebar.</p>; // Default placeholder
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNavbar setActiveComponent={setActiveComponent} />
        <div className="main-content-container">{renderComponent()}</div>
      </div>
      
    </>
  );
}
