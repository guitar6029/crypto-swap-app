import styles from './home.module.scss'

type HomePropsTypes = {}

const Home: React.FC<HomePropsTypes> = () => {
    return (
        <div className={`${styles.home} row m-0`}>
            <div>
                <h3 className={styles.homeTitle}>CryptoSwap</h3>
            </div>
        </div>
    );

}

export default Home