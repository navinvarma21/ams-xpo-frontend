import React from "react";
import { useState } from "react";

export default function Subject_and_Grades_1to9() {
  const [viewMode, setViewMode] = useState(false); // State to toggle between views

  return (
    <>
      {" "}
      <div className="Common-Content-container">
        <h1>Subject & Grades 1-9 </h1>

        
        <div className="C-C-C-container1-S_and_G">
          <input
            type="text"
            name="Search"
            placeholder="Search"
            required
            className="C-C-C-input-Search-Attendance"
          />
          <div className="C-C-C-head">
          <input
            type="Date"
            name="Date"
            placeholder="Date"
            required
            className="C-C-C-input-date-Attendance"
          />

          <button type="submit" className="C-C-C-btn-Export-Attendance">
            Export
          </button>
          <select name="standard" required className="C-C-C-input-Attendance ">
            <option value="" disabled selected>
              Select Standard
            </option>
            {[...Array(12)].map((_, i) => (
              <option key={i} value={`${i + 1} Standard`}>
                {i + 1} Std
              </option>
            ))}
          </select>
          <select name="section" required className="C-C-C-input-Attendance ">
            <option value="section" disabled selected>
              Section
            </option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
          </select>
          <button
          type="button" 
          className="C-C-C-btn-View-Attendance"
          onClick={() => setViewMode(true)} 
        >
          View Exam Record
        </button>
        </div>

        </div>

       

        <div className="C-C-C-container2">
          <table>
            <th>
              <td>
                {" "}
                <p className="C-C-C-container1-p-VA">Academic Year</p>
              </td>
              <td>
                {" "}
                <p className="C-C-C-container1-p-VA">Student Name</p>
              </td>
              <td>
                <p className="C-C-C-container1-p-VA">Standard</p>
              </td>
              <td>
                <p className="C-C-C-container1-p-VA">Section</p>
              </td>
              <td>
                {" "}
                <p className="C-C-C-container1-p-VA">Exam type</p>
              </td>
            </th>
          </table>
        </div>
        <div className="C-C-C-container3">
          <table>
            <th>
              <td>
                {" "}
                <p className="C-C-C-container1-p-S_and_G">Academic Year</p>
              </td>
              <td>
                {" "}
                <p className="C-C-C-container1-p-S_and_G">Student Name</p>
              </td>
              <td>
                <p className="C-C-C-container1-p-S_and_G">Standard</p>
              </td>
              <td>
                <p className="C-C-C-container1-p-S_and_G">Section</p>
              </td>
              <td>
                {" "}
                <select
                  name="section"
                  required
                  className="C-C-C-input-Attendance "
                >
                  <option value="section" disabled selected>
                    Section
                  </option>
                  <option value="half-yearly">Half-Yearly</option>
                  <option value="quarterly">Quarterly</option>
                  <option value="annual">Annual</option>
                  <option value="internal">internal</option>
                </select>
              </td>
            </th>
          </table>
        </div>

        <div
          style={{
            margin: "10px",
            fontFamily: "Arial, sans-serif",
            fontSize: "12px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",

              fontFamily: "Arial, sans-serif",
              fontSize: "12px",
            }}
          >
            <div>
              <table
                style={{
                  width: "100%",
                  borderCollapse: "collapse",
                  textAlign: "center",
                }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      S:No
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      Subject Name
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      Obtained Marks / 100
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      1
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Subject Name"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Marks"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      2
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Subject Name"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Marks"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      3
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Subject Name"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Marks"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      4
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Subject Name"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Marks"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      5
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Subject Name"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Marks"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    >
                      6
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Subject Name"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Marks"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "10%",
                      }}
                    ></td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="text"
                        placeholder="Total"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                    <td
                      style={{
                        border: "1px solid #000",
                        padding: "4px",
                        width: "45%",
                      }}
                    >
                      <input
                        type="number"
                        placeholder="Status"
                        style={{
                          width: "95%",
                          padding: "2px",
                          fontSize: "12px",
                          boxSizing: "border-box",
                        }}
                      />
                    </td>
                  </tr>
                </tbody>
                <button
                  type="button" // Changed to "button" for handling click
                  className="C-C-C-btn-SG"
                  onClick={() => setViewMode(true)} // Toggle to View_Attendance
                >
                  Submit
                </button>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
