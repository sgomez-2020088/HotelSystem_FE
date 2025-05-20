import React from 'react'
import { Outlet } from 'react-router-dom'

export const HotelContent = ({hotels, getHotels}) => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}
