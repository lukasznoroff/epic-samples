import './App.css';
import Navbar from './components/Navbar';
import SampleList from './components/SampleList';
import ProductOptions from './components/ProductOptions';
import Home from './pages/Home';

function App() {
  return (
    <div className='App'>
      <Navbar/>
      <Home/>
      <ProductOptions/>
      <SampleList />
    </div>
  );
}

export default App;
