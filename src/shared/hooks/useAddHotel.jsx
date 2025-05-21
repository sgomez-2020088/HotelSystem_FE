import { useState } from "react"
import { addNewHotelRequest } from "../../services/api"
import toast from "react-hot-toast"


export const useAddHotel = () => {
    const addHotel = async(name,address,category,amenities)=>{
        const hotel ={
            name,
            address,
            category,
            amenities,
        }
        const response = await addNewHotelRequest(hotel)
        if(response.error){
            return console.error(
                response?.err?.response
            )
        }
        return toast.success('Hotel creado')
    } 
    return {
    addHotel   
  }
}
