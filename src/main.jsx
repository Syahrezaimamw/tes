import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Sekali from './Sekali.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
const router= createBrowserRouter([
  {
    path:'/interview/',
    element:<App/>
  },{
    path:'/interview/login',
    element:<Sekali/>
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
