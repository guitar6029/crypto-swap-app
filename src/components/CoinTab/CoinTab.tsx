import styles from "./coinTab.module.scss"

type CoinTabProps = {
    text: string,
}


const CoinTab : React.FC<CoinTabProps> = ({text}) => {

    return (        
        <div className={styles.coinTabContainer}>
            <span>{text}</span>
        </div>        
    );  
}

export default CoinTab