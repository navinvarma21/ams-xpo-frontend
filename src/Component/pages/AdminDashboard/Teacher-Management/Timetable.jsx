import React from "react";

const Timetable = () => {
  return (
    <>
      {" "}
      <h1 className="exam-records-title">Add Timetable</h1>
      <div className="add-new-teacher-container1">
        <table className="add-new-teacher-table">
          <tbody>
            <tr>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Standard
                  </option>
                  <option value="standard1">Standard 1</option>
                  <option value="standard2">Standard 2</option>
                  <option value="standard3">Standard 3</option>
                  <option value="standard4">Standard 4</option>
                  <option value="standard5">Standard 5</option>
                  <option value="standard6">Standard 6</option>
                  <option value="standard7">Standard 7</option>
                  <option value="standard8">Standard 8</option>
                  <option value="standard9">Standard 9</option>
                  <option value="standard10">Standard 10</option>
                  <option value="standard11">Standard 11</option>
                  <option value="standard12">Standard 12</option>
                </select>
              </td>
              <td>
                <select
                  name="sections"
                  id="section-select"
                  class="border border-gray-300 rounded p-2 w-full"
                >
                  <option value="" disabled selected>
                    Select Section
                  </option>
                  <option value="sectionA">Section A</option>
                  <option value="sectionB">Section B</option>
                  <option value="sectionC">Section C</option>
                  <option value="sectionD">Section D</option>
                  <option value="sectionE">Section E</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <select>
                  <option value="" disabled selected>
                    Select Day
                  </option>
                  <option value="monday">Monday</option>
                  <option value="tuesday">Tuesday</option>
                  <option value="wednesday">Wednesday</option>
                  <option value="thursday">Thursday</option>
                  <option value="friday">Friday</option>
                  <option value="saturday">Saturday</option>
                </select>
              </td>
              <td>
                <select
                  name="periods"
                  id="period-select"
                  class="border border-gray-300 rounded p-2 w-full"
                >
                  <option value="" disabled selected>
                    Select Period
                  </option>
                  <option value="period1">Period 1</option>
                  <option value="period2">Period 2</option>
                  <option value="period3">Period 3</option>
                  <option value="period4">Period 4</option>
                  <option value="period5">Period 5</option>
                  <option value="period6">Period 6</option>
                  <option value="period7">Period 7</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>
                <label>Start Time</label>
                <input type="time"></input>
              </td>
              <td>
              <label>End Time</label>
                <input type="time"></input>
              </td>
            </tr>
            <tr>
              <td>
                <select name="subject" id="subject-select">
                  <option value="" disabled selected>
                    Select Subject
                  </option>
                  <option value="tamil">Tamil</option>
                  <option value="english">English</option>
                  <option value="maths">Mathematics</option>
                  <option value="science">Science</option>
                  <option value="social">Social Studies</option>
                  <option value="physics">Physics</option>
                  <option value="chemistry">Chemistry</option>
                  <option value="biology">Biology</option>
                </select>
              </td>
              <td>
                <input
                  type="text"
                  id="teacher-name"
                  name="teacher-name"
                  placeholder="Enter Teacher Name"
                  class="border border-gray-300 rounded p-2"
                />
              </td>
            </tr>
            <tr>
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
};

export default Timetable;
