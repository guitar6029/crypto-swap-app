import styles from './home.module.scss';
import CoinTab from '../CoinTab/CoinTab';
import { CoinContext } from '../../context/CoinContext'; // Import CoinContext
import { useContext } from 'react';
import CoinTable from '../../components/CoinTable/CoinTable';

type HomePropsTypes = {};

const Home: React.FC<HomePropsTypes> = () => {

  // Get the context value
  const coinContext = useContext(CoinContext);

  if (!coinContext) {
    return <div>Loading...</div>;
  }

  const { allCoins } = coinContext;

  return (
    <>
      <div className="row m-4">
        {/* Render the table passing the allCoins data */}
        <CoinTable coins={allCoins} /> 
      </div>
    </>
  );
};

export default Home;
