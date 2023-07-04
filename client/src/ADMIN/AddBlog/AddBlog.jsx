import { Button, Grid, TextField } from '@mui/material'
import React from 'react'
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { postBlog } from '../../Api/request';
import Swal from 'sweetalert2';


import * as yup from "yup";
import { Box, Container } from '@mui/material';

function AddBlog() {

  const Validation = yup.object().shape({
    username: yup.string().required("username is required"),
    title: yup
      .string().required("title is required"),
    imageUrl: yup
      .string().required("imageUrl is required"),
    content: yup
      .string().required("content is required"),


  });
  const navigate = useNavigate();
  const handleSubmit = async (values, actions) => {
    console.log(values);


    await postBlog(values)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'ADD HAS BEEN SUCCESFULLY',
      showConfirmButton: false,
      timer: 1500
    })
    actions.resetForm();
    navigate('/admin/blogs')

  }
  const formik = useFormik({
    initialValues: {
      username: '',
      title: '',
      imageUrl: '',
      content: ''

    },
    validationSchema: Validation,
    onSubmit: handleSubmit
  })
  return (
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
                    style={{ marginBottom: '40px' , width : '500px' }}
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
                    style={{ marginBottom: '40px',width : '500px' }}

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
                    style={{ marginBottom: '40px',width : '500px' }}

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
                    style={{width : '500px' }}

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
  )
}

export default AddBlog