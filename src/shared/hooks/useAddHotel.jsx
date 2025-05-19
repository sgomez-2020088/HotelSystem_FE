import { useState } from "react"
import { addNewHotelRequest } from "../../services/api"
import toast from "react-hot-toast"


export const useAddHotel = () => {
    const addHotel = async(name,address,category,amenities)=>{
        const hotel ={
            name,
            address,
            category,
            amenities
        }
        const response = await addNewHotelRequest(hotel)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al crear el hotel'
            )
        }
        return toast.success('Hotel creado')
    } 
    return {
    addHotel   
  }
}
