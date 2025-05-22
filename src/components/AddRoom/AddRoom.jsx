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
    const disbled = formValidation.number === '' && formValidation.type === '' && formValidation.price === '' && formValidation.description === '' 

    console.log('Number',formValidation.number)
    console.log('Price',formValidation.price)
    console.log('Type',formValidation.type)
    console.log('Description',formValidation.description)

    const handleSubmit = (e)=>{
        e.preventDefault()
        addHotelRoom(number,type,price,description,idHotel)
    }

    const handleChangeNumber = (e)=>{
        const value = e.target.value
        const regex = /^\d+$/
        setFormValidation({...formValidation, number: regex.test(value)?'':'Ingrese unicamente numeros enteros'})
        setNumber(value)
    }

    const handleChangeType = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, type: value === 'type'?'Eliga un tipo de hotel':''})
        console.log(value)
        setType(value)
    }

    const handleChangePrice = (e)=>{
        const value = e.target.value
        const regex = /^\d+$/
        setFormValidation({...formValidation, price: regex.test(value)?'':'Ingrese unicamente numeros positivos'})
        setPrice(value)
    }

    const handleChangeDescription = (e)=>{
        const value = e.target.value
        setFormValidation({...formValidation, description: value.length === 0 ?'No puede dejar un campo vacio':''})
        setDescription(value)
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
        <h1> Nueva habitación</h1>
            <Input field='number' label='Number' value={number} handleValueChange={handleChangeNumber} />
            <span>{formValidation.number}</span>
            <Input field='price' label='Price' value={price} handleValueChange={handleChangePrice} />
             <span>{formValidation.price}</span>
           <label> Type</label>
            <select value={type} onChange={handleChangeType}>
                <option value='type'>Type</option>
                <option value='single'>Single</option>
                <option value='double'>Double</option>
                <option value='triple'>Triple</option>
                <option value='familiar'>Familiar</option>
                <option value='suite'>Suite</option>
            </select>
            <span>{formValidation.type}</span>
            <br/>
            <Input field='decription' label='Decription' value={description} handleValueChange={handleChangeDescription} />
            <span>{formValidation.description}</span>
            <button disabled={!disbled}type='submit' onClick={() =>navigate(`/rooms/rooms/${id}`)}>Enviar</button>
        </form>
    </div>
  )
}
