import React, { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { getAllFile, getCv, postCv, postFile, postImg } from '../../../Api/request';
import { useFormik } from 'formik';
import Swal from 'sweetalert2';
import { Box, Container, Input } from '@mui/material';
import * as yup from "yup";
import { Button, Grid, TextField } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


export const Apply = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const buttonRef = useRef();

  function handleSubmit(values, actions) {
    console.log(selectedImage);
    const formData = new FormData();
    formData.append("file", selectedImage);
    formData.append("name", values.name);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("Introduction", values.Introduction);



    console.log(formData);
    // buttonRef.current.style.background = '#1976D2';
    // buttonRef.current.textContent = 'Upload File';
    setSelectedImage(null);
    actions.resetForm();
    console.log(values);
    postCv(formData);
    // postFile(formData)
    

  }
  // const [name, setName] = useState("");
  // const [loading, setLoading] = useState(false);
  // const handleImage = (e) => {
  //   const file = e.target.files[0]
  //   setSelectedImage(file)
  //   console.log(selectedImage);
  // }

  // useEffect(() => {
  //   getCv().then((res) => {
  //     setData(res);
  //   });
  // }, []);

  // function uploadImage() {
  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append("file", selectedImage);
  //   formData.append("upload_preset", "kuro3cpr");
  //   axios
  //     .post("https://api.cloudinary.com/v1_1/dwssh0boy/image/upload", formData)
  //     .then((res) => {
  //       const newData = {
  //         imageURL: res.data.secure_url,
  //       };
  //       setData([...data, newData]);
  //       postCv(newData);
  //       setLoading(false);
  //     });
  // }

  // const handleFileChange = (event) => {
  //   setSelectedFile(event.target.files[0]);
  // };


  // const handleUpload = () => {
  //   const formData = new FormData();
  //   formData.append('file', selectedFile);

  //   axios
  //     .post('http://localhost:3000/upload', formData)
  //     .then((response) => {
  //       console.log('File upload successful:', response.data);
  //       // Do something with the response from the server
  //     })
  //     .catch((error) => {
  //       console.error('File upload error:', error);
  //       // Handle the error case
  //     });
  // };

  // const formData = new FormData();
  // formData.append('file', selectedFile);

  // function uploadImage() {
  //   setLoading(true);
  //   const formData = new FormData();
  //   formData.append("file", selectedImage);
  //   formData.append("upload_preset", "ohoqsvl7");
  //   axios
  //     .post("https://api.cloudinary.com/v1_1/dwgh8g1mn/image/upload", formData)
  //     .then((res) => {
  //       const newData = {
  //         name: name,
  //         imageURL: res.data.secure_url,
  //       };
  //       setData([...data, newData]);
  //       // postCharacter(newData);
  //       setLoading(false);
  //     });
  // }

  // axios
  //   .post('http://localhost:8080/upload', formData)
  //   .then((response) => {
  //     console.log('File upload successful:', response.data);
  //     // Do something with the response from the server
  //   })
  //   .catch((error) => {
  //     console.error('File upload error:', error);
  //     // Handle the error case
  //   });


  // cloudinary 
  //ohoqsvl7

  // const[imagees,setImagees]=useState([]);
  // useEffect(()=>{
  //   getAllFile().then((res)=>{
  //     setImagees(res);
  //   })
  // },[])
  const Validation = yup.object().shape({
    name: yup.string().required("name is required"),
    phone: yup
      .number().required("number is required"),
    email: yup
      .string().email().required("email is required"),
    Introduction: yup
      .string().required("Introduction is required"),
    file: yup.mixed()


  });

  const navigate = useNavigate();
  // const handleSubmit = async (values, actions) => {
  //   console.log(values);

  //   await postCv({
  //     name : values.name,
  //     email : values.email,
  //     phone : values.phone,
  //     file : values.file
  //   })
  //   Swal.fire({
  //     position: 'top-end',
  //     icon: 'success',
  //     title: 'ADD HAS BEEN SUCCESFULLY',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  //   actions.resetForm();
  //   navigate('/employeehome')

  // }

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      Introduction: '',
      file: ''
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
              <form onSubmit={formik.handleSubmit} encType="multipart/form-data" method="POST" >
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

                    name="email"
                    className="form-input"
                    placeholder='email'
                    type="mail"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                  />
                  {formik.errors.email && formik.touched.email ? (
                    <span style={{ color: "#bb221a" }}>{formik.errors.email}</span>
                  ) : <span style={{ visibility: "hidden" }}>error message</span>}
                </div>
                <div className='input-div'>
                  <TextField
                    style={{ marginBottom: '40px', width: '500px' }}

                    name="phone"
                    className="form-input"
                    placeholder='phone'
                    type="number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.errors.phone && formik.touched.phone ? (
                    <span style={{ color: "#bb221a" }}>{formik.errors.phone}</span>
                  ) : <span style={{ visibility: "hidden" }}>error message</span>}
                </div>
                <div className='input-div'>
                  <TextField
                    style={{ width: '500px' }}

                    name="Introduction"
                    className="form-input"
                    placeholder='Introduction'
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.Introduction}
                  />
                  {formik.errors.Introduction && formik.touched.Introduction ? (
                    <span style={{ color: "#bb221a" }}>{formik.errors.Introduction}</span>
                  ) : <span style={{ visibility: "hidden" }}>error message</span>}
                </div>
                {/* <Button ref={buttonRef} style={{ marginLeft: '20px' }} variant="contained" component="label">
                  Upload File */}
                  <Input value={formik.values.file}
                  style={{marginTop : '50px'}}
                    onChange={(e) => {
                      // buttonRef.current.style.background = 'red';
                      // buttonRef.current.textContent = e.target.files[0].name;
                      formik.handleChange(e);
                      setSelectedImage(e.target.files[0])
                    }} name="file" type="file" accept="image/*" />
                {/* </Button> */}





                <div className='input-div'>
                  <Button style={{ display: 'block', margin: '25px auto' }} type="submit" variant="outlined" color="success">Add Your İnformation</Button>

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


  );
};

export default Apply