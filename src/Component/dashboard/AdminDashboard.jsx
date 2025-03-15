import React, { useState } from "react";
import Header from "../one_time_use_component/Header";
import SideNavbar from "../one_time_use_component/Side_Navbar";

import Add_Subject_Details from "../pages/AdminDashboard/Add_Subject_Details";
import Attendane from "../pages/AdminDashboard/Attendane";
import View_Attendance from "../pages/AdminDashboard/View_Attendance";
import Subject_and_Grades from "../pages/AdminDashboard/Subject_and_Grades_1to9";
import Subject_and_Grades_10to12 from "../pages/AdminDashboard/Subject_and_Grades_10to12";
import Mainmenu from "../pages/AdminDashboard/Mainmenu";
import Exam_Records from "../pages/AdminDashboard/Exam_Records";
import Add_New_Teacher from "../pages/AdminDashboard/Add_New_Teacher";
import Search_Teacher from "../pages/AdminDashboard/Search_Teacher";
import Subject_to_Handle from "../pages/AdminDashboard/Subject_to_Handle";
import Timetable from "../pages/AdminDashboard/Timetable";
import Add_Exams from "../pages/AdminDashboard/Add_Exams";
import View_Exam_Details from "../pages/AdminDashboard/View_Exam_Details";
import Add_Announcements from "../pages/AdminDashboard/Add_Announcements";
import View_Announcements from "../pages/AdminDashboard/View_Announcements";
import Add_Events from "../pages/AdminDashboard/Add_Events";
import View_Events from "../pages/AdminDashboard/View_Events";














export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage the active component

  // Function to handle rendering a specific component
  const renderComponent = () => {
    switch (activeComponent) {
      case "AddSubjectDetails":
        return <Add_Subject_Details />;

      case "Attendance":
        return <Attendane />;

      case "ViewAttendance":
        return <View_Attendance />;

      case "Subject_and_Grades":
        return <Subject_and_Grades />;

      case "Subject_and_Grades_10to12":
        return <Subject_and_Grades_10to12 />;

      case "Exam_Records":
        return <Exam_Records />;

      case "Add_New_Teacher":
        return <Add_New_Teacher/>;

      case "Search_Teacher":
        return <Search_Teacher/>;

      case "Subject_to_Handle":
        return  <Subject_to_Handle/>;

      case "Timetable":
        return <Timetable/>;

      case "Add_Exams":
        return <Add_Exams />;

      case "View_Exam_Details":
        return <View_Exam_Details/>;

      case "Add_Announcements":
        return <Add_Announcements/>;

      case "View_Announcements":
        return <View_Announcements/>;

      case "Add_Events":
        return <Add_Events/>;

      case "View_Events":
        return <View_Events/>;

      default:
        return (
          <div>
            <Mainmenu />
          </div>
        ); // Default placeholder
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
