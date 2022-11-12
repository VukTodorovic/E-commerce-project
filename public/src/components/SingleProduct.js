import '../styles/SingleProduct.css';
import React from 'react'
import productImage from '../images/shopping-cart.png';

class SingleProduct extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="SingleProduct">
                <div className="single_product_wrapper">
                    <div className="single_product_header">
                        <p>{this.props.name}</p>
                    </div>             
                    <div className='slikaDiv'>
                        <img src={productImage} className="product_image"></img>
                    </div>
                    <div className="down_section">
                        <p>${this.props.price}</p><p>Add to cart</p>
                    </div> 
                </div>    
            </div> 
        );
    }
}

export default SingleProduct;