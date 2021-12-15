import React from "react";

import styles from "../PersonalSelection/style.module.css";
import Item from "../Item/Item";

function PersonalSelection({ items }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.selectionIntro}>
        <h3>Ваша персональная подборка</h3>
        <div className={styles.booksSelection}>
          {items.slice(1, 8).map((obj) => (
            <Item
              key={obj.rank}
              name={obj.title}
              author={obj.author}
              img={obj.book_image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default PersonalSelection;
