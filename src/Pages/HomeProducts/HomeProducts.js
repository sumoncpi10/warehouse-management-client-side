import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firabase.init';
import Product from '../Product/Product';
import Loading from '../Loading/Loading';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
const HomeProducts = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('https://manufacturer-website-s670.onrender.com/productshome')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const handleRemoveProduct = product => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        if (proceed) {
            fetch(`https://manufacturer-website-s670.onrender.com/product/${product._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))

            const rest = products.filter(pd => pd._id !== product._id);
            // console.log(rest);
            setProducts(rest);
            // removeFromDb(product.id);
        }
    }
    if (products.length == 0) {
        return <Loading></Loading>
    }
    return (


        <div className=' '>

            {/* <nav class="navbar navbar-light bg-light justify-content-between container">
                <a class="navbar-brand"></a>
                <form class="form-inline">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/product/addProduct'>Add Products</Link></button>
                </form>
            </nav> */}
            <div className='col-md-10 p-5 container'>
                <h1 className='text-danger mb-5'>Manage Your Product</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <InventoryProduct key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></InventoryProduct>)
                    }
                </div>
                <Link to='/inventory'><button type="button" className="btn btn-dark m-4 btn-show ">Show More</button></Link>
            </div>
            <div className='col-md-10 p-5 container'>
                <h1>Choose Your Product</h1>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} ></Product>)
                    }
                </div>
                <Link to='/products'><button type="button" className="btn btn-dark m-4 btn-show ">Show More</button></Link>
            </div>

        </div>

    );
};

export default HomeProducts;