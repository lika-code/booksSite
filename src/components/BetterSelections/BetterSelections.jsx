import React from "react";
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
                    </p>
                </div>
                <div className={styles.booksSelection}>
                    {items.slice(1,8).map((obj) => (
                            <Item
                                key={obj.rank}
                                id={obj.rank}
                                name={obj.title}
                                author={obj.author}
                                img={obj.book_image}
                            />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BetterSelections;
