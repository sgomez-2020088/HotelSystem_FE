import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import { useRooms } from '../../shared/hooks/useRooms'
import { CardRoom } from './CardRoom'


export const Rooms = () => {
let navigate = useNavigate()
const {room,getRoomById,isFetching}=useRooms()
const {id} = useParams()


useEffect(() => {
    getRoomById(id)
}, [])
    if(isFetching){
        return(
            <div>
                <ScaleLoader height={80}/>
            </div>
        )
    }


    return (
        <div className='rooms-container'>
            {
                room.map((room)=>(<CardRoom key={room._id} number={room.number} type={room.type} 
                    price={room.price} description={room.description} hotel={room.hotel.name}
                
                />))
            }
            
        </div>
    )
}
