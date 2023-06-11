import React from 'react'
import Navbar from '../../Components/MAIN_COMPONENTS/Navbar/Navbar'
import {Outlet} from 'react-router-dom'
import Footer from '../../Components/MAIN_COMPONENTS/Footer/Footer'

function MainRoot() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default MainRoot