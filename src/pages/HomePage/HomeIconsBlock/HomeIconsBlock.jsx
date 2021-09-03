import React from "react";

import styles from "../HomeIconsBlock/style.module.css";
import puzzle from "../../../assets/img/puzzle.svg";
import star from "../../../assets/img/star.svg";
import offline from "../../../assets/img/no-wifi.svg";
import headphones from "../../../assets/img/headphones.svg";
import book from "../../../assets/img/book.svg";



function HomeIconsBlock() {
    return (
        <div className={styles.background}>
                <div className={styles.container}>
            <div className={styles.wrapper}>
            <ul className={styles.itemsList}>
                <li className={styles.iconItem}>
                    <img src={book} className={styles.icons} alt="icon" />
                    <span>341 000</span> книг
                </li>
                <li className={styles.iconItem}>
                    <img src={headphones} className={styles.icons} alt="icon" />
                    <span>96 000</span>аудиокниг
                </li>
                <li className={styles.iconItem}>
                    <img src={star} className={styles.icons} alt="icon" />
                    <span>+ 2 000</span>новинок каждый<br/> месяц
                </li>
                <li className={styles.iconItem}>
                    <img src={puzzle} className={styles.icons} alt="icon" />
                    <span>Подборки</span>и рекомендации
                </li>
                <li className={styles.iconItem}>
                    <img src={offline} className={styles.icons} alt="icon" />
                    <span>Оффлайн</span>или онлайн
                </li>
            </ul>
            </div>
        </div>
    
        </div>
    );
}

export default HomeIconsBlock;
