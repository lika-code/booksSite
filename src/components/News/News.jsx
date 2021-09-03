import React from "react";

import styles from "../News/style.module.css";

function News({ name, imgUrl, desc}) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.insideElem}>
                    <img src={imgUrl} className={styles.imgNews} alt="news" />
                    <div className={styles.textBlock}>
                        <ul className={styles.categoryList}>
                            <li>
                                <p className={styles.category}>Аудиокниги,</p>
                            </li>
                            <li>
                                <p className={styles.category}>Топ прослушивания</p>
                            </li>
                        </ul>
                        <h4>{name}</h4>
                        <p>
                            {desc}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News;
