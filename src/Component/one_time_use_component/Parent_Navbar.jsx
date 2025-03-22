import React, { useState } from "react";


function Grades() {
  return <div>Content for Grades/Marks</div>;
}

function Attendance() {
  return <div>Content for Attendance</div>;
}

function Timetable() {
  return <div>Content for View Timetable</div>;
}

function Announcements() {
  return <div>Content for Announcements</div>;
}

function Events() {
  return <div>Content for Events</div>;
}

function FeeDetails() {
  return <div>Content for Fee Details</div>;
}

function ExamDetails() {
  return <div>Content for Exam Details</div>;
}

function StudentDetail() {
  return (
    <div className="student-detail">
      <div className="profile-pic"></div>
      <div className="details">
        <p>
          <strong>Register Number:</strong> SCH2025001
        </p>
        <p>
          <strong>Student Name:</strong> Arun Kumar
        </p>
        <p>
          <strong>Standard:</strong> 1st
        </p>
        <p>
          <strong>Street / Village:</strong> 17/65 Tvm Street
        </p>
        <p>
          <strong>District:</strong> Tiruvannamalai
        </p>
        <p>
          <strong>Place / Pincode:</strong> 606601
        </p>
        <p>
          <strong>School Name:</strong> GNMHSS
        </p>
        <p>
          <strong>Father's Name:</strong> Rajesh
        </p>
        <p>
          <strong>Section:</strong> A
        </p>
      </div>
    </div>
  );
}

export default function Parent_Navbar() {
  const [activeContent, setActiveContent] = useState("studentDetail");

  const renderContent = () => {
    switch (activeContent) {
      case "grades":
        return <Grades />;
      case "attendance":
        return <Attendance />;
      case "timetable":
        return <Timetable />;
      case "announcements":
        return <Announcements />;
      case "events":
        return <Events />;
      case "feeDetails":
        return <FeeDetails />;
      case "examDetails":
        return <ExamDetails />;
      case "studentDetail":
      default:
        return <StudentDetail />;
    }
  };

  return (
    <div className="container-1">
      <div className="sidebar">
        <h2>Welcome Rajesh</h2>
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
        <button onClick={() => setActiveContent("feeDetails")}>
          Fee Details
        </button>
        <button onClick={() => setActiveContent("examDetails")}>
          Exam Details
        </button>
      </div>

      <div className="main-content">
        <div className="header">
          <h3>Student Detail</h3>
          <div className="child-count">
            Number of child: <input type="text" value="1" readOnly />
          </div>
        </div>
        {renderContent()}
      </div>
    </div>
  );
}
