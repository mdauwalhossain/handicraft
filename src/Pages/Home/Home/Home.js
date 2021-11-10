import React from 'react';
import Navigation from '../Navigation/Navigation';
import Products from '../Products/Products';
import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <TopBanner></TopBanner>
            <Products></Products>
        </div>
    );
};

export default Home;