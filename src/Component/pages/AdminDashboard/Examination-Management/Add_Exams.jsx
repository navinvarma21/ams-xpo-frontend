import React from "react";

export default function Add_Exams() {
  return (
    <>
     
      <div className="add-new-Exam-container">
     
        <table className="add-new-Exam-table">
          <tbody>
            <tr>
              <td>
                <label for="examName" style={{fontSize:"14px"}}>Exam Name</label>
                <select id="examName" className="add-new-Exam-table1">
                  <option value="" disabled selected>
                    Select Exam Name
                  </option>
                  <option value="annual">Annual Exam</option>
                  <option value="internal1">Internal 1</option>
                  <option value="internal2">Internal 2</option>
                  <option value="internal3">Internal 3</option>
                  <option value="halfYearly">Half Yearly</option>
                  <option value="quarterly">Quarterly</option>
                </select>
              </td>
              <td>
                <label for="standard" style={{fontSize:"14px"}}>Standard</label>
                <select id="standard" className="add-new-Exam-table1">
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
                <label for="subject1" style={{fontSize:"14px"}}>Subject 1</label>
                <select id="subject1" className="add-new-Exam-table1">
                  <option value="" disabled selected>
                    Subject 1
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
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="subject1Date">Subject 1 Exam Date</label>
                <input id="subject1Date" type="date" />
              </td>
              <td>
                <label  style={{fontSize:"14px"}}for="subject2">Subject 2</label>
                <input id="subject2" type="text" placeholder="Subject 2" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="subject2Date">Subject 2 Exam Date</label>
                <input id="subject2Date" type="date" />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="subject3">Subject 3</label>
                <input id="subject3" type="text" placeholder="Subject 3" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="subject3Date">Subject 3 Exam Date</label>
                <input id="subject3Date" type="date" />
              </td>
              <td>
                <label  style={{fontSize:"14px"}}for="subject4">Subject 4</label>
                <input id="subject4" type="text" placeholder="Subject 4" />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="subject4Date">Subject 4 Exam Date</label>
                <input id="subject4Date" type="date" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="subject5">Subject 5</label>
                <input id="subject5" type="text" placeholder="Subject 5" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="subject5Date">Subject 5 Exam Date</label>
                <input id="subject5Date" type="date" />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="subject6">Subject 6</label>
                <input id="subject6" type="text" placeholder="Subject 6" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="subject6Date">Subject 6 Exam Date</label>
                <input id="subject6Date" type="date" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="practical1">Practical 1</label>
                <input id="practical1" type="text" placeholder="Practical 1" />
              </td>
            </tr>
            <tr>
              <td>
                <label  style={{fontSize:"14px"}} for="practical1Date">Practical 1 Exam Date</label>
                <input id="practical1Date" type="date" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="practical2">Practical 2</label>
                <input id="practical2" type="text" placeholder="Practical 2" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="practical2Date">Practical 2 Exam Date</label>
                <input id="practical2Date" type="date" />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="practical3">Practical 3</label>
                <input id="practical3" type="text" placeholder="Practical 3" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="practical3Date">Practical 3 Exam Date</label>
                <input id="practical3Date" type="date" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="practical4">Practical 4</label>
                <input id="practical4" type="text" placeholder="Practical 4" />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="practical4Date">Practical 4 Exam Date</label>
                <input id="practical4Date" type="date" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="maximumMarks">Maximum Marks</label>
                <input
                  id="maximumMarks"
                  type="number"
                  placeholder="Maximum Marks"
                />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="passMarks">Pass Marks</label>
                <input id="passMarks" type="number" placeholder="Pass Marks" />
              </td>
            </tr>
            <tr>
              <td>
                <label style={{fontSize:"14px"}} for="startingTime">Starting Time</label>
                <input id="startingTime" type="time" />
              </td>
              <td>
                <label style={{fontSize:"14px"}} for="examDuration">Exam Duration</label>
                <input
                  id="examDuration"
                  type="text"
                  placeholder="Exam Duration (in hours)"
                />
              </td>
              <td colspan="2">
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
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
