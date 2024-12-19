import { Link } from 'react-router-dom';  // Import Link for navigation
import styles from './Header.module.scss';
import { IoWalletOutline } from "react-icons/io5";

type HeaderProps = {}; // Define props here if needed

const Header: React.FC<HeaderProps> = () => {
    return (
        <header className={`${styles.header} row`}>
            <div className="col-12 d-flex align-items-center justify-content-between">
                <div className="left-side-header">
                    <span>CryptoSwap</span>
                    <span><Link to="/swap">Swap</Link></span>
                    <span><Link to="/tokens">Tokens</Link></span>
                    <span><Link to="/nfts">NFTs</Link></span>
                    <span><Link to="/pool">Pool</Link></span>
                </div>
                <div className="right-side-header d-flex align-items-center gap-2">
                    <div className="d-flex align-items-center gap-2">
                    <IoWalletOutline size={30}/>
                    <span>Connect Wallet</span>

                    </div>
                    <span>2</span>
                    <span>3</span>
                </div>
            </div>
        </header>
    );
}

export default Header;
