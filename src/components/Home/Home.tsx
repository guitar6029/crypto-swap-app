import { CoinContext } from '../../context/CoinContext'; 
import { useContext, useState } from 'react';
import CoinTable from '../../components/CoinTable/CoinTable';
import CoinModal from '../modal/CoinModal/CoinModal';

type HomePropsTypes = {};

const Home: React.FC<HomePropsTypes> = () => {
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedCoin, setSelectedCoin] = useState<any>(null); // Store the selected coin

  const handleCoinModal = (coin: any) => {
    setSelectedCoin(coin);
    setShowModal(true); // Open the modal when a coin is clicked
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close the modal
  };

  // Get the context value
  const coinContext = useContext(CoinContext);
  if (!coinContext) {
    return <div>Loading...</div>;
  }

  const { allCoins, topTrendingCoins } = coinContext;

  return (
    <>
      <div className="row m-4">
        <div className="col-12">
          <CoinTable coins={allCoins} onCryptoCoinClick={handleCoinModal} />
        </div>
      </div>

      {showModal && selectedCoin && (
        <CoinModal coin={selectedCoin} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Home;

