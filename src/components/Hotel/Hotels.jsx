import React, { useEffect, useState } from 'react'
import { useHotels } from '../../shared/hooks/useHotels'
import {CardHotel} from '../Hotel/CardHotel'
import { useOutletContext } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'

export const Hotels = () => {

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

  return (
    <div>
      {
        hotels.map((hotel)=>(<CardHotel key={hotel._id} name={hotel.name} address={hotel.address} category={hotel.category} amenities={hotel.amenities}/>))
      }
      
    </div>
  )
}
