import React from 'react';

export default function Events() {
  return (
    <>
      <h2 className="view-events-title-s">View Events</h2>
      <div className="view-events-container-s">
        <div className="search-container-s">
          <label htmlFor="searchEvent" className="search-label-s">
            Search Event:
          </label>
          <input
            type="text"
            id="searchEvent"
            name="searchEvent"
            placeholder="Enter Event Name"
            className="search-input-s"
          />
        </div>
        <table className="events-table-s">
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
              <td>Web Development Workshop</td>
              <td>11/02/2025</td>
              <td>Web Development Workshop</td>
              <td>
                <button className="open-button-s">Open</button>
              </td>
             
            </tr>

            {/* Row 2 */}
            <tr>
              <td>2</td>
              <td>Web Development Workshop</td>
              <td>11/02/2025</td>
              <td>Web Development Workshop</td>
              <td>
                <button className="open-button-s">Open</button>
              </td>
                       
            </tr>

            {/* Row 3 */}
            <tr>
              <td>3</td>
              <td>Web Development Workshop</td>
              <td>11/02/2025</td>
              <td>Web Development Workshop</td>
              <td>
                <button className="open-button-s">Open</button>
              </td>
              
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
