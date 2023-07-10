import React from 'react'
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { getEmployee, getEmployer } from '../../Api/request';
import { Container, Typography } from '@mui/material';
import {
  MDBContainer,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,
  MDBBtn,
  MDBIcon,
  MDBInput,
  MDBCheckbox
}
  from 'mdb-react-ui-kit';

const Users = () => {
  const [justifyActive, setJustifyActive] = useState('tab1');;

  const handleJustifyClick = (value) => {
    if (value === justifyActive) {
      return;
    }

    setJustifyActive(value);
  };


  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const [employer, setEmployer] = useState([])

  useEffect(() => {

    // navigate('/login');
    getEmployee().then((res) => {
      setUsers(res)

    })
  }
    , [])

    useEffect(() => {
      if (!localStorage.getItem('admin')) {
        navigate('/admin/login');
      }
    }, [])

    useEffect(() => {

      // navigate('/login');
      getEmployer().then((res) => {
        setEmployer(res)
  
      })
    }
      , [])

  return (

    <>
      {/* <ul>
      {users && users.map((user) => {
        return <li key={user._id}>{user.username}{user.name}</li>
      })}
    </ul> */}

      

      <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBTabs pills justify className='mb-3 d-flex flex-row justify-content-between'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab1')} active={justifyActive === 'tab1'}>
            EMPLOYEE
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleJustifyClick('tab2')} active={justifyActive === 'tab2'}>
            EMPLOYER
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>

        <MDBTabsPane show={justifyActive === 'tab1'} style={{width : '800px'}} >

         

        <Typography variant="h2" style={{textAlign : 'center'}} >
            Employees
        </Typography>;
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Surname</TableCell>
                <TableCell align="right">Username</TableCell>
                <TableCell align="right">Age</TableCell>
                <TableCell align="right">Email</TableCell>
                {/* <TableCell align="right">Protein</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user, idx) => (
                <TableRow
                  key={user._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {idx + 1}
                  </TableCell  >
                  <TableCell align="right">{user.name}</TableCell>
                  <TableCell align="right">{user.surname}</TableCell>
                  <TableCell align="right">{user.username}</TableCell>
                  <TableCell align="right">{user.age}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           


        </MDBTabsPane>

        <MDBTabsPane show={justifyActive === 'tab2'}>

        <Typography variant="h2" style={{textAlign : 'center'}} >
            Employers
        </Typography>;
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Id</TableCell>
                <TableCell align="right">Company Name</TableCell>
                <TableCell align="right">Email</TableCell>
                {/* <TableCell align="right">Protein</TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {employer.map((user, idx) => (
                <TableRow
                  key={user._id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {idx + 1}
                  </TableCell  >
                  <TableCell align="right">{user.companyName}</TableCell>
                  <TableCell align="right">{user.email}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
           

          
        </MDBTabsPane>

      </MDBTabsContent>
      

    </MDBContainer>

      


    </>

  )
}


export default Users