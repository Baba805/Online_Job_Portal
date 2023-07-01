import React from 'react'
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
import MenuItem from '@mui/material/MenuItem';
import { Box, Container, Grid, InputLabel, Select } from '@mui/material';
import { postVacancies } from '../../../Api/request';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import * as yup from "yup";
import { useFormik } from 'formik';



function AddJob() {
  const navigate = useNavigate();
  const Validation = yup.object().shape({
    name: yup.string().required("name is required"),
    imageUrl: yup
    .string().required("surname is required"),
    location: yup
      .string()
      .required("username is required"),
      companyName : yup .string()
      .required("Company Name is required"),
  });

    const employeeHandleSubmit = async (values,actions)=>{
        console.log(values);
    
      if (values.password === values.confirmPassword) {
        await postVacancies(values)
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'REGISTER HAS BEEN SUCCESFULLY',
          showConfirmButton: false,
          timer: 1500
        })
        
      
    
        
        actions.resetForm();
        navigate('/employerhome')
      }
    }
    
    
      const Formik = useFormik({
        initialValues: {
          name: '',
          imageUrl: '',
          sale: '',
          location: '',
          time: '',
          companyName : '',
          
        },
        validationSchema : Validation,
        onSubmit : employeeHandleSubmit
      })
    return (
        <Container maxWidth='xs'>
        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={1}   >
          <Grid item xs={12}  >
        <form onSubmit={Formik.handleSubmit} >
            <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.name} name='name' wrapperClass='mb-4' label='Name' id='form11' type='text' />
            <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.imageUrl} name='imageUrl' wrapperClass='mb-4' label='imageUrl' id='form12' type='text' />
            <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.location} name='location' wrapperClass='mb-4' label='location' id='form13' type='text' />
            <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.companyName} name='companyName' wrapperClass='mb-4' label='Company Name' id='form113' type='text' />
            <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.email} name='email' wrapperClass='mb-4' label='Email' id='form14' type='email' />
            <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.sale} name='sale' wrapperClass='mb-4' label='sale' id='form15' type='number' />

            <InputLabel id="demo-simple-select-label">Time</InputLabel>
            
            <Select   sx={{ minWidth: 200 }}
          
          labelId="demo-simple-select-label"
          id="demo-simple-selectt"
          name='time'
          value={Formik.values.time}
          label="Time"
          onChange={Formik.handleChange}
        >  
          <MenuItem value={"Full Time"}>Full Time</MenuItem>
          <MenuItem value={"Part Time"}>Part Time</MenuItem>

        </Select>


          

            <MDBBtn style={{marginTop : '70px'}} type='submit' className="mb-4 w-100">Add </MDBBtn>
        </form >
        </Grid>
        </Grid>
        </Box>
        </Container>

    )
}

export default AddJob