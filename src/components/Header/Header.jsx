import React from "react";
import { Link } from "react-router-dom";

import logo from "../../assets/img/logo.png";
import CategoryList from "../CategoryList/CategoryList";
import styles from "../Header/style.module.css";

function Header() {
    return (
        <>
            <header>
                <div className={styles.container}>
                    <div className={styles.wrapper}>
                        <nav>
                            <ul>
                                <li className={styles.navLink}>
                                    <Link to="/">
                                        <img
                                            className={styles.logoHeader}
                                            src={logo}
                                            alt="logo"
                                        />
                                    </Link>
                                </li>
                                <li className={styles.navLink}>
                                    <input
                                        className={styles.headerSearch}
                                        type="text"
                                        placeholder="Книга или автор"
                                    />
                                </li>
                                <li
                                    className={
                                        styles.navLink + "" + styles.textLink
                                    }
                                >
                                    <Link to="/dashboard">Что выбрать</Link>
                                </li>
                                <li
                                    className={
                                        styles.navLink + "" + styles.textLink
                                    }
                                >
                                    <Link to="">Библиотека</Link>
                                </li>
                                <li
                                    className={
                                        styles.navLink + "" + styles.textLink
                                    }
                                >
                                    <Link to="">Подписка</Link>
                                </li>
                                <li
                                    className={
                                        styles.navLink + "" + styles.textLink
                                    }
                                >
                                    <Link to="">Войти</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <CategoryList />
                </div>
            </header>
        </>
    );
}

export default Header;
