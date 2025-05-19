import React from 'react'

import './CardHotel.css'
export const CardHotel = ({name, address, category,amenities}) => {
  return (
    <div className="card-hotel">
      <h1 className="hotel-name">Hotel {name}</h1>
      <h2 className="hotel-address">Dirección: {address}</h2>
      <p className="hotel-category">Categoría: {category}</p>
      <p className="hotel-amenities">Amenidades: {amenities}</p>
    </div>
  )
}