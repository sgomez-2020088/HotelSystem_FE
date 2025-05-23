import React from 'react'
import { addReservationRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useAddReservation = () => {

    const addReservation = async(hotel, hotelRoom,checkIn,checkOut,services) =>{
        const reservation={
            hotel,
            hotelRoom,
            checkIn,
            checkOut,
            services
        }
        const response = await addReservationRequest(reservation)
         if(response.error){
            return toast.error(response?.err?.response?.data.message ||
                'Error al crear la reservación'
            )
        }
        return toast.success('Reservación creada')
    }
  return {
    addReservation
  }
}
