import { NotFoundPage } from './pages/NotFoundPage.jsx'
import { RegisterPage } from './pages/Register/RegisterPage.jsx'

export const routes = [
    {path:'/', element:<RegisterPage/>},
    {path:'*', element:<NotFoundPage/>}
]