import React from 'react';
import styles from './cointrending.module.scss';
import { FaChevronRight } from "react-icons/fa6";


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
  
  return (
    <div className={`${styles.trendingCoinCard} coin-card-primary-text coin-card-primary-bg card d-flex flex-column p-3`}>
      <div className="d-flex align-items-baseline gap-2 mb-3">
        <h3>Trending Coins</h3>
        <FaChevronRight />
      </div>
      {coins.length > 0 ? (
        coins.slice(0, 5).map((coin, index) => (
          <div
            className="d-flex align-items-center py-2"
            style={{ borderBottom: "1px solid #e0e0e0" }}
            key={index}
          >
            {/* Icon */}
            <div style={{ width: "50px", textAlign: "center" }}>
              <img
                src={coin.small}
                alt={coin.name}
                style={{ width: "24px", height: "24px" }}
              />
            </div>

            {/* Name */}
            <div style={{ width: "150px", textAlign: "left" }}>
              <span className="fw-bold">{coin.name}</span>
            </div>

            {/* Symbol */}
            <div style={{ width: "100px", textAlign: "center", textTransform: "uppercase" }}>
              <span>{coin.symbol}</span>
            </div>

            {/* Price */}
            <div style={{ width: "100px", textAlign: "right" }}>
              <span>${coin.price.toFixed(2)}</span>
            </div>
          </div>
        ))
      ) : (
        <p>No trending coins available.</p>
      )}
    </div>
  );

};

export default CoinTrending;
