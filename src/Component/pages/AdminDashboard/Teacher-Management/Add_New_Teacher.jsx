import React from "react";

export default function Add_New_Teacher() {
  return (
    <>
      <h1 className="exam-records-title">Add New Teacher</h1>
      <div className="add-new-teacher-container">
        <div className="add-new-teacher-title-2">
          <label>Admission No:</label>
          <input
            type="text"
            className="add-new-teacher-input"
            placeholder="Admission No"
          />
          <label>Unique Id:</label>
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
                <input placeholder="Teacher Name" />
              </td>
              <td>
                <input placeholder="Department" />
              </td>
              <td>
                <input placeholder="Joining Date" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="DOB" />
              </td>
              <td>
                <input placeholder="Address" />
              </td>
              <td>
                <input placeholder="AADHAR Number" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Gender" />
              </td>
              <td>
                <input placeholder="Qualification" />
              </td>
              <td>
                <input placeholder="PAN Number" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Contact Number" />
              </td>
              <td>
                <input placeholder="Experience" />
              </td>
              <td>
                <input placeholder="Blood Group" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Email" />
              </td>
              <td>
                <input placeholder="Subjects Taught" />
              </td>
              <td>
                <input placeholder="Marital Status" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Caste" />
              </td>
              <td>
                <input placeholder="Community" />
              </td>
              <td>
                <input placeholder="Mother Tongue" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Subject Name" />
              </td>
              <td>
                <input placeholder="Nationality" />
              </td>
              <td>
                <input placeholder="District" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Current Position" />
              </td>
              <td>
                <input placeholder="Salary Details" />
              </td>
              <td>
                <input placeholder="Employee Type" />
              </td>
            </tr>
            <tr>
              <td>
                <input placeholder="Notes" />
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
