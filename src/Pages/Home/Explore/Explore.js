import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Data from './Data/Data';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Explore = () => {
    const [probs, setProbs] = useState([]);
    useEffect(()=>{
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setProbs(data))

    }
    );
    return (
        <div>
            <h1>EXPLORE</h1>
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(11)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
           <Item>
           {
                    probs.slice(0,1).map(para => <Data
                    key={para.id}
                    data={para}
                    ></Data>)
                }
                
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
        </div>
    );
};

export default Explore;