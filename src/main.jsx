import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import App from './App.jsx'
import Error from './routes/Error.jsx'
import Home from './routes/Home.jsx'
import Login from './routes/Login.jsx'
import Dashboard from './routes/Dashboard.jsx'
import CadastrarUsuario from './routes/CadastrarUsuario.jsx'
import ListarUsuarios from './routes/ListarUsuarios.jsx'


const router = createBrowserRouter([
  {
    //Elementos Pai
    path:'/', element:<App/>,
    errorElement:<Error/>,

    //Elemento Filho

    children:[
      {path:'/',element:<Home/>},
      {path:'/login',element:<Login/>},
      {path:'/dashboard',element:<Dashboard/>},
      {path:'/cadastrarUsuario',element:<CadastrarUsuario/>},

      //Listar
      {path:'/listarUsuarios',element:<ListarUsuarios/>},

      //Editar
      {path:'/editarUsuario/:id',element:<CadastrarUsuario/>}

    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
