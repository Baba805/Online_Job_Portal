import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import homeStyle from './Home.module.css'
import { Link, useNavigate } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PersonIcon from '@mui/icons-material/Person';
import { getServices, getvacancies, getBlogs, getPrices, getComment } from '../../../Api/request';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';



function EmployerHome() {
  const [comment, setComment] = useState([])
  const [services, setServices] = useState([]);
  const [jobs, setJobs] = useState([]);
  const [blogs, setBlogs] = useState([]);
  const [prices, setPrices] = useState([]);
  const[users,setUsers] = useState([]);


  const navigate = useNavigate();

  useEffect(() => {
    getComment().then((res) => {
      console.log("salam");
      setComment(res)
    })
  }, [])

  useEffect(()=>{
    if (!localStorage.getItem('user')) {
      navigate('/login');
    }
  },[])




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
  useEffect(() => {
    getBlogs().then((res) => {
      console.log("salam");
      setBlogs(res)
    })
  }, [])
  useEffect(() => {
    getPrices().then((res) => {
      console.log("salam");
      setPrices(res)
    })
  }, [])

// SLIDER
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


  const sortDataRecent = () => {
    const sortedData = [...jobs].sort((a, b) => {
      if (sort) {
        return a.location.localeCompare(b.location)
      }
      else {
        return b.location.localeCompare(a.location)
      }
    });
    setJobs(sortedData);
    setSort(!sort)
  };
  const [sort, setSort] = useState(true)

  const sortDataFull =()=>{
    const sortedData = [...jobs].sort((a,b)=>{
      if (sort) {
        if (a.time) {
          return a.time.localeCompare(b.time)
        }
        
      }
      else b.time.localeCompare(a.time)
    })
    setJobs(sortedData);
    setSort(!sort)
  }








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
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={homeStyle.third_h3} >Current Jobs</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
        </div>

        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={1} className={homeStyle.jobs_filter_div}  >
            <Grid item xs={12} sm={2} >
                <button className={homeStyle.jobs_filter_btn} >All</button>
              </Grid>
              <Grid item xs={12} sm={2} >
                <button className={homeStyle.jobs_filter_btn} onClick={sortDataRecent} >Recent</button>
              </Grid>
              <Grid item xs={12} sm={2} >
                <button className={homeStyle.jobs_filter_btn} >Part Time</button>
              </Grid>
              <Grid item xs={12} sm={2} >
                <button className={homeStyle.jobs_filter_btn} >Full Time</button>
              </Grid>
              <Grid item xs={12} sm={2} >
                <button className={homeStyle.jobs_filter_btn}  > <Link className={homeStyle.jobs_filter_btn} style={{border : 'none'}} to='/addjob'> Add New Job </Link> </button>
              </Grid>
              </Grid>
              </Box>
              </Container>
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
                          <p className={homeStyle.jobs_title_p}  >   <img src="http://sbtechnosoft.com/guidepro/images/money-bag-icon.png" alt="" /> $  {vacancie.sale}  </p>
                          <p className={homeStyle.jobs_title_p_} style={{ marginTop: '10px' }} > <img src="http://sbtechnosoft.com/guidepro/images/map-icon.png" alt="" /> {vacancie.location}  </p>
                        </div>
                        <div className={homeStyle.jobs_buttons} >
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
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={homeStyle.third_h3} >Our Blog</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
        </div>

        <div>
          <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {blogs && blogs.map((blog) => {
                  return (
                    <>
                      <Grid item xs={6} md={4} className={homeStyle.blog_card} >

                        <div className={homeStyle.blog}>
                          <div className={homeStyle.blog_img} > <img src={blog.imageUrl} alt="" /> </div>
                          <div className={homeStyle.blog_title} >
                            <div className={homeStyle.blog_title_name} >
                              <PersonIcon />
                              <p > {blog.username} </p>
                            </div>
                            <h6 className={homeStyle.blog_title_h6} > {blog.title} </h6>
                            <div className={homeStyle.blog_title_content} >

                              <p > {blog.content} </p>
                            </div>
                            <div style={{ textAlign: 'right' }} >
                              <Link className={homeStyle.blog_button} to='/blog'> Read More </Link>
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

      <section className={homeStyle.subscription} >
        <h3>Subscribe</h3>
        <p>Get weekly top new jobs delivered to your inbox</p>
        <Grid container spacing={2}>
          <Grid xs={12} style={{ position: 'relative', display: 'inline-block', marginTop: '40px' }} >
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <input className={homeStyle.subscription_input} type='email' placeholder='Enter Email Adress' />
              <button className={homeStyle.subscription_button} type='submit'>SUBCRIBE</button>
            </div>
          </Grid>

        </Grid>
      </section>

      <section  >
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={homeStyle.third_h3} >Our Price Table</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
        </div>

        <div>
          <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {prices && prices.map((price) => {
                  return (
                    <>
                      <Grid item xs={6} md={4} className={homeStyle.price_card} >
                        <div className={homeStyle.price} >
                          <div className={homeStyle.price_title} > DEDICATED SERVERS</div>
                          <div className={homeStyle.price_head} >
                            <h4> $ {price.price}  </h4>
                            <p>PER MONTH</p>
                          </div>
                          <ul className={homeStyle.price_ul} >
                            <li className={homeStyle.price_li} > {price.service_one} </li>
                            <li className={homeStyle.price_li} > {price.service_two} </li>
                            <li className={homeStyle.price_li} > {price.service_three} </li>
                            <li className={homeStyle.price_li} > {price.service_four} </li>
                            <li className={homeStyle.price_li} > {price.service_five} </li>
                          </ul>
                          <button className={homeStyle.price_button}> Sign Up </button>
                        </div>
                      </Grid>
                    </>
                  )
                }

                )
                }

              </Grid>
            </Box>
          </Container>
        </div>

      </section>

      <section className={homeStyle.count} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
               
                <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                  <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon1.png" alt="" />
                  <h4 className={homeStyle.count_h4} >150+</h4>
                  <span className={homeStyle.count_span} >FACULTIES</span>
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon2.png" alt="" />
                 <h4 className={homeStyle.count_h4} >2300+</h4>
                 <span className={homeStyle.count_span} >STUDENTS</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon3.png" alt="" />
                 <h4 className={homeStyle.count_h4} >40+</h4>
                 <span className={homeStyle.count_span} >COURSES</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon4.png" alt="" />
                 <h4 className={homeStyle.count_h4} >80+</h4>
                 <span className={homeStyle.count_span} >COUNTRIES</span>
               </div>
               
           </Grid>
            </Grid>
          </Box>
        </Container>
      </section>
      <section className={homeStyle.comments} >

      <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={homeStyle.third_h3} >Happy Candidates</h3>
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
                           
                            <p  className={homeStyle.slider_p} > {comment.title} </p>
                           
                        </div>
                        <div style={{display: 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}} className='slide-1-img'>
                            <img className={homeStyle.slider_img} src={comment.imageUrl} alt="img0" />
                            <h1 className={homeStyle.slider_h1} > {comment.name} </h1>
                            <p className={homeStyle.slider_p} >  {comment.posession} </p>
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

export default EmployerHome