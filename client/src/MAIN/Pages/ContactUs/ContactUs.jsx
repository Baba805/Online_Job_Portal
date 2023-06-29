import React from 'react'
import contactUsStyle from './ContactUs.module.css'
import { Box, Container, Grid } from '@mui/material'

function ContactUs() {
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

                <form >

                </form>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </section>

    </>

  )
}

export default ContactUs