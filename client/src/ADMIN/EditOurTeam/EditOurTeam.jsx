import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Box, Button, Container, Grid, TextField } from '@mui/material'
import { editOurTeam, getOurTeamId } from '../../Api/request';


function EditOurTeam() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [ourteam, setOurTeam] = useState({});

    async function fetchData() {
        const datas = await getOurTeamId(id);
        setOurTeam(datas);
        console.log(datas);
        // console.log(datas.data);
        formik.setValues({
            name: datas.name,
            posession: datas.posession,
            imageUrl: datas.imageUrl
        });
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (values, actions) => {
        editOurTeam(id, values);
        setOurTeam(values);
        console.log(values);

        navigate("/admin/ourteam");
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
            name: ourteam.name,
            posession: ourteam.posession,
            imageUrl: ourteam.imageUrl

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
                                            placeholder='name'
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

                                            name="posession"
                                            className="form-input"
                                            placeholder='posession'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.posession}
                                        />
                                        {formik.errors.posession && formik.touched.posession ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.posession}</span>
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

export default EditOurTeam