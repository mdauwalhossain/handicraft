import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Button, TextField } from '@mui/material';
import { Link } from 'react-router-dom';


const Login = () => {
    const [loginData, setLoginData] = useState({});

    const handleOnChange = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        alert('submit')
        e.preventDefault()
    }
    return (
        <div>
            <Grid item xs={12}>
            <Typography variant="h4" gutterBottom component="div">
        Login
      </Typography>
      <form onSubmit={handleLoginSubmit}>
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

                        <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <Link  style={{ textDecoration: 'none'}} to="/register">
                            <h4>New User ???</h4>
          <Button variant="contained">Register Here</Button>
         </Link>
      </form>
            </Grid>
        </div>
    );
};

export default Login;