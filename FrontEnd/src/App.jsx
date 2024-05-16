import {  useState } from 'react'
import './App.css'
import MainContext from './context/context'
import ROUTES from './router/router'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'


function App() {
  const router= createBrowserRouter(ROUTES)
   const [data,setData]=useState([])
   const condexData={
    data,setData
   }

  return (
    <>
    <MainContext.Provider value={condexData} >
    <RouterProvider router={router}/>
    </MainContext.Provider>
  
    </>
  )
}

export default App
