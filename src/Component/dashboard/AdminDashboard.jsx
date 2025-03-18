import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Header from "../one_time_use_component/Header";
import SideNavbar from "../one_time_use_component/Side_Navbar";
import Mainmenu from "../pages/AdminDashboard/Mainmenu";
import Add_Announcements from "../pages/AdminDashboard/Announcements/Add_Announcements";
import View_Announcements from "../pages/AdminDashboard/Announcements/View_Announcements";
import Add_Events from "../pages/AdminDashboard/Events/Add_Events";
import View_Events from "../pages/AdminDashboard/Events/View_Events";
import Add_Exams from "../pages/AdminDashboard/Examination-Management/Add_Exams";
import View_Exam_Details from "../pages/AdminDashboard/Examination-Management/View_Exam_Details";
import Add_Subject_Details from "../pages/AdminDashboard/Student-Management/Add_Subject_Details";
import Attendance from "../pages/AdminDashboard/Student-Management/Attendane";
import Exam_Records from "../pages/AdminDashboard/Student-Management/Exam_Records";
import Subject_and_Grades_1to9 from "../pages/AdminDashboard/Student-Management/Subject_and_Grades_1to9";
import Subject_and_Grades_10to12 from "../pages/AdminDashboard/Student-Management/Subject_and_Grades_10to12";
import View_Attendance from "../pages/AdminDashboard/Student-Management/View_Attendance";
import Add_New_Teacher from "../pages/AdminDashboard/Teacher-Management/Add_New_Teacher";
import Search_Teacher from "../pages/AdminDashboard/Teacher-Management/Search_Teacher";
import Subject_to_Handle from "../pages/AdminDashboard/Teacher-Management/Subject_to_Handle";
import Timetable from "../pages/AdminDashboard/Teacher-Management/Timetable";
import View_Timetable from "../pages/AdminDashboard/Teacher-Management/View_Timetable";

export default function AdminDashboard() {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage the active component

  // Framer Motion Variants for different animations
  const animations = {
    fadeInZoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 }
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 }
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -90 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: 90 }
    }
  };

  // Mapping components to specific animations
  const animationMap = {
    Add_Subject_Details: animations.fadeInZoom,
    Attendance: animations.fadeInZoom,
    ViewAttendance: animations.fadeInZoom,
    Subject_and_Grades: animations.fadeInZoom,
    Subject_and_Grades_10to12: animations.fadeInZoom,
    Exam_Records: animations.fadeInZoom,
    Add_New_Teacher: animations.fadeInZoom,
    Search_Teacher: animations.fadeInZoom,
    Subject_to_Handle: animations.fadeInZoom,
    Timetable: animations.fadeInZoom,
    Add_Exams: animations.fadeInZoom,
    View_Exam_Details: animations.fadeInZoom,
    Add_Announcements: animations.fadeInZoom,
    View_Announcements: animations.fadeInZoom,
    Add_Events: animations.fadeInZoom,
    View_Events: animations.fadeInZoom,
    Mainmenu: animations.fadeInZoom // Default animation
  };

  // Function to handle rendering a specific component
  const renderComponent = () => {
    switch (activeComponent) {
      case "AddSubjectDetails":
        return <Add_Subject_Details />;
      case "Attendance":
        return <Attendance />;
      case "ViewAttendance":
        return <View_Attendance />;
      case "Subject_and_Grades":
        return <Subject_and_Grades_1to9 />;
      case "Subject_and_Grades_10to12":
        return <Subject_and_Grades_10to12 />;
      case "Exam_Records":
        return <Exam_Records />;
      case "Add_New_Teacher":
        return <Add_New_Teacher />;
      case "Search_Teacher":
        return <Search_Teacher />;
      case "Subject_to_Handle":
        return <Subject_to_Handle />;
      case "Timetable":
        return <Timetable />;
        case "View_Timetable":
          return <View_Timetable/>;
      case "Add_Exams":
        return <Add_Exams />;
      case "View_Exam_Details":
        return <View_Exam_Details />;
      case "Add_Announcements":
        return <Add_Announcements />;
      case "View_Announcements":
        return <View_Announcements />;
      case "Add_Events":
        return <Add_Events />;
      case "View_Events":
        return <View_Events />;
      default:
        return <Mainmenu />;
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        <SideNavbar setActiveComponent={setActiveComponent} />
        <div className="main-content-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeComponent} // Ensures unique animations per component
              initial={animationMap[activeComponent]?.initial || animations.fadeInZoom.initial}
              animate={animationMap[activeComponent]?.animate || animations.fadeInZoom.animate}
              exit={animationMap[activeComponent]?.exit || animations.fadeInZoom.exit}
              transition={{ duration: 0.2 }} // Smooth transition timing
            >
              {renderComponent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
