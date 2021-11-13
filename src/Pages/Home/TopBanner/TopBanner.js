import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { Button, CardActionArea } from '@mui/material';
import { Link } from 'react-router-dom';

const TopBanner = () => {
    return (
        <Card sx={{ maxWidth: 'auto' }}>
        <CardActionArea>
          <CardMedia
            sx={{maxHeight: '400px'}}
            component="img"
            image="https://media.mehrnews.com/d/2018/07/23/4/2841436.jpg"
          />
          <CardContent>
            <Link  style={{ textDecoration: 'none'}} to="/explore">
          <Button variant="contained">Explore More</Button>
         </Link>
          </CardContent>
        </CardActionArea>
      </Card>
    );
};

export default TopBanner;