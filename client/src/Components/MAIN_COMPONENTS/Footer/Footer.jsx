import React, { useRef } from 'react'
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
import emailjs from '@emailjs/browser';



function Footer() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    

    emailjs.sendForm('service_5rjo0bp', 'template_8uznhv8', form.current, 'LDz_njkj1pJTj71qE')
      .then((result) => {

        console.log(result.text);
        console.log('message send');
        e.target.reset()

      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <footer className={FooterStyle.footer}>
      <Container maxWidth='lg'>
        <section className={FooterStyle.first_section}>


          <Grid container spacing={2}>
            <Grid xs={3}>
              <Link to='/'><img src='http://sbtechnosoft.com/guidepro/images/footer-logo.png'></img></Link>
            </Grid>
            <Grid xs={9}>
              <form ref={form} onSubmit={sendEmail}  >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>

                <input  name="user_email" className={FooterStyle.input} type='email' placeholder='Enter Email Adress' />
                <button type='submit' value="Send" className={FooterStyle.button}>SUBCRIBE</button>
              </div>
                </form>

            </Grid>

          </Grid>


        </section>
        <section className={FooterStyle.second_section}>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <div className={FooterStyle.second_section_div}>
                <h3 className={FooterStyle.h3} >Need Help?</h3>
                <div className={FooterStyle.title1} >
                  <LocalPhoneIcon /> <span style={{ marginLeft: '8px', marginRight: '8px' }}> CALL US </span> <span style={{ marginRight: '8px' }} >:</span> <span style={{ marginRight: '4px' }} >+</span> <span> <b>994-70-431-17-12</b> </span>
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={FooterStyle.second_section_div}>
                <h3 className={FooterStyle.h3} >Email : </h3>
                <div className={FooterStyle.title1} >
                  <TelegramIcon style={{ marginRight: "6px" }} /> <span style={{ margin: '0px, 10px' }} > info@test.com </span> <span> <b style={{ marginLeft: "5px", marginRight: "5px" }}>/</b> </span> <span> <b>78rj6f4@code.edu.az</b> </span>
                </div>
              </div>
            </Grid>
            <Grid xs={4}>
              <div className={FooterStyle.second_section_div}>
                <h3 className={FooterStyle.h3} >Need Help?</h3>
                <div className={FooterStyle.title1} >
                  <Link className={FooterStyle.iconLink} to='https://www.facebook.com/'><FacebookOutlinedIcon className={FooterStyle.icon} /></Link>  <Link className={FooterStyle.iconLink} to='https://twitter.com/'><TwitterIcon className={FooterStyle.icon} /></Link> <Link className={FooterStyle.iconLink} to='https://google.com/'><GoogleIcon className={FooterStyle.icon} /></Link> <Link className={FooterStyle.iconLink} to='https://linkedin.com/'><LinkedInIcon className={FooterStyle.icon} /></Link> <Link className={FooterStyle.iconLink} to='https://youtube.com/'><YouTubeIcon className={FooterStyle.icon} /></Link>
                </div>
              </div>
            </Grid>

          </Grid>

        </section>
      </Container>
      <section className={FooterStyle.third_section}>
        <Container maxWidth='lg'>
          <Grid container spacing={2}>
            <Grid xs={4}>
              <div className={FooterStyle.third_section_first_div} > © Copyright 2023 JobPool. All Rights Reserved</div>
            </Grid>
            <Grid xs={8}>
              <div className={FooterStyle.third_section_second_div} >
                <ul style={{ display: 'flex', justifyContent: 'space-around' }} >
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='/home'>HOME</Link> </li>
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='/aboutus'>ABOUT US </Link> </li>
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='/pricing'>PRICING</Link> </li>
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='/jobs'>JOB LIST</Link> </li>
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='/ourteam'>OUR TEAM</Link> </li>
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='/bloggrids'>BLOG</Link> </li>
                  <li style={{ listStyle: 'none' }} > <Link className={FooterStyle.title_link} to='contactus'>CONTACT US</Link> </li>
                </ul>
              </div>
            </Grid>
          </Grid>

        </Container>
      </section>

    </footer>
  )
}

export default Footer