import React from 'react';
import { toast } from 'react-toastify';

const ProductAdd = () => {
    const handleAddProduct = (e) => {
        e.preventDefault();
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
        fetch('http://localhost:5000/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(product)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                e.target.reset();
                toast("Product Add Successfully!");
            })
    }
    return (
        <div className='container'>
            <h1>Add Your Product</h1>
            <form onSubmit={handleAddProduct}>
                <div class="d-flex flex-column justify-content-center mx-auto">
                    <div class="row mb-2">
                        <input type="text" name='name' class="form-control" placeholder="Product name" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='brand' class="form-control" placeholder="Brand name" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='supplier' class="form-control" placeholder="Supplier name" />
                    </div>
                    <div class="row mb-2">
                        {/* <input type="textarea" name='description' class="form-control" placeholder="Description" /> */}
                        <textarea type="text" name='description' class="form-control" placeholder="Description"></textarea>
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='price' class="form-control" placeholder="Unit Price" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='quantity' class="form-control" placeholder="Quantity" />
                    </div>
                    <div class="row mb-2">
                        <input type="text" name='img' class="form-control" placeholder="Img Url" />
                    </div>
                </div>
                <button class="btn btn-primary m-3" type="submit">Add Product</button>
            </form>
        </div>
    );
};

export default ProductAdd;