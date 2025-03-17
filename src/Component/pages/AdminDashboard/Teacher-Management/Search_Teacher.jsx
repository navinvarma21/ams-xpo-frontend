import React from 'react'

export default function Search_Teacher() {
  return (
    <div className="Common-Content-container">
          <h1>Search Teacher </h1>
  
          
          <div className="C-C-C-container1-S_and_G">
            <input
              type="text"
              name="Search"
              placeholder="Search"
              required
              className="C-C-C-input-Search-Attendance"
            />
            <div className="C-C-C-head">
           
  
            <button type="submit" className="C-C-C-btn-Export-Attendance">
              Export
            </button>
           
            
          </div>
  
          </div>
  
         
  
          <div className="C-C-C-container2">
            <table>
              <th>
                <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Teacher Name</p>
                </td>
                <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Unique id</p>
                </td>
                <td>
                  <p className="C-C-C-container1-p-VA">Subject</p>
                </td>
                <td>
                  <p className="C-C-C-container1-p-VA">Qualification</p>
                </td>
                <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Experience</p>
                </td>
                <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Action</p>
                </td>
               
              </th>
            </table>
          </div>
          <div className="C-C-C-container3">
            <table>
              <th>
              <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Teacher Name</p>
                </td>
                <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Unique id</p>
                </td>
                <td>
                  <p className="C-C-C-container1-p-VA">Subject</p>
                </td>
                <td>
                  <p className="C-C-C-container1-p-VA">Qualification</p>
                </td>
                <td>
                  {" "}
                  <p className="C-C-C-container1-p-VA">Experience</p>
                </td>
                <td>
                  {" "}
                  <button type="button" className="s-t-btn">
                view
              </button>
              <button type="button" className="s-t-btn">
                Edit
              </button>

              <button
                type="button"
                className="s-t-btn"
                style={{ backgroundColor: "red" }}
              >
                Delete
              </button>
                </td>
              </th>
            </table>
          </div>

        </div>
  )
}



