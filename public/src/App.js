import './styles/App.css';
import Navbar from './components/Navbar';
import FilterMenu from './components/FilterMenu';
import MainContent from './components/MainContent';
import ProductPage from './components/ProductPage';
import React from 'react';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      productId: null
    };
    this.promeniEkran = this.promeniEkran.bind(this);
  }

  // Test
  promeniEkran(productId) {
    this.setState({
      productId : productId
    })
    //console.log('State:', this.state.productId);
    //console.log('productId:', productId);
  }

  render(){

    if(this.state.productId === null) {
      return (
        <div className="App">
          <Navbar />
    
          <div className="main-wrapper">
              <FilterMenu />
              <MainContent promeniEkran={this.promeniEkran}/>   
          </div>
        </div>
      );  
    }
    else {
      return (
        <div className="App">
          <Navbar />
    
          <div className="main-wrapper">
              <ProductPage productId={this.state.productId}/>  
          </div>
        </div>
      )
    }
  }

    
  
}


export default App;
