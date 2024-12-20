import { IoWalletOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { RootState, AppDispatch } from '../../store/store'; // Types for Redux
import { selectCurrency } from '../../store/modalSlice'; // Import the Redux action
import { useSelector, useDispatch } from 'react-redux';
import styles from './Header.module.scss';

type HeaderProps = {
  onConnectWalletClick: () => void;
};

const Header: React.FC<HeaderProps> = ({ onConnectWalletClick }) => {
  const dispatch = useDispatch<AppDispatch>();
  
  // Access the selected currency from the Redux store
  const selectedCurrency = useSelector((state: RootState) => state.modal.currencySelected);

  // Handle connect wallet
  const handleConnectWallet = () => {
    onConnectWalletClick();
  };

  // Handle currency change
  const handleCurrencyChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newCurrency = event.target.value;
    dispatch(selectCurrency(newCurrency)); // Dispatch the action to update the store
  };

  return (
    <header className={`${styles.header} row`}>
      <div className="col-12 d-flex align-items-center justify-content-between">
        <div className="left-side-header d-flex align-items-center gap-4">
          <span><Link to="/">CryptoSwap</Link></span>
          {/* <span className="hover-tab"><Link to="/swap">Swap</Link></span>
          <span className="hover-tab"><Link to="/tokens">Tokens</Link></span>
          <span className="hover-tab"><Link to="/nfts">NFTs</Link></span>
          <span className="hover-tab"><Link to="/pool">Pool</Link></span> */}
        </div>
        <div className="right-side-header d-flex align-items-center gap-2">
          <div className={styles.currencyContainer}>
            <select
              value={selectedCurrency ?? 'usd'} // Bind the Redux state to the select element
              onChange={handleCurrencyChange} 
              name="currency"
            >
              <option value="usd">USD</option>
              <option value="eur">EUR</option>
            </select>
          </div>
          <div onClick={handleConnectWallet} className="hover-tab d-flex align-items-center gap-2">
            <IoWalletOutline size={30} />
            <span>Connect Wallet</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
