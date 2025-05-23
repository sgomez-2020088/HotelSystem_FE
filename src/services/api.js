import axios from 'axios';

const apiClient = axios.create(
    {
        baseURL:'http://localhost:3640',
        setTimeout: 10000,
    }
)

apiClient.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem('token')
        if(token){
            config.headers.Authorization = token
        }
        return config
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

export const getHotelsRequest = async() =>{
    try {
        return await apiClient.get('/v1/hotel/getAll')
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const getHotelByIdRequest = async(id) =>{
    try {
        return await apiClient.get(`/v1/hotel/getOne/${id}`)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const addNewHotelRequest = async(hotel)=>{
    try {
        return await apiClient.post('/v1/hotel/add', hotel)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const updateHotelRequest = async(hotel)=>{
    try {
        return await apiClient.put('/v1/hotel/update',hotel)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const deleteHotelRequest = async(id)=>{
    try {
        return await apiClient.delete(`/v1/hotel/delete/${id}`)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const getHotelRoomsRequest = async(id)=>{
    try {
        return await apiClient.get(`/v1/hotelRoom/${id}/rooms`)
    } catch (err) {
        return{
        error: true,
        err
        }
    }
}

export const addHotelRoomRequest = async(hotelRoom)=>{
    try {
        return await apiClient.post('/v1/hotelRoom/add',hotelRoom)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}

export const addReservationRequest = async(reservation)=>{
    try {
        return await apiClient.post('/v1/reservation/reservate', reservation)
    } catch (err) {
        return{
            error:true,
            err
        }
        
    }
}

export const getMyReservation = async(id)=>{
    try {
        return await apiClient.get('/v1/reservation/myReservations', id)
    } catch (err) {
        return{
            error:true,
            err
        }
    }
}