import React from 'react'
import { deleteHotelRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useDeleteHotel = () => {
    const deleteHotel = async(id)=>{
       const response = await deleteHotelRequest(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al traer el hotel'
            )
        }
        return toast.success('Hotel eliminado')
    }
  return {
    deleteHotel
  }
}
