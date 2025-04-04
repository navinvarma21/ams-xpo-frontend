import React from "react";

export default function Add_Events() {
  return (
    <>
     <h2 className="Add__Event__title-add-event">Add Events</h2>
      <div className="Add__container">
       
       
          <div className="form-section-add-event">
            <div className="column1-add-event">
              <table className="table-add-event">
                <tr>
                  <th colSpan="2">Basic Details:</th>
                </tr>

                <tr>
                  <td>
                    <label>Event Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="eventName"
                      name="eventName"
                      placeholder="Enter Event Name"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Event Description:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="eventDescription"
                      name="eventDescription"
                      placeholder="Enter Description"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Event Category:</label>
                  </td>
                  <td>
                    <select id="eventCategory" name="eventCategory">
                      <option>Select Event Category</option>
                      {/* Add options here */}
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Event Tags:</label>
                  </td>
                  <td>
                    <select id="eventTags" name="eventTags">
                      <option>Select Event Tags</option>
                      {/* Add options here */}
                    </select>
                  </td>
                </tr>

                <tr>
                  <th colSpan="2">Date & Time:</th>
                </tr>

                <tr>
                  <td>
                    <label>Event Date:</label>
                  </td>
                  <td>
                    <input type="date" id="eventDate" name="eventDate" />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Start Time:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="startTime"
                      name="startTime"
                      placeholder="Enter Time"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>End Time:</label>
                  </td>
                  <td>
                    <select id="endTime" name="endTime">
                      <option>Select Event Category</option>
                      {/* Add options here */}
                    </select>
                  </td>
                </tr>
              </table>
            </div>

            <div className="column2-add-event">
              <table className="table-add-event">
                <tr>
                  <th colSpan="2">Location:</th>
                </tr>

                <tr>
                  <td>
                    <label>Event Type:</label>
                  </td>
                  <td>
                    <select id="eventType" name="eventType">
                      <option>Select Event Type</option>
                      {/* Add options here */}
                    </select>
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Venue Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="venueName"
                      name="venueName"
                      placeholder="Enter Venue Name"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Event Address:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="eventAddress"
                      name="eventAddress"
                      placeholder="Enter Event Address"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Google Maps Link:</label>
                  </td>
                  <td>
                    <input
                      type="url"
                      id="googleMapsLink"
                      name="googleMapsLink"
                      placeholder="Google Maps Link"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Meeting Link:</label>
                  </td>
                  <td>
                    <input
                      type="url"
                      id="meetingLink"
                      name="meetingLink"
                      placeholder="Meeting Link"
                    />
                  </td>
                </tr>

                <tr>
                  <th colSpan="2">Organizer Details:</th>
                </tr>

                <tr>
                  <td>
                    <label>Organizer Name:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="organizerName"
                      name="organizerName"
                      placeholder="Enter Organizer Name"
                    />
                  </td>
                </tr>

                <tr>
                  <td>
                    <label>Organizer Contact:</label>
                  </td>
                  <td>
                    <input
                      type="text"
                      id="organizerContact"
                      name="organizerContact"
                      placeholder="Enter Organizer Contact"
                    />
                  </td>
                </tr>

                <tr>
                  <td colSpan="2">
                    <button type="submit" className="add_event_button">Submit</button>
                  </td>
                </tr>
              </table>
            </div>
          </div>
      
      </div>
    </>
  );
}
