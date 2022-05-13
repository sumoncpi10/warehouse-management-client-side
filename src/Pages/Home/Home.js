import React from 'react';
import About from '../About/About';
import HomeProducts from '../HomeProducts/HomeProducts';


const Home = () => {
    return (
        <div>
            <div id="carouselExampleControls" class="carousel slide container" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <img src="https://img.freepik.com/free-vector/warehouse-industry-with-storage-buildings_107791-3481.jpg?w=1380&t=st=1652452556~exp=1652453156~hmac=3def357018e74a9f0fc9ab60a65ca29d0250b924f709aca5a09555f3904ab060" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/man-walking-through-large-warehouse-storage-storehouse-center-using-tablet-control-distribution_342744-1553.jpg?t=st=1652451892~exp=1652452492~hmac=5cb7c4098748d2d8be98198496bbb25fd174e443e1b42b6b7100f6a46366ec4d&w=1380" class="d-block w-100" alt="..." />
                    </div>
                    <div class="carousel-item">
                        <img src="https://img.freepik.com/free-photo/interior-large-distribution-warehouse-with-shelves-stacked-with-palettes-goods-ready-market_342744-1481.jpg?t=st=1652451892~exp=1652452492~hmac=d6a8ebb16b2dd0aa56a41d28e0e6e1d58d18403ad37afebb5ef16a9d005c23b7&w=1380" class="d-block w-100" alt="..." />
                    </div>
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>

            <HomeProducts></HomeProducts>
            {/* <InventoryProduct/> */}
            <About></About>
        </div>
    );
};

export default Home;