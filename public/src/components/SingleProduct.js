import '../styles/SingleProduct.css';
import React from 'react'
import productImage from '../images/shopping-cart.png';

class SingleProduct extends React.Component {
    render() {
        return (
            <div className="SingleProduct">
                <div className="single_product_wrapper">
                    <div className="single_product_header">
                        <p>{this.props.name}</p>
                    </div>             
                    <div className='slikaDiv'>
                        <img src={productImage} alt="Loading..." className="product_image" onClick={() => {
                            this.props.promeniEkran(this.props.productId);
                        }}>
                        </img>
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