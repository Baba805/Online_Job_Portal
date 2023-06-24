import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import homeStyle from './Home.module.css'
import { Link } from 'react-router-dom'
import PlaceIcon from '@mui/icons-material/Place';
import SearchIcon from '@mui/icons-material/Search';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';


function Home() {
  return (
   <>
   <div className={homeStyle.main}>
   <Container maxWidth='md' style={{display : 'flex', flexDirection : 'column', justifyContent : 'space-around'}}>

   <section className={homeStyle.banner_section}>
      <h2 className={homeStyle.h2}>Find The Job That Fits Your Life</h2>
      <p className={homeStyle.p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.</p>
       <div style={{marginTop : '20px'}}><Link  className={homeStyle.link}  to='/jobdetail'>KNOW MORE</Link></div> 
      
    </section>

    <section className={homeStyle.filter_section}>
    <div style={{display : 'flex' , justifyContent : 'space-around', alignItems : 'center'}} >
    <PlaceIcon style={{color : 'red'}} />
      
        <select className={homeStyle.input_group} name="" id="">
          <option value="">Any Category</option>
          <option value="">Web Developer</option>
          <option value="">App Developer</option>
          <option value="">Graphic Designer</option>
        </select>
      </div>
      <div className={homeStyle.search}>
    
    <button   className={homeStyle.btn} > <SearchIcon/>  SEARCH JOSB</button>

      </div>
    </section>
    </Container>
   </div>


   <section className={homeStyle.info}>
   <Container maxWidth='xl' className={homeStyle.info_all_div} >
    <div className={homeStyle.info_left} >
      <img className={homeStyle.left_img} src="http://sbtechnosoft.com/guidepro/images/people-group.png" alt="" />
      <div className={homeStyle.title} >
        <h2 className={homeStyle.left_h2} >Your Looking for Tranding Jobs</h2>
        <p className={homeStyle.left_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt .</p>
      </div>
    </div>
    <div className={homeStyle.info_right} >
      <div className={homeStyle.a}>
        {/* <img src="http://sbtechnosoft.com/guidepro/images/strip-square.png" style={{marginTop : '50px'}}  height="300px" alt="" /> */}
      </div>
      <div className={homeStyle.right_right} >
      <div className={homeStyle.developer} > 
      <img src="http://sbtechnosoft.com/guidepro/images/laptop.png" alt="" />
      <h5  className={homeStyle.right_h5}  >DEVELOPER  </h5>
      <span>7 Jobs</span>
      </div>
    
    <div className={homeStyle.technology} > 
    <img src="http://sbtechnosoft.com/guidepro/images/technology.png" alt="" />
    <h5 className={homeStyle.right_h5}>TECHNOLOGY  </h5>
    <span>5 Jobs</span> 
    </div>
   
    <div className={homeStyle.government} > 
<img src="http://sbtechnosoft.com/guidepro/images/government.png" alt="" />
<h5 className={homeStyle.right_h5} >GOVERNMENT  </h5>
<span>2 Jobs</span> 

     </div>
      </div>
    </div>
   </Container>

   </section>

   <section className={homeStyle.third_section} >
      <div style={{textAlign : 'center', marginTop : '90px'}} >
      <h3 className={homeStyle.third_h3} >Our Works Process</h3>
      <img src="http://sbtechnosoft.com/guidepro/images/title-border.png" alt="" />
      </div>

      <div className={homeStyle.third_cards} >
      <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div className={homeStyle.first_card} >
            <div className={homeStyle.first_card_icon} > <PersonAddAltIcon className={homeStyle.first_card_iconn} / > </div>
            <h4 className={homeStyle.first_card_h4} >Create Account</h4>
            <p className={homeStyle.first_card_item} >Lorem ipsum dolor sit amet, a arcu justo eget, placerat suspendisse ornare accumsan et fringilla consectetuer</p>
          </div>
        </Grid>
        <Grid item xs={4}>
        <div className={homeStyle.first_card} >
            <div className={homeStyle.first_card_icon} > <SearchIcon className={homeStyle.first_card_iconn} / > </div>
            <h4 className={homeStyle.first_card_h4} >Serach Job</h4>
            <p className={homeStyle.first_card_item} >Lorem ipsum dolor sit amet, a arcu justo eget, placerat suspendisse ornare accumsan et fringilla consectetuer</p>
          </div>
        </Grid>
        <Grid item xs={4}>
        <div className={homeStyle.first_card} >
            <div className={homeStyle.first_card_icon} > <ContentCopyIcon className={homeStyle.first_card_iconn} / > </div>
            <h4 className={homeStyle.first_card_h4} >Submit Resume</h4>
            <p className={homeStyle.first_card_item} >Lorem ipsum dolor sit amet, a arcu justo eget, placerat suspendisse ornare accumsan et fringilla consectetuer</p>
          </div>
        </Grid>
        
      </Grid>
    </Box>
      </div>
   </section>
   </>
  )
}

export default Home