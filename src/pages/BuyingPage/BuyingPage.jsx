import React, { useEffect, useState } from "react";

import styles from "../BuyingPage/style.module.css";

function BuyingPage(props) {
  const [formValid, setFormValid] = useState(false);

  const [valueName, setValueName] = useState("");
  const [valueEmail, setValueEmail] = useState("");
  const [valueText, setValueText] = useState("");
  const [nameError, setNameError] = useState("Name is required field");
  const [emailError, setEmailError] = useState("Email is a required field");
  const [emailDirty, setEmailDirty] = useState(false);
  const [nameDirty, setNameDirty] = useState(false);

  useEffect(() => {
    if (emailError || nameError) {
      setFormValid(false);
      console.log(nameError, emailError);
    } else {
      setFormValid(true);
    }
  }, [emailError, nameError]);

  const handleChangeName = (e) => {
    setValueName(e.target.value);
    const resName = /^[A-Za-z\s]+$/;
    if (!resName.test(String(e.target.value))) {
      setNameError("The name field must not contain numbers");
    } else {
      setNameError("");
    }
  };

  const handleChangeEmail = (e) => {
    setValueEmail(e.target.value);
    const res =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!res.test(String(e.target.value).toLowerCase())) {
      setEmailError("Incorrect email");
    } else {
      setEmailError("");
    }
  };

  const handleChangeText = (e) => {
      setValueText(e.target.value);
  }

  const handleSubmitBtn = (event) => {
    event.preventDefault();
    setValueName("");
    setValueEmail("");
    setValueText("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1 className={styles.heading}>
          Оформление <br /> подписки в подарок
        </h1>
        <p>
          Введите данные получателя и напишите теплые слова. Мы пришлем
          сертификат на указанную почту.
        </p>
        <form className={styles.form}>
          <div className={styles.fieldInput}>
            <label>Имя получателя</label>
            <input
              type="text"
              name="name"
              className={styles.formInput}
              placeholder="Имя"
              value={valueName}
              onChange={(e) => handleChangeName(e)}
            />
          </div>
          <div className="inputErrorText">
            {nameError && nameDirty && <div>{nameError}</div>}
          </div>

          <div className={styles.fieldInput}>
            <label>Email получателя</label>
            <input
              type="email"
              name="email"
              className={styles.formInput}
              placeholder="Email"
              value={valueEmail}
              onChange={(e) => handleChangeEmail(e)}
            />
          </div>
          <div className="inputErrorText">
            {emailError && emailDirty && <div>{emailError}</div>}
          </div>
          <textarea
            className={styles.textArea}
            value={valueText}
            onChange={(e) => handleChangeText(e)}

            cols="32"
            rows="10"
            placeholder="Напишите ваше пожелание для получателя"
          />
          <button
            type="submit"
            className={styles.screenBtn}
            onClick={handleSubmitBtn}
            disabled={!formValid}
          >
            Отправить подарок
          </button>
        </form>
      </div>
    </div>
  );
}

export default BuyingPage;
