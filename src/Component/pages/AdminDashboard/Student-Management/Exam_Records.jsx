

import React, { useState } from "react";

export default function ExamRecords() {
 
  return (
    <>
      <div className="exam-records-container">
        <h1 className="exam-records-title">Exam Records</h1>

        <div className="exam-records-filters">
          <input
            type="text"
            name="search"
            placeholder="Search"
            required
            className="exam-records-search"
          />
          <div className="exam-records-header">
           
             <select name="Select Exam" required className="exam-records-select-exam">
              <option value="" disabled selected>
                Select Exam
              </option>
              <option value="half-yearly">Half-Yearly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annual">Annual</option>
                  <option value="internal">internal</option>
            </select>

          
            <select name="standard" required className="exam-records-standard">
              <option value="" disabled selected>
                Select Standard
              </option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={`${i + 1} Standard`}>
                  {i + 1} Std
                </option>
              ))}
            </select>
            <select name="section" required className="exam-records-section">
              <option value="" disabled selected>
                Section
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <button type="submit" className="exam-records-export-btn">
              Export
            </button>
           
          </div>
        </div>

        <div className="exam-records-table-section">
          <table className="exam-records-table">
            <thead>
              <tr>
                <th>
                  <p className="exam-records-column-header">Academic Year</p>
                </th>
                <th>
                  <p className="exam-records-column-header">Student Name</p>
                </th>
                <th>
                  <p className="exam-records-column-header">Standard</p>
                </th>
                <th>
                  <p className="exam-records-column-header">Section</p>
                </th>
                <th>
                  <p className="exam-records-column-header">Exam Type</p>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="exam-records-additional-table">
          <table className="exam-records-table">
            <thead>
              <tr>
                <th>
                  <p className="exam-records-column-detail">Academic Year</p>
                </th>
                <th>
                  <p className="exam-records-column-detail">Student Name</p>
                </th>
                <th>
                  <p className="exam-records-column-detail">Standard</p>
                </th>
                <th>
                  <p className="exam-records-column-detail">Section</p>
                </th>
                <th>
                  <p className="exam-records-column-detail">Exam</p>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
