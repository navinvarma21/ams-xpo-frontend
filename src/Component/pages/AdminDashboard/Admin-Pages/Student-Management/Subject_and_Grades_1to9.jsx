import React from "react";
import { useState } from "react";

export default function Subject_and_Grades_1to9() {
  const [viewMode, setViewMode] = useState(false);

  return (
    <div className="subject-grades">
      <div className="subject-grades__content-container">
        <div className="subject-grades__header-1">
          <h1 className="subject-grades__title">Subject & Grades 1-9</h1>

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
        </div>

        <input
          type="text"
          name="Search"
          placeholder="Search"
          required
          className="subject-grades__search-input-1"
        />

        <div className="subject-grades__table-header-container">
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
                    <p className="subject-grades__table-header-text">
                      Standard
                    </p>
                  </th>
                  <th>
                    <p className="subject-grades__table-header-text">Section</p>
                  </th>
                  <th>
                    <p className="subject-grades__table-header-text">
                      Exam type
                    </p>
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
                    <p className="subject-grades__selector-text-data">
                      Academic Year
                    </p>
                  </th>
                  <th>
                    <p className="subject-grades__selector-text-data">
                      Student Name
                    </p>
                  </th>
                  <th>
                    <p className="subject-grades__selector-text-data">
                      Standard
                    </p>
                  </th>
                  <th>
                    <p className="subject-grades__selector-text-data">
                      Section
                    </p>
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
            <table className="subject-grades__marks-table">
              <thead>
                <tr>
                  <td>
                    <input
                      type="text"
                      placeholder="Enter Total Marks"
                      className="subject-grades__subject-input"
                    />
                  </td>

                  <td>
                    <select className="subject-grades__status-select">
                      <option value="" disabled selected>
                        Select Status
                      </option>
                      <option value="pass">Pass</option>
                      <option value="fail">Fail</option>
                    </select>
                  </td>
                </tr>
              </thead>
              <tbody></tbody>
            </table>

            <button
              type="button"
              className="subject-grades__Submit-btn-1to9"
              onClick={() => setViewMode(true)}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
