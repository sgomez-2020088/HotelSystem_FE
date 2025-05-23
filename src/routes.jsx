import { Hotels } from './components/Hotel/Hotels.jsx'
import { NewHotel } from './components/NewHotel/NewHotel.jsx'
import { HotelsPage } from './pages/Hotels/HotelsPage.jsx'
import { LoginPage } from './pages/Login/LoginPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { RegisterPage } from './pages/Register/RegisterPage.jsx'
import { WelcomePage } from './pages/WelcomePage.jsx'
import { UpdateHotel } from './components/updateHotel/updateHotel.jsx'
import { DeleteHotel } from './components/DeleteHotel/DeleteHoteL.jsx'
import { RoomsPage } from './pages/Rooms/RoomsPage.jsx'
import { Rooms } from './components/Rooms/Rooms.jsx'
import { AddRoom } from './components/AddRoom/AddRoom.jsx'
import { Reservation } from './components/Reservations/Reservation.jsx'
import { ReservationPage } from './pages/Reservation/ReservationPage.jsx'
import { AddReservation } from './components/AddReservation/AddReservation.jsx'

export const routes = [
    {path:'/',element:<WelcomePage/>},
    {path:'/register', element:<RegisterPage/>},
    {path:'/login', element:<LoginPage/>},

    {
        path:'/hotels',
        element:<HotelsPage/>,
        children:[
            {path:'addHotel', element:<NewHotel/>},
            {path:'Hotels', element: <Hotels/>},
            {path:'updateHotel/:id', element: <UpdateHotel/>},
            {path:'deleteHotel/:id', element:<DeleteHotel/>}
        ]
    },


    {
        path:'/rooms',
        element: <RoomsPage/>,
        children:[
            {path:'addRoom/:id', element:<AddRoom/>},
            {path:'rooms/:id', element: <Rooms/>},
        ]
    },

    {
        path:'/reservation',
        element:<ReservationPage/>,
        children:[
            {path: 'myReservations/:idhotel', element:<Reservation/>},
            {path: 'addReservation/:id/:idhotel', element:<AddReservation/>}
        ]
    },
    {path:'*', element:<NotFoundPage/>},
    
]