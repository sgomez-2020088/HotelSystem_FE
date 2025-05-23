import React, { useEffect, useState } from 'react'
import { loginUser } from '../../services/api'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

export const useLogin = () => {
        
        const [loading, setLoading] = useState(false)
        const [error, setError] = useState(false)
        
        const navigate = useNavigate();

        const login = async(userInformation, password) => {
            setLoading(true)
            
            const user = {
                userInformation,
                password
            }
            const response = await loginUser(user)
            setLoading(false)
            
            if (response.error) {
                setError(true)
                
                if(response?.err?.response?.data?.errors){
                    
                    let arrayErrors = response?.err?.response?.data?.errors
                    for (const error of arrayErrors) {
                        return toast.error(error.msg)
                    }
                }
                
                return toast.error(
                    response?.err?.response?.data?.msg ||
                    response?.err?.data?.msg ||
                    'Error general al intentar registrar al usuario. Intenta de nuevo'
                )
            }

            localStorage.setItem('userId', response.loggedUser.uid )
            localStorage.setItem('token',response.token)
            setError(false)         
            navigate('/hotels/Hotels')
            return toast.success('Login exitoso')
            
        }
    return {
        login,
        loading,
        error,
        setError,
        setLoading
    }
}
