import React from "react";
import { useState } from "react";

export default function Subject_and_Grades_1to9() {
  const [viewMode, setViewMode] = useState(false);

  return (
    <div className="subject-grades">
      <div className="subject-grades__content-container">
        <h1 className="subject-grades__title">Subject & Grades 1-9</h1>

        <div className="subject-grades__search-area">
          <div className="subject-grades__header">
            <input
              type="text"
              name="Search"
              placeholder="Search"
              required
              className="subject-grades__search-input"
            />
            <input
              type="Date"
              name="Date"
              placeholder="Date"
              required
              className="subject-grades__date-input"
            />

            <button type="submit" className="subject-grades__export-button">
              Export
            </button>
            <select
              name="standard"
              required
              className="subject-grades__input-select"
            >
              <option value="" disabled selected>
                Select Standard
              </option>
              <option value="1 Standard">1 Std</option>
              <option value="2 Standard">2 Std</option>
              <option value="3 Standard">3 Std</option>
              <option value="4 Standard">4 Std</option>
              <option value="5 Standard">5 Std</option>
              <option value="6 Standard">6 Std</option>
              <option value="7 Standard">7 Std</option>
              <option value="8 Standard">8 Std</option>
              <option value="9 Standard">9 Std</option>
              <option value="10 Standard">10 Std</option>
              <option value="11 Standard">11 Std</option>
              <option value="12 Standard">12 Std</option>
            </select>
            <select
              name="section"
              required
              className="subject-grades__input-select"
            >
              <option value="section" disabled selected>
                Section
              </option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
            </select>
            <button
              type="button"
              className="subject-grades__view-button"
              onClick={() => setViewMode(true)}
            >
              View Exam Record
            </button>
          </div>
        </div>

        <div className="subject-grades__table-header">
          <table>
            <thead>
              <tr>
                <th>
                  <p className="subject-grades__table-header-text">
                    Academic Year
                  </p>
                </th>
                <th>
                  <p className="subject-grades__table-header-text">
                    Student Name
                  </p>
                </th>
                <th>
                  <p className="subject-grades__table-header-text">Standard</p>
                </th>
                <th>
                  <p className="subject-grades__table-header-text">Section</p>
                </th>
                <th>
                  <p className="subject-grades__table-header-text">Exam type</p>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="subject-grades__exam-type-selector">
          <table>
            <thead>
              <tr>
                <th>
                  <p className="subject-grades__selector-text">Academic Year</p>
                </th>
                <th>
                  <p className="subject-grades__selector-text">Student Name</p>
                </th>
                <th>
                  <p className="subject-grades__selector-text">Standard</p>
                </th>
                <th>
                  <p className="subject-grades__selector-text">Section</p>
                </th>
                <th>
                  <select
                    name="section"
                    required
                    className="subject-grades__input-select"
                  >
                    <option value="section" disabled selected>
                      Section
                    </option>
                    <option value="half-yearly">Half-Yearly</option>
                    <option value="quarterly">Quarterly</option>
                    <option value="annual">Annual</option>
                    <option value="internal">internal</option>
                  </select>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="subject-grades__marks-table-container">
          <table className="subject-grades__marks-table">
            <thead>
              <tr>
                <th>S:No</th>
                <th>Subject Name</th>
                <th>Obtained Marks / 100</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>
                  <input
                    type="text"
                    placeholder="Subject Name"
                    className="subject-grades__subject-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="subject-grades__marks-input"
                  />
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>
                  <input
                    type="text"
                    placeholder="Subject Name"
                    className="subject-grades__subject-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="subject-grades__marks-input"
                  />
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>
                  <input
                    type="text"
                    placeholder="Subject Name"
                    className="subject-grades__subject-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="subject-grades__marks-input"
                  />
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>
                  <input
                    type="text"
                    placeholder="Subject Name"
                    className="subject-grades__subject-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="subject-grades__marks-input"
                  />
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>
                  <input
                    type="text"
                    placeholder="Subject Name"
                    className="subject-grades__subject-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="subject-grades__marks-input"
                  />
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>
                  <input
                    type="text"
                    placeholder="Subject Name"
                    className="subject-grades__subject-input"
                  />
                </td>
                <td>
                  <input
                    type="number"
                    placeholder="Marks"
                    className="subject-grades__marks-input"
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <button
        type="button" // Changed to "button" for handling click
        className="subject-grades__Submit-btn"
        onClick={() => setViewMode(true)} // Toggle to View_Attendance
      >
        Submit
      </button>
    </div>
  );
}
