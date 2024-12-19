import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'; // Make sure to import your Header component
import Swap from './components/Swap/Swap'; // Your Swap component
import Tokens from './components/Tokens/Tokens'; // Your Tokens component
import NFTs from './components/NFTs/NFts'; // Your NFTs component
import Pool from './components/Pool/Pool'; // Your Pool component

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/swap" element={<Swap />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/pool" element={<Pool />} />
        {/* Add other routes as needed */}
      </Routes>
    </div>
  );
}

export default App;
