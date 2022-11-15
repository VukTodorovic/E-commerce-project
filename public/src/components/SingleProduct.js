import '../styles/SingleProduct.css';
import React from 'react'
import ReactDOM from 'react-dom/client';
import productImage from '../images/shopping-cart.png';
import { useNavigate } from "react-router-dom";

const SingleProduct = (props) => {
    const navigate = useNavigate();

    return (
        <div className="SingleProduct">
            <div className="single_product_wrapper">
                <div className="single_product_header">
                    <p>{props.name}</p>
                </div>             
                <div className='slikaDiv'>
                    <img src={productImage} alt="Loading..." className="product_image" onClick={() => {
                        //this.props.navigation.navigate('product-page');
                        navigate(`product-page/${props.productId}`);
                    }}>
                    </img>
                </div>
                <div className="down_section">
                    <p>${props.price}</p><p>Add to cart</p>
                </div> 
            </div>    
        </div> 
    );
}

export default SingleProduct;
 