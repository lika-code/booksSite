import React from "react";

import bookImgW from "../../assets/img/witcher.jpg";
import styles from '../Item/style.module.css'

function Item({name, author, rating, img}) {
    return (
        <div className={styles.book}>
            <div className={styles.blockImg}>
                <img src={bookImgW} className={styles.bookImg} alt="book-img" />
            </div>
            <p>{rating}</p>
            <p>{name}</p>
            <p>{author}</p>
        </div>
    );
}

export default Item;
