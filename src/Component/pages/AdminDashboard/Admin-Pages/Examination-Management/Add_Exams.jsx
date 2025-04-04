import React, { useState } from "react";

export default function Add_Exams() {
  return (
    <div className="container-add-exam-1">
      <h1 className="Add_exam_title">Add Exams</h1>
      <div className="container-add-exam">
        <table>
          <tbody>
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="examName">Exam Name:</label>
                  <div className="input-wrapper">
                    <select>
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="selectStandard">Select Standard:</label>
                  <div className="input-wrapper">
                    <select>
                      <option>Select</option>
                    </select>
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="subject1">Subject 1:</label>
                  <input type="text" id="subject1" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="subject1Date">Subject 1 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="subject1Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="subject2">Subject 2:</label>
                  <input type="text" id="subject2" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="subject2Date">Subject 2 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="subject2Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="subject3">Subject 3:</label>
                  <input type="text" id="subject3" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="subject3Date">Subject 3 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="subject3Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="subject4">Subject 4:</label>
                  <input type="text" id="subject4" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="subject4Date">Subject 4 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="subject4Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="subject5">Subject 5:</label>
                  <input type="text" id="subject5" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="subject5Date">Subject 5 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="subject5Date" />
              
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="subject6">Subject 6:</label>
                  <input type="text" id="subject6" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="subject6Date">Subject 6 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="subject6Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="practical1">Practical 1:</label>
                  <input type="text" id="practical1" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="practical1Date">Practical 1 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="practical1Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="practical2">Practical 2:</label>
                  <input type="text" id="practical2" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="practical2Date">Practical 2 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="practical2Date" />
                    
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="practical3">Practical 3:</label>
                  <input type="text" id="practical3" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="practical3Date">Practical 3 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="practical3Date" />
                   
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="practical4">Practical 4:</label>
                  <input type="text" id="practical4" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="practical4Date">Practical 4 Exam Date:</label>
                  <div className="input-wrapper">
                    <input type="date" id="practical4Date" />
                   
                  </div>
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="maxMark">Max mark:</label>
                  <input type="text" id="maxMark" />
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="passMark">Pass mark:</label>
                  <input type="text" id="passMark" />
                </div>
              </td>
            </tr>
            
            <tr>
              <td>
                <div className="form-group">
                  <label htmlFor="startTime">Starting time:</label>
                  <div className="input-wrapper">
                    <input type="time" id="startTime" />
                    
                  </div>
                </div>
              </td>
              <td>
                <div className="form-group">
                  <label htmlFor="examDuration">Exam duration:</label>
                  <input type="text" id="examDuration" />
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <div className="buttons-add-exam">
          <button className="submit">Submit</button>
          <button className="reset">Reset</button>
        </div>

        
      </div>
    </div>
  );
}