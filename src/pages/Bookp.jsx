import React from 'react'

import styles from "./BookPage/style.module.css";


function Bookp(props) {
    const book = props.book 
    return (
        <div className={styles.mainContainer}>
                <div className={styles.imgBlur}>
                    <p>{book.name}</p>
                    <img
                        src={book.img}
                        className={styles.imgBookBlur}
                        alt="book"
                    />
                </div>
        </div>
    )
}

export default Bookp
