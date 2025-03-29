import React, { useState } from "react";




export default function Attendance() {
  return (
    <div className="attendance">
      <div className="Attendance-container">
        <div className="attendance__header">
          <h1  className="attendance__head">Attendance</h1>
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
        </div>

        {/* Input Row for Attendance */}
        <div className="attendance__input-row">
          <input type="date" className="attendance__input" />
          <input
            type="text"
            placeholder="Roll No"
            className="attendance__input"
          />
          <input
            type="text"
            placeholder="Student Name"
            className="attendance__input"
          />
          <select name="status" required className="attendance__input-dropdown">
            <option value="" disabled selected>
              Select Status
            </option>
            <option value="Present">Present</option>
            <option value="Absent">Absent</option>
            <option value="Leave">Leave</option>
          </select>
          <input
            type="text"
            placeholder="Add Remarks..."
            className="attendance__input"
          />
        </div>
      </div>
    </div>
  );
}
