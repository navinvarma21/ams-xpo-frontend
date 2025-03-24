import React from "react";
import { PieChart, Pie, Cell, Label } from "recharts";

const data = [{ name: "percentage", value: 80 }];
const COLORS = ["#0088FE"]; // Color for the pie chart segment

export default function Attendance_Student_and_parent() {
  return (
    <>
    <h1 className="attendance-Student_and_parent">Attendance</h1>
    <div className="attendance-container">
      
      <div className="input-section">
        <label>Register Number:</label>
        <input
          type="text"
          value="SCH2025001"
          readOnly
          className="register-input"
        />

        <label>Select Month:</label>
        <select className="month-select">
          <option>Select Month</option>
          <option>Jan</option>
          <option>Feb</option>
        </select>
      </div>
      <div className="attendance-container-2">
        {/* Flexbox container for table and pie chart */}
        <div className="content-container">
          <table className="attendance-table">
            <thead>
              <tr>
                <th>Selected Month</th>
                <th>No days present</th>
                <th>No of days Absent</th>
                <th>Number of days Leave</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>January</td>
                <td>28</td>
                <td>1</td>
                <td>1</td>
              </tr>
              <tr>
                <th>Name</th>
                <th>Year</th>
                <th>Register Number</th>
                <th>Standard</th>
              </tr>
              <tr>
                <td>Arunkumar</td>
                <td>2025</td>
                <td>SCH2025001</td>
                <td>1st</td>
              </tr>
            </tbody>
          </table>

          {/* Pie Chart */}
          <PieChart className="percentage-circle" width={250} height={200}>
            <Pie
              data={data}
              cx={120}
              cy={100}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              {/* Add a single label in the center */}
              <Label
                value="Percentage: 80%"
                position="center"
                style={{ fontSize: "16px", fill: "#000" }}
              />
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>
    </>
  );
}
