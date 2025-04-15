import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import Framer Motion
import IMAGES from "../../Images/images";

export default function SideNavbar({ setActiveComponent }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownItems = {
    0: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "View Attendance", component: "ViewAttendance" },
      { label: "Subject & Grades 1 - 9", component: "Subject_and_Grades" },
      { label: "Subject & Grades 10 - 12", component: "Subject_and_Grades_10to12" },
      { label: "Exam Records", component: "Exam_Records" },
    ],
    1: [
      { label: "Add New Teacher", component: "Add_New_Teacher" },
      { label: "Search Teacher", component: "Search_Teacher" },
      { label: "Add Subjects to Handle", component: "Subject_to_Handle" },
      { label: "Timetable", component: "Timetable" },
      { label: "Assigned Timetable", component: "View_Timetable" },
    ],
    2: [
      { label: "Add Exams", component: "Add_Exams" },
      { label: "View Exam Details", component: "View_Exam_Details" },
    ],
    3: [
      { label: "Add Announcements", component: "Add_Announcements" },
      { label: "Edit Announcements", component: "View_Announcements" },
    ],
    4: [
      { label: "Add Events", component: "Add_Events" },
      { label: "View Events", component: "View_Events" },
    ],
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="side-navbar-container">
      <ul className="side-navbar-heading-container">
        {[
          {
            icon: <img  style={{height:"35px", width:"35px",marginRight:"4px"}}  src={IMAGES.image1} alt="Student Icon" className="navbar-icon" />,
            label: <p style={{fontSize:"12px",fontWeight:"bold"}}>Student Management</p>,
          },
          { icon: <img  style={{height:"35px", width:"35px",marginRight:"4px"}}  src={IMAGES.image2}   alt="Student Icon" className="navbar-icon" />,label:  <p style={{fontSize:"12px",fontWeight:"bold"}}>Teacher Management</p>},
          { icon: <img  style={{height:"35px", width:"35px",marginRight:"4px"}}  src={IMAGES.image3} alt="Student Icon" className="navbar-icon" />,label:  <p style={{fontSize:"12px",fontWeight:"bold"}}>Exam Management</p>},
          { icon: <img   style={{height:"35px", width:"35px",marginRight:"4px"}}  src={IMAGES.image4} alt="Student Icon" className="navbar-icon" />,label:  <p style={{fontSize:"12px",fontWeight:"bold"}}>Announcements </p>},
          { icon: <img  style={{height:"35px", width:"35px",marginRight:"4px"}}  src={IMAGES.image5}  alt="Student Icon" className="navbar-icon" />, label:  <p style={{fontSize:"12px",fontWeight:"bold"}}>Events</p> },
        ].map((item, index) => (
          <li key={index} className="side-navbar-item">
            <button
              className="side-Navbar-container-heading"
              onClick={() => toggleDropdown(index)}
            >
              {/* Render the image and text for the first item or just text for others */}
              {item.icon && <span className="icon-container">{item.icon}</span>}
              {item.label}
            </button>

            <AnimatePresence>
              {activeDropdown === index && (
                <motion.ul
                  className="dropdown-menu"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{
                    opacity: { duration: 0 },
                    height: { duration: 0.2, ease: "easeInOut" },
                  }}
                >
                  {dropdownItems[index]?.map((subItem, subIndex) => (
                    <motion.li
                      key={subIndex}
                      onClick={() => setActiveComponent(subItem.component)}
                      className="dropdown-menu-li"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{
                        opacity: { duration: 0.2 },
                        x: { duration: 0.2 },
                      }}
                    >
                      {subItem.label}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}