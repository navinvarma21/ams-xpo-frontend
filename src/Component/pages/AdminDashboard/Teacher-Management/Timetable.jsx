import React from "react";

const Timetable = () => {
  return (
    <form style={{ width: "100%", padding: "5px" }}>
      {/* Scrollable container for responsiveness */}
      <div style={{ overflowX: "auto" }}>
        <table
          border="1"
          style={{
            width: "100%",
            borderCollapse: "collapse",
            textAlign: "center",
            fontSize: "12px", // Compact font size
          }}
        >
          <thead>
            <tr>
              <th style={{ padding: "2px" }}>Day</th>

              <th style={{ padding: "2px" }}>
                Period 1{" "}
                <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr>
              </th>
              <th style={{ padding: "2px" }}>Period 2 <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr></th>
              <th style={{ padding: "2px" }}>Break <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr></th>
              <th style={{ padding: "2px" }}>Period 3 <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr></th>
              <th style={{ padding: "2px" }}>Period 4 <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr></th>
              <th style={{ padding: "2px" }}>Lunch Break <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr></th>
              <th style={{ padding: "2px" }}>Period 5 <tr>
                  <td>
                    <input
                      type="time"
                      name="StartTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                  <td>
                    <input
                      type="time"
                      name="EndTime"
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                </tr></th>
              <th style={{ padding: "2px" }}>Period 6</th>
              <th style={{ padding: "2px" }}>Period 7</th>
            </tr>
          </thead>
          <tbody>
            {/* Repeat this structure for all 7 days */}
            {[
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ].map((day, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="text"
                    defaultValue={day}
                    name={`day${index}`}
                    style={{ width: "90%", padding: "2px", fontSize: "10px" }}
                    readOnly
                  />
                </td>
                {Array.from({ length: 7 }, (_, periodIndex) => (
                  <td key={periodIndex}>
                    <br />
                    <input
                      type="text"
                      placeholder="Subject"
                      name={`${day}Subject${periodIndex + 1}`}
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Staff"
                      name={`${day}Staff${periodIndex + 1}`}
                      style={{ width: "90%", margin: "1px", fontSize: "10px" }}
                    />
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </form>
  );
};

export default Timetable;
