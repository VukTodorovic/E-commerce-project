import '../styles/ProductPage.css';
import React from 'react';
import {getSingleProduct} from '../routes/user_app/products-routes'; 

class ProductPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product : null
        }
    }

    async loadSingleProduct() {
        //const product = await getSingleProduct('636fc6f0203dcd2149c48b87');
        const product = await getSingleProduct(this.props.productId);
        this.setState({ 
            product: product
        });
    }

    componentDidMount() {
        //this.loadSingleProduct();
    }

    render() {
        const {product} = this.state;

        return this.state.product !== null ? (
            <div className="ProductPage">
                <p><b>Name:</b> {product.name}</p>
                <p><b>Company:</b> {product.company}</p>
                <p><b>Price:</b> {product.price}</p>
                <p><b>Description:</b> {product.description}</p>
            </div> 
        ) : (<h1>Loading product info...</h1>)
    }
}

export default ProductPage;