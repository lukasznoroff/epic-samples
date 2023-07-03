import './App.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { navLinks } from './components/ui/navbar/navLinks';

import { DataContextProvider } from './hooks/useDataContext';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import SharedLayout from './pages/SharedLayout';

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
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </DataContextProvider>
  );
}

export default App;
