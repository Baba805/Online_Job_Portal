import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { postPrice } from '../../Api/request';
import Swal from 'sweetalert2';

import * as yup from "yup";
import { Box, Button, Container, Grid } from '@mui/material';
// import pricingStyle from './AddPrices.module.css';


import React from 'react'
import { TextField } from '@mui/material';

const AddPrices = () => {
    const Validation = yup.object().shape({
        price: yup.number().required("price is required"),
        service_one: yup
            .string().required("service is required"),
        service_two: yup
            .string().required("service is required"),
        service_three: yup
            .string().required("service is required"),
        service_four: yup
            .string().required("service is required"),
        service_five: yup
            .string().required("service is required"),

    });
    const navigate = useNavigate();
    const handleSubmit = async (values, actions) => {
        console.log(values);


        await postPrice(values)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'REGISTER HAS BEEN SUCCESFULLY',
            showConfirmButton: false,
            timer: 1500
        })
        actions.resetForm();
        navigate('/admin/prices')

    }
    const formik = useFormik({
        initialValues: {
            price: '',
            service_one: '',
            service_two: '',
            service_three: '',
            service_four: '',
            service_five: '',

        },
        validationSchema: Validation,
        onSubmit: handleSubmit
    })
    return (
        <>
             <main  >
             

        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={1}   >
              <Grid item xs={12} sm={2} >
        <form onSubmit={formik.handleSubmit}  >
         <div style={{margin : '0px auto'}} >
             
            <p>Prices add</p>
            {/* <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p> */}
          </div>
          <div className='input-div'>
            <TextField
              placeholder='Price'
              type="number"
              name="price"
              className="form-input"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
            />
            {formik.errors.price && formik.touched.price ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.price}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="service_one"
              className="form-input"
              placeholder='service_one'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.service_one}
            />
            {formik.errors.service_one && formik.touched.service_one ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.service_one}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="service_two"
              className="form-input"
              placeholder='service_two'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.service_two}
            />
            {formik.errors.service_two && formik.touched.service_two ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.service_two}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="service_three"
              className="form-input"
              placeholder='service_three'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.service_three}
            />
            {formik.errors.service_three && formik.touched.service_three ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.service_three}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div' >
            <TextField
              placeholder='service_four'
              className="form-input"
              name="service_four"
              type='text'
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.service_four}
            />
            {formik.errors.service_four && formik.touched.service_four ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.service_four}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          <div className='input-div'>
            <TextField
              name="service_five"
              className="form-input"
              placeholder='service_five'
              type="text"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.service_five}
            />
            {formik.errors.service_five && formik.touched.service_five ? (
              <span style={{ color: "#bb221a" }}>{formik.errors.service_five}</span>
            ) : <span style={{ visibility: "hidden" }}>error message</span>}
          </div>
          
          
          <div className='input-div'>
            <Button variant='contained'
              // disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
              type="submit"
              style={{ cursor: "pointer", marginTop : '40px' }}
              className='input-div-Button'
              variant="contained"
              onClick={formik.handleClick}
            >Göndər</Button>

            {/* success message (toasted) */}
            {/* <Snackbar open={open} autoHideDuration={2500} onClose={handleClose}>
              <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                Göndərildi !
              </Alert>
            </Snackbar> */}
          </div>
         
        </form>
        </Grid>
        </Grid>
        </Box>
        </Container>
        
      </main>
        </>
    )
}

export default AddPrices