import React from "react";

export default function View_Announcements() {
  return (
    <>
      <h1 className="View__Announcements__title">Edit Announcements</h1>{" "}
      <div className="Edit-Announcement-container">
      
        <form className="form-container">
          <label htmlFor="headline">Enter Headline:</label>
          <input type="text" id="headline" placeholder="Enter Headline" />

          <label htmlFor="description">Description:</label>
          <textarea id="description" placeholder="Description"></textarea>

          <label htmlFor="date">Date:</label>
          <input type="date" id="date" />

          <div className="button-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
            <button type="button" className="reset-button">
              Reset
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
