import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Main from "./Main/Main";
import { HomePage } from "../pages/Home/HomePage";
import { PostsPage } from "../pages/Posts/PostsPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="master">
        <div className="burger-menu">
          <Footer />
        </div>
        <Main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/posts" element={<PostsPage />} />
          </Routes>
        </Main>
      </div>
    </BrowserRouter>
  );
};

export default App;