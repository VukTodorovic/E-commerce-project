import '../styles/MainContent.css';
import React from 'react';
import SingleProduct from './SingleProduct';
import {getProducts} from '../routes/user_app/products-routes'; 

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsData: null
        };
    }

    async loadProducts() {
        const data = await getProducts();
        this.setState({ 
            productsData: data.products
        });
    }

    componentDidMount() {
        this.loadProducts();
    }

    render() {
        const {productsData} = this.state;

        return productsData !== null ? (
            <div className="MainContent">
                {
                    productsData.map((item, index)=>{
                        return <SingleProduct key={item._id} productId={item._id} name={item.company} price={item.price} promeniEkran={this.props.promeniEkran}/>
                    })
                }
            </div>    
        ) : (<h1>Loading products...</h1>)
    }
}

export default MainContent;