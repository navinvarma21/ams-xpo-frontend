import React, { useState } from "react";

export default function ViewAttendance() {
  const [attendanceData, setAttendanceData] = useState([
    {
      id: 1,
      date: "11-02-2025",
      rollNo: "6A-01",
      studentName: "Arun Kumar",
      status: "Present",
      remarks: "Good performance",
    },
    {
      id: 2,
      date: "11-02-2025",
      rollNo: "6A-02",
      studentName: "Bala",
      status: "Absent",
      remarks: "Fever",
    },
  ]);

  return (
    <div className="attendance">
      
      <div className="Attendance-container">
        <div className="attendance__header">
        <h1 className="attendance__head">View Attendance</h1>
          <input
            type="date"
            name="date"
            placeholder="Date"
            required
            className="attendance__input-date"
          />
          <button type="submit" className="attendance__btn-export">
            Export
          </button>
          <select
            name="standard"
            required
            className="attendance__input-dropdown"
          >
            <option value="" disabled selected>
              Standard
            </option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`${i + 1}th`}>
                {i + 1}th
              </option>
            ))}
          </select>
          <select
            name="section"
            required
            className="attendance__input-dropdown"
          >
            <option value="" disabled selected>
              Section
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        <div className="attendance__search">
          
          <input
            type="search"
            placeholder="search"
            className="attendance__input-search"
          />
        </div>

        <div className="attendance__table-header">
          <p className="attendance__table-column">Today Date</p>
          <p className="attendance__table-column">Roll No</p>
          <p className="attendance__table-column">Student Name</p>
          <p className="attendance__table-column">Status</p>
          <p className="attendance__table-column">Remarks</p>
          <p className="attendance__table-column">Actions</p>
        </div>

        {attendanceData.map((data) => (
          <div className="attendance__input-row" key={data.id}>
            <input
              type="text"
              className="attendance__input attendance__input-small"
              placeholder="Today Date"
              value={data.date}
              readOnly
            />
            <input
              type="text"
              placeholder="Roll No"
              className="attendance__input attendance__input-small"
              value={data.rollNo}
              readOnly
            />
            <input
              type="text"
              placeholder="Student Name"
              className="attendance__input attendance__input-medium"
              value={data.studentName}
              readOnly
            />
            <select
              name="status"
              required
              className="attendance__input-dropdown attendance__input-status"
              defaultValue={data.status}
            >
              <option value="" disabled>
                Select Status
              </option>
              <option value="Present">Present</option>
              <option value="Absent">Absent</option>
              <option value="Leave">Leave</option>
            </select>
            <input
              type="text"
              placeholder="Add Remarks..."
              className="attendance__input attendance__input-remarks"
              value={data.remarks}
            />
            <div className="attendance__action-buttons">
              <button className="attendance__edit-button" style={{ backgroundColor: "#4F46E5" }}>Edit</button>
              <button className="attendance__delete-button" style={{ backgroundColor: "#f44336" }}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
