import React from "react";

export default function Add_Announcements() {
  return (
    <>
      <h1 className="Add__Announcements__title">Add Announcements</h1>
      <div className="Add_Announcements">
      
        {/* Input Form */}
        <div className="form-container">
          <input
            type="text"
            placeholder="Enter Headline"
            className="input-field"
          />
          <textarea
            placeholder="Description"
            className="input-field"
          ></textarea>
          <input type="date" className="input-field" />
          <button className="send-button">Send</button>
        </div>

        {/* Cards */}
        {/* <div className="cards-container">
        <div className="card">
          <h3>Holiday Announcement</h3>
          <p>School will remain closed on Monday. Due to local Elections.</p>
          <span>11/02/2025</span>
          <div className="card-actions">
            <button className="edit-button">✏️</button>
            <button className="delete-button">🗑️</button>
          </div>
        </div>

        <div className="card">
          <h3>Holiday Announcement</h3>
          <p>School will remain closed on Monday. Due to local Elections.</p>
          <span>11/02/2025</span>
          <div className="card-actions">
            <button className="edit-button">✏️</button>
            <button className="delete-button">🗑️</button>
          </div>
        </div>

       

      </div> */}
        <div className="cards-container-a_and_t">
          <div className="card">
            <h3>Holiday Announcement</h3>
            <p>School will remain closed on Monday due to local elections.</p>
            <span>11/02/2025</span>
            <div className="card-actions">
              <button className="edit-button">✏️</button>
              <button className="delete-button">🗑️</button>
            </div>
          </div>

          <div className="card">
            <h3>Holiday Announcement</h3>
            <p>School will remain closed on Monday due to local elections.</p>
            <span>11/02/2025</span>
            <div className="card-actions">
              <button className="edit-button">✏️</button>
              <button className="delete-button">🗑️</button>
            </div>
          </div>

          <div className="card">
            <h3>Holiday Announcement</h3>
            <p>School will remain closed on Monday due to local elections.</p>
            <span>11/02/2025</span>
            <div className="card-actions">
              <button className="edit-button">✏️</button>
              <button className="delete-button">🗑️</button>
            </div>
          </div>

          {/* Add more cards here as needed */}
        </div>
      </div>
    </>
  );
}
