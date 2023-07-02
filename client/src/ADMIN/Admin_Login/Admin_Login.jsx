import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { Link, useNavigate } from 'react-router-dom';
// import '~mdb-ui-kit/css/mdb.min.css';
import * as yup from "yup";
import Swal from 'sweetalert2';
import { Formik, useFormik } from 'formik';
import { AdminLogin } from '../../Api/request';
import { useAdminContext } from '../../Context/UserContext';


function Admin_Login() {
  const [admin, setAdmin] = useAdminContext();
  const navigate = useNavigate()
  const validation = yup.object().shape({
    username: yup.string().required("username is required"),
    password : yup.string().required('password is required')
      
  });

  const handleSubmit = async (values,actions)=>{
    const response = await AdminLogin({
        username : values.username,
        password : values.password
    });
    if (response.auth) {
      localStorage.setItem('token',response.token);
      localStorage.setItem('admin',JSON.stringify(response.admin));
      setAdmin(response.admin);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      navigate('/admin')
     
    }
  }
  

  const Formik = useFormik({
    initialValues: {
      username: '',
      password: ''
    },
    validationSchema : validation,
    onSubmit : handleSubmit
  })



  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <form  onSubmit={Formik.handleSubmit}>
    <MDBInput   onChange={Formik.handleChange} onBlur={Formik.handleBlur}  value={Formik.values.username}  name='username'  wrapperClass='mb-4' label='Username ' id='form1' type='text'/>
      <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur}  value={Formik.values.password}    name='password' wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      

      <MDBBtn type='submit' className="mb-4">Sign in</MDBBtn>
      </form>

     

    </MDBContainer>
  );
}

export default Admin_Login;