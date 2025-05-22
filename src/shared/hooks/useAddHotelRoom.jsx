import React from 'react'
import { addHotelRoomRequest } from '../../services/api'
import toast from 'react-hot-toast'


export const useAddHotelRoom = () => {
    
    const addHotelRoom = async(number,type,price,description,idHotel)=>{
        
        const hotelRoom = {
            number,
            type,
            price,
            description,
            idHotel
        }
        const response = await addHotelRoomRequest(hotelRoom)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al crear la habitación'
            )
        }
        return toast.success('Habitación creada')
    }
  return {
    addHotelRoom
  }
}
