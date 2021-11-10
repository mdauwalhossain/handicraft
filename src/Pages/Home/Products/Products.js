import React, { useEffect, useState } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Body from '../Body/Body';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Products = () => {

    const [infos, setInfos] = useState([]);
    useEffect(() => {
        fetch('./data.json')
        .then(res => res.json())
        .then(data => setInfos(data))
    }, [])
    return (
        <div>
            Products
            <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
           <Item>
                {
                infos.slice(0,1).map(info => <Body 
                    key= {info.id}
                    info={info}                                        
                    ></Body>)
                } 
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
        </div>
    );
};

export default Products;