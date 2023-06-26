import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import homeStyle from './Home.module.css'
import { Link } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import { getServices, getvacancies } from '../../../Api/request';


function Home() {

  const [services, setServices] = useState([]);
  const [jobs, setJobs] = useState([])


  useEffect(() => {
    getServices().then((res) => {
      console.log("salam");
      setServices(res)
    })
  }, [])

  useEffect(() => {
    getvacancies().then((res) => {
      console.log("salam");
      setJobs(res)
    })
  }, [])





  return (
    <>
      <div className={homeStyle.main}>
        <Container maxWidth='md' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>

          <section className={homeStyle.banner_section}>
            <h2 className={homeStyle.h2}>Find The Job That Fits Your Life</h2>
            <p className={homeStyle.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
            <div style={{ marginTop: '20px' }}><Link className={homeStyle.link} to='/jobdetail'>KNOW MORE</Link></div>

          </section>

          <section className={homeStyle.filter_section}>
            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }} >
              <PlaceIcon style={{ color: 'red' }} />

              <select className={homeStyle.input_group} name="" id="">
                <option value="">Any Category</option>
                <option value="">Web Developer</option>
                <option value="">App Developer</option>
                <option value="">Graphic Designer</option>
              </select>
            </div>
            <div className={homeStyle.search}>

              <button className={homeStyle.btn} > <SearchIcon />  SEARCH JOSB</button>

            </div>
          </section>
        </Container>
      </div>


      <section className={homeStyle.info}>
        <Container maxWidth='xl' className={homeStyle.info_all_div} >
          <div className={homeStyle.info_left} >
            <img className={homeStyle.left_img} src="http://sbtechnosoft.com/guidepro/images/people-group.png" alt="" />
            <div className={homeStyle.title} >
              <h2 className={homeStyle.left_h2} >Your Looking for Tranding Jobs</h2>
              <p className={homeStyle.left_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
            </div>
          </div>
          <div className={homeStyle.info_right} >
            <div className={homeStyle.a}>
              {/* <img src="http://sbtechnosoft.com/guidepro/images/strip-square.png" style={{marginTop : '50px'}}  height="300px" alt="" /> */}
            </div>
            <div className={homeStyle.right_right} >
              <div className={homeStyle.developer} >
                <img src="http://sbtechnosoft.com/guidepro/images/laptop.png" alt="" />
                <h5 className={homeStyle.right_h5}  >DEVELOPER  </h5>
                <span>7 Jobs</span>
              </div>

              <div className={homeStyle.technology} >
                <img src="http://sbtechnosoft.com/guidepro/images/technology.png" alt="" />
                <h5 className={homeStyle.right_h5}>TECHNOLOGY  </h5>
                <span>5 Jobs</span>
              </div>

              <div className={homeStyle.government} >
                <img src="http://sbtechnosoft.com/guidepro/images/government.png" alt="" />
                <h5 className={homeStyle.right_h5} >GOVERNMENT  </h5>
                <span>2 Jobs</span>

              </div>
            </div>
          </div>
        </Container>

      </section>

      <section className={homeStyle.third_section} >
        <div style={{ textAlign: 'center', marginTop: '90px' }} >
          <h3 className={homeStyle.third_h3} >Our Works Process</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
        </div>

        <div className={homeStyle.third_cards} >
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <div className={homeStyle.first_card} >
                  <div className={homeStyle.first_card_iconn} > <PersonAddAltIcon /> </div>
                  <h4 className={homeStyle.first_card_h4} >Create Account</h4>
                  <p className={homeStyle.first_card_item} >Lorem ipsum dolor sit amet, a arcu justo eget, placerat suspendisse ornare accumsan et fringilla consectetuer</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={homeStyle.first_card} >
                  <div className={homeStyle.first_card_iconn} > <SearchIcon style={{ boxSizing: 'content-box' }} /> </div>
                  <h4 className={homeStyle.first_card_h4} >Serach Job</h4>
                  <p className={homeStyle.first_card_item} >Lorem ipsum dolor sit amet, a arcu justo eget, placerat suspendisse ornare accumsan et fringilla consectetuer</p>
                </div>
              </Grid>
              <Grid item xs={4}>
                <div className={homeStyle.first_card} >
                  <div className={homeStyle.first_card_iconn} >  <ContentCopyIcon /> </div>
                  <h4 className={homeStyle.first_card_h4} >Submit Resume</h4>
                  <p className={homeStyle.first_card_item} >Lorem ipsum dolor sit amet, a arcu justo eget, placerat suspendisse ornare accumsan et fringilla consectetuer</p>
                </div>
              </Grid>

            </Grid>
          </Box>
        </div>
      </section>

      <section className={homeStyle.servives}>

        <div style={{ textAlign: 'center', marginTop: '90px' }} >
          <h3 className={homeStyle.third_h3} >Our Services</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
        </div>

        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
              {services && services.map((service) => {
                return (
                  <>
                    <Grid item xs={6} md={4} >

                      <div className={homeStyle.services_card} >
                        <img src={service.imageUrl} alt="" />
                        <h5 className={homeStyle.services_h5} >{service.name}</h5>
                        <p className={homeStyle.services_p} >  {service.title} </p>

                      </div>

                    </Grid>

                  </>
                )
              })}

            </Grid>
          </Box>
        </Container>

      </section>


      <section className={homeStyle.current_jobs}>
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom : '90px' }} >
          <h3 className={homeStyle.third_h3} >Current Jobs</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
        </div>
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
              {jobs && jobs.map((vacancie) => {
                return (
                  <>
                    <Grid item xs={6} md={4} >

                     <div className={homeStyle.jobs_card} >
                     <div className={homeStyle.jobs_img} >
                        <img src={vacancie.imageUrl} alt="" />
                      </div>
                      <div className={homeStyle.jobs_title} >
                        <h4 className={homeStyle.jobs_title_h4} > {vacancie.name} </h4>
                       <p  className={homeStyle.jobs_title_p}  >   <img src="http://sbtechnosoft.com/guidepro/images/money-bag-icon.png" alt="" /> $  {vacancie.sale}  </p>
                        <p className={homeStyle.jobs_title_p_} style={{marginTop : '10px'}} > <img src="http://sbtechnosoft.com/guidepro/images/map-icon.png" alt="" /> {vacancie.location}  </p>
                      </div>
                      <div className={homeStyle.jobs_buttons} >
                        <button className={homeStyle.jobs_button_apply} >Apply Now</button>
                        <button className={homeStyle.jobs_button_full} >Full Time</button>
                      </div>
                     </div>

                    </Grid>

                  </>
                )
              })}

            </Grid>
          </Box>
        </Container>


      </section>

      <section className={homeStyle.blog}>
      <div style={{ textAlign: 'center', marginTop: '90px', marginBottom : '90px' }} >
          <h3 className={homeStyle.third_h3} >Our Blog</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }}  alt="" />
        </div>

      </section>
    </>
  )
}

export default Home