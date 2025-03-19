import React from 'react'

export default function Add_Events() {
  return (
    <div> <form className="event-form">
    <h2>Add Events</h2>

    {/* Basic Details */}
    <div className="section">
      <h3>Basic Details:</h3>
      <input
        type="text"
        name="eventName"
        placeholder="Enter Event Name"
      
      />
      <input
        type="text"
        name="eventDescription"
        placeholder="Enter Description"
       
      />
      <input
        type="text"
        name="eventCategory"
        placeholder="Select Event Category"
       
      />
      <input
        type="text"
        name="eventTags"
        placeholder="Select Event Tags"
     
      />
    </div>

    {/* Organizer Details */}
    <div className="section">
      <h3>Organizer Details:</h3>
      <input
        type="text"
        name="organizerName"
        placeholder="Enter Organizer Name"

      />
      <input
        type="text"
        name="organizerContact"
        placeholder="Enter Organizer Contact"
        
      />
    </div>

    {/* Date & Time */}
    <div className="section">
      <h3>Date & Time:</h3>
      <input
        type="date"
        name="eventDate"
   
      />
      <input
        type="time"
        name="startTime"
        placeholder="Start Time"
 
      />
      <input
        type="time"
        name="endTime"
        placeholder="End Time"
    
      />
    </div>

    {/* Location */}
    <div className="section">
      <h3>Location:</h3>
      <input
        type="text"
        name="eventType"
        placeholder="Select Event Type"
      
      />
      <input
        type="text"
        name="venueName"
        placeholder="Enter Venue Name"
 
      />
      <input
        type="text"
        name="eventAddress"
        placeholder="Enter Event Address"
      
      />
      <input
        type="url"
        name="googleMapsLink"
        placeholder="Google Maps Link"
       
      />
      <input
        type="url"
        name="meetingLink"
        placeholder="Meeting Link"
      
      />
    </div>

    {/* Submit Button */}
    <button type="submit">Submit</button>
  </form></div>
  )
}
