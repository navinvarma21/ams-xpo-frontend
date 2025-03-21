import React from "react";

export default function View_Exam_Details() {
  return (
    <>
      <h1 className="View_Exam__title">View Exam Details</h1>
      <div className="view-Exam-container">
      
        <div className="exam-details-grid">
          {/* Column 1 */}
          <div>
            <label htmlFor="examName">Exam Name:</label>
            <p id="examName">Internal</p>

            <label htmlFor="subject1">Subject 1:</label>
            <p id="subject1">Tamil</p>

            <label htmlFor="subject2">Subject 2:</label>
            <p id="subject2">English</p>

            <label htmlFor="subject3">Subject 3:</label>
            <p id="subject3">Maths</p>

            <label htmlFor="subject4">Subject 4:</label>
            <p id="subject4">Maths</p>

            <label htmlFor="subject5">Subject 5:</label>
            <p id="subject5">Social science</p>

            <label htmlFor="subject6">Subject 6:</label>
            <p id="subject6">Moral science</p>

            <label htmlFor="practical1">Practical 1:</label>
            <p id="practical1">Nill</p>

            <label htmlFor="practical2">Practical 2:</label>
            <p id="practical2">Nill</p>
          </div>

          {/* Column 2 */}
          <div>
            <label htmlFor="standard">Standard:</label>
            <p id="standard">1st</p>

            <label htmlFor="subject1Date">Subject 1 Exam Date:</label>
            <p id="subject1Date">11/02/2025</p>

            <label htmlFor="subject2Date">Subject 2 Exam Date:</label>
            <p id="subject2Date">11/02/2025</p>

            <label htmlFor="subject3Date">Subject 3 Exam Date:</label>
            <p id="subject3Date">11/02/2025</p>

            <label htmlFor="subject4Date">Subject 4 Exam Date:</label>
            <p id="subject4Date">11/02/2025</p>

            <label htmlFor="subject5Date">Subject 5 Exam Date:</label>
            <p id="subject5Date">11/02/2025</p>

            <label htmlFor="subject6Date">Subject 6 Exam Date:</label>
            <p id="subject6Date">11/02/2025</p>

            <label htmlFor="practical1Date">Practical 1 Exam Date:</label>
            <p id="practical1Date">11/02/2025</p>

            <label htmlFor="practical2Date">Practical 2 Exam Date:</label>
            <p id="practical2Date">11/02/2025</p>
          </div>

          {/* Column 3 */}
          <div>
            <label htmlFor="practical3">Practical 3:</label>
            <p id="practical3">Nill</p>

            <label htmlFor="practical3Date">Practical 3 Exam Date:</label>
            <p id="practical3Date">11/02/2025</p>

            <label htmlFor="practical4">Practical 4:</label>
            <p id="practical4">Nill</p>

            <label htmlFor="practical4Date">Practical 4 Exam Date:</label>
            <p id="practical4Date">11/02/2025</p>

            <label htmlFor="maxMark">Max mark:</label>
            <p id="maxMark">100</p>

            <label htmlFor="passMark">Pass mark:</label>
            <p id="passMark">35</p>

            <label htmlFor="startingTime">Starting time:</label>
            <p id="startingTime">9:30 AM</p>

            <label htmlFor="examDuration">Exam duration:</label>
            <p id="examDuration">3 Hours</p>
            <div className="button-container">
          <button className="edit-button">Edit</button>
          <button className="delete-button">Delete</button>
        </div>
          </div>
        </div>
        
      </div>
    </>
  );
}
