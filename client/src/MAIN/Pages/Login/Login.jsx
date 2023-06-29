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
import { SignIn } from '../../../Api/request';
import Swal from 'sweetalert2';
import { Formik, useFormik } from 'formik';
import { useUserContext } from "../../../Context/UserContext";


function Login() {
  const [user, setUser] = useUserContext();
  const navigate = useNavigate()
  const validation = yup.object().shape({
    email: yup.string().required("email is required"),
    password : yup.string().required('password is required')
      
  });

  const handleSubmit = async (values,actions)=>{
    const response = await SignIn({
      email: values.email,
      password: values.password,
    });
    if (response.auth) {
      localStorage.setItem('token',response.token);
      localStorage.setItem('user',JSON.stringify(response.user));
      setUser(response.user);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "User signed in successfully!",
        showConfirmButton: false,
        timer: 1200,
      });
      actions.resetForm();
      if (response.user.companyName) {
        navigate("/employerhome");
      }else{
        navigate("/employeehome");

      }
    }
  }
  

  const Formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema : validation,
    onSubmit : handleSubmit
  })



  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <form  onSubmit={Formik.handleSubmit}>
    <MDBInput   onChange={Formik.handleChange} onBlur={Formik.handleBlur}  value={Formik.values.email}  name='email'  wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur}  value={Formik.values.password}    name='password' wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a href="!#">Forgot password?</a>
      </div>

      <MDBBtn type='submit' className="mb-4">Sign in</MDBBtn>
      </form>

      <div className="text-center">
        <p>Not a member? <Link to='/register'>REGISTER</Link>  </p>
        <p>or sign up with:</p>

        <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='facebook-f' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='twitter' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='google' size="sm"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
            <MDBIcon fab icon='github' size="sm"/>
          </MDBBtn>

        </div>
      </div>

    </MDBContainer>
  );
}

export default Login;