import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Input } from '../Input'
import { useAddHotelRoom } from '../../shared/hooks/useAddHotelRoom'

export const AddRoom = () => {

    const {id} = useParams()
    let navigate = useNavigate()
    
    const [number, setNumber] = useState('')
    const [type, setType] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')
    const [idHotel, setidHotel] = useState(id)

    const {addHotelRoom} = useAddHotelRoom()

    const [formValidation, setFormValidation] = useState({
        number: undefined,
        type: undefined,
        price: undefined,
        description: undefined
    })


    const handleSubmit = (e)=>{
        e.preventDefault()
        addHotelRoom(number,type,price,description,idHotel)
    }

    const handleChangeNumber = (e)=>{
        const value = e.target.value
        setNumber(value)
    }

    const handleChangeType = (e)=>{
        const value = e.target.value
        console.log(value)
        setType(value)
    }

    const handleChangePrice = (e)=>{
        const value = e.target.value
        setPrice(value)
    }

    const handleChangeDescription = (e)=>{
        const value = e.target.value
        setDescription(value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1> Nueva habitación</h1>
            <Input field='number' label='Number' value={number} handleValueChange={handleChangeNumber} />
            <Input field='price' label='Price' value={price} handleValueChange={handleChangePrice} />
           <label> Type</label>
            <select value={type} onChange={handleChangeType}>
                <option value='type'>Type</option>
                <option value='single'>Single</option>
                <option value='double'>Double</option>
                <option value='triple'>Triple</option>
                <option value='familiar'>Familiar</option>
                <option value='suite'>Suite</option>
            </select>
            <br/>
            <br/>
            <Input field='decription' label='Decription' value={description} handleValueChange={handleChangeDescription} />
            <button type='submit' onClick={() =>navigate(`/rooms/rooms/${id}`)}>Enviar</button>
        </form>
    </div>
  )
}
