import React, { useState } from 'react'
import { getHotelByIdRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useHotelById = () => {
    const [hotel, setHotel] = useState(null)
    
    const getHotelById= async(id)=>{
        const response = await getHotelByIdRequest(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al traer el hotel'
            )
        }
        setHotel(response.data.hotel)
    }
  return {
    hotel,
    isFetching: !hotel,
    getHotelById
  }
}
