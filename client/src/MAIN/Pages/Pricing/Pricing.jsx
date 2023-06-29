import { Box, Container, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {getPrices} from '../../../Api/request'
import pricingStyle from './Pricing.module.css'
import { useUserContext } from '../../../Context/UserContext';



function Pricing() {
  const [user, setUser] = useUserContext();


  const [prices, setPrices] = useState([]);

  useEffect(() => {
    getPrices().then((res) => {
      console.log("salam");
      setPrices(res)
    })
  }, [])

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
   
   </>
  )
}

export default Pricing