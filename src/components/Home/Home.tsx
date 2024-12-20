import { CoinContext } from '../../context/CoinContext'; // Import CoinContext
import { useContext } from 'react';
import CoinTable from '../../components/CoinTable/CoinTable';
import CoinTrending from '../../components/CoinTrending/CoinTrending';
import GreedAndFearIndex from '../GreedAndFearIndex/GreedAndFearIndex';
import styles from './home.module.scss';

type HomePropsTypes = {};

const Home: React.FC<HomePropsTypes> = () => {

    // Get the context value
    const coinContext = useContext(CoinContext);

    if (!coinContext) {
        return <div>Loading...</div>;
    }

    const { allCoins, topTrendingCoins } = coinContext;

    const topCoinsTrending = () => {
        if (topTrendingCoins && topTrendingCoins) {
            return topTrendingCoins.map((coin: any) => ({
                symbol: coin.item.symbol,
                name: coin.item.name,
                small: coin.item.small,
                price: coin.item.data.price,
                market_cap: coin.item.data.market_cap
            }));
        }
        return [];
    }

    return (
        <>
            {/* <div className="row m-4">
                <div className="col-6">
                    <GreedAndFearIndex />
                </div>
                <div className="col-6">
                    <CoinTrending coins={topCoinsTrending()} />
                </div>
            </div> */}


            <div className="row m-4">
                {/* Render the table passing the allCoins data */}
                <div className='col-12'>
                    <CoinTable coins={allCoins} />
                </div>
            </div>
        </>
    );
};

export default Home;
