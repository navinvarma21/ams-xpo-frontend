import React from "react";

export default function AddStudent() {
  return (
    <div>
      <h1>Add Student</h1>
      <form>
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="number" name="age" />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
