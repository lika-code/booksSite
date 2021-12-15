import React, { useEffect, useState } from "react";
//import { Router, Route } from "react-router-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import BuyingPage from "./pages/BuyingPage/BuyingPage";
import Footer from "./components/Footer/Footer";
import WhatNewPage from "./pages/WhatNewPage/WhatNewPage";
import HomePage from "./pages/HomePage/HomePage";
import BookPage from "./pages/BookPage/BookPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import AudioBookPage from "./pages/AudioBookPage/AudioBookPage";
import FreeBookPage from "./pages/FreeBookPage/FreeBookPage";
import LibraryPage from "./pages/LibraryPage/LibraryPage";
import ThankYouPage from "./pages/ThankYouPage/ThankYouPage";

function App() {
  const [categProjectList, setCategProjectList] = useState([]);
  const [subscriptionsList, setSubscriptionsList] = useState([]);
  const [anotherProjectList, setAnotherProjectList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/categoriesFooter.json").then((resp) => {
      resp.json().then((json) => setCategProjectList(json.categoryList));
    });

    fetch("http://localhost:3000/subscriptionFooter.json").then((resp) => {
      resp.json().then((json) => setSubscriptionsList(json.subscriptionsList));
    });

    fetch("http://localhost:3000/anotherCatFooter.json").then((resp) => {
      resp.json().then((json) => setAnotherProjectList(json.anotherList));
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <Header />
        <div className="content">
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/dashboard">
            <WhatNewPage />
          </Route>
          <Route path="/buying" exact>
            <BuyingPage />
          </Route>
          <Route path="/login" exact>
            <LoginPage />
          </Route>
          <Route path="/book" exact>
            <BookPage />
          </Route>
          <Route path="/audiobook" exact>
            <AudioBookPage />
          </Route>
          <Route path="/listFreebook" exact>
            <FreeBookPage />
          </Route>
          <Route path="/library" exact>
            <LibraryPage />
          </Route>
          <Route path="/thankYouPage" exact>
            <ThankYouPage />
          </Route>
        </div>
      </div>
      <Footer
        items={categProjectList}
        subscriptions={subscriptionsList}
        another={anotherProjectList}
      />
    </>
  );
}

export default App;
