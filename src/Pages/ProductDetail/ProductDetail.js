import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);
    useEffect(() => {
        fetch(`https://manufacturer-website-s670.onrender.com/product/${params.id}`)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])
    return (
        <div>
            <h2 className='m-5'>{product.name}</h2>
            <div className='row'>
                <div className='col-md-4'>
                    <img src={product.img} alt="" srcset="" />
                </div>
                <div className='col-md-7'>
                    <form >
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email address</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Password</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>

                        <button type="submit" class="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>

        </div>
    );
};

export default ProductDetail;