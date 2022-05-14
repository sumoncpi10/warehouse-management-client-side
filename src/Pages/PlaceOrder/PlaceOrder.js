import { fa1, faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firabase.init';
import '../PlaceOrder/PlaceOrder.css'

const PlaceOrder = () => {
    const [user] = useAuthState(auth);
    // console.log(user);
    const params = useParams();
    const [product, setProduct] = useState([]);
    let [price, setPrice] = useState(0);
    let [quantity, setQuantity] = useState(1);
    let [total, setTotal] = useState(0);
    const shipping = 23;

    useEffect(() => {
        fetch(`https://thawing-earth-85807.herokuapp.com/product/${params.id}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setProduct(data);
            })
    }, []);

    const handleQuantityPlus = () => {
        quantity = quantity + 1;
        price = quantity * product.price;
        setQuantity(quantity);
        setPrice(price);
        setTotal(price + shipping);
    }
    const handleQuantityMinus = () => {
        quantity = quantity - 1;
        price = quantity * product.price;
        setQuantity(quantity);
        setPrice(price);
        setTotal(price + shipping);
    }
    const handlePlaceOrder = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const city = e.target.city.value
        const zipCode = e.target.zipcode.value;
        const address = e.target.address.value;
        const state = e.target.state.value;
        // console.log(shipping)
        quantity = quantity ? quantity : product.quantity;
        const orderbyid = product._id;
        const name = product.name;
        const brand = product.brand;
        const img = product.img;
        price = price ? price : product.price;
        const order = { email, name, quantity, price, shipping, brand, city, zipCode, address, state, orderbyid, img };
        fetch('https://thawing-earth-85807.herokuapp.com/addorder', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                toast("Order Placed Successfully!");
                e.target.reset();
            })
        // console.log(order);
    }
    return (
        <div className='container'>

            {/* <h1>This is Inventory</h1> */}
            <nav className="bg-white">
                <div className="d-flex align-items-center">
                    <div className="logo"> <Link to='/' className="text-uppercase">Home</Link> </div>
                    <div className="ml-auto"> <Link to="/products" className="text-uppercase">Back to shopping</Link> </div>
                </div>
            </nav>
            <header>
                <div className="d-flex justify-content-center align-items-center pb-3">
                    {/* <div className="px-sm-5 px-2 active">SHOPPING CART <span className="fas fa-check"></span> </div> */}
                    <div className="px-sm-5 px-2">CHECKOUT</div>
                    {/* <div className="px-sm-5 px-2">FINISH</div> */}
                </div>
                <div className="progress">
                    <div className="progress-bar bg-success" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
            </header>
            <form onSubmit={handlePlaceOrder}>
                <div className="wrapper">
                    {/* <div className="h5 large">Billing Address</div> */}
                    <div className="row">
                        <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1">
                            <div className="mobile h5">Billing Address</div>
                            <div id="details" className="bg-white rounded pb-5">

                                <div className="form-group"> <label className="text-muted">Name</label> <input type="text" value={user?.displayName} className="form-control" /> </div>
                                <div className="form-group"> <label className="text-muted">Email</label>
                                    <div className="d-flex jusify-content-start align-items-center rounded p-2">
                                        <input type="email" name='email' value={user?.email} />
                                        <span className="fas fa-check text-success pr-sm-2 pr-0"></span>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group"> <label>City</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2">
                                                {/* <input type="text" value="" /> */}
                                                <input name='city' type="text" required />
                                                <span className="fas fa-check text-success pr-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Zip code</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2">
                                                <input type="text" name='zipcode' />
                                                <span className="fas fa-check text-success pr-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2">
                                                <input type="text" name='address' required />
                                                <span className="fas fa-check text-success pr-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group"> <label>State</label>
                                            <div className="d-flex jusify-content-start align-items-center rounded p-2">
                                                <input type="text" name='state' required />
                                                <span className="fas fa-check text-success pr-2"></span>
                                            </div>
                                        </div>
                                    </div>
                                </div> <label>Country</label> <select name="country" id="country">
                                    <option value="ind">Bangladesh</option>
                                    <option value="usa">USA</option>
                                </select>

                            </div>

                        </div>
                        <div className="col-lg-6 col-md-8 col-sm-10 offset-lg-0 offset-md-2 offset-sm-1 pt-lg-0 pt-3">
                            <div id="cart" className="bg-white rounded">
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="h6">Cart Summary</div>
                                    <div className="h6"> <a href="#">Edit</a> </div>
                                </div>
                                <div className="d-flex jusitfy-content-between align-items-center pt-3 pb-2 border-bottom">
                                    <div className="item pr-2"> <img src={product.img} alt="" width="80" height="80" />


                                    </div>
                                    <div className="d-flex flex-column px-3">
                                        <b className="h5" name='name'>{product.name}</b>
                                        <a href="#" className="h5 text-primary">{product.brand}</a>

                                        <div className="center" >
                                            <div className="input-group">
                                                <span className="input-group-btn">
                                                    <button type="button" onClick={handleQuantityMinus} className="btn btn-danger btn-number" data-type="minus" data-field="quant[2]">
                                                        <span className="glyphicon glyphicon-minus"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></span>
                                                    </button>
                                                </span>
                                                <input type="text" name="qty" className="form-control input-number" value={quantity}
                                                    min="1" max={product.quantity} />
                                                <span className="input-group-btn">
                                                    <button type="button" onClick={handleQuantityPlus} className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                                                        <span className="glyphicon glyphicon-plus"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>
                                                    </button>
                                                </span>
                                            </div>
                                            <p></p>
                                        </div>

                                    </div>
                                    <div className="ml-auto"> <b className="h5">${price ? price : product.price}</b> </div>
                                </div>
                                {/* <div className="my-3"> <input type="text" className="w-100 form-control text-center" placeholder="Gift Card or Promo Card" /> </div> */}
                                <div className="d-flex align-items-center">
                                    <div className="display-5">Subtotal</div>
                                    <div className="ml-auto font-weight-bold">${price ? price : product.price}</div>
                                </div>
                                <div className="d-flex align-items-center py-2 border-bottom">
                                    <div className="display-5">Shipping</div>
                                    <div className="ml-auto font-weight-bold">${shipping}</div>
                                </div>
                                <div className="d-flex align-items-center py-2">
                                    <div className="display-5">Total</div>
                                    <div className="ml-auto d-flex">
                                        <div className="text-primary text-uppercase px-3">usd</div>
                                        <div className="font-weight-bold">${total ? total : parseInt(product.price) + shipping}</div>
                                    </div>
                                </div>
                            </div>
                            <p className="text-muted">Need help with an order?</p>
                            <p className="text-muted"><a href="#" className="text-danger">Hotline:</a>+314440160 (International)</p>

                            <div className="row pt-lg-3 pt-2 buttons mb-sm-0 mb-2">
                                <div className="col-md-6">
                                    <div className="btn text-uppercase"><Link to="/products" className="text-uppercase">Back to shopping</Link> </div>
                                </div>
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <div className="btn text-white ml-auto"> <span className="fas fa-lock"></span> <button type='submit' className="text-uppercase btn btn-primary">Place Order </button> </div>
                                </div>
                            </div>
                            {/* <div className="text-muted pt-3" id="mobile"> <span className="fas fa-lock"></span> Your information is save </div> */}
                        </div>
                    </div>
                    <div className="text-muted"> <span className="fas fa-lock"></span> Your information is save </div>
                </div>
            </form >
        </div >
    );
};


export default PlaceOrder;