import React from 'react';

const ProductForm = () => {

    const handleProductSubmit = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const price = e.target.price.value;
        const quantity = e.target.quantity.value;

        // console.log("Submited:", name, price, quantity);

        const newProduct = {
            name,
            price,
            quantity
        }
        console.log(newProduct);
    }

    return (
        <div>
            <h2>Add A Product</h2>
            <form onSubmit={handleProductSubmit}>
                <input style={{marginBottom: '8px',padding: '6px'}} type="text" name='name' placeholder='Product Name' />
                <br />
                <input style={{marginBottom: '8px',padding: '6px'}} type="text" name='price' placeholder='Product Price' />
                <br />
                <input style={{marginBottom: '8px',padding: '6px'}} type="text" name='quantity' placeholder='Product Quantity' />
                <br />
                <input  style={{padding: '6px'}} type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;