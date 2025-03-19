import React from "react";


function AddSubjectDetails() {
  return (
    <div className="add-subject">
      <h1 className="add-subject__title">Add Subject Details</h1>

      <div className="add-subject__form-section">
        <input
          type="text"
          name="subject"
          placeholder="Enter Subject Name"
          required
          className="add-subject__input"
        />

        <select name="standard" required className="add-subject__input">
          <option value="" disabled selected>
            Select Standard
          </option>
          {[...Array(12)].map((_, i) => (
            <option key={i} value={`${i + 1}th`}>
              {i + 1}th
            </option>
          ))}
        </select>

        <button type="submit" className="add-subject__button">
          Add
        </button>
        <button type="submit" className="add-subject__button">
          Save All
        </button>
      </div>
    </div>
  );
}

export default AddSubjectDetails;
