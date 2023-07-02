import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid, TextField } from '@mui/material'
import { getPrices } from '../../Api/request';
import PricesStyle from './Prices.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';


function Prices() {
  const navigate = useNavigate();
  const [prices, setPrices] = useState([]);


  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  useEffect(() => {
    getPrices().then((res) => {
      console.log("salam");
      setPrices(res)
    })
  }, [])
  return (
    <section style={{marginBottom : '100px'}} >
    <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
      <h3 className={PricesStyle.third_h3} >Our Price Table</h3>
      <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
    </div>

    <div>
      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {prices && prices.map((price) => {
              return (
                <>
                  <Grid item xs={6} md={4} className={PricesStyle.price_card} >
                    <div className={PricesStyle.price} >
                      <div className={PricesStyle.price_title} > DEDICATED SERVERS</div>
                      <div className={PricesStyle.price_head} >
                        <h4> $ {price.price}  </h4>
                        <p>PER MONTH</p>
                      </div>
                      <ul className={PricesStyle.price_ul} >
                        <li className={PricesStyle.price_li} > {price.service_one} </li>
                        <li className={PricesStyle.price_li} > {price.service_two} </li>
                        <li className={PricesStyle.price_li} > {price.service_three} </li>
                        <li className={PricesStyle.price_li} > {price.service_four} </li>
                        <li className={PricesStyle.price_li} > {price.service_five} </li>
                      </ul>
                      <div style={{display : 'flex', justifyContent : 'space-between', alignItems:'center', flexDirection : 'column' , height : '100px'}} >
                      <button className={PricesStyle.price_button} type='button'    > Sign Up </button>
                      <MDBBtn type='submit' color='danger' >Delete</MDBBtn>
                      </div>
                      

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
  )
}

export default Prices