import { BrowserRouter as Router, Routes, Route } from "react-router-dom";








import Login from "./Component/Auth/Auth_pages/Login";
import AdminDashboard from "./Component/dashboard/AdminDashboard";
import TeacherDashboard from "./Component/dashboard/TeacherDashboard";
import StudentDashboard from "./Component/dashboard/StudentDashboard";
import ParentDashboard from "./Component/dashboard/ParentDashboard";

import Register from "./Component/Auth/Auth_pages/Register";

function App() {
  return (
    
    <Router>
      <Routes>

        {/*Admin*/}
        <Route path="/login" element={<Login/>} />
       
        <Route path="/admin" element={<AdminDashboard/>} />
       
        <Route path="/register" element={<Register/>} />





























        <Route path="/teacher" element={<TeacherDashboard />} />
        <Route path="/student" element={< StudentDashboard/>} />
        <Route path="/parent" element={<ParentDashboard />} />
      </Routes>
    </Router>
    
  );
}

export default App;
