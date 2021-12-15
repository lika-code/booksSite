import React, { useState } from "react";
import {useLocation} from 'react-router-dom';
import styles from "../BookPage/style.module.css";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

function BookPage() {
    const [crumbs, setCrumbs] = useState([
        "MyBook — Электронная библиотека",
        "Библиотека",
        "Автор",
        "Название книги",
    ]);

    const { state } = useLocation();
    const selected = (crumb) => {
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
                        className={styles.imgBookBlur}
                        alt="book"
                    />
                    <img
                        src={state['img']}
                        className={styles.imgBook}
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
                        <li className={styles.bookInfoListItem}>2 485 печатных страниц</li>
                        <li className={styles.bookInfoListItem}>2013 год</li>
                        <li className={styles.bookInfoListItem}>16+</li>
                    </ul>
                </div>
                <div className={styles.copyrightHolderBlock}>
                    <h3 className={styles.title}>Правообладатель</h3>
                    <p className={styles.rulesAuthor}>АСТ</p>
                    <p className={styles.numberOfBook}>149 книг</p>
                    <button className={styles.btnShare}>Поделиться</button>
                </div>
            </div>
        </>
    );
}

export default BookPage;
