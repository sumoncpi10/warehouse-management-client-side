import React from 'react';
import About from '../About/About';
import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div>
            <HomeProducts></HomeProducts>
            {/* <InventoryProduct/> */}
            <About></About>
        </div>
    );
};

export default Home;