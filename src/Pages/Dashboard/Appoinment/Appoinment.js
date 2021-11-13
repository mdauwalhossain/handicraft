import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


const Appoinment = () => {
    const {user, token} = useAuth();
    const [appointments, setAppointments] = useState([])

    useEffect( () =>{
        const url=`https://frozen-springs-24177.herokuapp.com/purchase?email=${user.email}`
        fetch(url, {
          headers: {
            'authorization': `Bearer ${token}`
          }
        }) 
        .then(res => res.json())
        .then(data => setAppointments(data));
    } ,[])
    return (
        <div>
          <h3> Number of Booking: {appointments.length}</h3>
           
            <TableContainer component={Paper}>
      <Table sx={{}} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Action</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {appointments.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.clientName}
              </TableCell>
              <TableCell align="right">{row.Action}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>



            <Grid item xs={4}>          
            </Grid>
        </div>
    );
};

export default Appoinment;