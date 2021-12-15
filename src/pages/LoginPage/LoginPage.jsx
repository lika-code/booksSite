import React, { useState, useEffect } from "react";
import styles from "./style.module.css";

function LoginPage() {
  const [formValid, setFormValid] = useState(false);

  const [valueLogin, setValueLogin] = useState("");
  const [valuePassword, setValuePassword] = useState("");

  const [loginError, setLoginError] = useState("Name is required field");
  const [passwordError, setPasswordError] = useState("Email is a required field");
  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);

  useEffect(() => {
    if (loginError || passwordError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [loginError, passwordError]);

  const handleChangeLogin = (e) => {
    setValueLogin(e.target.value);
    const res =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!res.test(String(e.target.value).toLowerCase())) {
      setLoginError("Incorrect login");
    } else {
      setLoginError("");
    }
  };

  const handleChangePassword = (e) => {
    setValuePassword(e.target.value);
    if(e.target.value === ''){
      setPasswordError("Password cannot be empty");
    } else {
      setPasswordError("");
    }
    }

  const handleSubmitBtn = (e) => {
    e.preventDefault();
    setValueLogin("");
    setValuePassword("");
  }

  const blurHandler = (e) => {
    switch (e.target.name) {
      case "email":
        setLoginDirty(true);
        break;
      case "name":
        setPasswordDirty(true);
        break;
      default:
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>Вход</h1>
        <form className={styles.form}>
          <div className={styles.fieldInput}>
            <label>Почта:</label>
            <input
              type="email"
              className={styles.formInput}
              value={valueLogin}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => handleChangeLogin(e)}
            />
          </div>
          <div className={styles.inputErrorText}>
            {loginError && loginDirty && <div>{loginError}</div>}
          </div>
          <div className={styles.fieldInput}>
            <label>Пароль:</label>
            <input
              type="text"
              className={styles.formInput}
              value={valuePassword}
              onBlur={(e) => blurHandler(e)}
              onChange={(e) => handleChangePassword(e)}
            />
          </div>
          <div className={styles.inputErrorText}>
            {passwordError && passwordDirty && <div>{passwordError}</div>}
          </div>
          <button
            type="submit"
            onClick={handleSubmitBtn}
            className={styles.loginBtn}
            disabled={!formValid}
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
