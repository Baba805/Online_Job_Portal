import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar from '../../Components/ADMİN_COMPONENTS/Navbar_admin/MyNavbar'
import Footer from '../../Components/ADMİN_COMPONENTS/Footer_admin/Footer'
function MainRootAdmin() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    
    </>
  )
}

export default MainRootAdmin