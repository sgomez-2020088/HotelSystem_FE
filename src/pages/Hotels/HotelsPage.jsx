import React, { useEffect, useRef, useState } from 'react'
import { SideBar } from '../../components/SideBar/SideBar'
import { NavBar } from '../../components/Navbar/NavBar'
import { HotelContent } from '../../components/HotelContent'
import { Link, useNavigate } from 'react-router-dom'

import './HotelPageCss.css'

import { useHotels } from '../../shared/hooks/useHotels'
import { useLogin } from '../../shared/hooks/useLogin'


export const HotelsPage = () => {

  const {hotels, getHotels,isFetching} =useHotels()
  const {user}=useLogin()
  const role = localStorage.getItem('role')
  let ref = useRef()

  let navigate = useNavigate()

  return (
    <>
      <NavBar className="navbar">
        <h1>Hoteles</h1>
        <button className='botonOut' onClick={()=>(navigate('/'))}> Log Out </button>
      </NavBar>

      <div className="main-layout">
        <SideBar className="sidebar">
          <ul>
            {role == 'ADMIN'?<li onClick={()=>{navigate('/hotels/addHotel')}}><Link  ref={ref}className="sidebar-link">Agregar</Link></li>:''}
            <li onClick={()=>{navigate('/hotels/Hotels')}}><Link  ref={ref} className="sidebar-link">Ver hoteles</Link></li>
          
          
          </ul>
        </SideBar>

        <HotelContent className="content" hotels={hotels} getHotels={getHotels}/>
      </div>
    </>
  )
}
