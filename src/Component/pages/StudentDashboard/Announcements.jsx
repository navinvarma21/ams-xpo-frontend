import React, { useState } from "react";

export default function Announcements() {
  const [announcements, setAnnouncements] = useState([
    {
      id: 1,
      title: "Holiday Announcement",
      content: "School will remain closed on Monday due to local elections.",
      date: "11/02/2025",
    },
    {
      id: 2,
      title: "PTA Meeting",
      content: "PTA Meeting on this Monday.",
      date: "12/02/2025",
    },
    {
      id: 3,
      title: "Sports Day",
      content: "Sports day will be conducted next week.",
      date: "13/02/2025",
    },
  ]);

  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [date, setDate] = useState("");

  const handleInputChange = (setter) => (e) => {
    setter(e.target.value);
  };

  const handleEdit = (id) => {
    const announcementToEdit = announcements.find(
      (announcement) => announcement.id === id
    );
    if (announcementToEdit) {
      setTitle(announcementToEdit.title);
      setContent(announcementToEdit.content);
      setDate(announcementToEdit.date);
    }
  };

  const handleDelete = (id) => {
    setAnnouncements((prevAnnouncements) =>
      prevAnnouncements.filter((announcement) => announcement.id !== id)
    );

    // Reset current index if the deleted card was the current one
    if (currentCardIndex >= announcements.length - 1) {
      setCurrentCardIndex(Math.max(currentCardIndex - 1, 0));
    }
  };

  const handleSave = () => {
    const newAnnouncement = {
      id: Date.now(),
      title,
      content,
      date,
    };

    setAnnouncements((prevAnnouncements) => [...prevAnnouncements, newAnnouncement]);

    // Clear the form
    setTitle("");
    setContent("");
    setDate("");
  };

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) =>
      Math.min(prevIndex + 1, announcements.length - 1)
    );
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <>
      <h3 className="Announcements__title-1_s_and_t">Announcements</h3>
      <div className="Announcements_s_and_t" style={{ textAlign: 'center' }}>
        
        {/* Display current announcement */}
        {announcements.length > 0 && (
          <div className="card_s_and_t" style={{ margin: '0 auto', display: 'inline-block' }}>
            <h3>{announcements[currentCardIndex].title}</h3>
            <p>{announcements[currentCardIndex].content}</p>
            <span>{announcements[currentCardIndex].date}</span>
            {/* <div className="card-actions_s_and_t">
              <button className="edit-button_s_and_t" onClick={() => handleEdit(announcements[currentCardIndex].id)}>
                ✏️
              </button>
              <button
                className="delete-button_s_and_t"
                onClick={() => handleDelete(announcements[currentCardIndex].id)}
              >
                🗑️
              </button>
            </div> */}
          </div>
        )}

        {/* Navigation buttons */}
        <div className="navigation-buttons_s_and_t" style={{ marginTop: '20px' }}>
          <button className="card-form_s_and_t_button" onClick={handlePrevious} disabled={currentCardIndex === 0}>
            Previous
          </button>
          <button
          className="card-form_s_and_t_button"
            onClick={handleNext}
            disabled={currentCardIndex === announcements.length - 1}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}
