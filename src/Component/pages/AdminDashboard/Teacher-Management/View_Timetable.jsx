import React from "react";

export default function View_Timetable() {
  return (
    <>
      {" "}
      <h1 className="exam-records-title">View Timetable</h1>
      <div className="add-new-teacher-container1">
        <table border="1" style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th>Day</th>
              <th>
                Period 1<br />
                9:00 - 10:00
              </th>
              <th>
                Period 2<br />
                10:00 - 11:00
              </th>
              <th>
                Break
                <br />
                11:00 - 11:15
              </th>
              <th>
                Period 3<br />
                11:15 - 12:15
              </th>
              <th>
                Period 4<br />
                12:15 - 1:15
              </th>
              <th>
                Lunch Break
                <br />
                1:15 - 1:45
              </th>
              <th>
                Period 5<br />
                1:45 - 2:45
              </th>
              <th>
                Period 6<br />
                2:45 - 3:45
              </th>
              <th>
                Period 7<br />
                3:45 - 4:30
              </th>
            </tr>
          </thead>
          <tbody>
            {/* Monday */}
            <tr>
              <td>Monday</td>
              <td>
                Tamil
                <br />
                Priya
              </td>
              <td>
                English
                <br />
                Rajesh
              </td>
              <td rowSpan="6">Break</td>
              <td>
                Maths
                <br />
                Lakshmi
              </td>
              <td>
                Science
                <br />
                Geetha
              </td>
              <td rowSpan="6">Lunch Break</td>
              <td>
                S.S
                <br />
                Sugumar
              </td>
              <td>
                M.S
                <br />
                Lalitha
              </td>
              <td>
                P.E.T
                <br />
                Devi
              </td>
            </tr>

            {/* Tuesday */}
            <tr>
              <td>Tuesday</td>
              <td>
                Tamil
                <br />
                Priya
              </td>
              <td>
                English
                <br />
                Rajesh
              </td>
              <td>
                Maths
                <br />
                Lakshmi
              </td>
              <td>
                Science
                <br />
                Geetha
              </td>
              <td>
                S.S
                <br />
                Sugumar
              </td>
              <td>
                M.S
                <br />
                Lalitha
              </td>
              <td>
                P.E.T
                <br />
                Devi
              </td>
            </tr>

            {/* Wednesday */}
            <tr>
              <td>Wednesday</td>
              <td>
                Tamil
                <br />
                Priya
              </td>
              <td>
                English
                <br />
                Rajesh
              </td>
              <td>
                Maths
                <br />
                Lakshmi
              </td>
              <td>
                Science
                <br />
                Geetha
              </td>
              <td>
                S.S
                <br />
                Sugumar
              </td>
              <td>
                M.S
                <br />
                Lalitha
              </td>
              <td>
                P.E.T
                <br />
                Devi
              </td>
            </tr>

            {/* Thursday */}
            <tr>
              <td>Thursday</td>
              <td>
                Tamil
                <br />
                Priya
              </td>
              <td>
                English
                <br />
                Rajesh
              </td>
              <td>
                Maths
                <br />
                Lakshmi
              </td>
              <td>
                Science
                <br />
                Geetha
              </td>
              <td>
                S.S
                <br />
                Sugumar
              </td>
              <td>
                M.S
                <br />
                Lalitha
              </td>
              <td>
                P.E.T
                <br />
                Devi
              </td>
            </tr>

            {/* Friday */}
            <tr>
              <td>Friday</td>
              <td>
                Tamil
                <br />
                Priya
              </td>
              <td>
                English
                <br />
                Rajesh
              </td>
              <td>
                Maths
                <br />
                Lakshmi
              </td>
              <td>
                Science
                <br />
                Geetha
              </td>
              <td>
                S.S
                <br />
                Sugumar
              </td>
              <td>
                M.S
                <br />
                Lalitha
              </td>
              <td>
                P.E.T
                <br />
                Devi
              </td>
            </tr>

            {/* Saturday */}
            <tr>
              <td>Saturday</td>
              <td>
                Tamil
                <br />
                Priya
              </td>
              <td>
                English
                <br />
                Rajesh
              </td>
              <td>
                Maths
                <br />
                Lakshmi
              </td>
              <td>
                Science
                <br />
                Geetha
              </td>
              <td>
                S.S
                <br />
                Sugumar
              </td>
              <td>
                M.S
                <br />
                Lalitha
              </td>
              <td>
                P.E.T
                <br />
                Devi
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
