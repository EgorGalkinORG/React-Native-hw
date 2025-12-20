import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Main from "../Main/Main";

const Layout = () => {
  return (
    <>
      <Header />
      <div className="master">
        <div className="burger-menu">
          <Footer />
        </div>
        <Main>
          <Outlet />
        </Main>
      </div>
    </>
  );
};

export default Layout;