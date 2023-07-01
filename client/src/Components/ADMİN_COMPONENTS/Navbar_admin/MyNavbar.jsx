// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { useUserContext } from '../../../Context/UserContext';
// import Grid from '@mui/material/Grid';
// import NavbarStyle from './MyNavbar.module.css';

// import { Button } from '@mui/material';



// function Navbar() {
//     const [user, setUser] = useUserContext();
//   const navigate = useNavigate();
//   return (
//     <Grid item xs={4} md={4}>
//     <div className={NavbarStyle.opsi}>
//       <div className={NavbarStyle.div_link}>
//       {user ? (
//   <>
//     <Button color="inherit">
//      { user.companyName ?? user.name}
//     </Button>
//     <Button  className={NavbarStyle.link}   onClick={async()=>{
//       localStorage.removeItem('token');
//       localStorage.removeItem('user');
//       await setUser(null);
//       navigate('/login');
//     }} color="inherit"   >
//       Logout
//     </Button>
//   </>
// ) : (
//   <>
//     <Button color="inherit">
//       <Link to="/login" className={NavbarStyle.link}  >Login</Link>
//     </Button>
//     <Button color="inherit">
//       <Link to="/register"  className={NavbarStyle.link} >Register</Link>
//     </Button>
//   </>
// )}


//       </div>
//     </div>
//   </Grid>
//   )
// }

// export default Navbar