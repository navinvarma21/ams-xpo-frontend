import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Login
import Login from "./Component/Auth/Auth_pages/Login";
// Admin
import AdminDashboard from "./Component/pages/AdminDashboard/Admin-Pages/AdminDashboard";

import TeacherDashboard from "./Component/pages/TeacherDashboard/TeacherDashboard";
import StudentDashboard from "./Component/pages/StudentDashboard/StudentDashboard";
import ParentDashboard from "./Component/pages/ParentDashboard/ParentDashboard";
import Register from "./Component/Auth/Auth_pages/Register";

function App() {
  return (
    <Router>
      <Routes>
        {/* Login */}
        <Route path="/" element={<Login />} />

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Register */}
        <Route path="/register" element={<Register />} />

        {/* Teacher */}
        <Route path="/teacher" element={<TeacherDashboard />} />

        {/* Student */}
        <Route path="/student" element={<StudentDashboard />} />

        {/* Parent */}
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
      <ToastContainer position="top-right" />
    </Router>
  );
}

export default App;
