import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import styles from "../HomePage/style.module.css";
import appStoreIcon from "../../assets/img/as.png";
import playMarketIcon from "../../assets/img/gp.png";
import screenGirl from "../../assets/img/7408.jpg";
import HomeIconsBlock from "./HomeIconsBlock/HomeIconsBlock";
import BetterSelections from "../../components/BetterSelections/BetterSelections";
import AudioBooksSelection from "../../components/AudioBooksSelection/AudioBooksSelection";

function HomePage() {
    const [betterSelection, setBetterSelection] = useState([]);
    const [audiobooksSelection, setAudiobooksSelection] = useState([]);


    useEffect(() => {
        fetch("http://localhost:3000/dbBetterBooks.json").then((resp) => {
            resp.json().then((json) => setBetterSelection(json.items));
        });
    }, []);

    useEffect(() => {
        fetch("http://localhost:3000/dbAudioBooks.json").then((resp) => {
            resp.json().then((json) => setAudiobooksSelection(json.items));
        });
    }, []);

    return (
        <div className={styles.container}>
            <div className={styles.section}>
                <div className={styles.screenWrapper}>
                    <h1>
                        MyBook — читайте
                        <br /> и слушайте по одной
                        <br /> подписке
                    </h1>
                    <div className={styles.buttonsList}>
                        <button className={styles.screenBtn}>
                            14 дней бесплатно
                        </button>
                        <ul className={styles.iconsList}>
                            <li>
                                <Link to="">
                                    <img
                                        src={playMarketIcon}
                                        className={styles.iconStore}
                                        alt="playMarket-icon"
                                    />
                                </Link>
                            </li>
                            <li>
                                <Link to="">
                                    <img
                                        src={appStoreIcon}
                                        className={styles.iconStore}
                                        alt="appStore-icon"
                                    />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={styles.wrapperImg}>
                    <img
                        src={screenGirl}
                        className={styles.screenImg}
                        alt="girl with book"
                    />
                </div>
            </div>
            <div className={styles.rotateBlock}>
                <div className={styles.background}></div>
                <div className={styles.advantagesWrapper}>
                    <HomeIconsBlock />
                </div>
                <div>
                    <BetterSelections items={betterSelection}/>
                </div>
                <div>
                    <BetterSelections items={betterSelection}/>
                </div>
                <div>
                    <AudioBooksSelection items={audiobooksSelection}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
