import React from "react";


const Timetable = () => {
  return (
    <>
      <h1 className="timetable__title">Add Timetable</h1>

    <div className="timetable-form">
      

      {/* Period 1 */}
      <div className="period">
        <label htmlFor="period1StartTime">Period 1 Start Time:</label>
        <input type="time" id="period1StartTime" name="period1StartTime" />

        <label htmlFor="period1EndTime">Period 1 End Time:</label>
        <input type="time" id="period1EndTime" name="period1EndTime" />

        <label htmlFor="period1Teacher">Period 1 Teacher:</label>
        <input type="text" id="period1Teacher" name="period1Teacher" />

        <label htmlFor="period1Subject">Period 1 Subject:</label>
        <input type="text" id="period1Subject" name="period1Subject" />
      </div>

      {/* Period 2 */}
      <div className="period">
        <label htmlFor="period2StartTime">Period 2 Start Time:</label>
        <input type="time" id="period2StartTime" name="period2StartTime" />

        <label htmlFor="period2EndTime">Period 2 End Time:</label>
        <input type="time" id="period2EndTime" name="period2EndTime" />

        <label htmlFor="period2Teacher">Period 2 Teacher:</label>
        <input type="text" id="period2Teacher" name="period2Teacher" />

        <label htmlFor="period2Subject">Period 2 Subject:</label>
        <input type="text" id="period2Subject" name="period2Subject" />
      </div>

      {/* Period 3 */}
      <div className="period">
        <label htmlFor="period3StartTime">Period 3 Start Time:</label>
        <input type="time" id="period3StartTime" name="period3StartTime" />

        <label htmlFor="period3EndTime">Period 3 End Time:</label>
        <input type="time" id="period3EndTime" name="period3EndTime" />

        <label htmlFor="period3Teacher">Period 3 Teacher:</label>
        <input type="text" id="period3Teacher" name="period3Teacher" />

        <label htmlFor="period3Subject">Period 3 Subject:</label>
        <input type="text" id="period3Subject" name="period3Subject" />
      </div>

      {/* Period 4 */}
      <div className="period">
        <label htmlFor="period4StartTime">Period 4 Start Time:</label>
        <input type="time" id="period4StartTime" name="period4StartTime" />

        <label htmlFor="period4EndTime">Period 4 End Time:</label>
        <input type="time" id="period4EndTime" name="period4EndTime" />

        <label htmlFor="period4Teacher">Period 4 Teacher:</label>
        <input type="text" id="period4Teacher" name="period4Teacher" />

         <label htmlFor="period4Subject">Period 4 Subject:</label>
        <input type="text" id="period4Subject" name="period4Subject" />
      </div>

      {/* Period 5 */}
      <div className="period">
        <label htmlFor="period5StartTime">Period 5 Start Time:</label>
        <input type="time" id="period5StartTime" name="period5StartTime" />

        <label htmlFor="period5EndTime">Period 5 End Time:</label>
        <input type="time" id="period5EndTime" name="period5EndTime" />

        <label htmlFor="period5Teacher">Period 5 Teacher:</label>
        <input type="text" id="period5Teacher" name="period5Teacher" />

        <label htmlFor="period5Subject">Period 5 Subject:</label>
        <input type="text" id="period5Subject" name="period5Subject" />
      </div>

      {/* Period 6 */}
      <div className="period">
        <label htmlFor="period6StartTime">Period 6 Start Time:</label>
        <input type="time" id="period6StartTime" name="period6StartTime" />

        <label htmlFor="period6EndTime">Period 6 End Time:</label>
        <input type="time" id="period6EndTime" name="period6EndTime" />

        <label htmlFor="period6Teacher">Period 6 Teacher:</label>
        <input type="text" id="period6Teacher" name="period6Teacher" />

        <label htmlFor="period6Subject">Period 6 Subject:</label>
        <input type="text" id="period6Subject" name="period6Subject" />
      </div>

      {/* Period 7 */}
      <div className="period">
        <label htmlFor="period7StartTime">Period 7 Start Time:</label>
        <input type="time" id="period7StartTime" name="period7StartTime" />

        <label htmlFor="period7EndTime">Period 7 End Time:</label>
        <input type="time" id="period7EndTime" name="period7EndTime" />

        <label htmlFor="period7Teacher">Period 7 Teacher:</label>
        <input type="text" id="period7Teacher" name="period7Teacher" />

        <label htmlFor="period7Subject">Period 7 Subject:</label>
        <input type="text" id="period7Subject" name="period7Subject" />
      </div>

      
    </div>




    </>
  );
};

export default Timetable;
