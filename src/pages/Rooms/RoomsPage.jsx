import React, { useState } from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import './RoomsPage.css'
import { RoomContent } from '../../components/RoomContent'



export const RoomsPage = () => {
    
    const [render, setRender] = useState(true)
    let navigate = useNavigate()
    const {id} = useParams()


    return (
        <>
        <NavBar className="navbar2">
                <h1>Habitaciones</h1>
        </NavBar>
        

        <div className="container2-plus">
        <SideBar className="sidebar">
            <ul>
            <li onClick={()=>{navigate(`/rooms/addRoom/${id}`)}}><Link className="sidebar-link">Agregar</Link></li>
            <li onClick={()=>{navigate(`/rooms/rooms/${id}`)}}><Link className="sidebar-link">Ver Habitaciones</Link></li>   
            <li onClick={()=>{navigate(`/hotels/hotels`)}}><Link className="sidebar-link">Ver Hoteles</Link></li>    
            </ul>
        </SideBar>
        <RoomContent/>
        </div>
        </>
        
    )
}
