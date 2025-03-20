import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion

import Header from "../../one_time_use_component/Header";

import View_Attendance from "../AdminDashboard/Admin-Pages/Student-Management/View_Attendance";

import Exam_Records from "../AdminDashboard/Admin-Pages/Student-Management/Exam_Records";

import View_Timetable from "../AdminDashboard/Admin-Pages/Teacher-Management/View_Timetable";

import View_Exam_Details from "../AdminDashboard/Admin-Pages/Examination-Management/View_Exam_Details";

import View_Announcements from "../AdminDashboard/Admin-Pages/Announcements/View_Announcements";

import View_Events from "../AdminDashboard/Admin-Pages/Events/View_Events";
import Student_Navbar from "../../one_time_use_component/Student_Navbar";

export default function StudentDashboard() {
  const [activeComponent, setActiveComponent] = useState(null); // State to manage the active component

  // Framer Motion Variants for different animations
  const animations = {
    fadeInZoom: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
    slideUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 50 },
    },
    rotateIn: {
      initial: { opacity: 0, rotate: -90 },
      animate: { opacity: 1, rotate: 0 },
      exit: { opacity: 0, rotate: 90 },
    },
  };

  // Mapping components to specific animations
  const animationMap = {
    Add_Subject_Details: animations.fadeInZoom,
    Exam_Records:animations.fadeInZoom
  };

  // Function to handle rendering a specific component
  const renderComponent = () => {
    switch (activeComponent) {
      case "Exam_Records":
        return <Exam_Records />;

      case "ViewAttendance":
        return <View_Attendance />;

      case "View_Timetable":
        return <View_Timetable />;

      case "View_Announcements":
        return <View_Announcements />;

      case "View_Events":
        return <View_Events />;

      case "View_Exam_Details":
        return <View_Exam_Details />;

      default:
        return;
    }
  };

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
        {/* <Teacher_Side_Navbar  setActiveComponent={setActiveComponent}/> */}

        <Student_Navbar setActiveComponent={setActiveComponent}/>
        
        <div className="main-content-container">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeComponent} // Ensures unique animations per component
              initial={
                animationMap[activeComponent]?.initial ||
                animations.fadeInZoom.initial
              }
              animate={
                animationMap[activeComponent]?.animate ||
                animations.fadeInZoom.animate
              }
              exit={
                animationMap[activeComponent]?.exit ||
                animations.fadeInZoom.exit
              }
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
