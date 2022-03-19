import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import { Routes, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const LinkToLogin = React.forwardRef((props, ref) => (
    <RouterLink to="/login" {...props} role={undefined}></RouterLink>
));

const LinkToAbout = React.forwardRef((props, ref) => (
    <RouterLink to="/about" {...props} role={undefined}></RouterLink>
));

export const HomePage: FC = () => {
    return (
        <>g
            <div className="container">
                <h4>EXPENSES APP</h4>
                <div className="login-button">
                  <Button variant="outlined" component={LinkToLogin}>Log In</Button>
                </div>
                <div className="about-button">
                  <Button variant="outlined" component={LinkToAbout}>About</Button>
                </div>
            </div>
        </>
    );
};
