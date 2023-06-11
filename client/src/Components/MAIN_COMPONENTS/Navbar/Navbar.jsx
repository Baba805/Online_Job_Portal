import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {Link} from 'react-router-dom';
import NavbarStyle from './Navbar.module.css'




function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} >
      <Grid container spacing={2}>
        <Grid item xs={4} md={4}>
         <Link to = '/home'>  <img src='http://sbtechnosoft.com/guidepro/images/logo.png' alt='#'></img></Link>
        </Grid>
        <Grid item xs={5} md={5} style={{display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>
         <ul style={{display : 'flex', justifyContent : 'space-around', alignItems : 'center'}}>
          <li style={{listStyle : 'none'}}   > <Link className={NavbarStyle.a}   style={{textDecoration : 'none', transition: 'all 0.3s ease 0s'}} to= '/home'>HOME</Link> </li>
          <li style={{listStyle : 'none'}}  > <Link  className={NavbarStyle.a}  style={{textDecoration : 'none', transition: 'all 0.3s ease 0s'}} to= '/aboutus'>ABOUT US</Link> </li>
          <li style={{listStyle : 'none'}}  > <Link  className={NavbarStyle.a}  style={{textDecoration : 'none', transition: 'all 0.3s ease 0s'}} to= '/'>PAGES</Link> </li>
          <li style={{listStyle : 'none'}}  > <Link  className={NavbarStyle.a}  style={{textDecoration : 'none', transition: 'all 0.3s ease 0s'}} to= '/'>JOBS</Link> </li>
          <li style={{listStyle : 'none'}}  > <Link  className={NavbarStyle.a}  style={{textDecoration : 'none', transition: 'all 0.3s ease 0s'}} to= '/'>BLOG</Link> </li>
          <li style={{listStyle : 'none'}}  > <Link  className={NavbarStyle.a}  style={{textDecoration : 'none', transition: 'all 0.3s ease 0s'}} to= '/contactus'>CONTACT US</Link> </li>
         </ul>
        </Grid>
       
      </Grid>
    </Box>
  )
}

export default Navbar