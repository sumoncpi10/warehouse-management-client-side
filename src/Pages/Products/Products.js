import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firabase.init';
import Product from '../Product/Product';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);
    const path = window.location.pathname;
    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className=' '>
            {
                path == '/inventory' ?
                    <nav class="navbar navbar-light bg-light justify-content-between container">
                        <a class="navbar-brand"></a>
                        <form class="form-inline">
                            <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/product/addProduct'>Add Items</Link></button>
                        </form>
                    </nav> : ''
            }

            <div className='col-md-10 p-5 container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <Product key={product.id} product={product} ></Product>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Products;