import styles from "./wallet.module.scss";
import { IoMdCloseCircle } from "react-icons/io";
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
                    <h3>Connect Wallet</h3>
                    <IoMdCloseCircle size={30} onClick={onClose} />
                    </div>
                </div>
            </div>
        </div>    
    );
}

export default WalletModal