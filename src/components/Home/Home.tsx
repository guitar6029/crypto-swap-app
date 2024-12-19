import styles from './home.module.scss'
import CoinTab from '../CoinTab/CoinTab'
import { useState } from 'react'
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

type HomePropsTypes = {}

const Home: React.FC<HomePropsTypes> = () => {

    
    return (
        <>
        <div className="row m-0">
            
            <div className={styles.container}>

            </div> 
        </div> 

        
        </>
    );

}

export default Home