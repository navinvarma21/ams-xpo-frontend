import React, { useState } from "react";
import Header from "../one_time_use_component/Header";
import SideNavbar from "../one_time_use_component/Side_Navbar";
import Footer from "../one_time_use_component/Footer";

import Add_Subject_Details from "../pages/AdminDashboard/Add_Subject_Details";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage the active component

  // Function to handle rendering a specific component
  const renderComponent = () => {
    switch (activeComponent) {
      case "AddSubjectDetails":
        return <Add_Subject_Details/>;

      case "AddStudent":
        return <AddStudent />;

      case "AddStudent":
        return <AddStudent />;

      case "AddStudent":
        return <AddStudent />;

      case "AddStudent":
        return <AddStudent />;

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
      <Footer />
    </>
  );
}
