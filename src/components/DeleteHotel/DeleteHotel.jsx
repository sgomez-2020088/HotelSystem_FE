import React, { useEffect, useState } from 'react'
import { useHotelById } from '../../shared/hooks/useHotelById'
import { useParams } from 'react-router-dom'
import { useDeleteHotel } from '../../shared/hooks/useDeleteHotel'
import { ScaleLoader } from 'react-spinners'
import { Input } from '../Input'

import './DeleteHotel.css'
import toast from 'react-hot-toast'
export const DeleteHotel = () => {
  const {hotel,isFetching, getHotelById} = useHotelById() 
   
  const [name, setName] = useState('') 
  
  const {id}= useParams()

   const {deleteHotel} = useDeleteHotel()

   useEffect(()=>{
           getHotelById(id)
       },[])

  if(isFetching){
    return(
      <div>
        <ScaleLoader height={80} />
      </div>
    )
  }

  const handleChangeName = (e) =>{
    const value = e.target.value
    setName(value)
  }

  const handleDeleteHotel = () =>{
    if(name === hotel.name){
        deleteHotel(id)
    }else{
        toast.error('No son los mismos titulos')
    }
  }

  console.log(hotel)
  return (
    <div className="content-delete">
      <Input field='name'label='Rescriba el nombre del hotel para confirmar su eliminación' type='text' value={name} handleValueChange={handleChangeName}/>
      <button onClick={handleDeleteHotel}>Eliminar</button>
    </div>
  )
}
