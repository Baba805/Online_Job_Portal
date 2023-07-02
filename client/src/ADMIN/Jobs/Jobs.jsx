import { Box, Button, Container, Grid, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteVacantieByID, getvacancies } from '../../Api/request';
import JobsStyle from './Jobs.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

function Jobs() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    getvacancies().then((res) => {
      console.log("salam");
      setJobs(res)
    })
  }, [])

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])

  const sortDataRecent = () => {
    const sortedData = [...jobs].sort((a, b) => {
      if (sort) {
        return a.location.localeCompare(b.location)
      }
      else {
        return b.location.localeCompare(a.location)
      }
    });
    setJobs(sortedData);
    setSort(!sort)
  };

  const sortDaFull = () => {
    const sortedData = [...jobs].sort((a, b) => {
      if (sort) {
        return a.time.localeCompare(b.time)
      }
      else {
        return b.time.localeCompare(a.time)
      }
    });
    setJobs(sortedData);
    setSort(!sort)
  };
  const [sort, setSort] = useState(true)

  function handleSearch(e) {

    getvacancies(e.target.value).then((res) => {
      setJobs(res);
    });
  }
  return (
    <section className={JobsStyle.current_jobs}>
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={JobsStyle.third_h3} >Current Jobs</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
        </div>
        <Container maxWidth='xl'  >
          <div  >
            <TextField
              onChange={(e) => handleSearch(e)}
              style={{ marginBottom: "30px" }}
              id="outlined-basic"
              label="Search Artist"
              variant="outlined"
            />
            <Button
              variant="contained"
              color="success"
              style={{ marginLeft: '10px' }}
              onClick={() => {
                let sortedSale = [...jobs.sort((a, b) => a.sale - b.sale)];
                setJobs(sortedSale);
              }}
            >Sort</Button>
          </div>

        </Container>
        <Container maxWidth='xl'>
          <Box sx={{ flexGrow: 1 }}>

            <Container maxWidth='xl'>
              <Box sx={{ flexGrow: 1 }}>

                <Grid container spacing={1} className={JobsStyle.jobs_filter_div}  >
                  <Grid item xs={12} sm={2} >
                    <button className={JobsStyle.jobs_filter_btn} onClick={sortDataRecent} >All</button>
                  </Grid>
                  <Grid item xs={12} sm={2} >
                    <button className={JobsStyle.jobs_filter_btn} onClick={sortDataRecent} >Recent</button>
                  </Grid>
                  <Grid item xs={12} sm={2} >
                    <button className={JobsStyle.jobs_filter_btn} onClick={sortDaFull} >Part Time</button>
                  </Grid>
                  <Grid item xs={12} sm={2} >
                    <button className={JobsStyle.jobs_filter_btn} onClick={sortDaFull} >Full Time</button>
                  </Grid>
                </Grid>
              </Box>
            </Container>


            <Grid container spacing={2}>
              {jobs && jobs.map((vacancie) => {
                return (
                  <>
                    <Grid item xs={6} md={4} >

                      <div className={JobsStyle.jobs_card} >
                        <div className={JobsStyle.jobs_img} >
                          <img src={vacancie.imageUrl} width='89px' height='89px' alt="" />
                        </div>
                        <div className={JobsStyle.jobs_title} >
                         <h4 className={JobsStyle.jobs_title_h4} > {vacancie.name} </h4>
                          <p className={JobsStyle.jobs_title_p}  >   <img src="http://sbtechnosoft.com/guidepro/images/money-bag-icon.png" alt="" /> $  {vacancie.sale}  </p>
                          <p className={JobsStyle.jobs_title_p_} style={{ marginTop: '10px' }} > <img src="http://sbtechnosoft.com/guidepro/images/map-icon.png" alt="" /> {vacancie.location}  </p>
                        </div>
                        <div className={JobsStyle.jobs_buttons} >
                          <button className={JobsStyle.jobs_button_apply} type='button'   >Apply Now</button>
                          <button className={JobsStyle.jobs_button_full}  >{vacancie.time}</button>
                          <MDBBtn type='submit' color='danger'  onClick={() => {
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
                          deleteVacantieByID(vacancie._id).then((res) => {
                            Swal.fire(
                              'Deleted!',
                              'Your jobs has been deleted.',
                              'success'
                            )
                          })
                          setJobs(jobs.filter((x) => x._id !== vacancie._id))
                        }
                      })
                    }}  >Delete</MDBBtn>
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
  )
}

export default Jobs