import React, { useEffect } from 'react'
import {Outlet, useNavigate} from 'react-router-dom'
import Navbar from '../../ADMIN/Admin_Navbar/Navbar'

function MainRootAdmin() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  return (
    <>
    <Navbar/>
    <Outlet/>
    
    </>
  )
}

export default MainRootAdmin