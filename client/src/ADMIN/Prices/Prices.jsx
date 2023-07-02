import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Prices() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  return (
    <div>Prices</div>
  )
}

export default Prices