import React from 'react';
import styles from "./TabLink.module.scss";

type TabLinkProps = {
    text?: string;   // Optional prop, defaults to undefined
    imgSrc?: string; // Optional prop, defaults to undefined
};

const TabLink: React.FC<TabLinkProps> = ({ text = "Default Text", imgSrc = "../src/assets/metamask.png" }) => {
    return (
        <div className={`${styles.tablink} mt-4 d-flex align-items-center gap-3 hover-tab cursor-pointer`}>
            <img src={imgSrc} alt="img" width={30} height={30} />
            <span>{text}</span>
        </div>
    );
}

export default TabLink;
