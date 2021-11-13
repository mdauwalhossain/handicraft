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
            <h1 style={{color:'blue'}}>Products</h1>
            <Grid container spacing={2}>              
              {
              bookings.slice(0,6).map(booking => <Body
              key={booking.id}
              booking={booking}
              ></Body>)
            }
            </Grid>

              <h2 style={{color:'red'}} >Something Special</h2>
            <img src="https://handicraftitemsmanufacturersindelhi.files.wordpress.com/2018/03/cropped-pics2.jpg" alt="" />

            <h3 style={{color:'blue'}} >Review</h3>
        </Container>
        </div>
    );
};

export default Products;