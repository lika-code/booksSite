import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'

import styles from "../HomePage/style.module.css";
import appStoreIcon from "../../assets/img/as.png";
import playMarketIcon from "../../assets/img/gp.png";
import screenGirl from "../../assets/img/7408.jpg";
import HomeIconsBlock from "./HomeIconsBlock/HomeIconsBlock";
import BetterSelections from "../../components/BetterSelections/BetterSelections";
import AudioBooksSelection from "../../components/AudioBooksSelection/AudioBooksSelection";

import { getBooks } from '../../redux/actions/books'
import { getAudioBooks } from '../../redux/actions/audioBooks'


function HomePage() {
    const dispatch = useDispatch();
    const books = useSelector(state => state.books.items)
    const audioBooks = useSelector(state => state.audioBooks.items)

    useEffect(() => {
        dispatch(getBooks())
    }, [])

    useEffect(() => {
        dispatch(getAudioBooks())
    }, [])

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
                    <BetterSelections items={books}/>
                </div>
                <div>
                    <BetterSelections items={books}/>
                </div>
                <div>
                    <AudioBooksSelection items={audioBooks}/>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
