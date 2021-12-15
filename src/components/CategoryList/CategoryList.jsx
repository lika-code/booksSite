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
                            <Link className={styles.textLinkCategory} to="">Загрузи свой подкаст</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#128076;</span>
                            <Link className={styles.textLinkCategory} to="/listFreebook">Бесплатные книги</Link>{" "}
                        </li>
                        
                        <li className={styles.navLink}>
                            <span>&#128153;</span>
                            <Link className={styles.textLinkCategory} to="">Топ книг</Link>
                        </li>
                        <li className={styles.navLink}>
                            <span>&#127908;</span>
                            <Link className={styles.textLinkCategory} to="">Топ аудиокниг</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default CategoryList;
