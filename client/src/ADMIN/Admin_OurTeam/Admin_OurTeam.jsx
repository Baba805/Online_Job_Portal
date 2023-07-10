import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Box, Button, Container, Grid } from '@mui/material'
import OurTeamStyle from './Admin_OurTeam.module.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { deleteOurTeamByID, getOurTeam } from '../../Api/request';
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';


function Admin_OurTeam() {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])

    const [ourteams ,SetOurTeam] = useState([]);

    useEffect(() => {
        getOurTeam().then((res)=>{
          SetOurTeam(res)
        })
      }, [])
  return (
    <>
     <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
        <h3 className={OurTeamStyle.third_h3} >Our Team</h3>
        <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
      </div>
      <Button variant='contained' style={{ marginBottom: '50px', marginLeft: '80px' }} > <Link style={{ color: 'wheat' }} to='/admin/addourteam' >Add Team Member</Link> </Button>


    <section style={{marginTop : '80px'}} >
    <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Grid container spacing={2}>
              { ourteams && ourteams.map((ourteam)=>{
                return(
                  <>
                  
                  <Grid item xs={6} md={4} >
                    <div className={OurTeamStyle.thumb} >
                      <img className={OurTeamStyle.img} src={ourteam.imageUrl} height='461px' alt="" />
                      <div className={OurTeamStyle.social_links} >
                        <ul>
                          <li style={{listStyle : 'none'}} >   <Link to='/twitter.com' className={OurTeamStyle.link} > <TwitterIcon/> </Link> </li>
                          <li style={{listStyle : 'none'}} >  <Link to='/facebook.com' className={OurTeamStyle.link}>  <FacebookIcon/>   </Link>  </li>
                          <li style={{listStyle : 'none'}} >  <Link to='/instagram.com' className={OurTeamStyle.link}>  <InstagramIcon/>  </Link>   </li>
                          <li style={{listStyle : 'none'}} >  <Link to='/linkedin.com' className={OurTeamStyle.link}>  <LinkedInIcon/>   </Link>  </li>
                        </ul>
                      </div>
                    </div>

                    <div className={OurTeamStyle.staff_content} >
                      <h3> {ourteam.name} </h3>
                      <h4> {ourteam.posession} </h4>
                      <div>
                      <MDBBtn type='submit' color='danger' className="mb-4 w-100" onClick={() => {
                          Swal.fire({
                            title: 'Are you sure?',
                            text: "You won't be able to revert this!",
                            icon: 'warning',
                            showCancelButton: true,
                            confirmButtonColor: '#3085d6',
                            cancelButtonColor: '#d33',
                            confirmButtonText: 'Yes, delete it!'
                          }).then((result) => {
                            if (result.isConfirmed) {
                              deleteOurTeamByID(ourteam._id).then((res) => {
                                Swal.fire(
                                  'Deleted!',
                                  'Your team member has been deleted.',
                                  'success'
                                )
                              })
                              SetOurTeam(ourteams.filter((x) => x._id !== ourteam._id))
                            }
                          })
                        }}  >Delete</MDBBtn>
                        <MDBBtn type='submit' color='warning' className="mb-4 w-100" > <Link to={`/admin/ourteam/edit/${ourteam._id}`} style={{color : 'white'}} >Edit</Link> </MDBBtn>

                      </div>
                    </div>

                    </Grid>

                  </>
                )
              })}
              </Grid>
              </Box>
              </Container>
    </section>

   
    </>
  )
}

export default Admin_OurTeam