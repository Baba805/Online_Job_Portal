import React, { Fragment, useEffect, useState } from 'react'
import OurTeamStyle from './OurTeam.module.css'
import { getOurTeam } from '../../../Api/request';
import { Box, Container, Grid } from '@mui/material'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import "./_indexx.scss";
import 'react-slideshow-image/dist/styles.css';
import { getComment } from '../../../Api/request';


function OurTeam() {
  const [comment, setComment] = useState()
  useEffect(() => {
    getComment().then((res) => {
      setComment(res)
    })
  }, [comment])

  const [ourteam, SetOurTeam] = useState([]);


  useEffect(() => {
    getOurTeam().then((res) => {
      SetOurTeam(res)
    })
  }, [])

  // SLIDER
  const proprietes = {
    duration: 1500,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }
  const images = [
    "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
    "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
    "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
    "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
    "https://jooinn.com/images/lonely-tree-reflection-3.jpg",
  ]

  return (
    <>
      <section>
        <img className={OurTeamStyle.img} src="http://sbtechnosoft.com/guidepro/images/about/about-banner.jpg" alt="" />
        <div className={OurTeamStyle.first_div} >
          <h2 className={OurTeamStyle.h2} >OUR TEAM</h2>
        </div>
      </section>

      <section style={{ marginTop: '80px' }} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
              {ourteam && ourteam.map((ourteam) => {
                return (
                  <>

                    <Grid item xs={6} md={4} >
                      <div className={OurTeamStyle.thumb} >
                        <img className={OurTeamStyle.img} src={ourteam.imageUrl} height='461px' alt="" />
                        <div className={OurTeamStyle.social_links} >
                          <ul>
                            <li style={{ listStyle: 'none' }} >   <Link to='/twitter.com' className={OurTeamStyle.link} > <TwitterIcon /> </Link> </li>
                            <li style={{ listStyle: 'none' }} >  <Link to='/facebook.com' className={OurTeamStyle.link}>  <FacebookIcon />   </Link>  </li>
                            <li style={{ listStyle: 'none' }} >  <Link to='/instagram.com' className={OurTeamStyle.link}>  <InstagramIcon />  </Link>   </li>
                            <li style={{ listStyle: 'none' }} >  <Link to='/linkedin.com' className={OurTeamStyle.link}>  <LinkedInIcon />   </Link>  </li>
                          </ul>
                        </div>
                      </div>

                      <div className={OurTeamStyle.staff_content} >
                        <h3> {ourteam.name} </h3>
                        <h4> {ourteam.posession} </h4>
                      </div>

                    </Grid>

                  </>
                )
              })}
            </Grid>
          </Box>
        </Container>
      </section>

      <section className={OurTeamStyle.count} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6} md={3} >

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                  <img style={{ marginBottom: '10px' }} src="http://sbtechnosoft.com/guidepro/images/count/count-icon1.png" alt="" />
                  <h4 className={OurTeamStyle.count_h4} >150+</h4>
                  <span className={OurTeamStyle.count_span} >FACULTIES</span>
                </div>

              </Grid>
              <Grid item xs={12} sm={6} md={3} >

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                  <img style={{ marginBottom: '10px' }} src="http://sbtechnosoft.com/guidepro/images/count/count-icon2.png" alt="" />
                  <h4 className={OurTeamStyle.count_h4} >2300+</h4>
                  <span className={OurTeamStyle.count_span} >STUDENTS</span>
                </div>

              </Grid>
              <Grid item xs={12} sm={6} md={3} >

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                  <img style={{ marginBottom: '10px' }} src="http://sbtechnosoft.com/guidepro/images/count/count-icon3.png" alt="" />
                  <h4 className={OurTeamStyle.count_h4} >40+</h4>
                  <span className={OurTeamStyle.count_span} >COURSES</span>
                </div>

              </Grid>
              <Grid item xs={12} sm={6} md={3} >

                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }} >
                  <img style={{ marginBottom: '10px' }} src="http://sbtechnosoft.com/guidepro/images/count/count-icon4.png" alt="" />
                  <h4 className={OurTeamStyle.count_h4} >80+</h4>
                  <span className={OurTeamStyle.count_span} >COUNTRIES</span>
                </div>

              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section className={OurTeamStyle.comments} >
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={OurTeamStyle.third_h3} >Happy Candidates</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
        </div>
        <div className="containerSlide">

          <Slide {...proprietes} >
            {/* <img width={200} height={200} src={images[1]} alt="" className={OurTeamStyle.slider_img} /> */}
            {comment && comment.map((comments) => {
              return (
                <>
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: '300px',
                      marginRight: '300px'
                    }} >
                    <img src="http://sbtechnosoft.com/guidepro/images/quote.png" alt="" />
                    <div className="each-slide-1">
                      <div className='slide-1-text'>

                        <p className={OurTeamStyle.slider_p} > {comments.title} </p>

                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                          flexDirection: 'column'
                        }} className='slide-1-img'>
                        <img className={OurTeamStyle.slider_img} src={comments.imageUrl} alt="img0" />
                        <h1 className={OurTeamStyle.slider_h1} > {comments.name} </h1>
                        <p className={OurTeamStyle.slider_p} >  {comments.posession} </p>
                      </div>
                    </div >
                    <img src="http://sbtechnosoft.com/guidepro/images/quote.png" alt="" />
                  </div>
                </>
              )
            })}
          </Slide>

        </div >
      </section>
    </>
  )
}

export default OurTeam