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
import { useFormik } from 'formik';
import { getServices, postServices } from '../../Api/request';
import * as yup from "yup";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Box, Container, Grid } from '@mui/material'



function AddServices() {
    const Validation = yup.object().shape({
        name: yup.string().required("name is required"),
        title: yup
          .string().required("title is required"),
        imageUrl: yup
          .string()
          .required("imageUrl is required"),
    
      });
      const navigate = useNavigate();

      const HandleSubmit = async (values, actions) => {
        console.log(values);
    
       
          await postServices(values)
          Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'ADD HAS BEEN SUCCESFULLY',
            showConfirmButton: false,
            timer: 1500
          })
    
    
    
    
          actions.resetForm();
          navigate('/admin/services')
        
      }
    const Formik = useFormik({
        initialValues: {
          name: '',
          title : '',
          imageUrl : ''
        },
        validationSchema: Validation,
        onSubmit: HandleSubmit
      })
  return (
    <div >
      <Container maxWidth='md'  >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} style={{ margin : '80px auto',}} >
    <form onSubmit={Formik.handleSubmit} >
    <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.name} name='name' wrapperClass='mb-4' label='Name' id='form111' type='text' />
    <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.imageUrl} name='imageUrl' wrapperClass='mb-4' label='Image Url' id='form112' type='text' />
    <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.title} name='title' wrapperClass='mb-4' label='Title' id='form113' type='text' />

   



    

    <MDBBtn type='submit' className="mb-4 w-100">Add</MDBBtn>
  </form >
  </Grid>
  </Grid>
  </Box>
  </Container>
    </div>
  )
}

export default AddServices