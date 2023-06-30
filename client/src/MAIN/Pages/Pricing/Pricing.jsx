import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {getComment, getPrices} from '../../../Api/request'
import pricingStyle from './Pricing.module.css'
import { useUserContext } from '../../../Context/UserContext';
import { Slide } from 'react-slideshow-image';

import 'react-slideshow-image/dist/styles.css';


function Pricing() {
  const [user, setUser] = useUserContext();


  const [prices, setPrices] = useState([]);

  const [comment, setComment] = useState([])
  useEffect(() => {
    getComment().then((res) => {
      console.log("salam");
      setComment(res)
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

  return (
   <>

<section>
      <img className={pricingStyle.img} src="http://sbtechnosoft.com/guidepro/images/about/about-banner.jpg" alt="" />
      <div className={pricingStyle.first_div} >
        <h2 className={pricingStyle.h2} >Pricing</h2>
      </div>
    </section>
   <section  >
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={pricingStyle.third_h3} >Our Price Table</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
        </div>

        <div>
          <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {prices && prices.map((price) => {
                  return (
                    <>
                      <Grid item xs={6} md={4} className={pricingStyle.price_card} >
                        <div className={pricingStyle.price} >
                          <div className={pricingStyle.price_title} > DEDICATED SERVERS</div>
                          <div className={pricingStyle.price_head} >
                            <h4> $ {price.price}  </h4>
                            <p>PER MONTH</p>
                          </div>
                          <ul className={pricingStyle.price_ul} >
                            <li className={pricingStyle.price_li} > {price.service_one} </li>
                            <li className={pricingStyle.price_li} > {price.service_two} </li>
                            <li className={pricingStyle.price_li} > {price.service_three} </li>
                            <li className={pricingStyle.price_li} > {price.service_four} </li>
                            <li className={pricingStyle.price_li} > {price.service_five} </li>
                          </ul>
                          {user ? (
                          <button className={pricingStyle.price_button}  type='button'   > Sign Up </button>

                          ) :(
                          <button className={pricingStyle.price_button}  type='button' disabled style={{backgroundColor : '#eee8f8'}}  > Sign Up </button>

                          ) } 
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

      <section className={pricingStyle.count} >
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3} >
               
                <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                  <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon1.png" alt="" />
                  <h4 className={pricingStyle.count_h4} >150+</h4>
                  <span className={pricingStyle.count_span} >FACULTIES</span>
                </div>
                
            </Grid>
            <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon2.png" alt="" />
                 <h4 className={pricingStyle.count_h4} >2300+</h4>
                 <span className={pricingStyle.count_span} >STUDENTS</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon3.png" alt="" />
                 <h4 className={pricingStyle.count_h4} >40+</h4>
                 <span className={pricingStyle.count_span} >COURSES</span>
               </div>
               
           </Grid>
           <Grid item xs={12} sm={6} md={3} >
               
               <div  style={{display : 'flex' , flexDirection : 'column', justifyContent : 'center', alignItems: 'center' }} >
                 <img  style={{marginBottom : '10px'}} src="http://sbtechnosoft.com/guidepro/images/count/count-icon4.png" alt="" />
                 <h4 className={pricingStyle.count_h4} >80+</h4>
                 <span className={pricingStyle.count_span} >COUNTRIES</span>
               </div>
               
           </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

      <section className={pricingStyle.comments} >

<div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
    <h3 className={pricingStyle.third_h3} >Happy Candidates</h3>
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
                     
                      <p  className={pricingStyle.slider_p} > {comment.title} </p>
                     
                  </div>
                  <div style={{display: 'flex', justifyContent : 'center', alignItems : 'center', flexDirection : 'column'}} className='slide-1-img'>
                      <img className={pricingStyle.slider_img} src={comment.imageUrl} alt="img0" />
                      <h1 className={pricingStyle.slider_h1} > {comment.name} </h1>
                      <p className={pricingStyle.slider_p} >  {comment.posession} </p>
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

export default Pricing