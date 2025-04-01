import React, { useState } from "react";


export default function ExamRecords() {
  return (
    <>
      <div className="exam-records">
        <h1 className="exam-records__title">Exam Records</h1>

        <div className="exam-records__filters">
          <input
            type="text"
            name="search"
            placeholder="Search"
            required
            className="exam-records__search"
          />
          <div className="exam-records__header">
            <select name="Select Exam" required className="exam-records__select exam-records__select--exam">
              <option value="" disabled selected>
                Select Exam
              </option>
              <option value="half-yearly">Half-Yearly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annual">Annual</option>
              <option value="internal">Internal</option>
            </select>

            <select name="standard" required className="exam-records__select exam-records__select--standard">
              <option value="" disabled selected>
                Select Standard
              </option>
              {[...Array(12)].map((_, i) => (
                <option key={i} value={`${i + 1} Standard`}>
                  {i + 1} Std
                </option>
              ))}
            </select>

            <select name="section" required className="exam-records__select exam-records__select--section">
              <option value="" disabled selected>
                Section
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>

          </div>
        </div>

        <div className="exam-records__table-section">
          <table className="exam-records__table">
            <thead>
              <tr>
                <th>
                  <p className="exam-records__column-header">Academic Year</p>
                </th>
                <th>
                  <p className="exam-records__column-header">Student Name</p>
                </th>
                <th>
                  <p className="exam-records__column-header">Standard</p>
                </th>
                <th>
                  <p className="exam-records__column-header">Section</p>
                </th>
                <th>
                  <p className="exam-records__column-header">Exam Type</p>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="exam-records__additional-table">
          <table className="exam-records__table">
            <thead>
              <tr>
                <th>
                  <p className="exam-records__column-detail">Academic Year</p>
                </th>
                <th>
                  <p className="exam-records__column-detail">Student Name</p>
                </th>
                <th>
                  <p className="exam-records__column-detail">Standard</p>
                </th>
                <th>
                  <p className="exam-records__column-detail">Section</p>
                </th>
                <th>
                  <p className="exam-records__column-detail">Exam</p>
                </th>
              </tr>
            </thead>
          </table>
          
        </div>
        <div className="exam-table-container">
      <table className="exam-table">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Subject Name</th>
            <th>Obtained Marks</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1.</td>
            <td>Tamil</td>
            <td>95 / 100</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>2.</td>
            <td>English</td>
            <td>93 / 100</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>3.</td>
            <td>Maths</td>
            <td>90 / 100</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>4.</td>
            <td>Science</td>
            <td>97 / 100</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>5.</td>
            <td>Social Science</td>
            <td>90 / 100</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td>6.</td>
            <td>Moral Science</td>
            <td>96 / 100</td>
            <td>Pass</td>
          </tr>
          <tr>
            <td colSpan="2">Total</td>
            <td>= 561 / 600</td>
            <td>Pass</td>
          </tr>
        </tbody>
      </table>

    </div>
  
      </div>
    </>
  );
}
