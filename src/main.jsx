import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
// Admin
import "./Component/Css Styles/Admin/Attendance.css"
import "./Component/Css Styles/Admin/Subject_and_Grades.css"
import "./Component/Css Styles/Admin/Exam_Records.css"
import "./Component/Css Styles/Admin/Add_New_Teacher.css"
import "./Component/Css Styles/Admin/Add_Subject_details.css"
import "./Component/Css Styles/Admin/Search_Teacher.css"
import "./Component/Css Styles/Admin/Subject_to_Handle.css"
import "./Component/Css Styles/Admin/Timetable.css"
import "./Component/Css Styles/Admin/Header.css"
import "./Component/Css Styles/Admin/Login_Page.css"
import "./Component/Css Styles/Admin/Side_Navbar.css"
import "./Component/Css Styles/Admin/Mainmenu.css"
import "./Component/Css Styles/Admin/View_Timetable.css"
import "./Component/Css Styles/Admin/Add_Exams.css"
import "./Component/Css Styles/Admin/View_Exam_Detail.css"
import "./Component/Css Styles/Admin/Add_Announcements.css"
import "./Component/Css Styles/Admin/View_Announcements.css"
import "./Component/Css Styles/Admin/Add_Events.css"
import "./Component/Css Styles/Admin/View_Events.css"

// Teacher




createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  
    <App />
   
  </StrictMode>,
)
