import React, { useEffect, useRef } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { NavBar } from '../../components/Navbar/NavBar'
import { HotelContent } from '../../components/HotelContent'
import { Link, useNavigate } from 'react-router-dom'

import './HotelPageCss.css'

import { useHotels } from '../../shared/hooks/useHotels'


export const HotelsPage = () => {

  const {hotels, getHotels,isFetching} =useHotels()


  let ref = useRef()

  let navigate = useNavigate()

  return (
    <>
      <NavBar className="navbar">
        <h1>Hoteles</h1>
      </NavBar>

      <div className="main-layout">
        <SideBar className="sidebar">
          <ul>
            <li onClick={()=>{navigate('/hotels/addHotel')}}><Link  ref={ref}className="sidebar-link">Agregar</Link></li>
             <li onClick={()=>{navigate('/hotels/Hotels')}}><Link  ref={ref} className="sidebar-link">Ver hoteles</Link></li>
           
          
          </ul>
        </SideBar>

        <HotelContent className="content" hotels={hotels} getHotels={getHotels}/>
      </div>
    </>
  )
}
