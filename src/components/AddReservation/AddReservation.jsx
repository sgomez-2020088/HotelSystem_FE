import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useAddReservation } from '../../shared/hooks/useAddReservation'
import { Input } from '../Input'
import dayjs from 'dayjs'

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

    const isDisable = formValidation.checkIn === '' && formValidation.checkOut === '' && formValidation.services===''
    
    console.log('Date',dayjs().format('YYYY-MM-DD'))
    const {addReservation}=useAddReservation()
    const handleSubmit = (e)=>{
        e.preventDefault()
        addReservation(hotel, hotelRoom,checkIn,checkOut,services)
    }

    const handleChangeChakeIn = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, checkIn: dayjs(value).isBefore(dayjs(), 'day')?'No puedes reservar en estas fechas':''})
        console.log(value)
        setChekIn(value)
    }

    const handleChangeChakeOut = (e)=>{
        const value = e.target.value
         setFormValidation({...formValidation, checkOut: dayjs(value).isBefore(dayjs(), 'day')?'No puedes reservar en estas fechas': dayjs(value).isBefore(dayjs(checkIn),'day')?'No se puede reservar una fecha antes del checkIn':''})
        console.log(value)
        setCheckOut(value)
    }

    const handleChangeServices = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, services: value.length === 0?'No se puede dejar campos vacios':''})
        setServices(value)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <h1> Nueva habitación</h1>
            <Input field='checkIn' type='date'  label='Dia de entrada' value={checkIn} handleValueChange={handleChangeChakeIn}/>
            <span>{formValidation.checkIn}</span>
            <Input field='checkOut' type='date' label='Dia de salida' value={checkOut} handleValueChange={handleChangeChakeOut}/>
            <span>{formValidation.checkOut}</span>
            <Input field='Services' type='text' label='Servicios' value={services} handleValueChange={handleChangeServices}/>
            <span>{formValidation.services}</span>
            <button disabled={!isDisable}type='submit'>Guardar</button>
        </form>
    </div>
  )
}
