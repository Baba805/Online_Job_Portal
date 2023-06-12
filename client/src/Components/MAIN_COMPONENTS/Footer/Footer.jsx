import React from 'react'
import FooterStyle from './Footer.module.css'
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { Link } from 'react-router-dom';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';


function Footer() {
  return (
    <footer className={FooterStyle.footer}>
      <Container maxWidth='lg'>
        <section className={FooterStyle.first_section}>

        
        <Grid container spacing={2}>
  <Grid xs={3}>
      <Link to= '/'><img src='http://sbtechnosoft.com/guidepro/images/footer-logo.png'></img></Link> 
  </Grid>
  <Grid xs={9}>
   <div style={{display : 'flex', alignItems : 'center', justifyContent : 'end'}}>
    <input className={FooterStyle.input} type='email'  placeholder='Enter Email Adress' /> 
    <button type='submit' className={FooterStyle.button}>SUBCRIBE</button>
   </div>
  </Grid>
 
</Grid>
        
        
        </section>
        <section className={FooterStyle.second_section}>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <div className={FooterStyle.second_section_div}>
              <h3 className={FooterStyle.h3} >Need Help?</h3>
              <div className={FooterStyle.title1} >
<LocalPhoneIcon/> <span>CALL US : </span> <span> <b>+994-70-431-17-12</b> </span>
              </div>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className={FooterStyle.second_section_div}>
              <h3 className={FooterStyle.h3} >Email : </h3>
              <div className={FooterStyle.title1} >
              <TelegramIcon /> <span style={{margin : '0px, 10px'}} > info@test.com </span> <span> <b>/</b> </span> <span> <b>78rj6f4@code.edu.az</b> </span>
              </div>
            </div>
          </Grid>
          <Grid xs={4}>
            <div className={FooterStyle.second_section_div}>
              <h3 className={FooterStyle.h3} >Need Help?</h3>
              <div className={FooterStyle.title1} >
<FacebookOutlinedIcon/>  <TwitterIcon/> <GoogleIcon/> <LinkedInIcon/> <YouTubeIcon/>
              </div>
            </div>
          </Grid>

          </Grid>

        </section>
        <section className={FooterStyle.third_section}>

        </section>
        </Container>
    </footer>
  )
}

export default Footer