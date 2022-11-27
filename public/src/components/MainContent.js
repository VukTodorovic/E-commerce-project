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

    async loadProducts(options) {
        const data = await getProducts(options);
        this.setState({ 
            productsData: data.products
        });
    }

    componentDidMount() {
        this.loadProducts({ search: this.props.searchText });
    }

    componentDidUpdate() {
        this.loadProducts({ search: this.props.searchText });
    }

    render() {
        const {productsData} = this.state;

        return productsData !== null ? (
            <div className="MainContent">
                <div className="FilterMenu">
                    <p>Sort by:</p>
                    <select name="sortingType" id="sortingType">
                        <option value="none">none</option>
                        <option value="name-asc">name (ascending)</option>
                        <option value="name-desc">name (descending)</option>
                        <option value="price-asc">price (ascending)</option>
                        <option value="price-desc">price (descending)</option>                  
                    </select>

                    <hr />

                    <p>Price:</p>
                    <input type="range" min="1" max="100" value="70" id="priceSlider"></input>

                    <hr />

                    <p>Company:</p>
                    <div className='check-wrapper'>Apple <input type="checkbox" checked /></div>
                    <div className='check-wrapper'>Huawei <input type="checkbox" checked /></div>
                    <div className='check-wrapper'>Samsung <input type="checkbox" checked /></div>
                    <div className='check-wrapper'>Xiaomi <input type="checkbox" /></div>
                </div>
                <div className="Content">
                    {
                        productsData.map((item, index)=>{
                            return <SingleProduct key={item._id} productId={item._id} name={item.name} price={item.price}/>
                        })
                    }
                </div>
            </div>
        ) : (<h1>Loading products...</h1>)
    }
}

export default MainContent;