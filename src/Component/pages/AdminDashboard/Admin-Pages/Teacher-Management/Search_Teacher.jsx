import React from "react";

export default function SearchTeacher() {
  return (
    <>
      <h1 className="search-teacher__title">Search Teacher</h1>
      <div className="search-teacher__search-area">
          <div className="search-teacher__header">
            <input
              type="text"
              name="Search"
              placeholder="Search"
              required
              className="search-teacher__search-input"
            />
            <button type="submit" className="search-teacher__export-button">
              Export
            </button>
          </div>
        </div>
      <div className="search-teacher">
        

        <div className="search-teacher__table-header">
          <table>
            <thead>
              <tr>
                <th>
                  <p className="search-teacher__table-header-text">
                    Academic Year
                  </p>
                </th>
                <th>
                  <p className="search-teacher__table-header-text">
                    Student Name
                  </p>
                </th>
                <th>
                  <p className="search-teacher__table-header-text">Standard</p>
                </th>
                <th>
                  <p className="search-teacher__table-header-text">Section</p>
                </th>
                <th>
                  <p className="search-teacher__table-header-text">Exam Type</p>
                </th>
              </tr>
            </thead>
          </table>
        </div>

        <div className="search-teacher__exam-type-selector">
          <table>
            <thead>
              <tr>
                <th>
                  <p className="search-teacher__selector-text-data">
                    Academic Year
                  </p>
                </th>
                <th>
                  <p className="search-teacher__selector-text-data">
                    Student Name
                  </p>
                </th>
                <th>
                  <p className="search-teacher__selector-text-data">Standard</p>
                </th>
                <th>
                  <p className="search-teacher__selector-text-data">Section</p>
                </th>
                <th>
                  <td className="Action-btn">
                    <button
                      type="button"
                      className="search-teacher__action-button--normal"
                    >
                      View
                    </button>
                    <button
                      type="button"
                      className="search-teacher__action-button--normal"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="search-teacher__action-button--delete"
                    >
                      Delete
                    </button>
                  </td>
                </th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </>
  );
}
