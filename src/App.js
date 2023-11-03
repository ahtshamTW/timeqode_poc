import './App.css';
import MenuBar from './components/MenuBar';
import ExpenseManagement from './components/expenseManagement';
import Footer from './components/footer';
import Pricing from './components/pricing';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MenuBar />
        <ExpenseManagement />
        <Pricing />
        <Footer />
      </header>
    </div>
  );
}

export default App;
