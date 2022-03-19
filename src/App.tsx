import React, { FC } from "react";
import { HomePage } from "./pages/HomePage/HomePage";
import { Routes, Route, Link } from "react-router-dom";
import "./style.css";
import { AboutPage } from "./pages/AboutPage/About";
import {LoginPage} from "./pages/LoginPage/LoginPage";

export const App: FC = () => {
  return (
    <>
      <header>
        <nav>
          {/*<Link to="/about">About</Link>*/}
          {/*<Link to="/login">Login</Link>*/}
        </nav>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  );
};
