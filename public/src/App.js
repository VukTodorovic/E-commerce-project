import './styles/App.css';
import {getProducts} from './routes/user_app/products/products-routes';
// import Navbar from './components/Navbar';
import Navbar from './components/Navbar';
import DummyParagraph from './components/DummyParagraph';
import FilterMenu from './components/FilterMenu';
import MainContent from './components/MainContent';

function App() {
  const productsRoute = getProducts();

  return (
    <div className="App">
      <Navbar />

      <div className="main-wrapper">
          

          <FilterMenu />
          <MainContent />
      </div>
    </div>
  );
}

export default App;
