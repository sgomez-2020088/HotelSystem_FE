import React from 'react'
import './CardRoom.css'

export const CardRoom = ({ number, type, price, description, hotel }) => {
    return (
        <div className="card-room">
        <div className="card-room-header">
            <h3>Habitación {number}</h3>
            <span className="room-type">{type}</span>
        </div>
        <p className="room-description">{description}</p>
        <div className="card-room-footer">
            <p className="room-price">Precio: Q{price}</p>
            <p className="room-hotel">Hotel: {hotel}</p>
        </div>
        </div>
    )
}