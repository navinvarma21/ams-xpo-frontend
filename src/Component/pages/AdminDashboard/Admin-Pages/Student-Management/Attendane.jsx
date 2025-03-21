import React, { useState } from "react";

export default function Attendance() {
  return (
    <div className="attendance">
      <h1>Attendance</h1>
      <div className="Attendance-container">
        <div className="attendance__header">
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
              Select Standard
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
            <option value="section" disabled selected>
              Section
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
        </div>

        {/* <div className="attendance__search">
        <input
          type="text"
          name="search"
          placeholder="Search"
          required
          className="attendance__input-search"
        />
      </div> */}

        <div className="attendance__table-header">
          <p className="attendance__table-column">Today Date</p>
          <p className="attendance__table-column">Roll No</p>
          <p className="attendance__table-column">Student Name</p>
          <p className="attendance__table-column">Status</p>
          <p className="attendance__table-column">Remarks</p>
        </div>
      </div>
    </div>
  );
}
