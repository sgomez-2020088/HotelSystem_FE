import React from 'react'
import { updateHotelRequest } from '../../services/api'

export const useUpdateHotel = () => {
    const updateHotel = async(name,address,category,amenities)=>{
        const hotel ={
            name,
            address,
            category,
            amenities
        }
        const response = await  updateHotelRequest(hotel)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al actualizar el hotel'
            )
        }
        return toast.success('Hotel actualizado')
    }
  return {
    updateHotel
  }
}
