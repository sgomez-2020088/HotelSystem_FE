import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddReservation } from '../../shared/hooks/useAddReservation'
import { Input } from '../Input'

export const AddReservation = () => {

    let {id} = useParams()
    let {idhotel} = useParams()

    const [hotel, setHotel] = useState(idhotel)
    const [hotelRoom, setHotelRoom] = useState(id)
    const [checkIn, setChekIn] = useState('')
    const [checkOut, setCheckOut] = useState('')
    const [services, setServices] = useState('')

    const [formValidation, setFormValidation] = useState({
        checkIn: undefined,
        checkOut: undefined,
        services: undefined
    })

    const {addReservation}=useAddReservation()
    const handleSubmit = (e)=>{
        e.preventDefault()
        addReservation(hotel, hotelRoom,checkIn,checkOut,services)
    }

    const handleChangeChakeIn = (e)=>{
        const value = e.target.value
        console.log(value)
        setChekIn(value)
    }

    const handleChangeChakeOut = (e)=>{
        const value = e.target.value
        console.log(value)
        setCheckOut(value)
    }

    const handleChangeServices = (e)=>{
        const value = e.target.value
        setServices(value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1> Nueva habitación</h1>
            <Input field='checkIn' type='date'  label='Dia de entrada' value={checkIn} handleValueChange={handleChangeChakeIn}/>
            <Input field='checkOut' type='date' label='Dia de salida' value={checkOut} handleValueChange={handleChangeChakeOut}/>
            <Input field='Services' type='text' label='Servicios extras' value={services} handleValueChange={handleChangeServices}/>
            <button type='submit'>Guardar</button>
        </form>
    </div>
  )
}
