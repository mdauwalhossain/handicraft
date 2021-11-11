import { Button, Grid } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';

const Data = ({booking}) => {
    const {name,image, details, price} = booking;    
   
    return (
        <>           
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3}>
            <img src={image}/>
            <Typography variant="h6" gutterBottom component="div">
                {name}
            </Typography>
            <Typography variant="h4" gutterBottom component="div">
                {price}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
                {details}
            </Typography>
           
            <Link style={{textDecoration: 'none'}} to="/purchase">
            <Button style={{textDecoration: 'none'}} variant="contained">Buy Now</Button>            
            </Link>            
            </Paper>
           </Grid>
           
           
        </>
    );
};

export default Data;