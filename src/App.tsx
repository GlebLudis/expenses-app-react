import React, { FC } from "react";
import "./style.css";
import Login from "./components/Auth/Login";
import { About } from "./components/About/About";

export const App: FC = () => {
  return (
    <>
        <div className="login-window">
            <Login></Login>
        </div>
      <main>
        <About></About>
      </main>
    </>
  );
};
