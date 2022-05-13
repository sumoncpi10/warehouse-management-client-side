import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firabase.init';
import { Link, useNavigate } from 'react-router-dom';

const InventoryProduct = ({ product, handleRemoveProduct }) => {
    const [user] = useAuthState(auth);
    const { _id, img, name, price, quantity, brand, description, supplier } = product;
    const navigate = useNavigate();
    console.log(window.location.pathname)
    const NevigateToDtail = (id) => {

        window.location.pathname = `inventory/${_id}`;

    }
    return (
        <div className="col  col-md-4 p-3">
            <div className="card h-100">
                {
                    user?.email ?
                        <div className='d-flex align-items-center pe-3 '>
                            <button className='border-0 rounded-circle delete-button  p-2' onClick={() => handleRemoveProduct(product)} ><FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                        </div>
                        :
                        ''
                }

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
                    <Link to='' ><button className="w-100 border-0 btn btn-primary" onClick={NevigateToDtail}>Update Product</button></Link>
                </div>
            </div>
        </div>
    );
};

export default InventoryProduct;