import React from "react";

export default function Add_Exams() {
  return (
    <>
      <h1 className="Add-exam-title">Add Exams</h1>
      <div className="add-new-Exam-container">
       
        <table className="add-new-Exam-table">
  <tbody>
    <tr>
      <td>
        <select className="add-new-Exam-table1 ">
          <option value="" disabled selected >Select Exam Name</option>
          <option value="annual">Annual Exam</option>
          <option value="internal1">Internal 1</option>
          <option value="internal2">Internal 2</option>
          <option value="internal3">Internal 3</option>
          <option value="halfYearly">Half Yearly</option>
          <option value="quarterly">Quarterly</option>
        </select>
      </td>
      <td>
      <select className="add-new-Exam-table1 ">
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
      <select name="subject" className="add-new-Exam-table1" id="subject-select">
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
        <input type="date" placeholder="Subject 1 Exam Date" />
      </td>
      <td>
        <input type="text" placeholder="Subject 2" />
      </td>
      <td>
        <input type="date" placeholder="Subject 2 Exam Date" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="text" placeholder="Subject 3" />
      </td>
      <td>
        <input type="date" placeholder="Subject 3 Exam Date" />
      </td>
      <td>
        <input type="text" placeholder="Subject 4" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="date" placeholder="Subject 4 Exam Date" />
      </td>
      <td>
        <input type="text" placeholder="Subject 5" />
      </td>
      <td>
        <input type="date" placeholder="Subject 5 Exam Date" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="text" placeholder="Subject 6" />
      </td>
      <td>
        <input type="date" placeholder="Subject 6 Exam Date" />
      </td>
      <td>
        <input type="text" placeholder="Practical 1" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="date" placeholder="Practical 1 Exam Date" />
      </td>
      <td>
        <input type="text" placeholder="Practical 2" />
      </td>
      <td>
        <input type="date" placeholder="Practical 2 Exam Date" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="text" placeholder="Practical 3" />
      </td>
      <td>
        <input type="date" placeholder="Practical 3 Exam Date" />
      </td>
      <td>
        <input type="text" placeholder="Practical 4" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="date" placeholder="Practical 4 Exam Date" />
      </td>
      <td>
        <input type="number" placeholder="Maximum Marks" />
      </td>
      <td>
        <input type="number" placeholder="Pass Marks" />
      </td>
    </tr>
    <tr>
      <td>
        <input type="time" placeholder="Starting Time" />
      </td>
      <td>
        <input type="text" placeholder="Exam Duration (in hours)" />
      </td>
      <td colspan="2">
        <button type="button" className="a-n-t-btn">Submit</button>
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
