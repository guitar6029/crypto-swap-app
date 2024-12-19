import { Link } from 'react-router-dom';  // Import Link for navigation
import styles from './Header.module.scss';
import { IoWalletOutline } from "react-icons/io5";

type HeaderProps = {
    // The prop will accept a function for the click event
    onConnectWalletClick: () => void; 
};

const Header: React.FC<HeaderProps> = ({ onConnectWalletClick }) => {
    const handleConnectWallet = () => {
        // Emit the click event by calling the passed function
        onConnectWalletClick();
    };

    return (
        <header className={`${styles.header} row`}>
            <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="left-side-header d-flex align-items-center gap-4">
                    <span><Link to="/">CryptoSwap</Link></span>
                    <span className="hover-tab"><Link to="/swap">Swap</Link></span>
                    <span className="hover-tab"><Link to="/tokens">Tokens</Link></span>
                    <span className="hover-tab"><Link to="/nfts">NFTs</Link></span>
                    <span className="hover-tab"><Link to="/pool">Pool</Link></span>
                </div>
                <div className="right-side-header d-flex align-items-center gap-2">
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
