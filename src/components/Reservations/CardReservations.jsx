import React, { useState } from 'react'
import './CardReservations.css'
import dayjs from 'dayjs'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'


export const CardReservations = ({hotel, hotelRoom, checkIn, checkOut, services, total, type}) => {
    const [showCalendar, setShowCalendar] = useState(false)
    const events = [
    {
      title: 'Reservación',
      start: dayjs(checkIn).add(1, 'day').format('YYYY-MM-DD'),
      end: dayjs(checkOut).add(2, 'day').format('YYYY-MM-DD'),
      allDay: true,
      className: 'reservation-event'
    }
  ]

  const handleClikcCalendar = () => {
    setShowCalendar(!showCalendar)
  }
  console.log(dayjs(checkIn).format('YYYY-MM-DD'))

  const dateIn =  dayjs(checkIn).format('YYYY-MM-DD')
  const dateOut = dayjs(checkOut).format('YYYY-MM-DD')
   return (
    <div className="card-reservations">
      <h2 className="card-reservations__hotel">Hotel: {hotel}</h2>
      <p className="card-reservations__room">Habitación: {hotelRoom}</p>
      <p className="card-reservations__room">Tipo de habitación: {type}</p>
      <div className="card-reservations__dates">
        <p><strong>Check-in:</strong> {dateIn}</p>
        <p><strong>Check-out:</strong> {dateOut}</p>
      </div>
      <div className="card-reservations__services">
        <strong>Servicios:{services}</strong>
      </div>
      <button className='calendarButton' onClick={handleClikcCalendar}>
        {showCalendar ? 'Ocultar Calendario' : 'Mostrar Calendario'}
      </button>

      {showCalendar && (
        <div className="calendar-wrapper">
         <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" events={events} />
        </div>
      )}
      <p className="card-reservations__total"><strong>Total:</strong> Q{total}</p>
    </div>
  )
}
