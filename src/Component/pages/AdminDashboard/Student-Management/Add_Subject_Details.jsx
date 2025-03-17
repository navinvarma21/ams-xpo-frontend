
import React from "react";

export default function AddSubjectDetails() {
  return (
    <div className="content-container">
      <h1>Add Subject Details</h1>

      <div>
        <div className="form-section">
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject Name"
            required
            className="form-input"
          />

          <select name="standard" required className="form-input">
            <option value="" disabled selected>
              Select Standard
            </option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`${i + 1}th`}>
                {i + 1}th
              </option>
            ))}
          </select>

          <button type="submit" className="form-button">
            Add
          </button>
          <button type="submit" className="form-button">
            Save All
          </button>
        </div>
      </div>
    </div>
  );
}
