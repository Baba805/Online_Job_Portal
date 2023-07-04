import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { editBlog, getBlogById } from '../../Api/request';
import { useFormik } from 'formik';
import * as yup from "yup";
import { Box, Button, Container, Grid, TextField } from '@mui/material'


function EditBlog() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [blog, setBlog] = useState({});

    async function fetchData() {
        const datas = await getBlogById(id);
        setBlog(datas);
        console.log(datas);
        // console.log(datas.data);
        formik.setValues({
            username: datas.username,
            title: datas.title,
            content: datas.content,
            imageUrl: datas.imageUrl
        });
    }
    useEffect(() => {
        fetchData();
    }, [id]);

    const handleSubmit = async (values, actions) => {
        editBlog(id, values);
        setBlog(values);
        console.log(values);

        navigate("/admin/blogs");
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
            username: blog.username,
            title: blog.title,
            content: blog.content,
            imageUrl: blog.imageUrl

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
                                            placeholder='username'
                                            type="text"
                                            name="username"
                                            className="form-input"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.username}
                                        />
                                        {formik.errors.username && formik.touched.username ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.username}</span>
                                        ) : <span style={{ visibility: "hidden" }}>error message</span>}
                                    </div>
                                    <div className='input-div'>
                                        <TextField
                                            style={{ marginBottom: '40px', width: '500px' }}

                                            name="title"
                                            className="form-input"
                                            placeholder='title'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.title}
                                        />
                                        {formik.errors.title && formik.touched.title ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.title}</span>
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
                                        <TextField
                                            style={{ width: '500px' }}

                                            name="content"
                                            className="form-input"
                                            placeholder='content'
                                            type="text"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.content}
                                        />
                                        {formik.errors.content && formik.touched.content ? (
                                            <span style={{ color: "#bb221a" }}>{formik.errors.content}</span>
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

export default EditBlog