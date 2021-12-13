import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import styles from "../AudioBookPage/style.module.css";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

function AudioBookPage() {
    const [crumbs, setCrumbs] = useState([
        "MyBook — Электронная библиотека",
        "Библиотека",
        "Автор",
        "Название книги",
    ]);

    const { state } = useLocation();
    const selected = (crumb) => {
        console.log(crumb);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <BreadCrumb crumbs={crumbs} selected={selected} />
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imgBlur}>
                    <img
                        src={state['img']}
                        className={styles.imgAudioBookBlur}
                        alt="book"
                    />
                    <img
                        src={state['img']}
                        className={styles.imgAudioBook}
                        alt="book"
                    />
                </div>
                <div>
                
                </div>
                <div className={styles.bookInfoBlock}>
                    <ul>
                        <li className={styles.raitingItem}>Премиум</li>
                        <li className={styles.raitingItem}>4,3 (13 500 оценок)</li>
                    </ul>
                    <h1 className={styles.bookNameTitle}>{state['name']} </h1>
                    <p className={styles.bookAuthorTitle}>{state['author']}</p>
                    <ul className={styles.bookInfoList}>
                        <li className={styles.bookInfoListItem}>2013 год</li>
                        <li className={styles.bookInfoListItem}>16+</li>
                    </ul>
                </div>
                <div className={styles.copyrightHolderBlock}>
                    <h3 className={styles.title}>Правообладатель</h3>
                    <p className={styles.rulesAuthor}>АСТ</p>
                    <p className={styles.numberOfBook}>149 книг</p>
                    <butto className={styles.btnShare}>Поделиться</butto>
                </div>
            </div>
        </>
    );
}

export default AudioBookPage;
