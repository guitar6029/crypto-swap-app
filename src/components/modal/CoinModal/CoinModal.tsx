import { Coin } from "../../../uitls/Interface/Coin/CoinRelated"
import { IoMdCloseCircle } from "react-icons/io";
import styles from "./coinmodal.module.scss"
import { handleExternalClick } from "../../../uitls/ClickEvent/ClickOutsideRelated"


type CoinModalProps = {
    coin: Coin
    onClose: () => void

}


const CoinModal: React.FC<CoinModalProps> = ({ coin, onClose }) => {
    return (
        <div onClick={(event) => handleExternalClick(event, onClose)} className="modalExternal">
            <div  className={styles.coinModal}>
            <div className="row w-100 d-flex justify-content-end">
                    {/* Close Icon at the far right */}
                    <div className="col-12 d-flex justify-content-end">
                        <IoMdCloseCircle
                            onClick={onClose}
                            className="cursor-pointer"
                            size={30}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-12 d-flex align-items-center gap-2">
                        <span>{coin.name}</span>
                        <img className={styles.coinImage} src={coin.image} alt={coin.name} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoinModal 