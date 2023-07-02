import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Link, useNavigate } from 'react-router-dom';
import NavbarStyle from './Navbar.module.css';
import Container from '@mui/material/Container';
import { Dropdown } from 'antd';
import { useUserContext } from '../../../Context/UserContext';
import { Button, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';



const items = [
  {
    key: '1',
    label: (
      <Link to='aboutus'>ABOUT US</Link>
    ),
  },
  {
    key: '2',
    label: (
      <Link to='ourteam'>OUR TEAM</Link>

    ),
  },
  {
    key: '3',
    label: (
      <Link to='pricing'>PRICING</Link>

    ),
  },
];
// const items = [
//   {
//     key: '1',
//     label: (
//       <Link to='joblist'>JOB LIST</Link>
//     ),
//   },
//   {
//     key: '2',
//     label: (
//       <Link to='jobdetails'>JOB DETAILS</Link>

//     ),
//   },

// ];





function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [user, setUser] = useUserContext();
  const navigate = useNavigate();


  return (
    <nav style={{ position: 'sticky', zIndex: '999' }} >
      <Container maxWidth='lg' style={{ top: '0px', marginBottom: '50px' }}>
        <Box sx={{ flexGrow: 1 }} style={{ backgroundColor: '#ffffff', margin: '.8rem 1rem' }} >
          <Grid container spacing={2}>
            <Grid item xs={4} md={4}>
              <Link to='/'>  <img src='http://sbtechnosoft.com/guidepro/images/logo.png' alt='#'></img></Link>
            </Grid>
            <Grid item xs={8} md={8} style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
              <Grid item xs={8} md={8} className={NavbarStyle.menu} >
                <ul style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                  <li style={{ listStyle: 'none' }}   > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/'>HOME</Link> </li>
                  <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/aboutus'>ABOUT US</Link> </li>
                  <li style={{ listStyle: 'none' }}  > <Dropdown
                    menu={{
                      items,
                      mode: 'vertical',

                    }}
                    placement="bottom"
                  >
                    <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/'>PAGES</Link>
                  </Dropdown> </li>
                  <li style={{ listStyle: 'none' }}  ><Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/joblist'>JOBS</Link> </li>
                  <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/bloggrids'>BLOG</Link></li>
                  <li style={{ listStyle: 'none' }}  > <Link className={NavbarStyle.a} style={{ textDecoration: 'none', transition: 'all 0.3s ease 0s' }} to='/contactus'>CONTACT US</Link> </li>

                </ul>
              </Grid>
              <Grid item xs={6} md={4}>
                <div className={NavbarStyle.opsi}>
                  <div className={NavbarStyle.div_link}>
                    {user ? (
                      <>
                        <Button color="inherit">
                          {user.companyName ?? user.name}
                        </Button>
                        <Button className={NavbarStyle.link} onClick={async () => {
                          localStorage.removeItem('token');
                          localStorage.removeItem('user');
                          await setUser(null);
                          navigate('/login');
                        }} color="inherit"   >
                          Logout
                        </Button>
                      </>
                    ) : (
                      <>
                        <Button color="inherit">
                          <Link to="/login" className={NavbarStyle.link}  >Login</Link>
                        </Button>
                        <Button color="inherit">
                          <Link to="/register" className={NavbarStyle.link} >Register</Link>
                        </Button>
                      </>
                    )}


                  </div>
                </div>
              </Grid>
              <Grid item xs={6} md={4} className={NavbarStyle.menu_icon_div} >
                <div>
                  <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                  >   <div className={NavbarStyle.menu_icon_div} >
                      <MenuIcon className={NavbarStyle.menu_icon} />
                    </div>

                  </Button>
                  <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                      'aria-labelledby': 'basic-button',
                    }}
                  >
                    <Link to='/' >
                      <MenuItem onClick={handleClose}>Home</MenuItem>
                    </Link>
                    <Link to='/aboutus' >
                    <MenuItem onClick={handleClose}>About Us</MenuItem>
                    </Link>
                    <Link to='/jobs' >
                    <MenuItem onClick={handleClose}>Jobs</MenuItem>                  
                    </Link>
                    <Link to='/blog' >
                    <MenuItem onClick={handleClose}>Blog</MenuItem>
                    
                    </Link>
                    <Link to='/contactus' >
                    <MenuItem onClick={handleClose}>Contact Us</MenuItem>
                    
                    </Link>
                  </Menu>
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