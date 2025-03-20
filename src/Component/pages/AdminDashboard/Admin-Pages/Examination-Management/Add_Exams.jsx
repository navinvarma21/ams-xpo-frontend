import React from "react";

export default function Add_Exams() {
  return (
    <>
    <h2>Add Exams</h2>
    <div className="add-new-Exam-container">

      <div className="form-scrollable-container">
        <div className="form-grid">
          {/* Exam Name and Standard */}
          <div className="form-group">
            <label htmlFor="examName">Exam Name</label>
            <select id="examName">
              <option value="" disabled selected>
                Select Exam Name
              </option>
              <option value="annual">Annual Exam</option>
              {/* Add more options as needed */}
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="standard">Select Standard</label>
            <select id="standard">
              <option value="" disabled selected>
                Select Standard
              </option>
              <option value="standard1">Standard 1</option>
              {/* Add more options as needed */}
            </select>
          </div>

          {/* Subject Inputs */}
          <div className="form-group">
            <label htmlFor="subject1">Subject 1</label>
            <input type="text" id="subject1" />
          </div>

          <div className="form-group">
            <label htmlFor="subject1Date">Subject 1 Exam Date</label>
            <input type="date" id="subject1Date" />
          </div>

          <div className="form-group">
            <label htmlFor="subject2">Subject 2</label>
            <input type="text" id="subject2" />
          </div>

          <div className="form-group">
            <label htmlFor="subject2Date">Subject 2 Exam Date</label>
            <input type="date" id="subject2Date" />
          </div>

          <div className="form-group">
            <label htmlFor="subject3">Subject 3</label>
            <input type="text" id="subject3" />
          </div>

          <div className="form-group">
            <label htmlFor="subject3Date">Subject 3 Exam Date</label>
            <input type="date" id="subject3Date" />
          </div>

          <div className="form-group">
            <label htmlFor="subject4">Subject 4</label>
            <input type="text" id="subject4" />
          </div>

          <div className="form-group">
            <label htmlFor="subject4Date">Subject 4 Exam Date</label>
            <input type="date" id="subject4Date" />
          </div>

          <div className="form-group">
            <label htmlFor="subject5">Subject 5</label>
            <input type="text" id="subject5" />
          </div>

          <div className="form-group">
            <label htmlFor="subject5Date">Subject 5 Exam Date</label>
            <input type="date" id="subject5Date" />
          </div>

          <div className="form-group">
            <label htmlFor="subject6">Subject 6</label>
            <input type="text" id="subject6" />
          </div>

          <div className="form-group">
            <label htmlFor="subject6Date">Subject 6 Exam Date</label>
            <input type="date" id="subject6Date" />
          </div>

          {/* Practical Inputs */}
          <div className="form-group">
            <label htmlFor="practical1">Practical 1</label>
            <input type="text" id="practical1" />
          </div>

          <div className="form-group">
            <label htmlFor="practical1Date">Practical 1 Exam Date</label>
            <input type="date" id="practical1Date" />
          </div>

          <div className="form-group">
            <label htmlFor="practical2">Practical 2</label>
            <input type="text" id="practical2" />
          </div>

          <div className="form-group">
            <label htmlFor="practical2Date">Practical 2 Exam Date</label>
            <input type="date" id="practical2Date" />
          </div>

          <div className="form-group">
            <label htmlFor="practical3">Practical 3</label>
            <input type="text" id="practical3" />
          </div>

          <div className="form-group">
            <label htmlFor="practical3Date">Practical 3 Exam Date</label>
            <input type="date" id="practical3Date" />
          </div>

          <div className="form-group">
            <label htmlFor="practical4">Practical 4</label>
            <input type="text" id="practical4" />
          </div>

          <div className="form-group">
            <label htmlFor="practical4Date">Practical 4 Exam Date</label>
            <input type="date" id="practical4Date" />
          </div>

          {/* Max Marks, Pass Marks, Starting Time, Exam Duration */}
          <div className="form-group">
            <label htmlFor="maxMarks">Max mark</label>
            <input type="text" id="maxMarks" />
          </div>

          <div className="form-group">
            <label htmlFor="passMarks">Pass mark</label>
            <input type="text" id="passMarks" />
          </div>

          <div className="form-group">
            <label htmlFor="startingTime">Starting time</label>
            <input type="time" id="startingTime" />
          </div>

          <div className="form-group">
            <label htmlFor="examDuration">Exam duration</label>
            <input type="text" id="examDuration" />
          </div>
        </div>
      </div>

      <div className="button-container">
        <button type="button" className="submit-button">
          Submit
        </button>
        <button type="button" className="reset-button">
          Reset
        </button>
      </div>
    </div>
    </>
  );
}
