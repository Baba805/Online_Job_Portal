import React, { useEffect, useState } from 'react'
import BlogStyle from './BlogGrids.module.css'
import { Box, Container, Grid } from '@mui/material'
import { getBlogs, getComment } from '../../../Api/request';
import { Link } from 'react-router-dom';
import PersonIcon from '@mui/icons-material/Person';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';



function BlogGrids() {
const [comment, setComment] = useState([])


  useEffect(() => {
    getComment().then((res) => {
      console.log("salam");
      setComment(res)
    })
  }, [])
//SLIDER
  const proprietes = {
    duration: 10500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
}
const images = [
    `${comment.imageUrl}`
];

  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    getBlogs().then((res) => {
      console.log("salam");
      setBlogs(res)
    })
  }, [])
  return (
    <>
      <section style={{overflow : 'hidden'}} >
        <img className={BlogStyle.img} src="http://sbtechnosoft.com/guidepro/images/about/about-banner.jpg" alt="" />
        <div className={BlogStyle.first_div} >
          <h2 className={BlogStyle.h2} >Blog </h2>
        </div>
      </section>

      <section className={BlogStyle.blog}>
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={BlogStyle.third_h3} >Our Blog</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
        </div>

        <div>
          <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {blogs && blogs.map((blog) => {
                  return (
                    <>
                      <Grid item xs={6} md={4} className={BlogStyle.blog_card} >

                        <div className={BlogStyle.blog}>
                          <div className={BlogStyle.blog_img} > <img src={blog.imageUrl} alt="" /> </div>
                          <div className={BlogStyle.blog_title} >
                            <div className={BlogStyle.blog_title_name} >
                              <PersonIcon />
                              <p > {blog.username} </p>
                            </div>
                            <h6 className={BlogStyle.blog_title_h6} > {blog.title} </h6>
                            <div className={BlogStyle.blog_title_content} >

                              <p > {blog.content} </p>
                            </div>
                            <div style={{ textAlign: 'right' }} >
                              <Link className={BlogStyle.blog_button} to='/bloggrids'> Read More </Link>
                            </div>
                          </div>
                        </div>

                      </Grid>
                    </>
                  )
                })}
              </Grid>
            </Box>
          </Container>
        </div>

      </section>

      <section className={BlogStyle.count} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
               
                <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                  <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon1.png" alt="" />
                  <h4 className={BlogStyle.count_h4} >150+</h4>
                  <span className={BlogStyle.count_span} >FACULTIES</span>
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon2.png" alt="" />
                 <h4 className={BlogStyle.count_h4} >2300+</h4>
                 <span className={BlogStyle.count_span} >STUDENTS</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon3.png" alt="" />
                 <h4 className={BlogStyle.count_h4} >40+</h4>
                 <span className={BlogStyle.count_span} >COURSES</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon4.png" alt="" />
                 <h4 className={BlogStyle.count_h4} >80+</h4>
                 <span className={BlogStyle.count_span} >COUNTRIES</span>
               </div>
               
           </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      
      <section>

      <div style={{ textAlign: 'center', marginTop: '90px', marginBottom : '90px' }} >
          <h3 className={BlogStyle.third_h3} >Our Services</h3>
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
                           
                            <p  className={BlogStyle.slider_title} > {comment.title} </p>
                           
                        </div>
                        <div style={{display: 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}} className='slide-1-img'>
                            <img className={BlogStyle.slider_img} src={comment.imageUrl} alt="img0" />
                            <h1 className={BlogStyle.slider_h1} > {comment.name} </h1>
                            <p className={BlogStyle.slider_p} >  {comment.posession} </p>
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

export default BlogGrids