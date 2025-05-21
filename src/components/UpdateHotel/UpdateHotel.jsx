import React, { useEffect, useState } from 'react'
import { useHotelById } from '../../shared/hooks/useHotelById'
import { useParams } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'
import { Input } from '../Input'
import '../Hotel/CardHotel.css'
import { useUpdateHotel } from '../../shared/hooks/useUpdateHotel'

export const UpdateHotel = () => {

    const {hotel,isFetching, getHotelById} = useHotelById()
    const{updateHotel} =useUpdateHotel()
    
    const {id}= useParams()
    const [_id, set_Id] = useState(id)
    const [newName, setNewName] = useState('')
    const [newAddress, setNewAddress] = useState('')
    const [newCategory, setNewCategory] = useState('')
    const [newAmenities, setNewAmenities] = useState('')

    const [formValidation, setFormValidation] = useState({
        newName: undefined,
        newAddress: undefined,
        newCategory: undefined,
        newAmenities: undefined
    })
    useEffect(()=>{
        getHotelById(id)
    },[])

    useEffect(() => {
    if (hotel) {
      setNewName(hotel.name)
      setNewAddress(hotel.address)
      setNewCategory(hotel.category)
      setNewAmenities(hotel.amenities)
    }
  }, [hotel])
    if(isFetching){
    return(
      <div>
        <ScaleLoader height={80} />
      </div>
    )
  }

   const isDisabled = formValidation.newName === '' &&  formValidation.newAddress === ''&& formValidation.newAmenities === ''

   const handleSubmit = (event) =>{
    event.preventDefault()
    updateHotel(_id,newName, newAddress,newCategory,newAmenities)
   
  }

  const handleChangeName=(e) =>{
    const value = e.target.value
    setFormValidation({...setFormValidation, newName: value.length === 0?'No debe dejar un campos vacios':''})
    setNewName(value)
  }

  const handleChangeAddress = (e)=>{
    const value = e.target.value
    setFormValidation({...setFormValidation, newAddress: value.length === 0?'No debe dejar un campos vacios':''})
    setNewAddress(value)
  }

  const handleChangeCategory = (e)=>{
    const value = e.target.value
    setNewCategory(value)
  }
  const handleChangeAmenities = (e)=>{
    const value = e.target.value
    setFormValidation({...setFormValidation, newAmenities: value.length === 0?'No debe dejar un campos vacios':''})
    setNewAmenities(value)
  }
  
    console.log('Hotel',hotel)
  return (
    <div className="form-wrapper">
        <form className='form-container' onSubmit={handleSubmit}>
          <h1>Editar hotel</h1>
            <Input field='name' label='Name' type="text" value={newName} handleValueChange={handleChangeName}/>
            <span>{formValidation.newName}</span>
            <Input field='address' label='Address' type="text" value={newAddress} handleValueChange={handleChangeAddress}/>
            <span>{formValidation.newAddress}</span>
            <label>Categoroy</label>
            <select onChange={handleChangeCategory} value={newCategory}>
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
            <Input field='amenities' label='Amenities' type="text" value={newAmenities} handleValueChange={handleChangeAmenities}/>
            <span>{formValidation.newAmenities}</span>
          <button disabled={isDisabled}>Guardar</button>
        </form>
      </div>
  )
}
