import React, { useEffect, useState } from 'react'
import { useHotels } from '../../shared/hooks/useHotels'
import {CardHotel} from '../Hotel/CardHotel'
import { ScaleLoader } from 'react-spinners'
import './Hotels.css'
import { useNavigate } from 'react-router-dom'

export const Hotels = () => {
let navigate = useNavigate()
const {hotels,getHotels,isFetching}=useHotels()
const [render, setRender] = useState(true)

useEffect(() => {
    getHotels()
  }, [])
  console.log(render)
  if(isFetching){
    return(
      <div>
        <ScaleLoader height={80} />
      </div>
    )
  }
  console.log(hotels)
  return (
    <div className='hotels-container'>
      {
        hotels.map((hotel)=>(<CardHotel key={hotel._id} name={hotel.name} address={hotel.address} category={hotel.category} 
          amenities={hotel.amenities} image={hotel.hotelImages} handleClick={()=>navigate(`/hotels/updateHotel/${hotel._id}`)} 
          handleClick2={()=>navigate(`/hotels/deleteHotel/${hotel._id}`)} />))
      }
      
    </div>
  )
}
