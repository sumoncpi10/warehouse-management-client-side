import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firabase.init';

import useProductsByEmail from '../../hooks/useProductsByEmail';
import ReviewItem from '../ReviewItem/ReviewItem';

const MyItems = () => {
    const [user] = useAuthState(auth);
    console.log(user);
    const params = useParams();
    const path = window.location.pathname;
    const [products, setProducts] = useProductsByEmail([]);
    console.log(path);

    console.log(products);
    const handleRemoveProduct = product => {
        const proceed = window.confirm('Are You Sure You Want To Delete The Order!');
        if (proceed) {
            fetch(`https://manufacturer-website-s670.onrender.com/order/${product._id}`, {
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
        <div className='container'>
            {
                !products.length ? <h1 className='mt-5'>You Have't Order Anything Yet!!!</h1> :
                    <div className='d-flex row'>
                        <div className='col-md-12 p-5 row'>
                            {

                                products.map(product => <ReviewItem key={product._id} product={product} handleRemoveProduct={handleRemoveProduct}></ReviewItem>)
                            }

                        </div>

                    </div>
            }

        </div>
    );
};


export default MyItems;