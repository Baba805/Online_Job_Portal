import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import NavbarStyle from './index.module.css';
import Container from '@mui/material/Container';
import { useAdminContext } from '../../Context/UserContext';
import { Button } from '@mui/material';










function Navbar() {
  const [admin, setAdmin] = useAdminContext();
  const navigate = useNavigate();

  
  return (
    <nav style={{position : 'sticky', zIndex : '999'}} >
      <Container maxWidth='lg' style={{ top: '0px', marginBottom : '50px'}}>
      <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#ffffff', margin: '.8rem 1rem' }} >
        <Grid container spacing={2}>
          <Grid item xs={4} md={4}>
            <Link to='/admin'>  <img src='http://sbtechnosoft.com/guidepro/images/logo.png' alt='#'></img></Link>
          </Grid>
          <Grid item xs={8} md={8} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
            <Grid item xs={8} md={8} >
              <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/services'>Services</Link> </li>
              
                <li style={{ listStyle: 'none' }}  ><Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/jobs'>JOBS</Link> </li>
                <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/blogs'>BLOG</Link></li>
                <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/prices'>Prices</Link> </li>
                <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/comments'>Comments</Link> </li>
                <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/ourteam'>Our Team</Link> </li>
                <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/admin/users'>Users</Link> </li>
                
              </ul>
            </Grid>
            <Grid item xs={4} md={4}>
              <div className={NavbarStyle.opsi}>
                <div className={NavbarStyle.div_link}>
                {admin ? (
            <>
              <Button color="inherit">
               { admin.companyName ?? admin.username}
              </Button>
              <Button  className={NavbarStyle.link}   onClick={async()=>{
                localStorage.removeItem('token');
                localStorage.removeItem('admin');
                await setAdmin(null);
                navigate('/admin/login');
              }} color="inherit"   >
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button color="inherit" >
                <Link to="/admin/login" className={NavbarStyle.link}  >Login</Link>
              </Button>
              
            </>
          )}
        
  
                </div>
              </div>
            </Grid>
          </Grid>


        </Grid>
      </Box>
    </Container>
    </nav>
  )
}

export default Navbar