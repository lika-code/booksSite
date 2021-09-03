import React from "react";

import styles from "../BuyingPage/style.module.css";
function BuyingPage() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <h1 className={styles.heading}>
                    Оформление <br /> подписки в подарок
                </h1>
                <p>
                    Выберите картинку и напишите теплые слова. Мы пришлем
                    сертификат на указанную почту.
                </p>
            </div>
        </div>
    );
}

export default BuyingPage;
