import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getServices } from '../../Api/request';
import ServiceStyle from './Services.module.css'
import { Box, Container, Grid } from '@mui/material';
import { MDBBtn } from 'mdb-react-ui-kit';

function Services() {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);


  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])

  useEffect(() => {
    getServices().then((res) => {
      console.log("salam");
      setServices(res)
    })
  }, [])
  return (
    <section className={ServiceStyle.servives}>

        <div style={{ textAlign: 'center', marginTop: '90px' }} >
          <h3 className={ServiceStyle.third_h3} >Our Services</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
        </div>

        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
              {services && services.map((service) => {
                return (
                  <>
                    <Grid item xs={6} md={4} >

                      <div className={ServiceStyle.services_card} >
                        <img src={service.imageUrl} alt="" />
                        <h5 className={ServiceStyle.services_h5} >{service.name}</h5>
                        <p className={ServiceStyle.services_p} >  {service.title} </p>

                      </div>
                      <MDBBtn type='submit' color='danger' className="mb-4 w-100">Delete</MDBBtn>

                    </Grid>

                  </>
                )
              })}

            </Grid>
          </Box>
        </Container>

      </section>
  )
}

export default Services