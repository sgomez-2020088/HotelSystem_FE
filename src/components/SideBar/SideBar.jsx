import React from 'react'

export const SideBar = ({children}) => {
  return (
    <div style={{ 
      backgroundColor: '#333333',
       width: '180px', 
       padding: '5px', 
       color:'#ffffff', 
       height: '100vh', 
       position: 'fixed',
       top: 0, 
       left: 0, 
       overflowY: 'auto'       
      }}>
        {children}
        </div>
  )
}
