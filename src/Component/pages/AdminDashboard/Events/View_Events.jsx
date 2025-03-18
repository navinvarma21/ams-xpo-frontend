import React from 'react'

export default function View_Events() {
  return (
    <div>
      <div className="App">
        <h1>Event Table</h1>
        <input type="text" placeholder="Search Event:" className="search-bar" />
  
        <table className="event-table">
          <thead>
            <tr>
              <th>Event Name</th>
              <th>Event Description</th>
              <th>Organizer Name</th>
              <th>Event Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Manually defining rows */}
            <tr>
              <td>Event 1</td>
              <td>Description of Event 1</td>
              <td>Organizer 1</td>
              <td>2025-03-18</td>
              <td>
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            <tr>
              <td>Event 2</td>
              <td>Description of Event 2</td>
              <td>Organizer 2</td>
              <td>2025-03-19</td>
              <td>
                <button className="view-btn">View</button>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            {/* Add more rows as needed */}
          </tbody>
        </table>
      </div></div>
  )
}
