import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
// Admin
import "./Component/Css Styles/Admin_and_Teacher/Attendance.css"
import "./Component/Css Styles/Admin_and_Teacher/Subject_and_Grades.css"
import "./Component/Css Styles/Admin_and_Teacher/Exam_Records.css"
import "./Component/Css Styles/Admin_and_Teacher/Add_New_Teacher.css"
import "./Component/Css Styles/Admin_and_Teacher/Add_Subject_details.css"
import "./Component/Css Styles/Admin_and_Teacher/Search_Teacher.css"
import "./Component/Css Styles/Admin_and_Teacher/Subject_to_Handle.css"
import "./Component/Css Styles/Admin_and_Teacher/Timetable.css"
import "./Component/Css Styles/Admin_and_Teacher/Header.css"
import "./Component/Css Styles/Admin_and_Teacher/Login_Page.css"
import "./Component/Css Styles/Admin_and_Teacher/Side_Navbar.css"
import "./Component/Css Styles/Admin_and_Teacher/Mainmenu.css"
import "./Component/Css Styles/Admin_and_Teacher/View_Timetable.css"
import "./Component/Css Styles/Admin_and_Teacher/Add_Exams.css"
import "./Component/Css Styles/Admin_and_Teacher/View_Exam_Detail.css"
import "./Component/Css Styles/Admin_and_Teacher/Add_Announcements.css"
import "./Component/Css Styles/Admin_and_Teacher/View_Announcements.css"
import "./Component/Css Styles/Admin_and_Teacher/Add_Events.css"
import "./Component/Css Styles/Admin_and_Teacher/View_Events.css"
import "./Component/Css Styles/Admin_and_Teacher/Subject_and_Grades_10to12.css"



// Student

import "./Component/Css Styles/Student/Student_Navbar.css"
import "./Component/Css Styles/Student/Grades_and_Marks.css"



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  
    <App />
   
  </StrictMode>,
)
