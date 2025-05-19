import React, { useContext, useState } from 'react'
import { Input } from '../Input'

import { Link, useNavigate } from 'react-router-dom'
import { useLogin } from '../../shared/hooks/useLogin'

export const Login = () => {
    const [userInformation, setUserInformation]= useState("")
    const [password, setPassword]= useState("")

    const [formValidation, setFormValidation] = useState({
        userInformation: undefined,
        password: undefined
    })

    const disabled = formValidation.userInformation === "" && formValidation.password === ""
    
    const {login, setError, loading, error} =useLogin()
    

   

    const handleSubmit = (event)=>{
        event.preventDefault()
        login(userInformation, password)

    }

    const handleChangeUserInformation = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, userInformation: value.length>0?'':'Please field this field'})
        setUserInformation(value)
    }

    const handleChangePassword = (event)=>{
        const value = event.target.value
        setFormValidation({...formValidation, password: value.length>0?'':'Please field this field'})
        setPassword(value)
    }

    return (
        <>
        <h1>Login</h1>
            <form onSubmit={handleSubmit}>
            <p>Don't have an account? <Link to="/register">Register</Link></p>
                <Input field='dataInformation' label='Username or Email' type='text' value={userInformation} handleValueChange={handleChangeUserInformation}/>


                <Input field='password' label='Password' type='password' value={password} handleValueChange={handleChangePassword}/>
                
                <button disabled={!disabled}>Sign in</button>
                
            </form>
        </>
    )
}
