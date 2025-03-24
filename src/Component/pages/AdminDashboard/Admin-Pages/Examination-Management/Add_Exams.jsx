import React, { useState } from "react";

export default function Add_Exams() {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <>
      <h2 className="Add_Exam__title">Add Exams</h2>
      <div className="add-new-Exam-container">
        <div className="form-scrollable-container">
          <div className="form-grid">
            {step === 1 && (
              <>
                {/* Exam Name and Standard */}
                <div className="form-group">
                  <label htmlFor="examName">Exam Name</label>
                  <select id="examName">
                    <option value="" disabled selected>
                      Select Exam Name
                    </option>
                    <option value="annual">Annual Exam</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="standard">Select Standard</label>
                  <select id="standard">
                    <option value="" disabled selected>
                      Select Standard
                    </option>
                    <option value="standard1">Standard 1</option>
                  </select>
                </div>

                {/* Subject Inputs */}
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index}>
                    <div className="form-group">
                      <label htmlFor={`subject${index + 1}`}>Subject {index + 1}</label>
                      <input type="text" id={`subject${index + 1}`} />
                    </div>

                    <div className="form-group">
                      <label htmlFor={`subject${index + 1}Date`}>Subject {index + 1} Exam Date</label>
                      <input type="date" id={`subject${index + 1}Date`} />
                    </div>
                  </div>
                ))}

                {/* Navigate to next step */}
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {step === 2 && (
              <>
                {/* Additional Subject Inputs */}
                {Array.from({ length: 2 }, (_, index) => (
                  <div key={index}>
                    <div className="form-group">
                      <label htmlFor={`subject${index + 5}`}>Subject {index + 5}</label>
                      <input type="text" id={`subject${index + 5}`} />
                    </div>

                    <div className="form-group">
                      <label htmlFor={`subject${index + 5}Date`}>Subject {index + 5} Exam Date</label>
                      <input type="date" id={`subject${index + 5}Date`} />
                    </div>
                  </div>
                ))}

                {/* Practical Inputs */}
                {Array.from({ length: 4 }, (_, index) => (
                  <div key={index}>
                    <div className="form-group">
                      <label htmlFor={`practical${index + 1}`}>Practical {index + 1}</label>
                      <input type="text" id={`practical${index + 1}`} />
                    </div>

                    <div className="form-group">
                      <label htmlFor={`practical${index + 1}Date`}>Practical {index + 1} Exam Date</label>
                      <input type="date" id={`practical${index + 1}Date`} />
                    </div>
                  </div>
                ))}

                {/* Navigate to previous and next steps */}
                <button type="button" onClick={prevStep}>
                  Previous
                </button>
                <button type="button" onClick={nextStep}>
                  Next
                </button>
              </>
            )}

            {step === 3 && (
              <>
                {/* Max Marks, Pass Marks, Starting Time, Exam Duration */}
                <div className="form-group">
                  <label htmlFor="maxMarks">Max mark</label>
                  <input type="text" id="maxMarks" />
                </div>

                <div className="form-group">
                  <label htmlFor="passMarks">Pass mark</label>
                  <input type="text" id="passMarks" />
                </div>

                <div className="form-group">
                  <label htmlFor="startingTime">Starting time</label>
                  <input type="time" id="startingTime" />
                </div>

                <div className="form-group">
                  <label htmlFor="examDuration">Exam duration</label>
                  <input type="text" id="examDuration" />
                </div>

                {/* Button Container for Previous, Reset, and Submit Buttons */}
                {/* Previous Button */}
                {step > 1 && (
                  <>
                    {/* Button Container */}
                    <div className="button-container">
                      {/* Previous Button for Step 3 */}
                      

                      {/* Reset Button */}
                      {step > 1 && (
                        <>
                          {/* Reset Button */}
                          <button
                            type="button"
                            className="reset-button"
                            onClick={() => setStep(1)}
                          >
                            Reset
                          </button>

                          {/* Submit Button */}
                          {step === 3 && (
                            <button type="button" className="submit-button">
                              Submit
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
