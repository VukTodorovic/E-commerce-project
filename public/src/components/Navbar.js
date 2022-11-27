import '../styles/Navbar.css';
import logo from '../images/spotify-logo-black.png';
import cartIcon from '../images/shopping-cart.png';
import searchIcon from '../images/search-icon.png';
import React from 'react'

class Navbar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            underShadow: false
        };
    }

    componentDidMount() { // React lifecycle method
        window.addEventListener('scroll', (event) => {
            if(window.scrollY > 0){
                this.setState({ 
                    underShadow: true
                });
            }
            else{
                this.setState({ 
                    underShadow: false
                });
            }
        })  
    }

    searchAction(){
        const searchText = document.querySelector('#searchInput').value;
        this.props.triggerNavbarAction(searchText);
    }

    render() {
        let shadowClass = '';
        if(this.state.underShadow) {
            shadowClass = 'under-shadow';
        }

        return (
            <div className={`Navbar ${shadowClass}`}> 
                <div className="navbar-center">
                    <div className="left-container">
                        <ul>
                            <li><a href='https://www.google.com'>Categories</a></li>
                            {/* <li><a href='https://www.google.com'>Search</a></li> */}
                            <li className="search-wrapper">
                                <input type="text" id="searchInput"></input>
                                <img src={searchIcon} alt="S" id="search-image" onClick={()=>this.searchAction()}></img>
                            </li>
                        </ul>
                        
                    </div>
    
                    <div className="center-container">
                        <img src={logo} alt="Loading..." id="logo-image"></img>
                    </div>
    
                    <div className="right-container">
                        <ul>
                            <li><a href='https://www.google.com'><img src={cartIcon} alt="Cart" id="shopping-cart-image"></img></a></li>
                            <li><a href='https://www.google.com' id="cart-anchor">Login / Register</a></li>
                        </ul>                    
                    </div>
                </div>
            </div> 
        );
    }
}

export default Navbar;