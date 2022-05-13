import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firabase.init';
import Product from '../Product/Product';
import InventoryProduct from '../InventoryProduct/InventoryProduct';
const Inventory = () => {
    const [products, setProducts] = useState([]);
    const [user] = useAuthState(auth);

    useEffect(() => {
        fetch('http://localhost:5000/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);
    const handleRemoveProduct = product => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        if (proceed) {
            fetch(`http://localhost:5000/product/${product._id}`, {
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
    return (
        <div className=' '>

            <nav class="navbar navbar-light bg-light justify-content-between container">
                <a class="navbar-brand"></a>
                <form class="form-inline">
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit"><Link to='/product/addProduct'>Add New Items</Link></button>
                </form>
            </nav>


            <div className='col-md-10 p-5 container'>
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    {
                        products.map(product => <InventoryProduct key={product.id} product={product} handleRemoveProduct={handleRemoveProduct}></InventoryProduct>)
                    }
                </div>
            </div>

        </div>
    );
};

export default Inventory;