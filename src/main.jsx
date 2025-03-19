import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import "./style.css"
import "./Component/Css Styles/Attendance.css"
import "./Component/Css Styles/Subject_and_Grades.css"
import App from './App.jsx'



{/* Your app components go here */}

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
  
    <App />
   
  </StrictMode>,
)
