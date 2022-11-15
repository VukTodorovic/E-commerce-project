import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ProductPage from './components/ProductPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
//import {createBrowserRouter, RouterProvider} from 'react-router-dom';


class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
    
          <div className="main-wrapper">
            <Routes>
              <Route exact path='/' element={ <MainContent /> } /> 
              <Route exact path='/product-page' element={ <ProductPage /> } />  
          </Routes> 
          </div>
        </div>
      </Router>
    );  
  }

    
  
}


export default App;
