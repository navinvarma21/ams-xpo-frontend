import React from 'react'
import Header from '../../one_time_use_component/Header'

import Parent_Navbar from '../../one_time_use_component/Parent_Navbar'

export default function ParentDashboard() {
  return (
    <>
     <Header/>
     <div style={{ display: "flex" }}>
            
     
             <Parent_Navbar/>     
           </div> 
    </>
  )
}
