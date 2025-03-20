import React, { useState } from "react";


import Header from "../../one_time_use_component/Header";

import Student_Navbar from "../../one_time_use_component/Student_Navbar";

export default function StudentDashboard() {
  

 

  return (
    <>
      <Header />
      <div style={{ display: "flex" }}>
       

        <Student_Navbar />

      </div>
    </>
  );
}
