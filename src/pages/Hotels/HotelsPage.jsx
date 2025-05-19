import React from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { NavBar } from '../../components/Navbar/NavBar'
import { HotelContent } from '../../components/HotelContent'
import { Link } from 'react-router-dom'

import './HotelPageCss.css'

export const HotelsPage = () => {
  return (
    <>
      <NavBar className="navbar">
        <h1>Hoteles</h1>
      </NavBar>

      <div className="main-layout">
        <SideBar className="sidebar">
          <ul>
            <li><Link className="sidebar-link">Agregar</Link></li>
            <li><Link className="sidebar-link">Editar</Link></li>
            <li><Link className="sidebar-link">Eliminar</Link></li>
          </ul>
        </SideBar>

        <HotelContent className="content"/>
      </div>
    </>
  )
}
