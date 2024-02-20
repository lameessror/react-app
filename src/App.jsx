import React from 'react'
import './App.css'
import {RouterProvider,createBrowserRouter,createHashRouter} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Portfolio from './components/Portfolio/Portfolio'
import Home from './components/Home/Home'

let routers = createHashRouter([
  {path:'',element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'protfolio',element:<Portfolio/>},
    {path:'contact',element:<Contact/>},
  ]}
])



export default function App() {
  return (
    <>
  
  <RouterProvider  router={routers} />
    
    </>
  )
}
