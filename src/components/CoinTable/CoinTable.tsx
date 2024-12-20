

import React from 'react';
import styles from './CoinTable.module.scss';

type Coin = {
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
};

const CoinTable: React.FC<TableProps> = ({ coins }) => {


  


  return (
    <div className={`${styles.coinTable} table-responsive `} >
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Low 24h</th>
            <th>High 24h</th>
            <th>Market Cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin, index) => (
            <tr key={index}>
              <td>{coin.market_cap_rank}</td>
              <td className="text-uppercase">{coin.symbol}</td>
              <td className='d-flex align-items-center gap-3'><img className={styles.coinImage} src={coin.image} alt={coin.name} /> {coin.name}</td>
              <td>{coin.low_24h}</td>
              <td>{coin.high_24h}</td>
              <td>{coin.market_cap.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CoinTable;