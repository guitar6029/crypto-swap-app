import { createContext, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; //



interface TrendingCoin {
    id: string;
    coin_id: number;
    name: string;
    symbol: string;
    market_cap_rank: number;
    data: {
      price: number;
      market_cap: string;
      price_btc: string;
      price_change_percentage_24h: Record<string, number>;
      sparkline: string;
      total_volume: string;
      total_volume_btc: string;
    };
    small: string;
    large: string;
    thumb: string;
  }


// Define the type for the context value
interface CoinContextType {
  topTrendingCoins: TrendingCoin[];
  allCoins: any[]; // Define the type of coins based on your response data
  fetchAllCoins: () => void; // Add fetch function to the context
}

// Create the context with a default value
export const CoinContext = createContext<CoinContextType | undefined>(undefined);

// Define the type for the props in the provider component
interface CoinTextProviderProps {
  children: ReactNode;
}

const CoinTextProvider: React.FC<CoinTextProviderProps> = ({ children }) => {

  // States
  const [allCoins, setAllCoins] = useState<any[]>([]); // Define state for all coins
  const [topTrendingCoins, setTopTrendingCoins] = useState<any[]>([]); // Define state for top trending coins
  const currency = useSelector((state: RootState) => state.modal.currencySelected);

  useEffect(() => {
    fetchAllCoins(); // Fetch coins when the component mounts
    fetchTopTrendingCoins();
  }, [currency]); // Make sure the API is fetched whenever the currency changes

  const fetchAllCoins = async () => {
    const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;
    const options = {
      method: 'GET',
      headers: { accept: 'application/json', 'x-cg-demo-api-key': apiKey || '' }
    };

    fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, options)
      .then(res => res.json())
      .then(res => setAllCoins(res))
      .catch(err => console.error(err));
  };

  const fetchTopTrendingCoins = async () => {
    const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;
    const options = {
        method: 'GET',
        headers: {accept: 'application/json', 'x-cg-demo-api-key': apiKey || ''}
      };
      
      fetch('https://api.coingecko.com/api/v3/search/trending', options)
        .then(res => res.json())
        .then(res => { console.log(res.coins); setTopTrendingCoins(res.coins); })
        .catch(err => console.error(err));
  }

  // Define the actual context value with data or methods
  const contextValue: CoinContextType = {
    allCoins,
    topTrendingCoins,
    fetchAllCoins // Provide the fetch method
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinTextProvider;
