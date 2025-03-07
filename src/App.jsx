import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ErrorBoundary from "./ErrorBoundary";


import ProtectedRoute from "./Component/Auth/Auth_pages/ProtectedRoute";



import Login from "./Component/Auth/Auth_pages/Login";
import AdminDashboard from "./Component/dashboard/AdminDashboard";
import TeacherDashboard from "./Component/dashboard/TeacherDashboard";
import StudentDashboard from "./Component/dashboard/StudentDashboard";
import ParentDashboard from "./Component/dashboard/ParentDashboard";
import Unauthorized from "./Component/dashboard/Unauthorized";

function App() {
  return (
    <ErrorBoundary>
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/unauthorized" element={<Unauthorized />} />
        <Route path="/admin" element={<ProtectedRoute role="admin"><AdminDashboard/></ProtectedRoute>} />
        <Route path="/teacher" element={<ProtectedRoute role="teacher"><TeacherDashboard /></ProtectedRoute>} />
        <Route path="/student" element={<ProtectedRoute role="student">< StudentDashboard/></ProtectedRoute>} />
        <Route path="/parent" element={<ProtectedRoute role="parent"><ParentDashboard /></ProtectedRoute>} />
      </Routes>
    </Router>
    </ErrorBoundary>
  );
}

export default App;
