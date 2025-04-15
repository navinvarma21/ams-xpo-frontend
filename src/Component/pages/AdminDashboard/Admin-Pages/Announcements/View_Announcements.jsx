import React from "react";

export default function View_Announcements() {
  return (
    <>
      <h1 className="View__Announcements__title">Edit Announcements</h1>
      <div className="Edit-Announcement-container">
        <form className="form-container">
          <div className="form-row">
            <label htmlFor="headline">Enter Headline:</label>
            <input
              type="text"
              id="headline"
              placeholder="Enter Headline"
            />
          </div>

          <div className="form-row">
            <label htmlFor="description">Description:</label>
            <textarea
              id="description"
              placeholder="Description"
            ></textarea>
          </div>

          <div className="form-row">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" />
          </div>

          <div className="button-container-va">
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
