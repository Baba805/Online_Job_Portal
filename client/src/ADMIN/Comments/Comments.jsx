import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Comments() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  return (
    <div>Comments</div>
  )
}

export default Comments