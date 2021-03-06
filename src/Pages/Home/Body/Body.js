import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { Grid, Paper, Typography } from '@mui/material';

const Body = ({booking}) => {
    // console.log(booking)
    const {name, image, price, details, } = booking;;
    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
            <Paper elevation={3}>
            <img style={{width: '300px', height: '250px'}} src={image} alt=""/>
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
            <Button sx={{ whiteSpace: 'nowrap', m: 2}} style={{textDecoration: 'none'}} variant="contained">Buy Now</Button> 
            </Link>
           

            </Paper>
           </Grid>
           
        </>
    );
};

export default Body;