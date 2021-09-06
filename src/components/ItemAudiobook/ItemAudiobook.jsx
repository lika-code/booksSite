import React from "react";

import styles from '../ItemAudiobook/style.module.css'
import Raiting from "../Raiting/Raiting";

function ItemAudiobook({name, author, img}) {
    return (
        <div className={styles.book}>
            <div className={styles.blockImg}>
                <img src={img} className={styles.audiobookImg} alt="book-img" />
            </div>
            <div>
                {/* {rating} */}
                <Raiting/>
            </div>
            <p className={styles.bookNameTitle}>{name}</p>
            <p className={styles.bookAuthorTitle}>{author}</p>
        </div>
    );
}

export default ItemAudiobook;
