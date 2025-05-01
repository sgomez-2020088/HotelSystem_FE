import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL:'http://localhost:3640',
        setTimeout: 10000,
    }
)

export const registerUser = async(user) =>{
    try {
        return await apiClient.post('/v1/auth/register',user)
        
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}

export const loginUser = async(user) =>{
    try {
        let response =  await apiClient.post('/v1/auth/login',user)
        return response.data
    } catch (err) {
        return{
            error: true,
            err
        }
    }
}