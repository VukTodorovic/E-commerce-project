import '../styles/MainContent.css';
import React from 'react';
import SingleProduct from './SingleProduct';
import {getProducts} from '../routes/user_app/products-routes';

class MainContent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productsData: null,
            price: 5000, // Ovo ce se menjati to je za sad samo stavljeno za testiranje
            companies: {
                apple: true,
                huawei: true,
                samsung: true,
                xiaomi: true
            }
        };
    }

    async loadProducts(options) {
        const data = await getProducts(options);
        this.setState({ 
            productsData: data.products
        });
    }

    componentDidMount() {
        // Ucitaj product-e
        this.loadProducts({ search: this.props.searchText });
        // Podesi slider
        
    }

    componentDidUpdate() {
        this.loadProducts({ search: this.props.searchText });
    }

    onSliderChange(element) {
        const maxPrice = element.target.value;
        this.setState({
            price: maxPrice
        });
    }

    onCheckboxToggle(element) {
        const {name, checked} = element.target;
        //console.log('Company:', name, 'Checked:', checked);
        // this.setState({ 
        //     productsData: data.products
        // });
        this.state.companies[name] = checked;
    }

    render() {
        const {productsData} = this.state;
        //console.log('123');

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
                    <input type="range" min="1" max="5000" id="priceSlider" defaultValue="5000" onChange={(element) => this.onSliderChange(element)}></input>

                    <hr />

                    <p>Company:</p>
                    <div className='check-wrapper'>Apple <input type="checkbox" name="apple" defaultChecked onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Huawei <input type="checkbox" name="huawei" defaultChecked onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Samsung <input type="checkbox" name="samsung" defaultChecked onChange={(element)=> this.onCheckboxToggle(element)}/></div>
                    <div className='check-wrapper'>Xiaomi <input type="checkbox" name="xiaomi" defaultChecked onChange={(element)=> this.onCheckboxToggle(element)}/></div>
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