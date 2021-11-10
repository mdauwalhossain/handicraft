import React from 'react';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Body = (props) => {
    const {name, image, price, details, } = props.info;
    return (
        <div>
            <img src={image} alt="" />
            <h5> {name}</h5>
            <h6>{price}</h6>
            <p>{details}</p>
            <Link style={{ textDecoration: 'none'}} to="/purchase">
            <Button variant="contained">Buy Now</Button>
            </Link>
           
        </div>
    );
};

export default Body;