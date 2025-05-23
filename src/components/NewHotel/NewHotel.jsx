import React, { useState } from 'react'
import { useAddHotel } from '../../shared/hooks/useAddHotel'
import { Input } from '../Input'
import './NewHotelCSS.css'

export const NewHotel = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [category, setCategory] = useState('')
  const [amenities, setAmenities] = useState('')

  const [formValidation, setFormValidarion] = useState({
    name:undefined,
    address: undefined,
    category: undefined,
    amenities: undefined
  })

  const { addHotel } = useAddHotel()

  const isDisabled = formValidation.name === ''&& formValidation.category === ''&& formValidation.address === ''&& formValidation.amenities === ''
  const handleSubmit = (event) =>{
    event.preventDefault()
    addHotel(name, address, category, amenities)
  }

  const handleChangeName = (event) => {
    const value = event.target.value
    setFormValidarion({...formValidation, name: value.length === 0?'No puedes dejar campos vacios':''})
    setName(value)
  }

  const handleChangeAdrees = (event) => {
    const value = event.target.value
     setFormValidarion({...formValidation, address: value.length === 0?'No puedes dejar campos vacios':''})
    setAddress(value)
  }

  const handleChangeCategory = (event) => {
    const value = event.target.value
     setFormValidarion({...formValidation, category: value === 'Category'?'No puedes dejar campos vacios':''})
    console.log(value)
    setCategory(value)
  }

  const handleChangeAmenities = (event) => {
    const value = event.target.value
    setFormValidarion({...formValidation, amenities: value.length === 0?'No puedes dejar campos vacios':''})
    setAmenities(value)
  }

   
  
  return (
  <div className="form-wrapper">
    <form className='form-container' onSubmit={handleSubmit}>
      <h1>Nuevo hotel</h1>
      <p>Guarda tu nuevo hotel</p>
      <Input field='name' label='Name' type="text" value={name} handleValueChange={handleChangeName}/>
      <span>{formValidation.name}</span>
      <Input field='address ' label='Address'type="text" value={address} handleValueChange={handleChangeAdrees}/>
      <span>{formValidation.address}</span>
      <label>Category</label>
      <select onChange={handleChangeCategory} value={category}>
        <option value='Category'>Category</option>
        <option value='Hotel'>Hotel</option>
        <option value='Hostal'>Hostal</option>
        <option value='Casa de huéspedes'>Casa de huéspedes</option>
        <option value='HotelNegocios'>Hotel de Negocios</option>
        <option value='HotelBoutique'>Hotel de Boutique</option>
        <option value='ComplejoHotelero'>Complejo Hotelero</option>
        <option value='HotelAeropuerto'>Hotelde Aeropuerto</option>
        <option value='HotelMontana'>Hotel de Montaña</option>
        <option value='HotelEcologico'>Hotel Ecologico</option>
      </select>
      <span>{formValidation.category}</span>
      <br/>
      <Input field='amenities' label='Amenities' type="text" value={amenities} handleValueChange={handleChangeAmenities}/>
      <span>{formValidation.amenities}</span>
      <button type='submit' disabled={!isDisabled}>Guardar</button>
    </form>
  </div>
)

}
