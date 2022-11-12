import './styles/App.css';
import Navbar from './components/Navbar';
import DummyParagraph from './components/DummyParagraph';
import FilterMenu from './components/FilterMenu';
import MainContent from './components/MainContent';

function App() {
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
