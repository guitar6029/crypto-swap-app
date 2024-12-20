import { createContext, ReactNode, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store"; //

// Define the type for the context value
interface CoinContextType {
  // Add properties based on your actual context data
  someValue?: string;
  someMethod?: () => void;
}

// Create the context with a default value (could be null or a default object)
export const CoinContext = createContext<CoinContextType | undefined>(undefined);

// Define the type for the props in the provider component
interface CoinTextProviderProps {
  children: ReactNode;
}

const CoinTextProvider: React.FC<CoinTextProviderProps> = ({ children }) => {

    //states
    const [allCoins, setAllCoins] = useState([]);
    // Access the selected currency from Redux store
    const currency = useSelector((state: RootState) => state.modal.currencySelected);
    

    useEffect(() => {
        fetchAllCoins();
    }, [])


    const fetchAllCoins = async () => {

        const apiKey = import.meta.env.VITE_COIN_GECKO_API_KEY;
        
        const options = {
            method: 'GET',
            headers: {accept: 'application/json', 'x-cg-demo-api-key': apiKey || ''}
          };
          
          fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`, options)
            .then(res => res.json())
            .then(res => setAllCoins(res))
            .catch(err => console.error(err));

    }

  // Define the actual context value with data or methods
  const contextValue: CoinContextType = {
    someValue: "example value", // Example value, replace with actual logic
    someMethod: () => {
      console.log("Method called");
    }
  };

  return (
    <CoinContext.Provider value={contextValue}>
      {children}
    </CoinContext.Provider>
  );
};

export default CoinTextProvider;
