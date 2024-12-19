import styles from "./wallet.module.scss";
import { IoMdCloseCircle } from "react-icons/io";
import { IoWalletOutline } from "react-icons/io5";
import TabLink from "../../components/TabLink/TabLink";
type WalletModalProps = {
    onClose: () => void;
}

const WalletModal : React.FC<WalletModalProps> = ({ onClose }) => {


    const handleExternalClick = (event: React.MouseEvent<HTMLDivElement>) => {
        if (event.target === event.currentTarget) {
            onClose();
        }
    }


    return (
        <div onClick={handleExternalClick} className={styles.modalExternal}>
            <div className={styles.modal}>
                <div className="row">
                    <div className="col-12 d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center gap-2">
                            <IoWalletOutline size={30} />
                            <h3>Connect Wallet</h3>
                        </div>
                    <IoMdCloseCircle className="cursor-pointer" size={30} onClick={onClose} />
                    </div>

                    <div className="row">
                        <div className="col-12 d-flex align-items-center">
                            <TabLink text="Metamask" imgSrc="../src/assets/metamask.png" />
                        </div>
                        <div className="col-12 d-flex align-items-center">
                            <TabLink text="Coinbase" imgSrc="../src/assets/coinbase.svg" />
                        </div>
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default WalletModal