import React from "react";
import { Link } from "react-router-dom";
import BookPage from "../../pages/BookPage/BookPage";

import styles from "../BetterSelections/style.module.css";
import Item from "../Item/Item";
// import arrow from "../../assets/img/right-arrow.svg";

function BetterSelections({ items }) {
    const openBookPage = (book_id) => {
        return <BookPage book_id={book_id}/>;
    };

    return (
        <div className={styles.wrapper}>
            <div className={styles.selectionIntro}>
                <div className={styles.selectLink}>
                    <h3>Лучшая подборка за неделю</h3>
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
                                id={obj.key}
                                name={obj.name}
                                author={obj.author}
                                img={obj.img}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BetterSelections;
