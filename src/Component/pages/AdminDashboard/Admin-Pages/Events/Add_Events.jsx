
import React, { useState } from 'react'

export default function Add_Events() {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
  }

  const renderFormSection = () => {
    switch (step) {
      case 1:
        return (
          <div className="section">
            <h3>Basic Details:</h3>
            <label htmlFor="eventName">Event Name:</label>
            <input
              type="text"
              id="eventName"
              name="eventName"
              placeholder="Enter Event Name"
            />

            <label htmlFor="eventDescription">Event Description:</label>
            <input
              type="text"
              id="eventDescription"
              name="eventDescription"
              placeholder="Enter Description"
            />

            <label htmlFor="eventCategory">Event Category:</label>
            <select id="eventCategory" name="eventCategory">
              <option>Select Event Category</option>
              {/* Add options here */}
            </select>

            <label htmlFor="eventTags">Event Tags:</label>
            <select id="eventTags" name="eventTags">
              <option>Select Event Tags</option>
              {/* Add options here */}
            </select>
          </div>
        )
      case 2:
        return (
          <div className="section">
            <h3>Organizer Details:</h3>
            <label htmlFor="organizerName">Organizer Name:</label>
            <input
              type="text"
              id="organizerName"
              name="organizerName"
              placeholder="Enter Organizer Name"
            />

            <label htmlFor="organizerContact">Organizer Contact:</label>
            <input
              type="text"
              id="organizerContact"
              name="organizerContact"
              placeholder="Enter Organizer Contact"
            />
          </div>
        )
      case 3:
        return (
          <div className="section">
            <h3>Date & Time:</h3>
            <label htmlFor="eventDate">Event Date:</label>
            <input type="date" id="eventDate" name="eventDate" />

            <label htmlFor="startTime">Start Time:</label>
            <input
              type="time"
              id="startTime"
              name="startTime"
              placeholder="Start Time"
            />

            <label htmlFor="endTime">End Time:</label>
            <input
              type="time"
              id="endTime"
              name="endTime"
              placeholder="End Time"
            />
          </div>
        )
      case 4:
        return (
          <div className="section">
            <h3>Location:</h3>
            <label htmlFor="eventType">Event Type:</label>
            <input
              type="text"
              id="eventType"
              name="eventType"
              placeholder="Select Event Type"
            />

            <label htmlFor="venueName">Venue Name:</label>
            <input
              type="text"
              id="venueName"
              name="venueName"
              placeholder="Enter Venue Name"
            />

            <label htmlFor="eventAddress">Event Address:</label>
            <input
              type="text"
              id="eventAddress"
              name="eventAddress"
              placeholder="Enter Event Address"
            />

            <label htmlFor="googleMapsLink">Google Maps Link:</label>
            <input
              type="url"
              id="googleMapsLink"
              name="googleMapsLink"
              placeholder="Google Maps Link"
            />

            <label htmlFor="meetingLink">Meeting Link:</label>
            <input
              type="url"
              id="meetingLink"
              name="meetingLink"
              placeholder="Meeting Link"
            />
          </div>
        )
      default:
        return null
    }
  }

  return (
    <>
    
    <div>
    <h2 className="Add__Event__title">Add Events</h2>
      <form className="event-form">
     
        {renderFormSection()}

        <div className="buttons">
          {step > 1 && (
            <button type="button" onClick={prevStep}>
              Previous
            </button>
          )}
          {step < 4 && (
            <button type="button" onClick={nextStep}>
              Next
            </button>
          )}
          {step === 4 && <button type="submit">Submit</button>}
        </div>
      </form>
    </div>
    </>
  )
}
