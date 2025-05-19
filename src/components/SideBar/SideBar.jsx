import React from 'react'
import { Link } from 'react-router-dom'

export const SideBar = ({children}) => {
  return (
    <div style={{ backgroundColor: '#333333', width: '180px', padding: '5px', color:'#ffffff' }}>{children}</div>
  )
}
