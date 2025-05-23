import React from 'react'
import { deleteHotelRequest } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useDeleteHotel = () => {
  let navigate = useNavigate()
    const deleteHotel = async(id)=>{
       const response = await deleteHotelRequest(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al eliminar el hotel'
            )
        }
        navigate('/hotels/Hotels')
        return toast.success('Hotel eliminado')
    }
  return {
    deleteHotel
  }
}
