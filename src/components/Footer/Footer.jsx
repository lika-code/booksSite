import React from "react";
import { Link } from "react-router-dom";

import facebookIcon from "../../assets/img/facebook.svg";
import instagramIcon from "../../assets/img/instagram.svg";
import twitterIcon from "../../assets/img/twitter.svg";
import youtubeIcon from "../../assets/img/youtube.svg";
import appStoreIcon from "../../assets/img/as.png";
import playMarketIcon from "../../assets/img/gp.png";
import visaIcon from "../../assets/img/visa.png";
import mcIcon from "../../assets/img/mc.png";
import mirIcon from "../../assets/img/mir.png";
import paypalIcon from "../../assets/img/pp.png";

import styles from "../Footer/style.module.css";

function Footer({ items, subscriptions, another }) {
    return (
        <div className={styles.container}>
            <div className={styles.wrapperBg}>
                <div className={styles.wrapperCat}>
                    <div className={styles.wrapperCategoriesProject}>
                        <p className={styles.heading}>О проекте</p>
                        <div className={styles.wrapperCategories}>
                            {items.map((obj) => (
                                <p className={styles.items} key={obj.key}>
                                    {obj.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className={styles.heading}>О подписке</p>
                        <div className={styles.wrapperCategories}>
                            {subscriptions.map((obj) => (
                                <p className={styles.items} key={obj.key}>
                                    {obj.name}
                                </p>
                            ))}
                        </div>
                    </div>
                    <div>
                        <p className={styles.heading}>Другие проекты</p>
                        <div className={styles.wrapperCategories}>
                            {another.map((obj) => (
                                <p className={styles.items} key={obj.key}>
                                    {obj.name}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.wrapperFooter}>
                <div className={styles.footerSocial}>
                    <p className={styles.headingFooter}>Следите за новостями</p>
                    <ul className={styles.iconsSocial}>
                        <li>
                            <img
                                src={twitterIcon}
                                className={styles.socialIcon}
                                alt="twitter-icon"
                            />
                        </li>
                        <li>
                            <img
                                src={facebookIcon}
                                className={styles.socialIcon}
                                alt="fb--icon"
                            />
                        </li>
                        <li>
                            <img
                                src={instagramIcon}
                                className={styles.socialIcon}
                                alt="instagram-icon"
                            />
                        </li>
                        <li>
                            <img
                                src={youtubeIcon}
                                className={styles.socialIcon}
                                alt="youtube-icon"
                            />
                        </li>
                    </ul>
                </div>
                <div className={styles.footerContacts}>
                    <p className={styles.headingFooter}>Служба поддержки</p>
                    <ul className={styles.footerContactsItems}>
                        <li>8 800 333 27 37</li>
                        <li>support@mybook.ru</li>
                    </ul>
                </div>
                <div className={styles.footerApp}>
                    <p className={styles.headingFooter}>Скачать приложение</p>
                    <ul className={styles.iconList}>
                        <li>
                            <Link to="">
                                <img
                                    src={playMarketIcon}
                                    className={styles.iconStore}
                                    alt="playMarket-icon"
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to="">
                                <img
                                    src={appStoreIcon}
                                    className={styles.iconStore}
                                    alt="appStore-icon"
                                />
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.footerPayment}>
                    <p className={styles.headingFooter}>
                        Мы принимаем к оплате
                    </p>
                    <ul className={styles.iconList}>
                        <li>
                            <img
                                src={mcIcon}
                                className={styles.masterCard}
                                alt="mastercard-icon"
                            />
                        </li>
                        <li>
                            <img
                                src={visaIcon}
                                className={styles.iconPass}
                                alt="visa-icon"
                            />
                        </li>
                        <li>
                            <img
                                src={mirIcon}
                                className={styles.iconPass}
                                alt="mir-icon"
                            />
                        </li>
                        <li>
                            <img
                                src={paypalIcon}
                                className={styles.paypall}
                                alt="paypal-icon"
                            />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Footer;
