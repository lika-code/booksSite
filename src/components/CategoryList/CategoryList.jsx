import React from "react";
import { Link } from "react-router-dom";

import styles from "../CategoryList/style.module.css";

function CategoryList() {
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <nav>
                    <ul className={styles.categoryItems}>
                        <li className={styles.navLink}>
                            <span>&#128161;</span>
                            <Link className={styles.textLink} to="">Загрузи свой подкаст</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#127911;</span>
                            <Link className={styles.textLink} to="">Аудиокниги</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#128076;</span>
                            <Link className={styles.textLink} to="">Бесплатные книги</Link>{" "}
                        </li>
                        <li className={styles.navLink}>
                            <span>&#128293;</span>
                            <Link className={styles.textLink} to="">Новинки</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#128153;</span>
                            <Link className={styles.textLink} to="">Топ книг</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#127908;</span>
                            <Link className={styles.textLink} to="">Топ аудиокниг</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#129534;</span>
                            <Link className={styles.textLink} to="">MyBook: Истории</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryList;
