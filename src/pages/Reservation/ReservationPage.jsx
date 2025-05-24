import React from 'react'
import { ReservationContent } from '../../components/ReservationContent'
import { NavBar } from '../../components/Navbar/NavBar'
import { SideBar } from '../../components/SideBar/SideBar'
import { Link, useNavigate, useParams } from 'react-router-dom'

export const ReservationPage = () => {

  let {idhotel} = useParams()

  let navigate = useNavigate(idhotel)
  return (
    <>  
        <NavBar className="navbar2"> 
            <h1>Reservation</h1>
            <button className='botonOut' onClick={()=>(navigate('/'))}> Log Out </button>
        </NavBar>

        <div className='container2-plus'>
            <SideBar>
                <ul>
                      <li onClick={()=>{navigate(`/reservation/myReservations/${idhotel}`)}}><Link className="sidebar-link">Ver mis reservaciones</Link></li>   
                    <li onClick={()=>{navigate(`/rooms/rooms/${idhotel}`)}}><Link className="sidebar-link">Ver habitaciones</Link></li>   
                </ul>
            </SideBar>
        </div>
        <ReservationContent/>
    </>
  )
}
