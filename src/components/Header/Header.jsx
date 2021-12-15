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
              <ul className={styles.menuItems}>
                <li className={styles.navLinkMenu}>
                  <Link to="/">
                    <img className={styles.logoHeader} src={logo} alt="logo" />
                  </Link>
                </li>
                <li className={styles.navLinkMenu}>
                  <input
                    className={styles.headerSearch}
                    type="text"
                    placeholder="Книга или автор"
                  />
                </li>
                <li className={styles.navLinkMenu}>
                  <Link to="/dashboard">Что нового</Link>
                </li>
                <li className={styles.navLinkMenu}>
                  <Link to="/library">Библиотека</Link>
                </li>
                <li className={styles.navLinkMenu}>
                  <Link to="/buying">Подарить подписку</Link>
                </li>
                <li className={styles.navLinkMenu}>
                  <Link to="/login">Войти</Link>
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
