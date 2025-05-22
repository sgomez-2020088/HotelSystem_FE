import { useState } from "react"
import { addNewHotelRequest } from "../../services/api"
import toast from "react-hot-toast"
import { useNavigate } from "react-router-dom"


export const useAddHotel = () => {
    let navigate = useNavigate()
    const addHotel = async(name,address,category,amenities)=>{
        const hotel ={
            name,
            address,
            category,
            amenities,
        }
        const response = await addNewHotelRequest(hotel)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al crear el hotel'
            )
        }
        navigate('/hotels/Hotels')
        return toast.success('Hotel creado')
    } 
    return {
    addHotel   
  }
}
