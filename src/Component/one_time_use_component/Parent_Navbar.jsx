import React, { useState } from "react";
import { motion } from "framer-motion";
import Grades_and_Marks from "../pages/StudentDashboard/Grades_and_Marks";
import StudentDetail from "../pages/ParentDashboard/StudentDetail";
import Attendance_Student_and_parent from "../pages/StudentDashboard/Attendance_Student_and_parent";
import Timetable_student_and_parent from "../pages/StudentDashboard/Timetable_student_and_parent";
import Announcements from "../pages/StudentDashboard/Announcements";
import Events from "../pages/StudentDashboard/Events";
import Exam_details from "../pages/StudentDashboard/Exam_details";

export default function Parent_Navbar() {
  const [activeContent, setActiveContent] = useState("studentDetail");

  // Animation settings
  const pageVariants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const renderContent = () => {
    switch (activeContent) {
      case "grades":
        return <Grades_and_Marks />;
      case "attendance":
        return <Attendance_Student_and_parent />;
      case "timetable":
        return <Timetable_student_and_parent />;
      case "announcements":
        return <Announcements />;
      case "events":
        return <Events />;

      case "examDetails":
        return <Exam_details />;
      case "studentDetail":
      default:
        return <StudentDetail />;
    }
  };

  return (
    <div className="container-1">
      <div className="sidebar">
        <h2>Welcome Par Name</h2>
        <button onClick={() => setActiveContent("grades")}>Grades/Marks</button>
        <button onClick={() => setActiveContent("attendance")}>
          Attendance
        </button>
        <button onClick={() => setActiveContent("timetable")}>
          View Timetable
        </button>
        <button onClick={() => setActiveContent("announcements")}>
          Announcements
        </button>
        <button onClick={() => setActiveContent("events")}>Events</button>

        <button onClick={() => setActiveContent("examDetails")}>
          Exam Details
        </button>
      </div>

      <div className="main-content">
        <motion.div
          key={activeContent} // Force re-render animation on content change
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {renderContent()}
        </motion.div>
      </div>
    </div>
  );
}
