import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';






function Blogs() {
const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
 
  return (
    <div>Blogs</div>
  )
}

export default Blogs