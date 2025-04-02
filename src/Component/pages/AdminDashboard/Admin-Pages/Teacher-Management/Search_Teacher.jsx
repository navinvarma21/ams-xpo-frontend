import React from "react";
import { useState } from "react";
export default function SearchTeacher() {
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,

      uqid: "EMP202501",
      Name: "Priya",
      experience: "8 years",
      subject: "English",
      qualification: "Msc",
    },
    {
      id: 2,

      uqid: "EMP202501",
      Name: "Bala",
      experience: "3 years",
      subject: "Maths",

      qualification: "Bsc",
    },
  ]);

  return (
    <div className="attendance">
      <h1 className="search-teacher__title">Search Teachers</h1>
      <div className="Attendance-container">
        <div className="attendance__search">
          <input
            type="search"
            placeholder="search"
            className="attendance__input-search"
          />
        </div>

        <div className="attendance__table-header">
          <p className="attendance__table-column">NAME</p>
          <p className="attendance__table-column">UNIQUE ID</p>
          <p className="attendance__table-column">SUBJECT</p>
          <p className="attendance__table-column">QUALIFICATION</p>
          <p className="attendance__table-column">EXPERIENCE</p>
          <p className="attendance__table-column">ACTIONS</p>
        </div>

        {attendanceData.map((data) => (
          <div className="attendance__input-row-1" key={data.id}>
            <input
              type="text"
              className="attendance__input attendance__input-small"
              placeholder="Today Date"
              value={data.Name}
              readOnly
            />
            <input
              type="text"
              placeholder="Roll No"
              className="attendance__input attendance__input-small"
              value={data.uqid}
              readOnly
            />
            <input
              type="text"
              placeholder="Student Name"
              className="attendance__input attendance__input-medium"
              value={data.subject}
              readOnly
            />
            <input
              name="status"
              required
              className="attendance__input-dropdown attendance__input-status"
              defaultValue={data.qualification}
            />
            <input
              type="text"
              placeholder="Add Remarks..."
              className="attendance__input attendance__input-remarks"
              value={data.experience}
            />
            <div className="attendance__action-buttons">
              <button
                className="attendance__edit-button"
                style={{ backgroundColor: "#4F46E5" }}
              >
                Edit
              </button>
              <button
                className="attendance__delete-button"
                style={{ backgroundColor: "#f44336" }}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
