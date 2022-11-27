import '../styles/ProductPage.css';
import React, { useState, useEffect } from 'react';
import { getSingleProduct } from '../routes/user_app/products-routes'; 
import { useParams } from 'react-router-dom'

const ProductPage = () => {
    const [product, setProduct] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        //product = await getSingleProduct('636fc6f0203dcd2149c48b87');
        const loadSingleProduct = async () => {
            const newProduct = await getSingleProduct(id);
            setProduct(newProduct);
        }
        loadSingleProduct();       
    });

    return product !== null ? (
        <div className="ProductPage">
            <div className='product-page-wrapper'>
                <p><b>ID:</b> {product._id}</p>
                <p><b>Name:</b> {product.name}</p>
                <p><b>Company:</b> {product.company}</p>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Description:</b> {product.description}</p>
            </div>
        </div> 
    ) : (<h1>Loading product info...</h1>)

}

export default ProductPage;