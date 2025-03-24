import React from "react";

export default function Exam_details() {
  return (
    <>
    <h2 className="exam-details-title">Exam Details</h2>
      <div className="exam-details-container">
        
        <div className="exam-details">
          <div className="header">
            <label>Select Exam:</label>
            <select>
              <option>Internal</option>
            </select>
          </div>

          <table>
            <tbody>
              <tr>
                <td>Exam Name:</td>
                <td>Internal</td>
                <td>Subject 1 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Subject 6:</td>
                <td>Moral Science</td>
                <td>Max mark:</td>
                <td>100</td>
              </tr>

              <tr>
                <td>Subject 1:</td>
                <td>Tamil</td>
                <td>Subject 2 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Practical 1:</td>
                <td>Nill</td>
                <td>Pass mark:</td>
                <td>35</td>
              </tr>

              <tr>
                <td>Subject 2:</td>
                <td>English</td>
                <td>Subject 3 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Practical 2:</td>
                <td>Nill</td>
              </tr>

              <tr>
                <td>Subject 3:</td>
                <td>Maths</td>
                <td>Subject 4 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Practical 3:</td>
                <td>Nill</td>
              </tr>

              <tr>
                <td>Subject 4:</td>
                <td>Maths</td>
                <td>Subject 5 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Practical 4:</td>
                <td>Nill</td>
              </tr>

              <tr>
                <td>Subject 5:</td>
                <td>Social Science</td>
                <td>Exam duration:</td>
                <td>3 Hours</td>
                <td>Subject 6 Exam Date:</td>
                <td>11/02/2025</td>
              </tr>

              <tr>
                <td>Starting time:</td>
                <td>9:30 AM</td>
                <td>Practical 1 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Practical 3 Exam Date:</td>
                <td>11/02/2025</td>
              </tr>

              <tr>
                <td>Standard:</td>
                <td>1st</td>
                <td>Practical 2 Exam Date:</td>
                <td>11/02/2025</td>
                <td>Practical 4 Exam Date:</td>
                <td>11/02/2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
