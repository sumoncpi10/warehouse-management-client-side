import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Product = ({ product }) => {
    const { _id, img, name, price, quantity, brand, description, supplier } = product;
    const navigate = useNavigate();
    console.log(window.location.pathname)
    const NevigateToDtail = (id) => {

        window.location.pathname = `product/${_id}`;

    }
    return (
        <div className="col  col-md-4 p-3">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p className="card-text p-0 mb-0">Manufacturer: {brand}</p>
                    <p className="card-text p-0">Supplier: {supplier ? supplier : brand}</p>
                    <p><small title={description}>{description?.length > 180 ? description.slice(0, 180) + '...' : description}</small></p>
                    <p className='m-0'><small>Stock: {quantity}</small></p>
                </div>
                <div className="card-footer border-0">
                    <Link to='' ><button className="w-100 border-0 btn btn-primary" onClick={NevigateToDtail}>Add To Cart</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Product;