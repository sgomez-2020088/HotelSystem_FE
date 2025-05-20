import React, { useState } from 'react'
import { useAddHotel } from '../../shared/hooks/useAddHotel'
import { Input } from '../Input'
import './NewHotelCSS.css'

export const NewHotel = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [category, setCategory] = useState('')
  const [amenities, setAmenities] = useState('')

  const { addHotel } = useAddHotel()

  const handleSubmit = (event) =>{
    event.preventDefault()
    addHotel(name, address, category, amenities)
  }

  const handleChangeName = (event) => {
    const value = event.target.value

    setName(value)
  }

  const handleChangeAdrees = (event) => {
    const value = event.target.value

    setAddress(value)
  }

  const handleChangeCategory = (event) => {
    const value = event.target.value

    setCategory(value)
  }

  const handleChangeAmenities = (event) => {
    const value = event.target.value

    setAmenities(value)
  }
  return (
  <div className="form-wrapper">
    <form className='form-container' onSubmit={handleSubmit}>
      <h1>Nuevo hotel</h1>
      <p>Guarda tu nuevo hotel</p>
      <Input field='name' label='Name' type="text" value={name} handleValueChange={handleChangeName}/>
      <Input field='address' label='Address'type="text" value={address} handleValueChange={handleChangeAdrees}/>
      <Input field='category' label='Category' type="text" value={category} handleValueChange={handleChangeCategory}/>
      <Input field='amenities' label='Amenities' type="text" value={amenities} handleValueChange={handleChangeAmenities}/>
      <button>Guardar</button>
    </form>
  </div>
)

}
