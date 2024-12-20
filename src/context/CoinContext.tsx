import { createContext, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; //

// Define the type for the context value
interface CoinContextType {
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
  const currency = useSelector((state: RootState) => state.modal.currencySelected);

  useEffect(() => {
    fetchAllCoins(); // Fetch coins when the component mounts
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

  // Define the actual context value with data or methods
  const contextValue: CoinContextType = {
    allCoins,
    fetchAllCoins // Provide the fetch method
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinTextProvider;
