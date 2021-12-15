import React from "react";
import { useLocation } from "react-router-dom";

import styles from "./style.module.css";

function ThankYouPage(props) {
  const { state } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.mainContent}>
          <h1 className={styles.headerThank}>Спасибо за покупку!</h1>
          <p>
            Ваш подарок будет отправлен {state["name"]} в течении часа на email{" "}
            {state["email"]}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ThankYouPage;
