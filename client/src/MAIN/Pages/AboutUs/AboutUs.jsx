import React from 'react'
import AboutUsStyle from './AboutUs.module.css'
import { Box, Container, Grid } from '@mui/material'

function AboutUs() {
  return (
    <>

      <section>
        <img className={AboutUsStyle.img} src="http://sbtechnosoft.com/guidepro/images/about/about-banner.jpg" alt="" />
        <div className={AboutUsStyle.first_div} >
          <h2 className={AboutUsStyle.h2} >About US</h2>
        </div>
      </section>

      <section style={{ marginTop: '150px' }} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >

                <img src="http://sbtechnosoft.com/guidepro/images/about/section1-img1.jpg" width='594px' height='456px' alt="" />

              </Grid>
              <Grid item xs={12} sm={6} >

                <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
                  <h3 className={AboutUsStyle.third_h3} >Popular Job Portal</h3>
                  <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
                </div>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>

              </Grid>
            </Grid>
          </Box>
        </Container>



      </section>

      <section className={AboutUsStyle.process} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={5} >
                <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
                  <h3 className={AboutUsStyle.third_h3} >Our Working Process</h3>
                  <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
                </div>
                <div>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.

                  </p>
                  <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>
                </div>
              </Grid>
              <Grid item xs={12} sm={7} className={AboutUsStyle.process_second_div} >
                <div className={AboutUsStyle.trusted} >
                  <img src="http://sbtechnosoft.com/guidepro/images/about/trust-bg.png" width='100%' alt="" />
                  <p>
                    100%
                    <span style={{fontSize : '31px'}} >TRUSTED</span>

                  </p>
                </div>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>


      <section style={{ marginTop: '150px' }} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} >

                <img src="http://sbtechnosoft.com/guidepro/images/about/section3-img1.jpg" width='594px' height='456px' alt="" />

              </Grid>
              <Grid item xs={12} sm={6} >

                <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
                  <h3 className={AboutUsStyle.third_h3} >Why We are Most Popular</h3>
                  <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
                </div>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>

              </Grid>
            </Grid>
          </Box>
        </Container>



      </section>

      <section style={{ marginTop: '150px' }} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              
              <Grid item xs={12} sm={6} >

                <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
                  <h3 className={AboutUsStyle.third_h3} >Planning & Strategy</h3>
                  <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
                </div>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>
                <p>Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur.</p>

              </Grid>
              <Grid item xs={12} sm={6} >

                <img src="http://sbtechnosoft.com/guidepro/images/about/section4-img1.jpg" width='594px' height='456px' alt="" />

              </Grid>
            </Grid>
          </Box>
        </Container>



      </section>

      <section className={AboutUsStyle.count} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
               
                <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                  <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon1.png" alt="" />
                  <h4 className={AboutUsStyle.count_h4} >150+</h4>
                  <span className={AboutUsStyle.count_span} >FACULTIES</span>
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon2.png" alt="" />
                 <h4 className={AboutUsStyle.count_h4} >2300+</h4>
                 <span className={AboutUsStyle.count_span} >STUDENTS</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon3.png" alt="" />
                 <h4 className={AboutUsStyle.count_h4} >40+</h4>
                 <span className={AboutUsStyle.count_span} >COURSES</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon4.png" alt="" />
                 <h4 className={AboutUsStyle.count_h4} >80+</h4>
                 <span className={AboutUsStyle.count_span} >COUNTRIES</span>
               </div>
               
           </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
    </>
  )
}

export default AboutUs