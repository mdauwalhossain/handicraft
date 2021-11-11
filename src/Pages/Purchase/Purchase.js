import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';
import useAuth from '../hooks/useAuth';

const Purchase = () => {

    const {user} = useAuth();
    // console.log(user)

    const initialInfo = {clientName: '', email: user.email, phone: ''}

    const [bookingInfo, setBookingInfo] = useState(initialInfo);

    const handleOnBlur = e =>{
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        // console.log(newInfo)
        setBookingInfo(newInfo);
    }

    const handleBookingSubmit = e =>{
             // collect data
            const appointment = {
                ...bookingInfo,
            }
            // console.log(appointment);
            // send to server
            fetch('http://localhost:5000/purchase', {
                method: 'POST',
                headers: {'content-type': 'application/json'
 
                },
                body: JSON.stringify(appointment)
            })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    
                }
            })

        e.preventDefault();
    }
    return (
     
        <form onSubmit={handleBookingSubmit}>

        <TextField
            sx={{ width: '50%', m: 1 }}
            id="outlined-size-small"
            name="email"
            onBlur={handleOnBlur}
            defaultValue={user.email}
            size="small"
        />
        <TextField
            sx={{ width: '50%', m: 1 }}
            label="Your Name"
            id="outlined-size-small"
            name="clientName"
            onBlur={handleOnBlur}
            defaultValue={user.displayName}            
            size="small"
        />
       
        <TextField 
         sx={{ width: '50%', m: 1 }}
        id="outlined-basic" 
        name="phone"
        onBlur={handleOnBlur}
        label="Write something if you want" 
        variant="outlined" />
        <br />

        <Button type="submit" variant="contained">Submit</Button>
        </form>
   
    );
};

export default Purchase;