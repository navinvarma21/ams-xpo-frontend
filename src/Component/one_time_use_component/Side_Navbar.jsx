import React, { useState } from "react";

export default function SideNavbar({ setActiveComponent }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const dropdownItems = {
    0: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "Subject & Grades", component: "Subject & Grades" }, // Add cases or handle in AdminDashboard
      { label: "Delete Student", component: "Delete Student" },
    ],
    1: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "Subject & Grades", component: "Subject & Grades" }, // Add cases or handle in AdminDashboard
      { label: "Delete Student", component: "Delete Student" },
    ],
    2: [
      { label: "Add Subject Details", component: "AddSubjectDetails" },
      { label: "Attendance", component: "Attendance" },
      { label: "Subject & Grades", component: "Subject & Grades" }, // Add cases or handle in AdminDashboard
      { label: "Delete Student", component: "Delete Student" },
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
        { label: "Delete Student", component: "Delete Student"},
       
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
          "Fee Management",
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
