import React from 'react'
import { NavBar } from '../../components/Navbar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { Link, useNavigate } from 'react-router-dom'
import './RoomsPage.css'
import { RoomContent } from '../../components/RoomContent'



export const RoomsPage = () => {
    
    let navigate = useNavigate()

    return (
        <>
        <NavBar className="navbar2">
                <h1>Habitaciones</h1>
        </NavBar>
        

        <div className="container2-plus">
        <SideBar className="sidePlus">
            <ul>
            <li onClick={()=>{navigate()}}><Link>Agregar</Link></li>
            <li onClick={()=>{navigate()}}><Link>Ver Habitaciones</Link></li>
            <li><Link >Editar</Link></li>
            <li><Link>Eliminar</Link></li>
            
            </ul>
        </SideBar>
        <RoomContent/>
        </div>
        </>
        
    )
}
