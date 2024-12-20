import React from "react";
import styles from "./greedfearindex.module.scss";
import { FaBitcoin } from "react-icons/fa";

const FearGreedIndex: React.FC = () => {
  
  const getDate = () => {
    // returns example : Last Updared : Dec. 20, 2024
    const date = new Date();
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const month = monthNames[date.getMonth()];
    const day = date.getDate();
    const year = date.getFullYear();
    return `Last Updated : ${month} ${day}, ${year}`;
  }
  
  return (
    <div className={`${styles.card} greedfearindex-card card p-4`}>
      {/* Header */}
      <div className="d-flex align-items-center mb-2">
        <FaBitcoin className={styles.icon} />
        <h3 className="ms-2 mb-0">Fear & Greed Index</h3>
      </div>
      <p className="small">Multifactorial Crypto Market Sentiment Analysis</p>

      {/* Gauge */}
      <div className={`${styles.gaugeContainer} my-4`}>
        <div className={styles.gauge}>
          <div className={styles.needle} style={{ transform: "rotate(74deg)" }}></div>
          <div className={styles.centerIcon}>
            <FaBitcoin />
          </div>
        </div>
      </div>

      {/* Current sentiment */}
      <div className="text-center">
        <h5>
          Now: <span className={`${styles.greedyText}`}>Greed</span>
        </h5>
        <div className={`${styles.indexCircle} mx-auto`}>74</div>
      </div>

      {/* Footer */}
      <div className="d-flex gap-2 justify-content-between mt-4 ">
        <span>alternative.me</span>
        <span>{getDate()}</span>
      </div>
    </div>
  );
};

export default FearGreedIndex;
