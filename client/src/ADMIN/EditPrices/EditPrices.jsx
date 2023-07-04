import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {  editPrices, getPricesId } from '../../Api/request';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Box, Button, Container, Grid, TextField } from '@mui/material'


function EditPrices() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [prices, setPrices] = useState({});

    async function fetchData() {
        const datas = await getPricesId(id);
        setPrices(datas);
        console.log(datas);
        // console.log(datas.data);
        formik.setValues({
            price: datas.price,
            service_one: datas.service_one,
            service_two: datas.service_two,
            service_three: datas.service_three,
            service_four : datas.service_four,
            service_five : datas.service_five

        });
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (values, actions) => {
        editPrices(id, values);
        setPrices(values);
        console.log(values);

        navigate("/admin/prices");
        actions.resetForm();
    };
    // const Schema = yup.object().shape({
    //     username: yup.string().required(),
    //     title : yup.string.required(),
    //     content : yup.string.required(),
    //     imageUrl : yup.string.required()

    // });
    const formik = useFormik({
        initialValues: {
            price: prices.price,
            service_one: prices.service_one,
            service_two: prices.service_two,
            service_three: prices.service_three,
            service_four: prices.service_four,
            service_five: prices.service_five,

        },
        onSubmit: handleSubmit,
        // validationSchema: Schema,
    });
    return (
        <>
            <main>
                <Container maxWidth='xl'>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} md={6} style={{ margin: '0px auto' }} >
                                <form onSubmit={formik.handleSubmit}>
                                    <div className='suggestions-text'>
                                        <p>Add Blog</p>
                                        {/* <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p> */}
                                    </div>
                                    <div className='input-div'>
                                        <TextField
                                            style={{ marginBottom: '40px', width: '500px' }}
                                            placeholder='price'
                                            type="text"
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
                                            style={{ marginBottom: '40px', width: '500px' }}

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
                                            style={{ marginBottom: '40px', width: '500px' }}

                                            name="service_two"
                                            className="form-input"
                                            placeholder='service_two'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.service_two}
                                        />
                                        {formik.errors.service_two && formik.touched.service_two ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.imageUrl}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <div className='input-div'>
                                        <TextField
                                            style={{ width: '500px' }}

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

                                    <div className='input-div'>
                                        <TextField
                                            style={{ width: '500px' }}

                                            name="service_four"
                                            className="form-input"
                                            placeholder='service_four'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.service_four}
                                        />
                                        {formik.errors.service_four && formik.touched.service_four ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.service_four}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>

                                    <div className='input-div'>
                                        <TextField
                                            style={{ width: '500px' }}

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
                                            style={{ cursor: "pointer", marginTop: '40px' }}
                                            className='input-div-Button'
                                            // onClick={formik.handleClick}
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

export default EditPrices