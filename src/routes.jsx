import { LoginPage } from './pages/Login/LoginPage.jsx'
import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { RegisterPage } from './pages/Register/RegisterPage.jsx'
import { WelcomePage } from './pages/WelcomePage.jsx'

export const routes = [
    {path:'/',element:<WelcomePage/>},
    {path:'/register', element:<RegisterPage/>},
    {path:'/login', element:<LoginPage/>},
    {path:'*', element:<NotFoundPage/>}
]