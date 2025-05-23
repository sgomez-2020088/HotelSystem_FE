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
                response?.err?.response?.data.message ||
                'Error al crear la habitacion de hotel'
            )
        }
        return toast.success('Habitación creada')
    }
  return {
    addHotelRoom
  }
}
