import React  , {Component} from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'

const App = () => {
  return (
    <>
      <Header/>
      <Outlet/>
    </>
  )
}

export default App

