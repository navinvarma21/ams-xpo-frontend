import React from "react";
import { useState } from "react";

export default function ViewAttendance() {
  const [viewMode, setViewMode] = useState(false); // State to toggle between views

  return (
    <div className="view-attendance">
      <h1>View Attendance</h1>
      <div className="Attendance-container">
      <div className="view-attendance__header">
        
        <input
          type="date"
          name="date"
          placeholder="Date"
          required
          className="view-attendance__input-date"
        />
        <button type="submit" className="view-attendance__btn-export">
          Export
        </button>
        <select name="standard" required className="view-attendance__input-dropdown">
          <option value="" disabled selected>
            Select Standard
          </option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={`${i + 1}th`}>
              {i + 1}th
            </option>
          ))}
        </select>
        <select name="section" required className="view-attendance__input-dropdown">
          <option value="section" disabled selected>
            Section
          </option>
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>

      {/* <div className="view-attendance__search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          required
          className="view-attendance__input-search"
        />
      </div> */}

      <div className="view-attendance__table-header">
        <p className="view-attendance__table-column">Today Date</p>
        <p className="view-attendance__table-column">Roll No</p>
        <p className="view-attendance__table-column">Student Name</p>
        <p className="view-attendance__table-column">Status</p>
        <p className="view-attendance__table-column">Remarks</p>
      </div>
      </div>
    </div>
  );
}
