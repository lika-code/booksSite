import React, { useEffect, useState } from "react";

import NewsList from "../../components/NewsList/NewsList";
import PersonalSelection from "../../components/PersonalSelection/PersonalSelection";
import SaleBlock from "../../components/SaleBlock/SaleBlock";
import styles from "../WhatNewPage/style.module.css";

function WhatNewPage() {
    const [booksSelection, setbooksSelection] = useState([]);
    const [newsList, setNewsList] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/db.json").then((resp) => {
            resp.json().then((json) => setbooksSelection(json.items));
        });
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
