import React from 'react';
import { Link } from "react-router-dom";


import styles from "../AudioBooksSelection/style.module.css";
import ItemAudiobook from "../ItemAudiobook/ItemAudiobook";

function AudioBooksSelection({items}) {
    return (
            <div className={styles.wrapper}>
                <div className={styles.selectionIntro}>
                    <div className={styles.selectLink}>
                        <h3>Теперь и аудиокниги!</h3>
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
                        Более 50 000 аудиокниг для взрослых и детей
                        </p>
                    </div>
                    <div className={styles.booksSelection}>
                        {items.map((obj) => (
                            <ItemAudiobook
                                key={obj.key}
                                name={obj.name}
                                author={obj.author}
                                img={obj.img}
                            />
                        ))}
                    </div>
                </div>
            </div>
    )
}

export default AudioBooksSelection
