import React, { useState } from "react";

import witcher from "../../assets/img/witcher.jpg";
import styles from "../BookPage/style.module.css";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

function BookPage() {
    const [crumbs, setCrumbs] = useState([
        "MyBook — Электронная библиотека",
        "Библиотека",
        "Автор",
        "Название книги",
    ]);

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
                        src={witcher}
                        className={styles.imgBookBlur}
                        alt="book"
                    />
                </div>
                <div className={styles.bookInfoBlock}>
                    <ul>
                        <li>Премиум</li>
                        <li>4,3 (13 500 оценок)</li>
                    </ul>
                    <h1> Witcher </h1>
                    <p>Анджей Сапковский</p>
                    <div>
                        <p>2 485 печатных страниц</p>
                        <p>2013 год</p>
                        <p>16+</p>
                    </div>
                </div>
                <div className={styles.copyrightHolderBlock}>
                    <h3>Правообладатель</h3>
                    <p>АСТ</p>
                    <p>149 книг</p>
                    <button>Поделиться</button>
                </div>
            </div>
        </>
    );
}

export default BookPage;
