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