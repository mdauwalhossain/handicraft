import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)
    const [loginData, setLoginData] = useState({});
    const {token} = useAuth();
    const{loginUser} = useAuth();

    const location = useLocation()
    const history = useHistory()

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
         console.log(field, value)
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
       
        const user = {email}
        fetch('https://frozen-springs-24177.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        .then(res => res.json())
        .then(data => {
           if(data.modifiedCount){
               console.log(data);
               setEmail('')
               setSuccess(true);
           }
        })
        loginUser(loginData.email, loginData.password, location, history)
        e.preventDefault()
    }
    //   console.log(handleAdminSubmit)
    return (
        <div>
            
            <form onSubmit={handleAdminSubmit}>
             
            <TextField 
            sx={{ width: '50%', m: 1 }}
            label="Email"
            type="email"
            onChange={handleOnChange} 
            variant="standard" /> <br />
            <TextField 
            sx={{ width: '50%', m: 1 }}
            label="password"
            type="password"
            onChange={handleOnChange} 
            variant="standard" /> <br />
            <Button type="submit" variant="contained">Make Admin</Button>
            </form> <br />
            
            {success && <Alert variant="filled" severity="success">
                Admin added Successfully.
                </Alert>}

                <img src="https://thumbs.dreamstime.com/b/blue-tape-admin-title-admin-text-ribbon-designed-white-title-blue-stripe-vector-banner-admin-tag-135263260.jpg" alt="" />
        </div>
    );
};

export default MakeAdmin;