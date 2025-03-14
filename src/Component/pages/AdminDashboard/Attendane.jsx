import React from "react";

export default function Attendane() {
  return (
    <div className="Common-Content-container">
      <div className="C-C-C-head">
            <h1>Attendance</h1>

            <input
            type="Date"
            name="Date"
            placeholder="Date"
            required
            className="C-C-C-input-date-Attendance"
            />

            <button type="submit" className="C-C-C-btn-Export-Attendance">
            Export
            </button>
            <select name="standard" required className="C-C-C-input-Attendance ">
            <option value="" disabled selected>
                Select Standard
            </option>
            {[...Array(12)].map((_, i) => (
                <option key={i} value={`${i + 1}th`}>
                {i + 1}th
                </option>
            ))}
            </select>
            <select name="section" required className="C-C-C-input-Attendance ">
            <option value="section" disabled selected>
                Section
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            </select>
      </div>

     
        <div className="C-C-C-container1">
          <input
            type="text"
            name="Search"
            placeholder="Search"
            required
            className="C-C-C-input-Search-Attendance"
          />

          <button type="submit" className="C-C-C-btn-View-Attendance">
            View Attendance
          </button>
          
        </div>
      <div className="C-C-C-container2">

        <p className="C-C-C-container1-p" >Today Date</p>
        <p className="C-C-C-container1-p">Roll No</p>
        <p className="C-C-C-container1-p">Student Name</p>
        <p className="C-C-C-container1-p">Status</p>
        <p className="C-C-C-container1-p">Remarks</p>

          
      
      </div>

    </div>
  );
}
