import React, { useEffect, useState } from "react";
import styles from "./style.module.css";

function LoginPage() {
  const [valueLogin, setValueLogin] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const handleChangeLogin = (e) => {
    setValueLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
  };

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setValueLogin("");
    setValuePassword("");
  }

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Вход</h1>
        <form className={styles.form}>
          <div className={styles.fieldInput}>
            <label>Почта или телефон:</label>
            <input
              type="text"
              className={styles.formInput}
              value={valueLogin}
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>
          <div className={styles.fieldInput}>
            <label>Пароль:</label>
            <input
              type="text"
              className={styles.formInput}
              value={valuePassword}
              onChange={(e) => handleChangePassword(e)}
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmitBtn}
            className={styles.loginBtn}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
