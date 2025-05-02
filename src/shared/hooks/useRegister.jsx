import React, { useState } from 'react'
import { registerUser } from '../../services/api'
import toast from 'react-hot-toast'


export const useRegister = () => {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const register = async(name, surname, email, password, username, phone) => {
        setLoading(true)
        const user = {
            name,
            surname,
            email,
            password,
            username,
            phone
        }
        const response = await registerUser(user)
        setLoading(false)
        if (response.error) {
            setError(true)
            
            if(response.err.response.data.errors){
                let arrayErrors = response.err.response.data.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            
            console.log(response?.err?.response?.data?.errors)
            if(email ===response?.err?.response?.data.err.keyValue.email){
                return toast.error('El email ya se encuentra registrado')
            } 
            else if(username ===response?.err?.response?.data.err.keyValue.username){
                return toast.error('Este nombre de usuario ya se encuentra registrado')
            }
            
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar registrar al usuario. Intenta de nuevo'
            )
        }
        setError(false)
        console.log(response?.err?.data?.msg )
        return toast.success('Usuario registrado correctamente')
    }
    return {
        register,
        loading,
        error,
        setError
    }
}
