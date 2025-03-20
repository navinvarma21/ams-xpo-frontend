import React from "react";
import { PieChart, Pie, Tooltip, Cell } from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip as BarTooltip,
  ResponsiveContainer,
} from "recharts";

const data01 = [
  { name: "Tamil", value: 65 },
  { name: "English", value: 93 },
  { name: "Maths", value: 90 },
  { name: "Science", value: 76 },
  { name: "Social Science", value: 60 },
  { name: "Moral Science", value: 96 },
];

// Calculate the total marks and obtained percentage
const totalMarks = 600; // Assume total marks for all subjects
const obtainedMarks = data01.reduce((total, subject) => total + subject.value, 0);
const obtainedPercentage = ((obtainedMarks / totalMarks) * 100).toFixed(2);

const barChartData = [
  { name: "Overall Pass %", value: 100 },
  { name: "Avg Pass %", value: 40 },
  { name: "Obtained %", value: obtainedPercentage },
];

export default function Grades_and_Marks() {
  return (
    <div className="grade_and_marks_container">
      <div className="grade_and_marks">
        <h1 className="grade_and_marks__title">Grade/Marks</h1>
        <div className="grade_and_marks__filters">
          <input
            type="text"
            name="search"
            placeholder="Enter Reg No"
            required
            className="grade_and_marks__search"
          />
          <div className="grade_and_marks__header">
            <select
              name="Select Exam"
              required
              className="grade_and_marks__select grade_and_marks__select--exam"
            >
              <option value="" disabled selected>
                Select Exam
              </option>
              <option value="half-yearly">Half-Yearly</option>
              <option value="quarterly">Quarterly</option>
              <option value="annual">Annual</option>
              <option value="internal">Internal</option>
            </select>

            <select
              name="section"
              required
              className="grade_and_marks__select grade_and_marks__select--section"
            >
              <option value="" disabled selected>
                Select Year
              </option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
            </select>
          </div>
        </div>

        <div className="exam-table-container_Student_and_Parent">
          <table className="exam-table">
            <thead>
              <tr>
                <th>S.No</th>
                <th>Subject Name</th>
                <th>Obtained Marks</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1.</td>
                <td>Tamil</td>
                <td>95 / 100</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>2.</td>
                <td>English</td>
                <td>93 / 100</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>3.</td>
                <td>Maths</td>
                <td>90 / 100</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>4.</td>
                <td>Science</td>
                <td>97 / 100</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>5.</td>
                <td>Social Science</td>
                <td>90 / 100</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td>6.</td>
                <td>Moral Science</td>
                <td>96 / 100</td>
                <td>Pass</td>
              </tr>
              <tr>
                <td colSpan="2">Total</td>
                <td>= 561 / 600</td>
                <td>Pass</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="pie_chart">
          <PieChart className="pie_chart_1" width={750} height={390}>
            
            <Pie
              dataKey="value"
              data={data01}
              cx={500}
              cy={200}
              innerRadius={40}
              outerRadius={80}
              fill="#82ca9d"
              label={({ name, value }) => `${name}: ${value}`}
            >
              {data01.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    [
                      "#FFBB01",
                      "#FF3131",
                      "#8C52FF",
                      "#00000F",
                      "#0084D0",
                      "#1F1F4A",
                    ][index]
                  }
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <ResponsiveContainer width={"30%"} height={250}>
            <BarChart
              data={barChartData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <BarTooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
