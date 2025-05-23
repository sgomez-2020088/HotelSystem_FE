import React, { useState } from 'react'
import { getMyReservation } from '../../services/api'
import toast from 'react-hot-toast'

export const useMyRerservation = () => {
    const [reservations, setReservations] = useState(null)

    const getMyReservations = async(id)=>{
        const response = await getMyReservation(id)
        if(response.error){
            return toast.error(response?.err?.response?.data.message ||
                'Error al traer reservaciones'
            )
        }
        console.log(response.data.reservations)
        setReservations(response.data.reservations)
       
    }
  return {
    reservations,
    isFetching: !reservations,
    getMyReservations
  }
}
