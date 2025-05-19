import React, { useEffect } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { NavBar } from '../../components/Navbar/NavBar'
import { HotelContent } from '../../components/HotelContent'
import { Link } from 'react-router-dom'

import './HotelPageCss.css'
import { useHotels } from '../../shared/hooks/useHotels'
import { ScaleLoader } from 'react-spinners'

export const HotelsPage = () => {

  const {hotels, getHotels,isFetching} =useHotels()


  useEffect(() => {
    getHotels()
  }, [])
  
  
  
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
