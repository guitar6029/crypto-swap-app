

import React from 'react';
import styles from './cointable.module.scss';
import { addCommas } from '../../uitls/Numbers/NumberUtils';

type Coin = {
  current_price: number;
  market_cap_rank: number;
  symbol: string;
  name: string;
  low_24h: number;
  high_24h: number;
  market_cap: number;
  image: string;
};

type TableProps = {
  coins: Coin[]; // Array of coins to display in the table
  onCryptoCoinClick: (coin : Coin) => void
};

const CoinTable: React.FC<TableProps> = ({ coins , onCryptoCoinClick }) => {

  return (
    <div
      className={`${styles.coinTable} coin-card-primary-text coin-card-primary-bg table-responsive`}
    >
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price</th>
            <th>Low 24h</th>
            <th>High 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr className="cursor-pointer" onClick={() => onCryptoCoinClick(coin)} key={index}>
              <td>{coin.market_cap_rank}</td>
              <td className="text-uppercase">{coin.symbol}</td>
              <td className="d-flex align-items-center gap-3">
                <img className={styles.coinImage} src={coin.image} alt={coin.name} /> {coin.name}
              </td>
              <td>{addCommas(coin.current_price)}</td>
              <td>{addCommas(coin.low_24h)}</td>
              <td>{addCommas(coin.high_24h)}</td>
              <td>{coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;
