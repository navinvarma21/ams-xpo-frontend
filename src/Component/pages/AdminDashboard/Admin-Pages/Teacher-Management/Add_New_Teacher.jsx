import React from "react";
function AddNewTeacher() {
  return (
    <>
       <h1 className="add-teacher__title">Add New Teacher</h1>
      <div className="add-teacher__container">
     
        <div className="add-teacher__id-section">
          <label className="add-teacher__label">Admission No:</label>
          <input
            type="text"
            className="add-teacher__input"
            placeholder="Admission No"
          />
          <label className="add-teacher__label">Unique Id:</label>
          <input
            type="text"
            className="add-teacher__input"
            placeholder="Unique Id"
          />
        </div>
        <table className="add-teacher__table">
          <tbody>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Teacher Name" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Department" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Joining Date" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="DOB" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Address" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="AADHAR Number" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Gender" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Qualification" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="PAN Number" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Contact Number" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Experience" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Blood Group" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Email" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Subjects Taught" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Marital Status" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Caste" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Community" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Mother Tongue" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Subject Name" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Nationality" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="District" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Current Position" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Salary Details" />
              </td>
              <td>
                <input className="add-teacher__input" placeholder="Employee Type" />
              </td>
            </tr>
            <tr>
              <td>
                <input className="add-teacher__input" placeholder="Notes" />
              </td>

              <button type="button" className="add-teacher__button add-teacher__button--submit">
                Submit
              </button>

              <button
                type="button"
                className="add-teacher__button add-teacher__button--reset"
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

export default AddNewTeacher;
