import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('')
    const [success, setSuccess] = useState(false)

    const handleOnBlur = e => {
        setEmail(e.target.value)
    }

    const handleAdminSubmit = e => {
        console.log(handleAdminSubmit)
        const user = {email}
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
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

        e.preventDefault()
    }
    return (
        <div>
            Make Admin page
            <form onSubmit={handleAdminSubmit}>
            <TextField 
            sx={{ width: '50%', m: 1 }}
            label="Email"
            type="email"
            onBlur={handleOnBlur} 
            variant="standard" />
            {/* <TextField 
            sx={{ width: '50%', m: 1 }}
            label="password"
            type="password"
            onBlur={handleOnBlur} 
            variant="standard" /> <br /> */}
            <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            
            {success && <Alert variant="filled" severity="success">
                Admin added Successfully.
                </Alert>}
        </div>
    );
};

export default MakeAdmin;