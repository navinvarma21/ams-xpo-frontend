import React, { useState } from 'react';

const Timetable = () => {
  const [currentStep, setCurrentStep] = useState(1);

  // State variables for each period
  const [period1, setPeriod1] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });
  const [period2, setPeriod2] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });
  const [period3, setPeriod3] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });
  const [period4, setPeriod4] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });
  const [period5, setPeriod5] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });
  const [period6, setPeriod6] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });
  const [period7, setPeriod7] = useState({ startTime: '', endTime: '', teacher: '', subject: '' });

  const handleNext = () => {
    if (currentStep < 7) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (currentStep) {
      case 1:
        setPeriod1({ ...period1, [name]: value });
        break;
      case 2:
        setPeriod2({ ...period2, [name]: value });
        break;
      case 3:
        setPeriod3({ ...period3, [name]: value });
        break;
      case 4:
        setPeriod4({ ...period4, [name]: value });
        break;
      case 5:
        setPeriod5({ ...period5, [name]: value });
        break;
      case 6:
        setPeriod6({ ...period6, [name]: value });
        break;
      case 7:
        setPeriod7({ ...period7, [name]: value });
        break;
      default:
        break;
    }
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log('Form submitted!', {
      period1,
      period2,
      period3,
      period4,
      period5,
      period6,
      period7,
    });
    alert('Timetable submitted! Check the console for data.');
  };

  return (
    <>
    <h1 className="timetable__title">Add Timetable</h1>
    <div className="timetable-container">
      

      <div className="schedule-form">
        <div className="timetable-form">
          {currentStep === 1 && (
            <div className="period">
              <h2>Period 1</h2>
              <label htmlFor="period1StartTime">Start Time:</label>
              <input
                type="time"
                id="period1StartTime"
                name="startTime"
                value={period1.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period1EndTime">End Time:</label>
              <input
                type="time"
                id="period1EndTime"
                name="endTime"
                value={period1.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period1Teacher">Teacher:</label>
              <input
                type="text"
                id="period1Teacher"
                name="teacher"
                value={period1.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period1Subject">Subject:</label>
              <input
                type="text"
                id="period1Subject"
                name="subject"
                value={period1.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {currentStep === 2 && (
            <div className="period">
              <h2>Period 2</h2>
              <label htmlFor="period2StartTime">Start Time:</label>
              <input
                type="time"
                id="period2StartTime"
                name="startTime"
                value={period2.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period2EndTime">End Time:</label>
              <input
                type="time"
                id="period2EndTime"
                name="endTime"
                value={period2.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period2Teacher">Teacher:</label>
              <input
                type="text"
                id="period2Teacher"
                name="teacher"
                value={period2.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period2Subject">Subject:</label>
              <input
                type="text"
                id="period2Subject"
                name="subject"
                value={period2.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {currentStep === 3 && (
            <div className="period">
              <h2>Period 3</h2>
              <label htmlFor="period3StartTime">Start Time:</label>
              <input
                type="time"
                id="period3StartTime"
                name="startTime"
                value={period3.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period3EndTime">End Time:</label>
              <input
                type="time"
                id="period3EndTime"
                name="endTime"
                value={period3.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period3Teacher">Teacher:</label>
              <input
                type="text"
                id="period3Teacher"
                name="teacher"
                value={period3.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period3Subject">Subject:</label>
              <input
                type="text"
                id="period3Subject"
                name="subject"
                value={period3.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {currentStep === 4 && (
            <div className="period">
              <h2>Period 4</h2>
              <label htmlFor="period4StartTime">Start Time:</label>
              <input
                type="time"
                id="period4StartTime"
                name="startTime"
                value={period4.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period4EndTime">End Time:</label>
              <input
                type="time"
                id="period4EndTime"
                name="endTime"
                value={period4.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period4Teacher">Teacher:</label>
              <input
                type="text"
                id="period4Teacher"
                name="teacher"
                value={period4.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period4Subject">Subject:</label>
              <input
                type="text"
                id="period4Subject"
                name="subject"
                value={period4.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {currentStep === 5 && (
            <div className="period">
              <h2>Period 5</h2>
              <label htmlFor="period5StartTime">Start Time:</label>
              <input
                type="time"
                id="period5StartTime"
                name="startTime"
                value={period5.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period5EndTime">End Time:</label>
              <input
                type="time"
                id="period5EndTime"
                name="endTime"
                value={period5.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period5Teacher">Teacher:</label>
              <input
                type="text"
                id="period5Teacher"
                name="teacher"
                value={period5.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period5Subject">Subject:</label>
              <input
                type="text"
                id="period5Subject"
                name="subject"
                value={period5.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {currentStep === 6 && (
            <div className="period">
              <h2>Period 6</h2>
              <label htmlFor="period6StartTime">Start Time:</label>
              <input
                type="time"
                id="period6StartTime"
                name="startTime"
                value={period6.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period6EndTime">End Time:</label>
              <input
                type="time"
                id="period6EndTime"
                name="endTime"
                value={period6.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period6Teacher">Teacher:</label>
              <input
                type="text"
                id="period6Teacher"
                name="teacher"
                value={period6.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period6Subject">Subject:</label>
              <input
                type="text"
                id="period6Subject"
                name="subject"
                value={period6.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {currentStep === 7 && (
            <div className="period">
              <h2>Period 7</h2>
              <label htmlFor="period7StartTime">Start Time:</label>
              <input
                type="time"
                id="period7StartTime"
                name="startTime"
                value={period7.startTime}
                onChange={handleChange}
              />
              <label htmlFor="period7EndTime">End Time:</label>
              <input
                type="time"
                id="period7EndTime"
                name="endTime"
                value={period7.endTime}
                onChange={handleChange}
              />
              <label htmlFor="period7Teacher">Teacher:</label>
              <input
                type="text"
                id="period7Teacher"
                name="teacher"
                value={period7.teacher}
                onChange={handleChange}
              />
              <label htmlFor="period7Subject">Subject:</label>
              <input
                type="text"
                id="period7Subject"
                name="subject"
                value={period7.subject}
                onChange={handleChange}
              />
            </div>
          )}

          {/* Navigation Buttons */}
          <button className="btn-timetable" type="button" onClick={handlePrevious} disabled={currentStep === 1}>
            Previous
          </button>

          {currentStep < 7 ? (
            <button className="btn-timetable" type="button" onClick={handleNext}>
              Next
            </button>
          ) : (
            <button className="btn-timetable" type="button" onClick={handleSubmit}>
              Submit
            </button>
          )}
        </div>
      </div>
    </div>
    </>
  );
};

export default Timetable;
