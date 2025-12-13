import React from "react";
import "./App.css";
import  searchSVG, { ReactComponent } from './assets/svg/Vector.svg';
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import PostList from "./components/PostList/PostList";

const App = () => {
  return (
    <>
      <Header />
      <Main>
        <PostList />
      </Main>
      <Footer />
    </>
  );
};

export default App;
