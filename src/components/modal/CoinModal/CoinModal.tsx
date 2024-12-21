import { convertToBigNumber } from '../../../uitls/Numbers/NumberUtils';
import { Coin } from "../../../uitls/Interface/Coin/CoinRelated";
import { handleExternalClick } from "../../../uitls/ClickEvent/ClickOutsideRelated";
import { IoMdCloseCircle } from "react-icons/io";
import { RootState } from '../../../store/store';
import { useSelector } from 'react-redux';
import { useState, useEffect, useRef } from "react";
import LineChart from "../../Charts/LineChart";
import styles from "./coinmodal.module.scss";

type CoinModalProps = {
    coin: Coin;
    onClose: () => void;
};

const CoinModal: React.FC<CoinModalProps> = ({ coin, onClose }) => {
    const [coinData, setCoinData] = useState<any>(null); // State for storing fetched data
    const [loading, setLoading] = useState<boolean>(false); // Loading state
    const [error, setError] = useState<boolean>(false); // Error state
    const { selectedCoin, currencySelected } = useSelector((state: RootState) => state.modal);
    const coinToDisplay = coin || selectedCoin;

    const isMounted = useRef(true);

    useEffect(() => {
        if (!isMounted.current) return;

        const fetchCoinData = async (coinName: string, currency: string) => {
            if (loading) return; // Prevent redundant calls while loading
            setLoading(true);
            setError(false); // Reset error state before fetching

            try {
                const lowerCaseCoinName = coinName.toLowerCase();
                const response = await fetch(
                    'https://api.coingecko.com/api/v3/coins/' + lowerCaseCoinName + '/market_chart?vs_currency=' + currency + '&days=10',
                    {
                        method: 'GET',
                        headers: {
                            accept: 'application/json',
                            'x-cg-demo-api-key': import.meta.env.VITE_COIN_GECKO_API_KEY
                        }
                    }
                );
                if (!response.ok) {
                    throw new Error("Failed to fetch data");
                }
                const data = await response.json();
                setCoinData(data);
            } catch (error) {
                console.error('Error fetching coin data:', error);
                setError(true); // Set error state if fetching fails
            } finally {
                setLoading(false);
            }
        };

        if (coinToDisplay?.id && currencySelected) {
            fetchCoinData(coinToDisplay.id, currencySelected);
        }

        return () => {
            isMounted.current = false;
        };
    }, [coinToDisplay?.id, currencySelected]);

    return (
        <div onClick={(event) => handleExternalClick(event, onClose)} className="modalExternal">
            <div className={styles.coinModal}>
                <div className="row w-100 d-flex justify-content-end">
                    <div className="col-12 d-flex justify-content-end">
                        <IoMdCloseCircle onClick={onClose} className="cursor-pointer" size={30} />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-center gap-2">
                        <img className={styles.coinImage} src={coinToDisplay?.image} alt={coinToDisplay?.name} />
                        <span>{coinToDisplay?.name}</span>
                        <span>({coinToDisplay?.symbol ? coinToDisplay?.symbol.toUpperCase() : "N/A"})</span>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        {loading ? (
                            <p>Loading chart data...</p>
                        ) : error ? (
                            <p>Error loading the chart. Please try again later.</p>
                        ) : coinData && coinData.prices ? (
                            <LineChart chartDataProp={coinData} />
                        ) : (
                            <p>No chart data available.</p>
                        )}
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="col-12 d-flex flex-column">
                        <div className="d-flex align-items-center gap-2">
                            <div className="col-6 text-end">
                                <span className={styles.label}>Current Price:</span>
                            </div>
                            <div className="col-6 text-start">
                                <span className={styles.value}>
                                    {convertToBigNumber(coinToDisplay?.current_price, currencySelected ?? "usd")}
                                </span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <div className="col-6 text-end">
                                <span className={styles.label}>Market Cap:</span>
                            </div>
                            <div className="col-6 text-start">
                                <span className={styles.value}>
                                    {convertToBigNumber(coinToDisplay?.market_cap, currencySelected ?? "usd")}
                                </span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <div className="col-6 text-end">
                                <span className={styles.label}>Rank:</span>
                            </div>
                            <div className="col-6 text-start">
                                <span className={styles.value}>{coinToDisplay?.market_cap_rank}</span>
                            </div>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                            <div className="col-6 text-end">
                                <span className={styles.label}>Volume (24h):</span>
                            </div>
                            <div className="col-6 text-start">
                                <span className={styles.value}>
                                    {convertToBigNumber(coinToDisplay?.total_volume, currencySelected ?? "usd")}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoinModal;
