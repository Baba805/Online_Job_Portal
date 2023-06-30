import React, { useEffect, useState } from 'react'
import contactUsStyle from './ContactUs.module.css'
import { Box, Container, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { getComment, getContactUs } from '../../../Api/request';
import Swal from 'sweetalert2'
import * as yup from "yup";
import { MDBBtn, MDBInput } from 'mdb-react-ui-kit';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';


function ContactUs() {
  const [comment, setComment] = useState([])
  useEffect(() => {
    getComment().then((res) => {
      console.log("salam");
      setComment(res)
    })
  }, [])


  const Validation = yup.object().shape({
    name: yup.string().required("name is required"),
    email: yup
      .string().required("email is required").email(),
    phone: yup
      .number()
      .required("phone number is required"),
    Introduction: yup.string().required('Introduction is required')

  });

  const navigate = useNavigate();

  const handleSubmit = async (values, actions) => {
    console.log('salam');
    await getContactUs(values)
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'SEND MESSAGE HAS BEEN SUCCESFULLY',
      showConfirmButton: false,
      timer: 1500
    })

    actions.resetForm();
    navigate('/contactus')
  }

  const Formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      Introduction: '',
    },
    validationSchema: Validation,
    onSubmit: handleSubmit
  })






// SLIDER
const proprietes = {
  duration: 10500,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: true
}








  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };


  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values) => {
    console.log(values);
  };
  return (
    <>

      <section style={{ overflow: 'hidden' }} >
        <img className={contactUsStyle.img} src="http://sbtechnosoft.com/guidepro/images/about/about-banner.jpg" alt="" />
        <div className={contactUsStyle.first_div} >
          <h2 className={contactUsStyle.h2} >Contact Us </h2>
        </div>
      </section>

      <section className={contactUsStyle.contact} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={6} >
                <div className={contactUsStyle.heading} >
                  <h2>Need Help?</h2>
                  <p>Reach out to the world’s most reliable IT services.</p>
                </div>

                <form onSubmit={Formik.handleSubmit} >
                  <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.name} name='name' wrapperClass='mb-4' label='Name' id='form11' type='text' />
                  <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.email} name='email' wrapperClass='mb-4' label='Email' id='form14' type='email' />
                  <MDBInput onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.phone} name='phone' wrapperClass='mb-4' label='Phone' id='form15' />
                  <label for="exampleFormControlTextarea4">Please describe what your need</label>
                  <textarea style={{ marginBottom: '50px' }} onChange={Formik.handleChange} onBlur={Formik.handleBlur} value={Formik.values.Introduction} name='Introduction' class="form-control" id="exampleFormControlTextarea4" label='Introduction ' type='tel' rows="3"></textarea>







                  <MDBBtn type='submit' className="mb-4 w-100">SUBMIT</MDBBtn>
                </form >
              </Grid>
              <Grid item xs={12} sm={6} md={6} >
                <div style={{ alignContent: 'center' }} >
                  <h3 className={contactUsStyle.right_h3} >Address</h3>
                  <div style={{marginTop : '50px'}} >
                    <ul>
                      <li style={{display : 'flex', justifyContent : 'center' , alignItems : 'center'}} >
                        <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center'}} >  <LocationOnIcon className={contactUsStyle.location_icon} />  </div>
                        <div>
                          <p className={contactUsStyle.location_p} > OUR LOCATION  <span className={contactUsStyle.location_p_span} >Alexima, NT 354789</span> </p>

                        </div>
                      </li>
                      <li style={{display : 'flex', justifyContent : 'center' , alignItems : 'center', marginTop : '70px'}} >
                        <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center'}} >  <EmailIcon className={contactUsStyle.location_icon} />  </div>
                        <div>
                          <p className={contactUsStyle.location_p} > SEND US MAIL  <span className={contactUsStyle.location_p_span} >Info@test.com</span> </p>

                        </div>
                      </li>
                      <li style={{display : 'flex', justifyContent : 'center' , alignItems : 'center',  marginTop : '70px'}} >
                        <div style={{display : 'flex', justifyContent : 'center' , alignItems : 'center'}} >  <CallIcon className={contactUsStyle.location_icon} />  </div>
                        <div>
                          <p className={contactUsStyle.location_p} >CALL US <span className={contactUsStyle.location_p_span} >+70 431 17 12</span> </p>

                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <section className={contactUsStyle.count} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
               
                <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                  <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon1.png" alt="" />
                  <h4 className={contactUsStyle.count_h4} >150+</h4>
                  <span className={contactUsStyle.count_span} >FACULTIES</span>
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon2.png" alt="" />
                 <h4 className={contactUsStyle.count_h4} >2300+</h4>
                 <span className={contactUsStyle.count_span} >STUDENTS</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon3.png" alt="" />
                 <h4 className={contactUsStyle.count_h4} >40+</h4>
                 <span className={contactUsStyle.count_span} >COURSES</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon4.png" alt="" />
                 <h4 className={contactUsStyle.count_h4} >80+</h4>
                 <span className={contactUsStyle.count_span} >COUNTRIES</span>
               </div>
               
           </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <section className={contactUsStyle.comments} >

<div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
    <h3 className={contactUsStyle.third_h3} >Happy Candidates</h3>
    <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
  </div>

  


<div className="containerSlide">
          
              <Slide {...proprietes}>
              {comment && comment.map((comment)=>{
            return(
              <>
              <div style={{display : 'flex' , justifyContent : 'center' , alignItems : 'center', marginLeft : '300px', marginRight : '300px'}} >
                <img src="http://sbtechnosoft.com/guidepro/images/quote.png" alt="" />
              <div className="each-slide-1">
                  <div className='slide-1-text'>
                     
                      <p  className={contactUsStyle.slider_p} > {comment.title} </p>
                     
                  </div>
                  <div style={{display: 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}} className='slide-1-img'>
                      <img className={contactUsStyle.slider_img} src={comment.imageUrl} alt="img0" />
                      <h1 className={contactUsStyle.slider_h1} > {comment.name} </h1>
                      <p className={contactUsStyle.slider_p} >  {comment.posession} </p>
                  </div>
                  
              </div >
              <img src="http://sbtechnosoft.com/guidepro/images/quote.png" alt="" />
              </div>
              </>
            )
          })}
          </Slide >
              
      </div >
</section>

    </>

  )
}

export default ContactUs