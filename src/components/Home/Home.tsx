import styles from './home.module.scss'
import CoinTab from '../CoinTab/CoinTab'
import { useState } from 'react'
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

type HomePropsTypes = {}

const Home: React.FC<HomePropsTypes> = () => {


    const [tokenSelectedPrimary, setTokenSelected] = useState(
        {
            tokenName: "Ethereum",
            tokenSymbol: "ETH",
            price: 0}
    )

    const [tokenSelectedSecondary, setTokenSelectedSecondary] = useState(
        {
            tokenName: "USD",
            tokenSymbol: "USD",
            price: 1}
    )
    
    return (
        <>
        <div className={`${styles.home} row m-0`}>
            
            <div className={styles.container}>

                <div className="row mt-4">
                    <div className={`${styles.swapText} col-12 d-flex flex-column`}>
                        <span>Swap Anytime,</span>
                        <span>Anywhere</span>
                    </div>
                </div>

                <div className="row mt-4">
                    <div className="d-flex align-items-center flex-column gap-2">
                        <CoinTab text="Sell" tokenSelected={tokenSelectedPrimary} />
                        <FaArrowCircleDown className='cursor-pointer' size={50} height={50} />
                        <CoinTab text="Buy" tokenSelected={tokenSelectedSecondary} />
                    </div>
                </div>

            </div> 
        </div> 

        
        </>
    );

}

export default Home