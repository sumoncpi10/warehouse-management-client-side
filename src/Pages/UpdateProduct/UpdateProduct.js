import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const UpdateProduct = () => {
    const params = useParams();
    let [product, setProduct] = useState([]);
    // let [quantity, setQuantity] = useState(1);
    useEffect(() => {
        fetch(`http://localhost:5000/product/${params.id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data);
            })
    }, []);

    const handleUpdateProduct = (e) => {
        e.preventDefault();
        // const id = product._id;
        const name = e.target.name.value;

        const brand = e.target.brand.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;
        const img = e.target.img.value;
        const description = e.target.description.value;
        const supplier = e.target.supplier.value;
        // console.log(name, email, password);
        const product = { name, brand, price, quantity, img, description, supplier };
        // send data to the server 
        fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                e.target.reset();
                toast("Product Update Successfully!");
            })
    }
    const handleQuantity = (e) => {
        e.preventDefault();

        const quantity = e.target.qty.value;

        // console.log(name, email, password);
        const product = { quantity };
        // send data to the server 
        fetch(`http://localhost:5000/product/${params.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                e.target.reset();
                toast("Quantity Update Successfully!");
            })
    }
    const handleDelivered = (e) => {
        e.preventDefault();
        const { quantity, ...rest } = product;
        if (quantity > 0) {
            const newQuantity = parseInt(quantity) - 1;
            const newProduct = { quantity: newQuantity, ...rest };
            // console.log(newProduct)
            setProduct(newProduct);


            // console.log(name, email, password);
            const productUpdate = { quantity: newQuantity };
            // send data to the server 
            fetch(`http://localhost:5000/product/${params.id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(productUpdate)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // e.target.reset();
                    toast("Quantity Update Successfully!");
                })
        }
        else {
            toast("Update Stock Please!");
        }

    }
    const handleQuantityPlus = (e) => {
        const { quantity, ...rest } = product;
        const newQuantity = parseInt(quantity) + 1;
        const newProduct = { quantity: newQuantity, ...rest };
        console.log(newProduct)
        setProduct(newProduct);

        // quantity = quantity + 1;
        // price = quantity * product.price;
        // setQuantity(quantity);
        // setPrice(price);
        // setTotal(price + shipping);
    }
    const handleQuantityMinus = () => {
        const { quantity, ...rest } = product;
        if (quantity > 0) {
            const newQuantity = parseInt(quantity) - 1;
            const newProduct = { quantity: newQuantity, ...rest };
            console.log(newProduct)
            setProduct(newProduct);
        }

        // quantity = quantity - 1;
        // price = quantity * product.price;
        // setQuantity(quantity);
        // setPrice(price);
        // setTotal(price + shipping);
    }
    const nameChange = (e) => {
        const { name, ...rest } = product;
        const newName = e.target.value;
        const newProduct = { name: newName, ...rest };
        setProduct(newProduct);
    }
    const brandChange = (e) => {
        const { brand, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { brand: newBrand, ...rest };
        setProduct(newProduct);
    }
    const supplierChange = (e) => {
        const { supplier, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { supplier: newBrand, ...rest };
        setProduct(newProduct);
    }
    const descriptionChange = (e) => {
        const { description, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { description: newBrand, ...rest };
        setProduct(newProduct);
    }
    const priceChange = (e) => {
        const { price, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { price: newBrand, ...rest };
        setProduct(newProduct);
    }
    const quantityChange = (e) => {
        const { quantity, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { quantity: newBrand, ...rest };
        setProduct(newProduct);
    }
    const imgChange = (e) => {
        const { img, ...rest } = product;
        const newBrand = e.target.value;
        const newProduct = { img: newBrand, ...rest };
        setProduct(newProduct);
    }
    return (
        <div className='container'>
            <h1 className='m-3'>Update Your Product: {product.name}</h1>
            <form onSubmit={handleQuantity}>
                <div className=''>
                    <img src={product.img} alt="" srcset="" />
                    <p></p>
                    <button class="btn btn-primary m-3" onClick={handleDelivered}>Delivered</button>
                    <div className=' d-flex align-items-center justify-content-center w-100'><div className="center " >
                        <div className="input-group ">
                            <span className="input-group-btn">
                                <button type="button" onClick={handleQuantityMinus} className="btn btn-danger btn-number" data-type="minus" data-field="quant[2]">
                                    <span className="glyphicon glyphicon-minus"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></span>
                                </button>
                            </span>
                            <input type="text" name="qty" className="form-control input-number" onChange={quantityChange} value={product?.quantity}
                                min="1" max={product.quantity} />
                            <span className="input-group-btn">
                                <button type="button" onClick={handleQuantityPlus} className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                                    <span className="glyphicon glyphicon-plus"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>
                                </button>
                            </span>
                        </div>
                        <p></p>
                    </div></div>


                    <button class="btn btn-primary m-3" type="submit">Update Quantity</button>
                </div>
            </form>
            <form onSubmit={handleUpdateProduct}>

                <div class="d-flex flex-column justify-content-center mx-auto">
                    <div class="row mb-2">
                        <input onChange={nameChange} type="text" name='name' class="form-control" value={product.name} placeholder="Product name" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='brand' class="form-control" onChange={brandChange} value={product.brand} placeholder="Brand name" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='supplier' class="form-control" onChange={supplierChange} value={product.supplier} placeholder="Supplier name" />
                    </div>
                    <div class="row mb-2">
                        {/* <input type="textarea" name='description' class="form-control" placeholder="Description" /> */}
                        <textarea type="text" name='description' class="form-control" onChange={descriptionChange} value={product.description} placeholder="Description"></textarea>
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='price' class="form-control" onChange={priceChange} value={product.price} placeholder="Unit Price" />
                    </div>
                    <div class="row mb-2 d-flex ">
                        <span className="input-group-btn ">
                            <button type="button" onClick={handleQuantityPlus} className="btn btn-success btn-number" data-type="plus" data-field="quant[2]">
                                <span className="glyphicon glyphicon-plus"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>
                            </button>
                        </span>
                        <input type="text" name='quantity' class="form-control" onChange={quantityChange} value={product?.quantity} placeholder="Quantity" />

                        <span className="input-group-btn ">
                            <button type="button" onClick={handleQuantityMinus} className="btn btn-danger btn-number" data-type="minus" data-field="quant[2]">
                                <span className="glyphicon glyphicon-minus"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></span>
                            </button>
                        </span>
                        {/* <input type="text" name='quantity' class="form-control" onChange={quantityChange} value={product.quantity} placeholder="Quantity" /> */}
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='img' class="form-control" onChange={imgChange} value={product.img} placeholder="Img Url" />
                    </div>
                </div>
                <button class="btn btn-primary m-3" type="submit">Update Product</button>
            </form>
        </div>
    );
};

export default UpdateProduct;