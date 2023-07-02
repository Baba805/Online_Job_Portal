import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Swal from 'sweetalert2'
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';
import { useFormik } from 'formik';
import { InputLabel } from '@mui/material';
import { SignUpEmployee, SignUpEmployer } from '../../../Api/request';
import * as yup from "yup";



function Register() {
  const employeeValidation = yup.object().shape({
    name: yup.string().required("name is required"),
    surname: yup
      .string().required("name is required"),
    username: yup
      .string()
      .required("username is required"),

  });

  const employerValidation = yup.object().shape({
    companyName: yup.string().required("name is required"),
    surname: yup
      .string().required("surname is required"),
    username: yup
      .string()
      .required("username is required"),
  });


  const [category, setCategory] = useState("")


  // REGISTER FORMIK FOR EMPLOYEE

  // const employeeHandleChange = (event) => {
  //   setCategory(event.target.value);
  // };

  const navigate = useNavigate();
  const employeeHandleSubmit = async (values, actions) => {
    console.log(values);

    if (values.password === values.confirmPassword) {
      await SignUpEmployee(values)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'REGISTER HAS BEEN SUCCESFULLY',
        showConfirmButton: false,
        timer: 1500
      })




      actions.resetForm();
      navigate('/login')
    }
  }


  const employeeFormik = useFormik({
    initialValues: {
      name: '',
      surname: '',
      username: '',
      age: '',
      password: '',
      confirmPassword: '',
      category: '',
      email: ''
    },
    validationSchema: employeeValidation,
    onSubmit: employeeHandleSubmit
  })
  // REGISTER FORMIK FOR EMPLOYER

  const employerHandleSubmit = async (values, actions) => {

    if (values.password == values.confirmPassword) {
      await SignUpEmployer(values)
      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'REGISTER HAS BEEN SUCCESFULLY',
        showConfirmButton: false,
        timer: 1500
      })


    }
    actions.resetForm();
    navigate('/login')





  }

  // const employerHandleChange = (event) => {
  //   setCategory(event.target.value);
  // };

  const employerFormik = useFormik({
    initialValues: {
      companyName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    onSubmit: employerHandleSubmit,
    validationSchema: employerValidation
  })

  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };

  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            EMPLOYEE
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            EMPLOYER
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <form onSubmit={employeeFormik.handleSubmit} >
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.name} name='name' wrapperClass='mb-4' label='Name' id='form11' type='text' />
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.username} name='username' wrapperClass='mb-4' label='Username' id='form12' type='text' />
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.surname} name='surname' wrapperClass='mb-4' label='Surname' id='form13' type='text' />
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.email} name='email' wrapperClass='mb-4' label='Email' id='form14' type='email' />
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.age} name='age' wrapperClass='mb-4' label='age' id='form15' type='number' />
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.password} name='password' wrapperClass='mb-4' label='Password' id='form16' type='password' />
            <MDBInput onChange={employeeFormik.handleChange} onBlur={employeeFormik.handleBlur} value={employeeFormik.values.confirmPassword} name='confirmPassword' wrapperClass='mb-4' label='Confirm Password' id='form1' type='password' />
            <InputLabel id="demo-simple-select-label">CATEGORY</InputLabel>
            <Select sx={{ minWidth: 200 }}

              labelId="demo-simple-select-label"
              id="demo-simple-selectt"
              name='category'
              value={employeeFormik.values.category}
              label="category"
              onChange={employeeFormik.handleChange}
            >
              <MenuItem value={"Front End Developer"}>Front End Developer</MenuItem>
              <MenuItem value={"Back end Developer"}>Back end Developer</MenuItem>
              <MenuItem value={"UI / UX Designer"}>UI / UX Designer</MenuItem>
              <MenuItem value={"System Adminstration"}>System Adminstration</MenuItem>
            </Select>



            <div className='d-flex justify-content-center mb-4'>
              <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
            </div>

            <MDBBtn type='submit' className="mb-4 w-100">Sign up</MDBBtn>
          </form >

        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

          <div className="text-center mb-3">
            <p>Sign up with:</p>

            <div className='d-flex justify-content-between mx-auto' style={{ width: '40%' }}>
              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='facebook-f' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='twitter' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='google' size="sm" />
              </MDBBtn>

              <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
                <MDBIcon fab icon='github' size="sm" />
              </MDBBtn>
            </div>

            <p className="text-center mt-3">or:</p>
          </div>

          <form onSubmit={employerFormik.handleSubmit} >
            <MDBInput wrapperClass='mb-4' onChange={employerFormik.handleChange} onBlur={employerFormik.handleBlur} value={employerFormik.values.companyName} name='companyName' label='Company Name' id='form22' type='text' />
            <MDBInput wrapperClass='mb-4' onChange={employerFormik.handleChange} onBlur={employerFormik.handleBlur} value={employerFormik.values.username} name='username' label='Username' id='form23' type='text' />
            <MDBInput wrapperClass='mb-4' onChange={employerFormik.handleChange} onBlur={employerFormik.handleBlur} value={employerFormik.values.email} name='email' label='Email' id='form24' type='email' />
            <MDBInput wrapperClass='mb-4' onChange={employerFormik.handleChange} onBlur={employerFormik.handleBlur} value={employerFormik.values.password} name='password' label='Password' id='form25' type='password' />
            <MDBInput wrapperClass='mb-4' onChange={employerFormik.handleChange} onBlur={employerFormik.handleBlur} value={employerFormik.values.confirmPassword} name='confirmPassword' label='confirm Password' id='form26' type='password' />



            {/* <div className='d-flex justify-content-center mb-4'>
            <MDBCheckbox name='flexCheck' id='flexCheckDefault' label='I have read and agree to the terms' />
          </div> */}

            <MDBBtn className="mb-4 w-100" type='submit' >Sign up</MDBBtn>

          </form>
        </MDBTabsPane>

      </MDBTabsContent>

    </MDBContainer>
  );
}

export default Register;