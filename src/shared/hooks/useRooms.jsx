import { useState } from "react"
import toast from "react-hot-toast"
import { getHotelRoomsRequest } from "../../services/api"


export const useRooms = () =>{
    const [room, setRoom] = useState(null)

    const getRoomById = async (id) =>{
        const response = await getHotelRoomsRequest(id)
        if(response.error){
            return toast.error(
                response?.err?.response?.message ||
                'Error al traer la habitacion de hotel'
            )
        }
        setRoom(response.data.rooms)
        console.log(response)
    }
    return{
        room,
        isFetching: !room,
        getRoomById
    }

}