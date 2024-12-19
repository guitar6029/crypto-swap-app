import styles from "./coinTab.module.scss"

type CoinTabProps = {
    text: string,
    tokenSelected: { tokenName: string, tokenSymbol: string, price: number }
}


const CoinTab : React.FC<CoinTabProps> = ({text, tokenSelected}) => {

    return (        
        <div className={styles.coinTabContainer}>
            <span>{text}</span>
        </div>        
    );  
}

export default CoinTab