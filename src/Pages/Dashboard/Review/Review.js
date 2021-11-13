import { Button, TextField } from '@mui/material';
import React from 'react';

const Review = () => {
    return (
        <div>
            <h2>Give us a Review</h2>
                    <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Name"
                    name="name"
                    variant="standard" />
                    <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Email"
                    type="email"
                    name="email"
                    variant="standard" />
                     <TextField
                    sx={{ width: '50%', m: 1 }}
                    id="standard-basic"
                    label="Your Opinion"
                    name="name"
                    variant="standard" />

                    <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Review Post</Button>
            <img src="https://www.cybervise.com/wp-content/uploads/2012/04/website-content-review.png" alt="" />
        </div>
    );
};

export default Review;