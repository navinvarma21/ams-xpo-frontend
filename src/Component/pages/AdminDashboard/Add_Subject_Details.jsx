import React from "react";

export default function Add_Subject_Details() {
  return (
    <div className="Add-Subject-Details-container">
      <h1>Add Subject Details</h1>

      <div>
        <div className="Add-subject-container">
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject Name"
            required
            className="input1"
          />

          <select name="standard" required className="input1">
            <option value="" disabled selected>
              Select Standard
            </option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`${i + 1}th`}>
                {i + 1}th
              </option>
            ))}
          </select>

          <button type="submit" className="Add-subject-container-btn">
            Add
          </button>
          <button type="submit" className="Add-subject-container-btn">
            Save All
          </button>
        </div>
      </div>
    </div>
  );
}
