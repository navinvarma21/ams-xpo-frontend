import React from "react";
 // Make sure to link the CSS file properly

export default function View_Exam_Details() {
  return (
    <>
      <div className="View_Exam_header">
        <h1 className="View_Exam__title">View Exam Details</h1>
        <select name="standard" required className="View_Exam__input-dropdown">
          <option value="" disabled selected>
            Standard
          </option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={`${i + 1}th`}>
              {i + 1}th
            </option>
          ))}
        </select>
        <select name="section" required className="View_Exam__input-dropdown">
          <option value="" disabled selected>
            Exam
          </option>
          <option value="A">Internal 1</option>
          <option value="B">Internal 2</option>
          <option value="C">Internal 3</option>
        </select>
      </div>

      <div className="view-Exam-container">
        <div className="exam-header-row">
          <div className="label-input-row">
            <label>Exam Name:</label>
            <p>Internal</p>
          </div>
          <div className="label-input-row">
            <label>Standard:</label>
            <p>1st</p>
          </div>
        </div>

        <table className="exam-details-table">
          <thead>
            <tr>
              <th>Subjects</th>
              <th>Practicals</th>
              <th>Other Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td valign="top">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="label-input-row">
                    <p>Subject {i + 1}: {["Tamil", "English", "Maths", "Maths", "Social ", "Moral"][i]}</p>
                    <p>Exam Date: 11/02/2025</p>
                  </div>
                ))}
              </td>
              <td valign="top">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className="label-input-row">
                    <p>Practical {i + 1}: Nill</p>
                    <p>Exam Date: 11/02/2025</p>
                  </div>
                ))}
              </td>
              <td valign="top">
                <div className="label-input-row">
                  <p>Max Mark: 100</p>
                </div>
                <div className="label-input-row">
                  <p>Pass Mark: 35</p>
                </div>
                <div className="label-input-row">
                  <p>Starting Time: 9:30 AM</p>
                </div>
                <div className="label-input-row">
                  <p>Exam Duration: 3 Hours</p>
                </div>
                <div className="button-container">
                  <button className="edit-button">Edit</button>
                  <button className="delete-button">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}