import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer">
            <AppBar position="static" color="primary">
          <Container maxWidth="md">
            <Toolbar>
              <Typography variant="body1" color="inherit" style={{marginRight : 100}}>
                All Right Reserved © Md Auwal Hossain    
              </Typography>
              
              <a href="google.com"><i class="fab fa-google-plus-square"></i></a>
          <a href="facebook.com"><i class="fab fa-facebook-square"></i></a>
          <a href="instragram.com"><i class="fab fa-instagram-square"></i></a>
          <a href="youtube.com"><i class="fab fa-youtube"></i></a>
            </Toolbar>
          </Container>
        </AppBar>

       
        </div>
    );
};

export default Footer;