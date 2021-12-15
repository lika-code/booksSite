import React, { useEffect, useState } from "react";
import styles from "./style.module.css";
import axios from "axios";
import FreeBookItem from "../../components/FreeBookItem/FreeBookItem";


const url =
  "https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=GM5GYnnDU2pFNaQl49ZxtTick781Q1tX";


function LibraryPage() {
  const [booksList, setBooksList] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get(url);
      setBooksList(res.data.results.books);
    };
    fetchBooks();
  }, []);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <h1>Библиотека</h1>
        </div>
      </div>

      <div className={styles.mainBlock}>
        <div className={styles.background}>
          <div className={styles.wrapperMainContent}>
            <div>
              {booksList.map((obj) => (
                <FreeBookItem
                  key={obj.rank}
                  name={obj.title}
                  imgUrl={obj.book_image}
                  desc={obj.description}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LibraryPage;
