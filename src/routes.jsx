import { Hotels } from './components/Hotel/Hotels.jsx'
import { NewHotel } from './components/NewHotel/NewHotel.jsx'
import { HotelsPage } from './pages/Hotels/HotelsPage.jsx'
import { LoginPage } from './pages/Login/LoginPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { RegisterPage } from './pages/Register/RegisterPage.jsx'
import { WelcomePage } from './pages/WelcomePage.jsx'


export const routes = [
    {path:'/',element:<WelcomePage/>},
    {path:'/register', element:<RegisterPage/>},
    {path:'/login', element:<LoginPage/>},
    {
        path:'/hotels',
        element:<HotelsPage/>,
        children:[
            {path:'addHotel', element:<NewHotel/>},
            {path:'Hotels', element: <Hotels/>}
        ]
    },
    {path:'*', element:<NotFoundPage/>}
]