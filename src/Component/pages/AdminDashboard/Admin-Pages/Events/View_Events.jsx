import React from "react";

export default function ViewEvents() {
  return (
    <>
      <h2 className="view-events-title">View Events</h2>
      <div className="view-events-container">
        <div className="search-container">
          <label htmlFor="searchEvent" className="search-label">
            Search Event:
          </label>
          <input
            type="text"
            id="searchEvent"
            name="searchEvent"
            placeholder="Enter Event Name"
            className="search-input"
          />
        </div>
        <table className="events-table">
          <thead>
            <tr>
              <th>S.No</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Description</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Row 1 */}
            <tr>
              <td>1</td>
              <td>Web development Workshop</td>
              <td>11/02/2025</td>
              <td>Web development Workshop</td>
              <td>
                <button className="open-button">Open</button>
              </td>
              <td>
                <button className="open-button-edit">Edit</button>
              </td>
              <td>
                <button className="open-button-delete">Delete</button>
              </td>
            </tr>

            {/* Row 2 */}
            <tr>
              <td>2</td>
              <td>Web development Workshop</td>
              <td>11/02/2025</td>
              <td>Web development Workshop</td>
              <td>
                <button className="open-button">Open</button>
              </td>
              <td>
                <button className="open-button-edit">Edit</button>
              </td>
              <td>
                <button className="open-button-delete">Delete</button>
              </td>
              
            </tr>

            {/* Row 3 */}
            <tr>
              <td>3</td>
              <td>Web development Workshop</td>
              <td>11/02/2025</td>
              <td>Web development Workshop</td>
              <td>
                <button className="open-button">Open</button>
              </td>
              <td>
                <button className="open-button-edit">Edit</button>
              </td>
              <td>
                <button className="open-button-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
