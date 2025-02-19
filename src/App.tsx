import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header'; // Make sure to import your Header component
import Swap from './components/Swap/Swap'; // Your Swap component
import Tokens from './components/Tokens/Tokens'; // Your Tokens component
import NFTs from './components/NFTs/NFTs'; // Your NFTs component
import Pool from './components/Pool/Pool'; // Your Pool component
import Home from './components/Home/Home';

import routesTitles from './routes/routes';

import { useLocation } from 'react-router-dom';

//context
import CoinTextProvider from "./context/CoinContext";

//wallet modal
import WalletModal from './components/WalletModal/WalletModal';

import NotFound from './components/NotFound/NotFound'; 

const App: React.FC = () => {


  const location = useLocation();

  useEffect(() => {
    const currentTabTitle = routesTitles[location.pathname] || "CryptoSwap";
    document.title = currentTabTitle;

  }, [location.pathname])

  const [isWalletModalOpened, setIsWalletConnected] = useState(false);

  const handleConnectWallet = () => {
      // display a modal to connect wallet
      setIsWalletConnected(true);

  }

  const handleCloseModal = () => {
    setIsWalletConnected(false);
  }



  return (
    <CoinTextProvider>
    <div>
       {/* Modal popup is outside the Routes, and it's conditionally rendered */}
       {isWalletModalOpened && (
        <WalletModal onClose={handleCloseModal} />
      )}

      <Header onConnectWalletClick={handleConnectWallet} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/tokens" element={<Tokens />} />
        <Route path="/nfts" element={<NFTs />} />
        <Route path="/pool" element={<Pool />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </CoinTextProvider>
  );
}

export default App;
