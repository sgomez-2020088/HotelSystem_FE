import React from 'react'
import './SideBar.css'
export const SideBar = ({children}) => {
  return (
   <div style={{ 
      backgroundColor: '#333333',
      width: '180px',
      padding: '10px',
      color: '#ffffff',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      overflowY: 'auto',
      boxSizing: 'border-box',
      zIndex: 1000,         
      }} >
        {children}
        </div>
  )
}
