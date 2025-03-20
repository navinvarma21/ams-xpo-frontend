import React, { useState } from "react"; // Include useState for state management
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import Grades_and_Marks from "../pages/StudentDashboard/Grades_and_Marks";

// Example components for each button action
const GradesMarks = () => <div>Grades/Marks Content1111</div>;
const Attendance = () => <div>Attendance Content</div>;
const Timetable = () => <div>View Timetable Content</div>;
const Announcements = () => <div>Announcements Content</div>;
const Events = () => <div>Events Content</div>;
const ExamDetails = () => <div>Exam Details Content</div>;

export default function Student_Navbar() {
  const [activeComponent, setActiveComponent] = useState(null); // Track active component

  const buttons = [
    { label: "Grades/Marks", component: "GradesMarks" },
    { label: "Attendance", component: "Attendance" },
    { label: "View Timetable", component: "Timetable" },
    { label: "Announcements", component: "Announcements" },
    { label: "Events", component: "Events" },
    { label: "Exam Details", component: "ExamDetails" },
  ];

  const renderComponent = () => {
    switch (activeComponent) {
      case "GradesMarks":
        return <Grades_and_Marks/>;
      case "Attendance":
        return <Attendance />;
      case "Timetable":
        return <Timetable />;
      case "Announcements":
        return <Announcements />;
      case "Events":
        return <Events />;
      case "ExamDetails":
        return <ExamDetails />;
      default:
        return <div>Welcome! Select an option above.</div>;
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Welcome Student Name</h1>
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
