import '../styles/Navbar.css';
import logo from '../images/spotify-logo-black.png';
import cartIcon from '../images/shopping-cart.png';
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
                            <li><a href='#'>Categories</a></li>
                            <li><a href='#'>Search</a></li>
                        </ul>
                        
                    </div>
    
                    <div className="center-container">
                        <img src={logo} alt="Logo" id="logo-image"></img>
                    </div>
    
                    <div className="right-container">
                        <ul>
                            <li><a href='#'><img src={cartIcon} alt="Cart" id="shopping-cart-image"></img></a></li>
                            <li><a href='#' id="cart-anchor">Login / Register</a></li>
                        </ul>                    
                    </div>
                </div>
            </div> 
        );
    }
}

export default Navbar;