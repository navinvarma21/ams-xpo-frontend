import React from "react";

export default function Timetable_student_and_parent() {
  return (
    <>
    <p className="timetable__container_title_sp">Timetable</p>
    
      <div className="timetable__container_sp">
        <table
          className="timetable__table_sp"
          border="1"
          style={{ borderCollapse: "collapse" }}
        >
          <thead className="timetable__header_sp">
            <tr className="timetable__row_sp">
              <th className="timetable__cell_sp">Day</th>
              <th className="timetable__cell-head_sp">
                Period 1<br />
                9:00 - 10:00
              </th>
              <th className="timetable__cell-head_sp">
                Period 2<br />
                10:00 - 11:00
              </th>
              <th className="timetable__cell-head_sp">
                Break
                <br />
                11:00 - 11:15
              </th>
              <th className="timetable__cell-head_sp">
                Period 3<br />
                11:15 - 12:15
              </th>
              <th className="timetable__cell-head_sp">
                Period 4<br />
                12:15 - 1:15
              </th>
              <th className="timetable__cell-head_sp">
                Lunch Break
                <br />
                1:15 - 1:45
              </th>
              <th className="timetable__cell-head_sp">
                Period 5<br />
                1:45 - 2:45
              </th>
              <th className="timetable__cell-head_sp">
                Period 6<br />
                2:45 - 3:45
              </th>
              <th className="timetable__cell-head_sp">
                Period 7<br />
                3:45 - 4:30
              </th>
            </tr>
          </thead>
          <tbody className="timetable__body_sp">
            {/* Monday */}
            <tr className="timetable__row_sp">
              <td className="timetable__cell_sp">Monday</td>
              <td className="timetable__cell_sp">
                Tamil
                <br />
                Priya
              </td>
              <td className="timetable__cell_sp">
                English
                <br />
                Rajesh
              </td>
              <td
                className="timetable__cell_sp timetable__cell--break_sp"
                rowSpan="6"
              >
                Break
              </td>
              <td className="timetable__cell_sp">
                Maths
                <br />
                Lakshmi
              </td>
              <td className="timetable__cell_sp">
                Science
                <br />
                Geetha
              </td>
              <td
                className="timetable__cell_sp timetable__cell--lunch_sp"
                rowSpan="6"
              >
                Lunch Break
              </td>
              <td className="timetable__cell_sp">
                S.S
                <br />
                Sugumar
              </td>
              <td className="timetable__cell_sp">
                M.S
                <br />
                Lalitha
              </td>
              <td className="timetable__cell_sp">
                P.E.T
                <br />
                Devi
              </td>
            </tr>

            {/* Tuesday */}
            <tr className="timetable__row_sp">
              <td className="timetable__cell_sp">Tuesday</td>
              <td className="timetable__cell_sp">
                Physics
                <br />
                Kumar
              </td>
              <td className="timetable__cell_sp">
                Chemistry
                <br />
                Meena
              </td>
              <td className="timetable__cell_sp">
                Biology
                <br />
                Anitha
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
            </tr>

            {/* Wednesday */}
            <tr className="timetable__row_sp">
              <td className="timetable__cell_sp">Wednesday</td>
              <td className="timetable__cell_sp">
                Physics
                <br />
                Kumar
              </td>
              <td className="timetable__cell_sp">
                Chemistry
                <br />
                Meena
              </td>
              <td className="timetable__cell_sp">
                Biology
                <br />
                Anitha
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
            </tr>

            {/* Thursday */}
            <tr className="timetable__row_sp">
              <td className="timetable__cell_sp">Thursday</td>
              <td className="timetable__cell_sp">
                Physics
                <br />
                Kumar
              </td>
              <td className="timetable__cell_sp">
                Chemistry
                <br />
                Meena
              </td>
              <td className="timetable__cell_sp">
                Biology
                <br />
                Anitha
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
            </tr>
            {/* Friday */}
            <tr className="timetable__row_sp">
              <td className="timetable__cell_sp">Friday</td>
              <td className="timetable__cell_sp">
                Physics
                <br />
                Kumar
              </td>
              <td className="timetable__cell_sp">
                Chemistry
                <br />
                Meena
              </td>
              <td className="timetable__cell_sp">
                Biology
                <br />
                Anitha
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
            </tr>
            {/* Saturday */}
            <tr className="timetable__row_sp">
              <td className="timetable__cell_sp">Saturday</td>
              <td className="timetable__cell_sp">
                Physics
                <br />
                Kumar
              </td>
              <td className="timetable__cell_sp">
                Chemistry
                <br />
                Meena
              </td>
              <td className="timetable__cell_sp">
                Biology
                <br />
                Anitha
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
              <td className="timetable__cell_sp">
                History
                <br />
                Ravi
              </td>
              <td className="timetable__cell_sp">
                Geography
                <br />
                Suresh
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
