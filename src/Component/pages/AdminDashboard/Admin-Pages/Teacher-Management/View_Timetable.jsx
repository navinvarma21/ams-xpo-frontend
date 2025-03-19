// import React from "react";

// export default function ViewTimetable() {
//   return (
   
      
//       <div className="timetable__container">
//         <h1 className="timetable__title">View Timetable</h1>
//         <table
//           className="timetable__table"
//           border="1"
//           style={{ borderCollapse: "collapse" }}
//         >
//           <thead className="timetable__header">
//             <tr className="timetable__row">
//               <th className="timetable__cell">Day</th>
//               <th className="timetable__cell-head">
//                 Period 1<br />
//                 9:00 - 10:00
//               </th>
//               <th className="timetable__cell-head">
//                 Period 2<br />
//                 10:00 - 11:00
//               </th>
//               <th className="timetable__cell-head">
//                 Break
//                 <br />
//                 11:00 - 11:15
//               </th>
//               <th className="timetable__cell-head">
//                 Period 3<br />
//                 11:15 - 12:15
//               </th>
//               <th className="timetable__cell-head">
//                 Period 4<br />
//                 12:15 - 1:15
//               </th>
//               <th className="timetable__cell-head">
//                 Lunch Break
//                 <br />
//                 1:15 - 1:45
//               </th>
//               <th className="timetable__cell-head">
//                 Period 5<br />
//                 1:45 - 2:45
//               </th>
//               <th className="timetable__cell-head">
//                 Period 6<br />
//                 2:45 - 3:45
//               </th>
//               <th className="timetable__cell-head">
//                 Period 7<br />
//                 3:45 - 4:30
//               </th>
//             </tr>
//           </thead>
//           <tbody className="timetable__body">
//             {/* Monday */}
//             <tr className="timetable__row">
//               <td className="timetable__cell">Monday</td>
//               <td className="timetable__cell-head">
//                 Tamil
//                 <br />
//                 Priya
//               </td>
//               <td className="timetable__cell-head">
//                 English
//                 <br />
//                 Rajesh
//               </td>
//               <td
//                 className="timetable__cell-head timetable__cell--break"
//                 rowSpan="6"
//               >
//                 Break
//               </td>
//               <td className="timetable__cell">
//                 Maths
//                 <br />
//                 Lakshmi
//               </td>
//               <td className="timetable__cell">
//                 Science
//                 <br />
//                 Geetha
//               </td>
//               <td
//                 className="timetable__cell timetable__cell--lunch"
//                 rowSpan="6"
//               >
//                 Lunch Break
//               </td>
//               <td className="timetable__cell">
//                 S.S
//                 <br />
//                 Sugumar
//               </td>
//               <td className="timetable__cell">
//                 M.S
//                 <br />
//                 Lalitha
//               </td>
//               <td className="timetable__cell">
//                 P.E.T
//                 <br />
//                 Devi
//               </td>
//             </tr>

//             {/* Tuesday */}
//             {/* Repeat similar structure for other days */}
//             {/* ... */}

//             {/* Wednesday */}
//             {/* ... */}

//             {/* Thursday */}
//             {/* ... */}

//             {/* Friday */}
//             {/* ... */}

//             {/* Saturday */}
//             {/* ... */}
//           </tbody>
//         </table>
//       </div>
    
//   );
// }
import React from "react";


export default function ViewTimetable() {
  return (
    <div className="timetable__container">
      <h1 className="timetable__title">View Timetable</h1>
      <table
        className="timetable__table"
        border="1"
        style={{ borderCollapse: "collapse" }}
      >
        <thead className="timetable__header">
          <tr className="timetable__row">
            <th className="timetable__cell">Day</th>
            <th className="timetable__cell-head">
              Period 1<br />
              9:00 - 10:00
            </th>
            <th className="timetable__cell-head">
              Period 2<br />
              10:00 - 11:00
            </th>
            <th className="timetable__cell-head">
              Break<br />
              11:00 - 11:15
            </th>
            <th className="timetable__cell-head">
              Period 3<br />
              11:15 - 12:15
            </th>
            <th className="timetable__cell-head">
              Period 4<br />
              12:15 - 1:15
            </th>
            <th className="timetable__cell-head">
              Lunch Break<br />
              1:15 - 1:45
            </th>
            <th className="timetable__cell-head">
              Period 5<br />
              1:45 - 2:45
            </th>
            <th className="timetable__cell-head">
              Period 6<br />
              2:45 - 3:45
            </th>
            <th className="timetable__cell-head">
              Period 7<br />
              3:45 - 4:30
            </th>
          </tr>
        </thead>
        <tbody className="timetable__body">
          {/* Monday */}
          <tr className="timetable__row">
            <td className="timetable__cell">Monday</td>
            <td className="timetable__cell">Tamil<br />Priya</td>
            <td className="timetable__cell">English<br />Rajesh</td>
            <td
              className="timetable__cell timetable__cell--break"
              rowSpan="6"
            >
              Break
            </td>
            <td className="timetable__cell">Maths<br />Lakshmi</td>
            <td className="timetable__cell">Science<br />Geetha</td>
            <td
              className="timetable__cell timetable__cell--lunch"
              rowSpan="6"
            >
              Lunch Break
            </td>
            <td className="timetable__cell">S.S<br />Sugumar</td>
            <td className="timetable__cell">M.S<br />Lalitha</td>
            <td className="timetable__cell">P.E.T<br />Devi</td>
            </tr>

          {/* Tuesday */}
          <tr className="timetable__row">
            <td className="timetable__cell">Tuesday</td>
            <td className="timetable__cell">Physics<br />Kumar</td>
            <td className="timetable__cell">Chemistry<br />Meena</td>
            <td className="timetable__cell">Biology<br />Anitha</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
          </tr>

          {/* Wednesday */}
          <tr className="timetable__row">
            <td className="timetable__cell">Wednesday</td>
            <td className="timetable__cell">Physics<br />Kumar</td>
            <td className="timetable__cell">Chemistry<br />Meena</td>
            <td className="timetable__cell">Biology<br />Anitha</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
          </tr>
         
          {/* Thursday */}
          <tr className="timetable__row">
            <td className="timetable__cell">Thursday</td>
            <td className="timetable__cell">Physics<br />Kumar</td>
            <td className="timetable__cell">Chemistry<br />Meena</td>
            <td className="timetable__cell">Biology<br />Anitha</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
          </tr>
          {/* Friday */}
          <tr className="timetable__row">
            <td className="timetable__cell">Friday</td>
            <td className="timetable__cell">Physics<br />Kumar</td>
            <td className="timetable__cell">Chemistry<br />Meena</td>
            <td className="timetable__cell">Biology<br />Anitha</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
          </tr>
          {/* Saturday */}
          <tr className="timetable__row">
            <td className="timetable__cell">Saturday</td>
            <td className="timetable__cell">Physics<br />Kumar</td>
            <td className="timetable__cell">Chemistry<br />Meena</td>
            <td className="timetable__cell">Biology<br />Anitha</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
            <td className="timetable__cell">History<br />Ravi</td>
            <td className="timetable__cell">Geography<br />Suresh</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
