import React from "react";

export default function Subject_to_Handle() {
  return (
    <>
      <h1 className="exam-records-title">Add New Teacher</h1>
      <div className="add-new-teacher-container">
        <div className="add-new-teacher-title-2">
          <label>Unique Id:</label>
          <input
            type="text"
            className="add-new-teacher-input"
            placeholder="Unique Id"
          />
          <label>Teacher Name:</label>
          <input
            type="text"
            className="add-new-teacher-input"
            placeholder="Unique Id"
          />
        </div>
        <table className="add-new-teacher-table">
          <tbody>
            <tr>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Subject 1
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                  <option value="maths_cbse">Mathematics</option>
                  <option value="english_cbse">English</option>
                </select>
              </td>

              <button type="button" className="a-n-t-btn">
                Submit
              </button>

              <button
                type="button"
                className="a-n-t-btn"
                style={{ backgroundColor: "red" }}
              >
                Reset
              </button>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
