import React, { useState } from "react";

export default function Attendance() {
  const [viewMode, setViewMode] = useState(false); // State to toggle between views

  return (
    <div className="content-container">
      
        <>
          <div className="header-section">
            <h1>Attendance</h1>
            <input
              type="date"
              name="date"
              placeholder="Date"
              required
              className="input-date"
            />
            <button type="submit" className="btn-export">
              Export
            </button>
            <select name="standard" required className="input-dropdown">
              <option value="" disabled selected>
                Select Standard
              </option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={`${i + 1}th`}>
                  {i + 1}th
                </option>
              ))}
            </select>
            <select name="section" required className="input-dropdown">
              <option value="section" disabled selected>
                Section
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
          </div>

          <div className="search-section">
            <input
              type="text"
              name="search"
              placeholder="Search"
              required
              className="input-search"
            />
           
          </div>

          <div className="table-header">
            <p className="table-column">Today Date</p>
            <p className="table-column">Roll No</p>
            <p className="table-column">Student Name</p>
            <p className="table-column">Status</p>
            <p className="table-column">Remarks</p>
          </div>
        </>
      
       
     
    </div>
  );
}

