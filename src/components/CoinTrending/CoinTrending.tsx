import React from 'react';
import styles from './coinTrending.module.scss';

interface CoinsTrending {
  symbol: string;
  name: string;
  small: string;
  price: number;
  market_cap: string;
}

type CoingTrendingTypes = {
  coins: CoinsTrending[];
};

const CoinTrending: React.FC<CoingTrendingTypes> = ({ coins }) => {
  console.log("coins: ", coins);

  return (
    <div className="card d-flex flex-column">
      {coins.length > 0 ? (
        coins.map((coin, index) => (
          <div className="d-flex align-items-center gap-2" key={index}>
            <img src={coin.small} alt={coin.name} />
            <p>{coin.symbol}</p>
                  <p>{coin.name}</p>
                  <p> ${coin.price}</p>
                  <p>{coin.market_cap}</p>
            
          </div>
        ))
      ) : (
        <p>No trending coins available.</p>
      )}
    </div>
  );
};

export default CoinTrending;
