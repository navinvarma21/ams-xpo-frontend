import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

        {/*Admin*/}
        <Route path="/login" element={<Login/>} />
       
        <Route path="/admin" element={<AdminDashboard/>} />
       
        <Route path="/register" element={<Register/>} />





























        <Route path="/teacher" element={<TeacherDashboard/>} />
        <Route path="/student" element={< StudentDashboard/>} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
