import React from "react";
import styles from "./style.module.css";

function FreeBookItem({ name, imgUrl, desc }) {
  const category = [
    { id: "1", name: "Детективы" },
    { id: "3", name: "Роман" },
    { id: "4", name: "Бизнес литература" },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.insideElem}>
          <img src={imgUrl} className={styles.imgNews} alt="news" />
          <div className={styles.textBlock}>
            <ul className={styles.categoryList}>
              <li>
                <ul className={styles.category}>
                  {category.map((cat) => (
                    <p key={cat.id}>{cat.name},</p>
                  ))}
                </ul>
              </li>
              <li>
                <p className={styles.category}>Топ прослушивания</p>
              </li>
            </ul>
            <h4>{name}</h4>
            <p>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeBookItem;
