import React from "react";
import { Link } from "react-router-dom";

import styles from "../Item/style.module.css";
import Raiting from "../Raiting/Raiting";

function Item({ name, author, img, onBookClick }) {
    return (
        <Link to="/book">
            <div className={styles.book} onClick={onBookClick}>
                <div className={styles.blockImg}>
                    <img src={img} className={styles.bookImg} alt="book-img" />
                </div>
                <div>
                    {/* {rating} */}
                    <Raiting />
                </div>
                <p className={styles.bookNameTitle}>{name}</p>
                <p className={styles.bookAuthorTitle}>{author}</p>
            </div>
        </Link>
    );
}

export default Item;
