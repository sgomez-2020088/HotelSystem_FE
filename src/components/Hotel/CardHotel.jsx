import React from 'react'

import './CardHotel.css'

export const CardHotel = ({name, address, category,amenities, image, handleClick, handleClick2, handleClick3}) => {

  const role = localStorage.getItem('role')

  let imageSrc = ''
    if (image && image.data) {
    const base64 = btoa(
      String.fromCharCode(...new Uint8Array(image.data.data || image.data))
    )
    imageSrc = `data:${image.contentType};base64,${base64}`
  }

  return (
    <div className="card-hotel">
      <h1 className="hotel-name">Hotel {name}</h1>
      <h2 className="hotel-address">Dirección: {address}</h2>
      <p className="hotel-category">Categoría: {category}</p>
      <p className="hotel-amenities">Amenidades: {amenities}</p>
    
      {role == 'ADMIN'?<button onClick={handleClick}>Actualizar</button>:''}
      {role == 'ADMIN'?<button className="delete" onClick={handleClick2}>Eliminar</button>:''}
      <button onClick={handleClick3}> Habitaciones </button>
    </div>
  )
}