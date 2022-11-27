import React from 'react';
import './styles/App.css';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ProductPage from './components/ProductPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null
    }

    this.triggerNavbarAction = this.triggerNavbarAction.bind(this); // Da bi ta funkcija imala isti context
  }

  triggerNavbarAction(searchText) {
    this.setState({
      search: searchText
    });
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Navbar triggerNavbarAction={this.triggerNavbarAction}/>
    
          <div className="main-wrapper">
            <Routes>
              <Route exact path='/' element={ <MainContent searchText={this.state.search}/> } /> 
              <Route exact path='/product-page/:id' element={ <ProductPage /> } />  
          </Routes> 
          </div>
        </div>
      </Router>
    );  
  }

    
  
}


export default App;
