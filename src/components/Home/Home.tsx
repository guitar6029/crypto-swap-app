import { CoinContext } from '../../context/CoinContext';
import { useContext, useState, useEffect } from 'react';
import CoinTable from '../../components/CoinTable/CoinTable';
import CoinModal from '../modal/CoinModal/CoinModal';
import { Coin, CoinData } from '../../uitls/Interface/Coin/CoinRelated';

//store
import { useDispatch } from 'react-redux';
import { selectCoin, selectCurrency } from '../../store/modalSlice';

type HomePropsTypes = {};

// Define the type for the state object
interface State {
    showModal: boolean;
    selectedCoin: Coin | null;
    userInput: string;
    filteredCoins: Coin[];
}

const Home: React.FC<HomePropsTypes> = () => {


    const dispatch = useDispatch()

    // Group related states into one object for better organization
    const [state, setState] = useState<State>({
        showModal: false,        // State to control modal visibility
        selectedCoin: null,      // Store the selected coin
        userInput: '',           // User input for filtering coins
        filteredCoins: []       // Store the filtered coins
    });

    // Function to update individual state properties
    const updateState = (newState: Partial<State>) => {
        setState(prevState => ({
            ...prevState,
            ...newState
        }));
    };

    // Function to open the modal and set the selected coin
    const handleCoinModal = (coin: any) => {
       // Dispatch actions to save selected coin and currency in Redux store
       dispatch(selectCoin(coin.id)); // Assuming coin has an id or name that you want to save
       dispatch(selectCurrency('usd')); // Set the default or selected currency (update based on your logic)
       
        updateState({ ...state, selectedCoin: coin, showModal: true });
    };

    // Function to close the modal
    const handleCloseModal = () => {
        updateState({ showModal: false });
    };

    // Get the context value
    const coinContext = useContext(CoinContext);
    if (!coinContext) {
        return <div>Loading...</div>;
    }

    const { allCoins } = coinContext;

    // Effect to update filtered coins when allCoins or userInput changes
    useEffect(() => {
        if (state.userInput === '') {
            updateState({ filteredCoins: allCoins }); // Return all coins when no input
        } else {
            const filtered = allCoins.filter((coin) =>
                coin.name.toLowerCase().includes(state.userInput.toLowerCase()) // Filter based on user input
            );
            updateState({ filteredCoins: filtered.length > 0 ? filtered : [] }); // Return empty array if no matches
        }
    }, [state.userInput, allCoins]); // Re-run whenever userInput or allCoins changes

    // Handle user input change
    const handleUserInput = (value: string) => {
        updateState({ userInput: value }); // Set the user input value
    };

    return (
        <>
            <div className="row mt-4">
                <div className="col-12 d-flex flex-column align-items-center">
                    <h2 className="main-title">CryptoSwap</h2>
                    <span className="anytime">Anytime, Anywhere</span>
                </div>

                <div className="row mt-3">
                    <div className="col-12 d-flex align-items-center justify-content-center">
                        <div className="d-flex gap-2 align-items-center">
                            <input
                                onChange={(e) => handleUserInput(e.target.value)}
                                className="form-control user-input"
                                type="text"
                                placeholder="Search for a coin"
                            />
                            <button onClick={() => { }} className="btn btn-primary">
                                Search
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row m-4">
                <div className="col-12">

                    {state.userInput === '' || state.filteredCoins.length > 0 ? (
                        <CoinTable
                            coins={state.filteredCoins.length > 0 ? state.filteredCoins : allCoins} // Show filtered coins or all coins
                            onCryptoCoinClick={handleCoinModal}
                        />
                    ) : (
                        <div className="row d-flex align-items-center justify-content-center">
                            <div className="col-12 d-flex align-items-center justify-content-center">
                                <span className='no-matches text-capitalize'>No results found</span>
                            </div>
                        </div> // Show message if no matches and input is not empty
                    )}

                </div>
            </div>

            {state.showModal && state.selectedCoin && <CoinModal coin={state.selectedCoin} onClose={handleCloseModal} />}
        </>
    );
};

export default Home;
