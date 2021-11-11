import { Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const Appoinment = () => {
    const {user} = useAuth();
    const [appoinments, setAppoinments] = useState([])

    useEffect( () =>{
        const url=``
        fetch('')
    } ,[])
    return (
        <div>
            appoinment page
            <Grid item xs={4}>
          
            </Grid>
        </div>
    );
};

export default Appoinment;