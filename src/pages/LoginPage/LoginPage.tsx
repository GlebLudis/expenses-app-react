import React, { FC } from "react";
import Login from "../../components/Auth/Login";



export const LoginPage: FC = () => {
    return (
        <>
            <div className="login-window">
                <Login></Login>
            </div>
        </>
    );
};
