import './App.css';
import MenuBar from './components/MenuBar';
import Footer from './components/footer';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <Pricing />
        <Footer />
      </header>
    </div>
  );
}

export default App;
