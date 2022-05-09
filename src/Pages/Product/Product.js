import React from 'react';

const Product = ({ product }) => {
    const { img, name, price, quantity, brand } = product;
    return (
        <div className="col  col-md-4 p-3">
            <div className="card h-100">
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6>Price: ${price}</h6>
                    <p className="card-text">Manufacturer: {brand}</p>
                    <p><small>Rating: {quantity}</small></p>
                </div>
                <div className="card-footer">
                    <button className="w-100">View more</button>
                </div>
            </div>
        </div>
    );
};

export default Product;