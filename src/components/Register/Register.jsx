import React, { useState } from 'react'
import { Input } from '../Input.jsx'
import { useRegister } from '../../shared/hooks/useRegister'
import { Link } from 'react-router-dom'


export const Register = () => {

    const [name, setName] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [phone, setPhone] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")

    const [formValidation, setFormValidation] = useState({
        name: undefined,
        surname: undefined,
        email: undefined,
        password: undefined,
        username: undefined,
        phone: undefined,
        confirmPassword: undefined
    })

    const disable = formValidation.name === "" && formValidation.surname === "" &&
                    formValidation.email === "" && formValidation.password === "" && 
                    formValidation.username === "" && formValidation.phone === "" && 
                    formValidation.confirmPassword === ""

    const {register,loading,error,setError} = useRegister()

    const handleSubmit = (event) => {
        event.preventDefault()
        register(name, surname, email, password, username, phone)
    }

    const handleChangeName = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, name: value.length>0?'':'Please field this field'})
        setName(value)
    }
    
    const handleChangeSurname = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, surname: value.length>0?'':'Please field this field'})
        setSurname(value)

    }

    const handleChangeEmail = (event)=>{
        const value = event.target.value
        const regex = /\S+@\S+\.\S+/
        setFormValidation({...formValidation, email: regex.test(value)?'':'Write a valid email'})
        setEmail(value)

    }

    const handleChangeUsername = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, username: value.length>0?'':'Please field this field'})
        setUsername(value)
    }

    const handleChangePhone = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, phone: value.length>=8?'':'Please field this field'})
        setPhone(value)

    }

    const handleChangePassword = (event)=>{
        const value = event.target.value
        const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).{8,}$/
        setFormValidation({...formValidation, password: regex.test(value)?'':'Password must be at least 8 characters long, contain at least one uppercase letter, one number, and one special character.'})
        setPassword(value)
    }

    const handleChangeConfirmPassword = (event)=>{ 
        const value = event.target.value
        setFormValidation({...formValidation, confirmPassword: value === password?'':'Passwords do not match'})
        setConfirmPassword(value)

    }
    return (
        <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            
            <Input field='name' label='Name' value={name} type='text' handleValueChange={handleChangeName}/>
            <span>{formValidation.name}</span>

            <Input field='surname' label='Surname' value={surname} type='text' handleValueChange={handleChangeSurname}/>
            <span>{formValidation.surname}</span>
            
            <Input field='email' label='Email' value={email} type='email' handleValueChange={handleChangeEmail}/>
            <span>{formValidation.email}</span>
            
            <Input field='username' label='Username' value={username} type='text' handleValueChange={handleChangeUsername}/>
            <span>{formValidation.username}</span>

            <Input field='phone' label='Phone' value={phone} type='text' handleValueChange={handleChangePhone}/>
            <span>{formValidation.phone}</span>

            <Input field='password' label='Password' value={password} type='password' handleValueChange={handleChangePassword}/>
            <span>{formValidation.password}</span>

            <Input field='confirmPassword' label='Confirm Password' value={confirmPassword} type='password' handleValueChange={handleChangeConfirmPassword}/>
            <span>{formValidation.confirmPassword}</span>



            <button  type="submit" disabled={!disable}>
                {loading ? 'Registrando...' : 'Registrar'}
            </button>

        </form>
        </>
    )
}
