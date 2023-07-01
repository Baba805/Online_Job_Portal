// import React, { useEffect, useState } from 'react'
// import { getvacanciesByID } from '../../../Api/request';
// import { Link, useParams } from 'react-router-dom';
// import { Button, Card, Grid, Typography } from '@mui/material';

// function JobList() {
//   const [job, setJob] = useState({});

//   const { id } = useParams();



//   useEffect(() => {
//     getvacanciesByID(id).then((res) => {
//       setJob(res);
//     });
//   }, [id]);
//   return (
//     <>
      
//         <Grid key={job._id} item lg={3} md={6} sm={12}>
//             <Card
//               hoverable
//               cover={
//                 <img
//                   style={{
//                     height: "250px",
//                     objectFit: "cover",
//                     objectPosition: "top center ",
//                   }}
//                   alt="example"
//                   src={job.imageUrl}
//                 />
//               }
//             >
//               <Typography>{job.name}</Typography>
//               <Typography> Sale: {job.sale}</Typography>
//               <Button variant="contained" color="primary">
//                 <Link style={{ color: "white" }} to="/home">
//                   Go Back
//                 </Link>
//               </Button>
//             </Card>
//             {/* <Button
//               style={{ marginTop: "30px",marginRight:'10px' }}
//               variant="outlined"
//               color="warning"
//             >
//               <Link to={`http://localhost:3000/artist/edit/${artist._id}`} style={{color:'black',textDecoration:'none'}}>Edit {artist.name}</Link>
//             </Button> */}
//             {/* <Button
//               style={{ marginTop: "30px" }}
//               variant="outlined"
//               color="info"
//               onClick={handleOpen}
//             >
//               Add Song
//             </Button> */}
//           </Grid>
      
//     </>
//   )
// }

// export default JobList