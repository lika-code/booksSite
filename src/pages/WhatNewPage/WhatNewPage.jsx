import React, { useEffect, useState } from "react";
import axios from 'axios';

import NewsList from "../../components/NewsList/NewsList";
import PersonalSelection from "../../components/PersonalSelection/PersonalSelection";
import SaleBlock from "../../components/SaleBlock/SaleBlock";
import styles from "../WhatNewPage/style.module.css";

const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GM5GYnnDU2pFNaQl49ZxtTick781Q1tX'

function WhatNewPage() {
    const [booksSelection, setBooksSelection] = useState([]);
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        const fetchBooks = async () => {
            const res = await axios.get(url)
            setBooksSelection(res.data.results.books);
        }
        fetchBooks();
        fetch("http://localhost:3000/newsDb.json").then((resp) => {
            resp.json().then((json) => setNewsList(json.itemsList));
        });
    }, []);

    return (
        <div>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1>Что нового</h1>
                    <PersonalSelection items={booksSelection} />
                    <SaleBlock />
                    <NewsList itemsList={newsList} />
                </div>
            </div>
        </div>
    );
}

export default WhatNewPage;
