import React from "react";
import { Link } from "react-router-dom";

import styles from "../BetterSelections/style.module.css";
import Item from "../Item/Item";
import arrow from "../../assets/img/right-arrow.svg";
import puzzle from "../../assets/img/puzzle.svg";

function BetterSelections({ items }) {
    return (
        <div className={styles.wrapper}>
            <div className={styles.selectionIntro}>
                <div className={styles.selectLink}>
                    <h3>Лучшая подборка за неделю</h3>
                    <Link to="/" className={styles.btnMore}>
                        Еще
                        {/* <span>
                            <img
                                scr={puzzle}
                                className={styles.linkIcon}
                                alt="icon"
                            />
                        </span> */}
                    </Link>
                </div>
                <div>
                    <p className={styles.selectDescription}>
                        Деловая и научно-популярная литература издательств
                        «Манн, Иванов и Фербер», «Альпина Паблишер»,
                        «Олимп-Бизнес» и других
                    </p>
                </div>
                <div className={styles.booksSelection}>
                    {items.map((obj) => (
                        <Item
                            key={obj.key}
                            name={obj.name}
                            author={obj.author}
                            rating={obj.rating}
                            img={obj.img}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BetterSelections;
