import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { deleteBlogByID, getBlogs } from '../../Api/request';
import { Box, Button, Container, Grid, TextField } from '@mui/material'
import PersonIcon from '@mui/icons-material/Person';
import { Link } from 'react-router-dom'
import BlogStyle from './Blog.module.css'
import { MDBBtn } from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';






function Blogs() {
const navigate = useNavigate();
const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    if (!localStorage.getItem('admin')) {
      navigate('/admin/login');
    }
  }, [])
  useEffect(() => {
    getBlogs().then((res) => {
      console.log("salam");
      setBlogs(res)
    })
  }, [])
 
  return (
    <section className={BlogStyle.blog}>
        <div style={{ textAlign: 'center', marginTop: '90px', marginBottom: '90px' }} >
          <h3 className={BlogStyle.third_h3} >Our Blog</h3>
          <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" style={{ opacity: '0.3' }} alt="" />
        </div>

    <Button variant='contained' style={{marginBottom : '50px', marginLeft : '80px'}} > <Link style={{color : 'wheat'}} to='/admin/addblog' >Add Blogs</Link> </Button>


        <div>
          <Container maxWidth='xl'>
            <Box sx={{ flexGrow: 1 }}>
              <Grid container spacing={2}>
                {blogs && blogs.map((blog) => {
                  return (
                    <>
                      <Grid item xs={6} md={4} className={BlogStyle.blog_card} >

                        <div className={BlogStyle.blog}>
                          <div className={BlogStyle.blog_img} > <img src={blog.imageUrl} alt="" /> </div>
                          <div className={BlogStyle.blog_title} >
                            <div className={BlogStyle.blog_title_name} >
                              <PersonIcon />
                              <p > {blog.username} </p>
                            </div>
                            <h6 className={BlogStyle.blog_title_h6} > {blog.title} </h6>
                            <div className={BlogStyle.blog_title_content} >

                              <p > {blog.content} </p>
                            </div>
                            <div style={{ textAlign: 'right' }} >
                              <Link className={BlogStyle.blog_button} to='/blog'> Read More </Link>
                            </div>

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
                          deleteBlogByID(blog._id).then((res) => {
                            Swal.fire(
                              'Deleted!',
                              'Your jobs has been deleted.',
                              'success'
                            )
                          })
                          setBlogs(blogs.filter((x) => x._id !== blog._id))
                        }
                      })
                    }}  >Delete</MDBBtn>

                        </div>

                      </Grid>
                    </>
                  )
                })}
              </Grid>
            </Box>
          </Container>
        </div>

      </section>
  )
}

export default Blogs