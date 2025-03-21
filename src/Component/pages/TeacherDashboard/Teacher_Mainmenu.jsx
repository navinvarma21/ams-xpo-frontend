import React from "react";
import { useCallback, useState } from "react";
import { PieChart, Pie, Sector ,  Cell} from "recharts";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";


const data0 = [
  {
    name: "First Term",
    internal_Exam_1: 70,
    internal_Exam_2: 95,
    Main_Exam_3: 98,
  },
  {
    name: "Second Term",
    internal_Exam_1: 80,
    internal_Exam_2: 85,
    Main_Exam_3: 60,
  },
  {
    name: "Annual",
    internal_Exam_1: 40,
    internal_Exam_2: 70,
    Main_Exam_3: 100,
  },
];

const data1 = [
  {
    name: "internal & Main Exam",
    internal_Exam_1: 70,
    internal_Exam_2: 95,
    Main_Exam_3: 98,
  },
];


const data2 = [
  { name: "Male", value: 23 },
  { name: "Female", value: 27 },
 
];



export default function Teacher_Mainmenu() {
  return (
    <>
      <div className="dashboard-container">
        {/* Student Performance Overview */}
        <div className="performance-overview">
          <h3>Student Performance Overview</h3>
          <div className="chart-container">
            <ResponsiveContainer width={"64%"} height={380}>
              <BarChart
                data={data0}
                margin={{
                  top: 20,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} /> {/* Set YAxis domain from 0 to 100 */}
                <Tooltip />
                <Legend />

                <Bar dataKey="internal_Exam_1" stackId="a" fill="#6CE5E8" />
                <Bar dataKey="internal_Exam_2" stackId="a" fill="#41B8D5" />
                <Bar dataKey="Main_Exam_3" stackId="a" fill="#2D8BBA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Student Performance Overview by Standard & Section */}
        <div className="performance-by-section">
          <h3>Student Performance Overview by Standard</h3>
          <ResponsiveContainer width={"64%"} height={300}>
            <BarChart
              data={data1}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
              barSize={25} // Reduced bar size for less gap
              barCategoryGap={50} // Added gap between bars
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis domain={[0, 100]} /> {/* Set YAxis domain from 0 to 100 */}
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar dataKey="internal_Exam_1" fill="#6CE5E8" />
              <Bar dataKey="internal_Exam_2" fill="#41B8D5" />
              <Bar dataKey="Main_Exam_3" fill="#2D8BBA" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Student Strength */}
        <div className="student-strength">
          <h3>Students strength</h3>
           <PieChart className="pie-chart-teacher" width={450} height={390}>
                      
                      <Pie
                        dataKey="value"
                        data={data2}
                        cx={500}
                        cy={200}
                        innerRadius={40}
                        outerRadius={80}
                        fill="#82ca9d"
                        label={({ name, value }) => `${name}: ${value}`}
                      >
                        {data2.map((entry, index) => (
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
        </div>
      </div>
    </>
  );
}
