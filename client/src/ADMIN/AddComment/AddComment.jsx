import { useFormik } from 'formik';
import React from 'react'
import Swal from 'sweetalert2';
import { Button, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';



import * as yup from "yup";
import { postComment } from '../../Api/request';

function AddComment() {
    const Validation = yup.object().shape({
        name: yup.string().required("name is required"),
        title: yup
            .string().required("title is required"),
            imageUrl: yup
            .string().required("imageUrl is required"),
            posession: yup
            .string().required("posession is required"),
        

    });
    const navigate = useNavigate();
    const handleSubmit = async (values, actions) => {
        console.log(values);


        await postComment(values)
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'ADD HAS BEEN SUCCESFULLY',
            showConfirmButton: false,
            timer: 1500
        })
        actions.resetForm();
        navigate('/admin/comments')

    }
    const formik = useFormik({
        initialValues: {
            name: '',
            title : '',
            imageUrl : '',
            posession : ''

        },
        validationSchema: Validation,
        onSubmit: handleSubmit
    })
  return (
    <main>
    <form onSubmit={formik.handleSubmit}>
      <div className='suggestions-text'>
        <p>Comments add</p>
        {/* <p className='suggestions-text-2p'>Müştərilərimizin düşüncələri önəmlidir</p> */}
      </div>
      <div className='input-div'>
        <TextField
          placeholder='name'
          type="text"
          name="name"
          className="form-input"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />
        {formik.errors.name && formik.touched.name ? (
          <span style={{ color: "#bb221a" }}>{formik.errors.name}</span>
        ) : <span style={{ visibility: "hidden" }}>error message</span>}
      </div>
      <div className='input-div'>
        <TextField
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
        <Button variant='contained'
          // disabled={formik.isSubmitting || Object.keys(formik.errors).length > 0 ? true : false}
          type="submit"
          style={{ cursor: "pointer", marginTop : '40px' }}
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
  </main>
  )
}

export default AddComment