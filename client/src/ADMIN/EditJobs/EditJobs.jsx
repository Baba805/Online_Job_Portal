import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {  editVacancies, getvacanciesByID } from '../../Api/request';
import { useFormik } from 'formik';
import { Box, Button, Container, Grid, MenuItem, Select, TextField } from '@mui/material'


function EditJobs() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [jobs, setJobs] = useState({});

    async function fetchData() {
        const datas = await getvacanciesByID(id);
        setJobs(datas);
        console.log(datas);
        // console.log(datas.data);
        formik.setValues({
            name: datas.name,
            sale: datas.sale,
            location: datas.location,
            imageUrl: datas.imageUrl,
            time: datas.time,
            companyName: datas.companyName,
        });
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (values, actions) => {
        editVacancies(id, values);
        setJobs(values);
        console.log(values);

        navigate("/admin/jobs");
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
            name: jobs.name,
            sale: jobs.sale,
            location: jobs.location,
            imageUrl: jobs.imageUrl,
            time: jobs.time,
            companyName: jobs.companyName,

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
                                        <p>Add Vacancie</p>
                                        {/* <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p> */}
                                    </div>
                                    <div className='input-div'>
                                        <TextField
                                            style={{ marginBottom: '40px', width: '500px' }}
                                            placeholder=' Job name'
                                            type="text"
                                            name="name"
                                            className="form-input"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.errors.name && formik.touched.name ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.name}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <div className='input-div'>
                                        <TextField
                                            style={{ marginBottom: '40px', width: '500px' }}

                                            name="sale"
                                            className="form-input"
                                            placeholder='sale'
                                            type="number"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.sale}
                                        />
                                        {formik.errors.sale && formik.touched.sale ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.sale}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <div className='input-div'>
                                        <TextField
                                            style={{ marginBottom: '40px', width: '500px' }}

                                            name="imageUrl"
                                            className="form-input"
                                            placeholder='imageUrl'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.imageUrl}
                                        />
                                        {formik.errors.imageUrl && formik.touched.imageUrl ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.imageUrl}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <div className='input-div'  style={{height : '96px'}} >
                                        <TextField
                                            style={{ width: '500px' }}

                                            name="location"
                                            className="form-input"
                                            placeholder='location'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.location}
                                        />
                                        {formik.errors.location && formik.touched.location ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.location}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <div className='input-div' style={{height : '96px'}} >
                                        <TextField
                                            style={{ width: '500px' }}

                                            name="companyName"
                                            className="form-input"
                                            placeholder='company Name'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.companyName}
                                        />
                                        {formik.errors.companyName && formik.touched.companyName ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.companyName}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <Select sx={{ minWidth: 200 }}

                                        labelId="demo-simple-select-label"
                                        id="demo-simple-selectt"
                                        name='time'
                                        value={formik.values.time}
                                        label="Time"
                                        onChange={formik.handleChange}
                                    >
                                        <MenuItem value={"Full Time"}>Full Time</MenuItem>
                                        <MenuItem value={"Part Time"}>Part Time</MenuItem>

                                    </Select>




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

export default EditJobs