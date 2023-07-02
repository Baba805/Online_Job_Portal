import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Jobs() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  return (
    <div>Jobs</div>
  )
}

export default Jobs