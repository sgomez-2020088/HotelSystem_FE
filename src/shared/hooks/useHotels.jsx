import React, { useState } from 'react'
import { getHotelsRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useHotels = () => {
    const [hotels, setHotels] = useState(null)
    
    const getHotels = async()=>{
        const response = await getHotelsRequest()
        if(response.error){
            return toast.error(
                response?.err?.response?.data?.message || 
                'Error al obtener los hoteles, por favor intente mas tarde'
            )
        }
        setHotels(response.data.hotels)
    }
    return{
        hotels,
        isFetching: !hotels,
        getHotels
  }
}
