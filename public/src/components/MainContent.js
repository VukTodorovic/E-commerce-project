import '../styles/MainContent.css';
import React from 'react';
import SingleProduct from './SingleProduct';
import {getProducts} from '../routes/user_app/products-routes';

class MainContent extends React.Component {
    sortEnum = {
        NONE: 0,
        NAME_ASC: 1,
        NAME_DES: 2,
        PRICE_ASC: 3,
        PRICE_DES: 4
    }

    constructor(props) {
        super(props);

        let searchText = null;
        if(this.props.searchText){
            searchText = this.props.searchText;
        }

        this.state = {
            productsData: null,
            search: searchText,
            sort: this.sortEnum.NONE,
            price: 5000, // Ovo ce se menjati to je za sad samo stavljeno za testiranje
            company: {
                apple: true,
                honor: true,
                huawei: true,
                nokia: true,
                samsung: true,
                xiaomi: true
            }
        };
    }

    async loadProducts() {
        let options = {};
        options.search = this.state.search;
        options.price = this.state.price;
        options.company = this.state.company;
        options.sort = this.state.sort;

        const data = await getProducts(options);
        this.setState({ 
            productsData: data.products
        });
    }

    componentDidMount() {
        this.loadProducts();
    }

    componentDidUpdate() {
        //this.loadProducts(options);
    }

    onSliderChange(element) {
        const maxPrice = element.target.value;
        this.setState({
            price: maxPrice
        });

        this.loadProducts();
    }

    onCheckboxToggle(element) {
        const {name, checked} = element.target;
        this.state.company[name] = checked;

        this.loadProducts();
    }

    render() {
        const {productsData} = this.state;
        //console.log('123');

        return productsData !== null ? (
            <div className="MainContent">
                <div className="FilterMenu">
                    <p>Sort by:</p>
                    <select name="sortingType" id="sortingType">
                        <option value={this.sortEnum.NONE}>none</option>
                        <option value={this.sortEnum.NAME_ASC}>name (ascending)</option>
                        <option value={this.sortEnum.NAME_DES}>name (descending)</option>
                        <option value={this.sortEnum.PRICE_ASC}>price (ascending)</option>
                        <option value={this.sortEnum.PRICE_DES}>price (descending)</option>                  
                    </select>

                    <hr />

                    <p>Price:</p>
                    <input type="range" min="1" max="5000" id="priceSlider" defaultValue={this.state.price} onChange={(element) => this.onSliderChange(element)}></input>

                    <hr />
                    <p>Company:</p>
                    <div className='check-wrapper'>Apple <input type="checkbox" name="apple" defaultChecked={this.state.company.apple} onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Honor <input type="checkbox" name="honor" defaultChecked={this.state.company.honor} onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Huawei <input type="checkbox" name="huawei" defaultChecked={this.state.company.huawei} onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Nokia <input type="checkbox" name="nokia" defaultChecked={this.state.company.nokia} onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Samsung <input type="checkbox" name="samsung" defaultChecked={this.state.company.samsung} onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Xiaomi <input type="checkbox" name="xiaomi" defaultChecked={this.state.company.xiaomi} onChange={(element)=> this.onCheckboxToggle(element)}/></div>
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