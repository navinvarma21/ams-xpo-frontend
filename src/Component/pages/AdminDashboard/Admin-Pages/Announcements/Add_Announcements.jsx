import React, { useState } from "react";

export default function Add_Announcements() {
  const [step, setStep] = useState(1);
  const [headline, setHeadline] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const [card1Headline, setCard1Headline] = useState("Holiday Announcement");
  const [card1Description, setCard1Description] = useState(
    "Message 1"
  );
  const [card1Date, setCard1Date] = useState("11/02/2025");

  const [card2Headline, setCard2Headline] = useState("Holiday Announcement");
  const [card2Description, setCard2Description] = useState(
    "Message 2"
  );
  const [card2Date, setCard2Date] = useState("11/02/2025");

  const [card3Headline, setCard3Headline] = useState("Holiday Announcement");
  const [card3Description, setCard3Description] = useState(
    "Message 3"
  );
  const [card3Date, setCard3Date] = useState("11/02/2025");

  const [card4Headline, setCard4Headline] = useState("Holiday Announcement");
  const [card4Description, setCard4Description] = useState(
    "Message 4"
  );
  const [card4Date, setCard4Date] = useState("11/02/2025");

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    setCard1Headline(headline);
    setCard1Description(description);
    setCard1Date(date);

    setHeadline("");
    setDescription("");
    setDate("");
  };

  return (
    <>
      <h1 className="Add__Announcements__title">Add Announcements</h1>
      <div className="Add_Announcements">
        <div className="form-container">
          <div className="form-row">
            <label>Enter Headline:</label>
            <input
              type="text"
              placeholder="Enter Headline"
              className="input-field"
              value={headline}
              onChange={(e) => setHeadline(e.target.value)}
            />
          </div>

          <div className="form-row">
            <label>Description:</label>
            <textarea
              placeholder="Description"
              className="input-field"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <div className="form-row">
            <label>Date:</label>
            <input
              type="date"
              className="input-field"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          <button className="send-button" onClick={handleSubmit}>
            Send
          </button>
        </div>

        <div className="cards-container-a_and_t">
          {step === 1 && (
            <>
              <div className="card">
                <span className="card-icon">💬</span>
                <h3>{card1Headline}</h3>
                <p>{card1Description}</p>
                <span>{card1Date}</span>
                <div className="card-actions">
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </div>
              </div>

              <div className="card">
                <span className="card-icon">💬</span>
                <h3>{card2Headline}</h3>
                <p>{card2Description}</p>
                <span>{card2Date}</span>
                <div className="card-actions">
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </div>
              </div>
            </>
          )}

          {step === 2 && (
            <>
              <div className="card">
                <span className="card-icon">💬</span>
                <h3>{card3Headline}</h3>
                <p>{card3Description}</p>
                <span>{card3Date}</span>
                <div className="card-actions">
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </div>
              </div>

              <div className="card">
                <span className="card-icon">💬</span>
                <h3>{card4Headline}</h3>
                <p>{card4Description}</p>
                <span>{card4Date}</span>
                <div className="card-actions">
                  <button className="edit-button">✏️</button>
                  <button className="delete-button">🗑️</button>
                </div>
              </div>
            </>
          )}
          {step < 2 && (
            <button className="send-button" onClick={nextStep}>
              Next
            </button>
          )}
          {step > 1 && (
            <button className="send-button" onClick={prevStep}>
              Previous
            </button>
          )}
        </div>
      </div>
    </>
  );
}
