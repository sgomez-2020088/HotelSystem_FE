import React from 'react'
import { updateHotelRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useUpdateHotel = () => {
    let navigate = useNavigate()
    const updateHotel = async(id,name,address,category,amenities)=>{
        const hotel ={
            id,
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
        navigate('/hotels/Hotels')
        return toast.success('Hotel actualizado')
    }
  return {
    updateHotel
  }
}
