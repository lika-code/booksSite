import React from "react";
import { Link } from "react-router-dom";

import styles from "../Item/style.module.css";
import Raiting from "../Raiting/Raiting";

function Item({ id, name, author, img}) {
    return (
        <Link to={{
            pathname: '/book',
            state: {
                'id':id,
                'name':name,
                'author':author,
                'img':img
            },
          }}>
            <div className={styles.book}>
                <div className={styles.blockImg}>
                    <img src={img} className={styles.bookImg} alt="book-img" />
                </div>
                <div>
                    
                    <Raiting />
                </div>
                <p className={styles.bookNameTitle}>{name}</p>
                <p className={styles.bookAuthorTitle}>{author}</p>
            </div>
        </Link>
    );
}

export default Item;
