import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/Grid';
import Body from '../Body/Body';
import { Container } from '@mui/material';


const Products = () => {

  const [bookings, setBookings] = useState([]);
  useEffect(()=>{
      fetch('./data.json')
      .then(res => res.json())
      .then(data => setBookings(data))
    }, [])
    return (
        <div>            
          <Container>
            <h1>Products</h1>
            <Grid container spacing={2}>              
              {
              bookings.slice(0,6).map(booking => <Body
              key={booking.id}
              booking={booking}
              ></Body>)
            }
            </Grid>
        </Container>
        </div>
    );
};

export default Products;