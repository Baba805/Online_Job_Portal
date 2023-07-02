import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { deleteServicesByID, getServices } from '../../Api/request';
import ServiceStyle from './Services.module.css'
import { Box, Button, Container, Grid } from '@mui/material';
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

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
      <Button variant='contained' style={{marginBottom : '50px', marginLeft : '80px'}} > <Link style={{color : 'wheat'}} to='/admin/addservices' >Add Services</Link> </Button>

      <Container maxWidth='xl'>
        <Box sx={{ flexGrow: 1 }}>

          <Grid container spacing={2}>
            {services && services.map((service) => {
              return (
                <>
                  <Grid key={service._id} item xs={6} md={4} >

                    <div className={ServiceStyle.services_card} >
                      <img src={service.imageUrl} alt="" />
                      <h5 className={ServiceStyle.services_h5} >{service.name}</h5>
                      <p className={ServiceStyle.services_p} >  {service.title} </p>

                    </div>
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
                          deleteServicesByID(service._id).then((res) => {
                            Swal.fire(
                              'Deleted!',
                              'Your services has been deleted.',
                              'success'
                            )
                          })
                          setServices(services.filter((x) => x._id !== service._id))
                        }
                      })
                    }}  >Delete</MDBBtn>

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