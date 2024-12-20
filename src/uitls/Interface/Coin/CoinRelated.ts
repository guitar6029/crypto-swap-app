export interface Roi {
    times: number;
    currency: string;
    percentage: number;
}

export interface Coin {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    market_cap: number;
    market_cap_rank: number;
    fully_diluted_valuation: number;
    total_volume: number;
    high_24h: number;
    low_24h: number;
    price_change_24h: number;
    price_change_percentage_24h: number;
    market_cap_change_24h: number;
    market_cap_change_percentage_24h: number;
    circulating_supply: number;
    total_supply: number;
    max_supply: number | null;
    ath: number;
    ath_change_percentage: number;
    ath_date: string;
    atl: number;
    atl_change_percentage: number;
    atl_date: string;
    roi: Roi;
    last_updated: string;
}


export interface  CoinData {
    ath: number; // All-time high price
    ath_change_percentage: number; // Percentage change from all-time high
    ath_date: string; // Date of all-time high
    atl: number; // All-time low price
    atl_change_percentage: number; // Percentage change from all-time low
    atl_date: string; // Date of all-time low
    circulating_supply: number; // Circulating supply of coins
    current_price: number; // Current price of the coin
    fully_diluted_valuation: number; // Fully diluted valuation
    high_24h: number; // Highest price in the last 24 hours
    id: string; // Coin identifier (e.g., "bitcoin")
    image: string; // URL of the coin's image
    last_updated: string; // Last update time of the data
    low_24h: number; // Lowest price in the last 24 hours
    market_cap: number; // Market capitalization
    market_cap_change_24h: number; // Market cap change in the last 24 hours
    market_cap_change_percentage_24h: number; // Market cap change percentage in the last 24 hours
    market_cap_rank: number; // Market cap rank of the coin
    max_supply: number; // Maximum supply of the coin
    name: string; // Name of the coin
    price_change_24h: number; // Price change in the last 24 hours
    price_change_percentage_24h: number; // Price change percentage in the last 24 hours
    roi?: null | number; // Return on investment (if available)
    symbol: string; // Symbol of the coin (e.g., "btc")
    total_supply: number; // Total supply of the coin
    total_volume: number; // Total volume traded in the last 24 hours
    
  }
  