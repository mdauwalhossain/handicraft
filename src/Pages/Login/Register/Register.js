import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';

const Register = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        alert('submit')
        e.preventDefault()
    }
    return (
        <Grid item xs={12}>
        <Typography variant="h4" gutterBottom component="div">
    Register
  </Typography>
  <form onSubmit={handleLoginSubmit}>
                        <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Your Name"
                            name="name"
                            // onBlur={handleOnBlur}
                            variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Your Email"
                        type="email"
                        name="email"
                        onChange={handleOnChange}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onChange={handleOnChange}
                        variant="standard" />
                         <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Re-Type Your Password"
                            type="password"
                            name="password2"
                            // onBlur={handleOnBlur}
                            variant="standard" />

                    <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Register</Button>
                    <Link  style={{ textDecoration: 'none'}} to="/login">
                        <h4>Already Register ???</h4>
      <Button variant="contained">Login Here</Button>
     </Link>
  </form>
        </Grid>
    );
};

export default Register;