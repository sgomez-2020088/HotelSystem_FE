import React, { useState } from 'react'
import { useAddHotel } from '../../shared/hooks/useAddHotel'
import { Input } from '../Input'
import './NewHotelCSS.css'

export const NewHotel = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [category, setCategory] = useState('')
  const [amenities, setAmenities] = useState('')
  //const [hotelImage, setHotelImage] = useState(null)

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
    console.log(value)
    setCategory(value)
  }

  const handleChangeAmenities = (event) => {
    const value = event.target.value
    
    setAmenities(value)
  }

   /*const handleChangeImageHotel = (event) => {
    const file = event.target.files[0]
    console.log(file)
    setHotelImage(file)
  }*/
  
  return (
  <div className="form-wrapper">
    <form className='form-container' onSubmit={handleSubmit}>
      <h1>Nuevo hotel</h1>
      <p>Guarda tu nuevo hotel</p>
      <Input field='name' label='Name' type="text" value={name} handleValueChange={handleChangeName}/>
      <Input field='address ' label='Address'type="text" value={address} handleValueChange={handleChangeAdrees}/>
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
      <br/>
      <br/>
      <Input field='amenities' label='Amenities' type="text" value={amenities} handleValueChange={handleChangeAmenities}/>
      
      {/*<Input type="file" label="Agregar imagen"   accept="image/png, image/jpg',image/webp,image/jpeg" 
        handleValueChange={handleChangeImageHotel}/>*/}
      <button>Guardar</button>
    </form>
  </div>
)

}
