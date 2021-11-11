import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Data from './Data/Data';
import { Container } from '@mui/material';


const Explore = () => {
    const [bookings, setBookings] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setBookings(data))
    }
    );
    return (
        <Container>
            <h1>EXPLORE</h1>
            <Grid container spacing={2}>              
              {
              bookings.map(booking => <Data
              key={booking.id}
              booking={booking}
              ></Data>)
            }
            </Grid>
        </Container>
    );
};

export default Explore;