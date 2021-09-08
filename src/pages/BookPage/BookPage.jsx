import React, {  useState } from "react";
import {useLocation, useParams} from 'react-router-dom';

import styles from "../BookPage/style.module.css";
import BreadCrumb from "../../components/BreadCrumb/BreadCrumb";

function BookPage(props) { 
    const book = props.book 
    const params = useParams();
    const id = params?.id;
    console.log(params);
    const [crumbs, setCrumbs] = useState([
        "MyBook — Электронная библиотека",
        "Библиотека",
        "Автор",
        "Название книги",
    ]);

    
    // const { params } = match;
    // const { key } = params;


    // const [books, setBooks] = useState([]);

    // useEffect(() => {
    //     fetch(`http://localhost:3000/dbBetterBooks.json`).then((resp) => {
    //         resp.json().then((json) => setBooks(json.items));
    //     });
    // })

    // const chosenBook = books && books.filter(el=> el.key===key)

    // console.log(chosenBook)

    const { state } = useLocation();

    const selected = (crumb) => {
        console.log(crumb);
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <div>
                        <BreadCrumb crumbs={crumbs} selected={selected} />
                    </div>
                </div>
            </div>
            <div className={styles.mainContainer}>
                <div className={styles.imgBlur}>
                    <img
                        src={state['img']}
                        className={styles.imgBookBlur}
                        alt="book"
                    />
                </div>
                <div className={styles.bookInfoBlock}>
                    <ul>
                        <li>Премиум</li>
                        <li>4,3 (13 500 оценок)</li>
                    </ul>
                    <h1> {state['name']} </h1>
                    <p>{state['author']}</p>
                    <div>
                        <p>2 485 печатных страниц</p>
                        <p>2013 год</p>
                        <p>16+</p>
                    </div>
                </div>
                <div className={styles.copyrightHolderBlock}>
                    <h3>Правообладатель</h3>
                    <p>АСТ</p>
                    <p>149 книг</p>
                    <button>Поделиться</button>
                </div>
            </div>
        </>
    );
}

export default BookPage;
