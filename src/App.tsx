import './App.css';
import Navbar from './components/Navbar';
import ProductOptions from './components/ProductOptions';
import Home from './pages/Home';

import { DataContextProvider } from './hooks/useDataContext';

function App() {
  return (
    <DataContextProvider>
      <div className='App'>
        <Navbar />
        <Home />
        <ProductOptions />
      </div>
    </DataContextProvider>
  );
}

export default App;
