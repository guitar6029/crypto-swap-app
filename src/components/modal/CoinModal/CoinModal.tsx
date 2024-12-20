import { Coin } from "../../../uitls/Interface/Coin/CoinRelated";
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./coinmodal.module.scss";
import { handleExternalClick } from "../../../uitls/ClickEvent/ClickOutsideRelated";
import { useSelector } from 'react-redux';
import { RootState } from '../../../store/store';
import { useState, useEffect, useRef } from "react";
import LineChart from "../../Charts/LineChart";

type CoinModalProps = {
    coin: Coin;
    onClose: () => void;
};

const CoinModal: React.FC<CoinModalProps> = ({ coin, onClose }) => {
    const [coinData, setCoinData] = useState<any>(null);  // State for storing fetched data
    const [loading, setLoading] = useState<boolean>(false);  // Loading state
    const { selectedCoin, currencySelected } = useSelector((state: RootState) => state.modal);
    const coinToDisplay = coin || selectedCoin;

    // Ref to handle component mount state
    const isMounted = useRef(true);

    useEffect(() => {
        if (!isMounted.current) return;

        // Function to fetch coin data from the API
        const fetchCoinData = async (coinName: string, currency: string) => {
            if (loading) return; // Prevent redundant calls while loading
            setLoading(true);  // Start loading
            try {
                // Fetch data from the API
                const lowerCaseCoinName = coinName.toLowerCase();
                const response = await fetch('https://api.coingecko.com/api/v3/coins/' + lowerCaseCoinName + '/market_chart?vs_currency=' + currency + '&days=10', {
                    method: 'GET',
                    headers: {
                        accept: 'application/json',
                        'x-cg-demo-api-key': import.meta.env.VITE_COIN_GECKO_API_KEY  // API key here
                    }
                });
                const data = await response.json();
                
                setCoinData(data);  // Set fetched data
            } catch (error) {
                console.error('Error fetching coin data:', error);
            } finally {
                setLoading(false);  // Stop loading
            }
        };

        // Check if we have a valid coin and currency before calling the fetch function
        if (coinToDisplay?.id && currencySelected) {
            fetchCoinData(coinToDisplay.id, currencySelected);
        }

        // Cleanup function to set isMounted to false when the component unmounts
        return () => {
            isMounted.current = false;
        };
    }, [coinToDisplay?.name, currencySelected]);  // Trigger effect when coin or currency changes

    return (
        <div onClick={(event) => handleExternalClick(event, onClose)} className="modalExternal">
            <div className={styles.coinModal}>
                <div className="row w-100 d-flex justify-content-end">
                    <div className="col-12 d-flex justify-content-end">
                        <IoMdCloseCircle onClick={onClose} className="cursor-pointer" size={30} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex align-items-center gap-2">
                        <span>{coinToDisplay?.name}</span>
                        <img className={styles.coinImage} src={coinToDisplay?.image} alt={coinToDisplay?.name} />
                    </div>
                </div>

                <div>
                    

                    {/* Show loading state or fetched coin data */}
                    {loading && <p>Loading...</p> }
                </div>


                <div className="row mt-4">
                    <div className="col-12 ">
                        {coinData && coinData.prices ? (
                            <LineChart chartDataProp={coinData}  titleChart={coinToDisplay?.id ?? "Crypto Chart"}/>
                        ) : (
                            <p>Loading chart data...</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinModal;
