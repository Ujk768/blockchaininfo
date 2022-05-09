import Home from './pages/Home';
import BlockChain from './pages/BlockChain';
import BitCoin from './pages/BitCoin';
import { Container } from '@mui/material';
import NavBar from './components/NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blockchain" element={<BlockChain />} />
          <Route path="/bitcoin" element={<BitCoin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
