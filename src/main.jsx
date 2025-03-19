import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import "./style.css"
import "./Component/Css Styles/Attendance.css"
import "./Component/Css Styles/Subject_and_Grades.css"
import "./Component/Css Styles/Exam_Records.css"
import "./Component/Css Styles/Add_New_Teacher.css"



createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  
    <App />
   
  </StrictMode>,
)
