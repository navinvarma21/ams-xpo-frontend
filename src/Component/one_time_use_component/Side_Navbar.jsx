import React, { useState } from "react";
import Footer from "./Footer";

export default function SideNavbar({ setActiveComponent }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownItems = {
    0: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "View Attendance", component: "ViewAttendance" },
      { label: "Subject & Grades 1 - 9", component: "Subject_and_Grades" }, // Add cases or handle in AdminDashboard
      { label: "Subject & Grades 10 - 12", component: "Subject_and_Grades_10to12" }, // Add cases or handle in AdminDashboard
     
    ],
    1: [
      { label: "Add New Teacher", component: "Add_New_Teacher" },
      { label: "Subject to Handle", component: "Subject_to_Handle" },
      { label: "Timetable", component: "Timetable" }, // Add cases or handle in AdminDashboard
      
    ],
    2: [
      { label: "Add Exams", component: "Add_Exams" },
      { label: "View Exam Details", component: "View_Exam_Details" },
     
    ],
    3: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "Subject & Grades", component: "Subject & Grades" }, // Add cases or handle in AdminDashboard
      { label: "Delete Student", component: "Delete Student" },
    ],
    4: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "Subject & Grades", component: "Subject & Grades" }, // Add cases or handle in AdminDashboard
      { label: "Delete Student", component: "Delete Student" },
    ],
    5: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "Subject & Grades", component: "Subject & Grades" }, // Add cases or handle in AdminDashboard
      { label: "Delete Student", component: "Delete Student" },
    ],
    // Add similar dropdown items for other buttons...
  };

  const toggleDropdown = (index) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <div className="side-navbar-container">
      <ul className="side-navbar-heading-container">
        {[
          "Student Management",
          "Teacher Management",
          "Examination Management",
          "Announcement Management",
          "Events",
        ].map((item, index) => (
          <li key={index} className="side-navbar-item">
            <button
              className="side-Navbar-container-heading"
              onClick={() => toggleDropdown(index)}
            >
              {item}
            </button>

            {activeDropdown === index && (
              <ul className="dropdown-menu">
                {dropdownItems[index]?.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    onClick={
                      () => setActiveComponent(subItem.component) // Set active component
                    }
                    className="dropdown-menu-li"
                  >
                    {subItem.label}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
      
    </div>
  );
}
