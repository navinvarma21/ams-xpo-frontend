import React from 'react'

export default function StudentDetail() {
  return (
    <><div className="header" >
      <h3>Student Detail</h3>
      <div className="child-count">
        Number of child: <input type="text" value="1" readOnly />
      </div>
    </div>
      <div className="student-detail">
        
        <div className="profile-pic"></div>
        <div className="details">
          <p>
            <strong>Register Number:</strong> SCH2025001
          </p>
          <p>
            <strong>Student Name:</strong> Arun Kumar
          </p>
          <p>
            <strong>Standard:</strong> 1st
          </p>
          <p>
            <strong>Street / Village:</strong> 17/65 Tvm Street
          </p>
          <p>
            <strong>District:</strong> Tiruvannamalai
          </p>
          <p>
            <strong>Place / Pincode:</strong> 606601
          </p>
          <p>
            <strong>School Name:</strong> GNMHSS
          </p>
          <p>
            <strong>Father's Name:</strong> Rajesh
          </p>
          <p>
            <strong>Section:</strong> A
          </p>
        </div>
      </div>
      </>
  )
}

