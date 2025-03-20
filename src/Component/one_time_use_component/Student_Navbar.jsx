import React, { useState } from "react"; // Include useState for state management
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Grades_and_Marks from "../pages/StudentDashboard/Grades_and_Marks";
import Attendance_Student_and_parent from "../pages/StudentDashboard/Attendance_Student_and_parent";
import Timetable_student_and_parent from "../pages/StudentDashboard/Timetable_student_and_parent";
import Announcements from "../pages/StudentDashboard/Announcements";
import Events from "../pages/StudentDashboard/Events";
import Exam_details from "../pages/StudentDashboard/Exam_details";


// // Example components for each button action
// const GradesMarks = () => <div>Grades/Marks Content1111</div>;
// const Attendance = () => <div>Attendance Content</div>;
// const Timetable = () => <div>View Timetable Content</div>;
// const Announcements = () => <div>Announcements Content</div>;
// const Events = () => <div>Events Content</div>;
// const ExamDetails = () => <div>Exam Details Content</div>;

export default function Student_Navbar() {
  const [activeComponent, setActiveComponent] = useState(null); // Track active component

  const buttons = [
    { label: "Grades/Marks", component: "GradesMarks" },
    { label: "Attendance", component: "Attendance" },
    { label: "View Timetable", component: "Timetable" },
    { label: "Announcements", component: "Announcements" },
    { label: "Events", component: "Events" },
    { label: "Exam Details", component: "Exam_details" },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "GradesMarks":
        return <Grades_and_Marks/>;
      case "Attendance":
        return <Attendance_Student_and_parent/>;
      case "Timetable":
        return <Timetable_student_and_parent/>;
      case "Announcements":
        return <Announcements/>;
      case "Events":
        return <Events/>;
      case "Exam_details":
        return <Exam_details/>;
      default:
        return <div>Welcome! Select an option above.</div>;
    }
  };

  return (
    <div className="container">
      <header>
        <h4>Welcome Student Name</h4>
      </header>

      <nav className="navigation">
        {buttons.map((button, index) => (
          <button
            key={index}
            className={`navigation-btn-${index + 1}`}
            onClick={() => setActiveComponent(button.component)}
          >
            {button.label}
          </button>
        ))}
      </nav>

      <section className="grades-section">
        <AnimatePresence>
          <motion.div
            key={activeComponent}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{
                duration: 0.1, 
              }}
          >
            {renderComponent()}
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
}
