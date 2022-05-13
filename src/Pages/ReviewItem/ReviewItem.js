import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css';
const ReviewItem = (props) => {
    const { img, name, price, shipping, quantity } = props.product;
    const { handleRemoveProduct } = props;
    return (
        <div className='container-review w-75 mb-3 ms-5'>
            <div>
                <img src={img} width={91} alt="" />
            </div>

            <div className='d-flex justify-content-between w-100 ms-2'>
                <div className='d-flex align-items-start flex-column'>
                    <p className='product-name' title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p >Price: {price}</p>
                    <p>Shipping: {shipping}</p>
                    <p>Quantity: {quantity}</p>
                </div>
                <div className='d-flex align-items-center pe-3 '>
                    <button className='border-0 rounded-circle delete-button  p-2' onClick={() => handleRemoveProduct(props.product)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>

            </div>

        </div >
    );
};

export default ReviewItem;