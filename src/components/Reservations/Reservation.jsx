import React, { useEffect } from 'react'
import { useMyRerservation } from '../../shared/hooks/useMyRerservation'
import { ScaleLoader } from 'react-spinners'
import { CardReservations } from './CardReservations'

export const Reservation = () => {

  const userId = localStorage.getItem('userId')
  
  const {reservations, isFetching,getMyReservations}=useMyRerservation()

console.log(userId)
  useEffect(()=>{
    getMyReservations(userId)
  },[])

  console.log('Reservaciones',reservations)

  if(isFetching){
     return(
            <div>
                <ScaleLoader height={80}/>
            </div>
        )
  }
   
  return (
    <div className='rooms-container'>
      {
        reservations.map((reserva)=>(<CardReservations key={reserva._id} hotel={reserva.hotel.name} hotelRoom={reserva.hotelRoom.number} type={reserva.hotelRoom.type}
            checkIn={reserva.checkIn} checkOut={reserva.checkOut} services={reserva.services} total={reserva.total}
        />))
      }
    </div>
  )
}
