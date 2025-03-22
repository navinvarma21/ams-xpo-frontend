import React, { useState } from "react";
import { PieChart, Pie, Cell } from "recharts";
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

export default function Teacher_Mainmenu() {
  const [currentStep, setCurrentStep] = useState(1);
  const chartHeight = 400; // Fixed height for all charts

  return (
    <div className="dashboard-container">
      <div className="multi-step-form" style={{ height: `${chartHeight}px` }}>
        {/* Step 1 - Performance Overview */}
        {currentStep === 1 && (
          <div className="form-step">
            <h3>Student Performance Overview (Step 1 of 3)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
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
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="internal_Exam_1" fill="#6CE5E8" />
                <Bar dataKey="internal_Exam_2" fill="#41B8D5" />
                <Bar dataKey="Main_Exam_3" fill="#2D8BBA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Step 2 - Performance by Standard */}
        {currentStep === 2 && (
          <div className="form-step">
            <h3>Performance by Standard (Step 2 of 3)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={[
                  {
                    name: "internal & Main Exam",
                    internal_Exam_1: 70,
                    internal_Exam_2: 95,
                    Main_Exam_3: 98,
                  },
                ]}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis domain={[0, 100]} />
                <Tooltip />
                <Legend />
                <Bar dataKey="internal_Exam_1" fill="#6CE5E8" />
                <Bar dataKey="internal_Exam_2" fill="#41B8D5" />
                <Bar dataKey="Main_Exam_3" fill="#2D8BBA" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        )}

        {/* Step 3 - Student Strength */}
        {currentStep === 3 && (
          <div className="form-step">
            <h3>Student Strength (Step 3 of 3)</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  dataKey="value"
                  data={[
                    { name: "Male", value: 23 },
                    { name: "Female", value: 27 },
                  ]}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  label={({ name, value }) => `${name}: ${value}`} // Adding labels
                >
                  <Cell key="male" fill="#FFBB01" />
                  <Cell key="female" fill="#FF3131" />
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Navigation Controls */}
      <div className="form-navigation">
        {currentStep > 1 && (
          <button onClick={() => setCurrentStep((prev) => prev - 1)}>
            Previous
          </button>
        )}
        {currentStep < 3 && (
          <button onClick={() => setCurrentStep((prev) => prev + 1)}>
            Next
          </button>
        )}
      </div>
    </div>
  );
}
