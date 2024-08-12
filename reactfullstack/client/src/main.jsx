import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom"

const router= createBrowserRouter([
  {
  path: "/",
  element: <App/>,
  errorElement: <h1> Bad Route</h1>,
  children: [

  ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
export default router