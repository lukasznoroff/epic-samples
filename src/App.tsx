import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { DataContextProvider } from './hooks/useDataContext';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SharedLayout from './pages/SharedLayout';
import Cart from './pages/Cart';

function App() {
  return (
    <DataContextProvider>
        <div className="App">
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="cart" element={<Cart />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
    </DataContextProvider>
  );
}

export default App;
