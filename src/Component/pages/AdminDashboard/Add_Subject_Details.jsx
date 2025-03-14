import React from "react";

export default function Add_Subject_Details() {
  return (
    <div className="Common-Content-container">
      <h1>Add Subject Details</h1>

      <div>
        <div className="Common-Content-container-container1">
          <input
            type="text"
            name="subject"
            placeholder="Enter Subject Name"
            required
            className="Common-Content-container-container1-input"
          />

          <select name="standard" required className="Common-Content-container-container1-input">
            <option value="" disabled selected>
              Select Standard
            </option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`${i + 1}th`}>
                {i + 1}th
              </option>
            ))}
          </select>

          <button type="submit" className="Common-Content-container-container1-btn">
            Add
          </button>
          <button type="submit" className="Common-Content-container-container1-btn">
            Save All
          </button>
        </div>
      </div>
    </div>
  );
}
