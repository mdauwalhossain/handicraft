import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Alert, Button, CircularProgress, TextField } from '@mui/material';
import { Link, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Register = () => {
    const [loginData, setLoginData] = useState({});
    const history = useHistory();
    const {user, authError, registerUser, isLoading} = useAuth();
    // console.log(registerUser)

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        // console.log(field, value)
        const newLoginData = { ...loginData };
      
        newLoginData[field] = value;
        // console.log(newLoginData)
        setLoginData(newLoginData);
    }

    const handleLoginSubmit = e =>{
        
        if (loginData.password !== loginData.password2) {
            alert('Your password did not match');
            return
        }
        registerUser(loginData.email, loginData.password, loginData.name, history);
        e.preventDefault()
        // console.log(handleLoginSubmit)
    }
    return (
        <Grid item xs={12}>
        <Typography variant="h4" gutterBottom component="div">
    Register
  </Typography>
  { !isLoading && <form onSubmit={handleLoginSubmit}>
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
                        onBlur={handleOnBlur}
                        variant="standard" />
                    <TextField
                        sx={{ width: '50%', m: 1 }}
                        id="standard-basic"
                        label="Your Password"
                        type="password"
                        name="password"
                        onBlur={handleOnBlur}
                        variant="standard" />
                         <TextField
                            sx={{ width: '50%', m: 1 }}
                            id="standard-basic"
                            label="Re-Type Your Password"
                            type="password"
                            name="password2"
                            onBlur={handleOnBlur}
                            variant="standard" />

                    <Button sx={{ width: '50%', m: 1 }} type="submit" variant="contained">Register</Button>
                    <Link  style={{ textDecoration: 'none'}} to="/login">
                        <h4>Already Register ???</h4>
      <Button variant="contained">Login Here</Button>
     </Link>
  </form>}
  {isLoading && <CircularProgress/> }
  {user?.email && <Alert variant="filled" severity="success">
  Successfully Register.
</Alert>}
{authError && <Alert variant="filled" severity="error">
  {authError}
</Alert>}
        </Grid>
    );
};

export default Register;