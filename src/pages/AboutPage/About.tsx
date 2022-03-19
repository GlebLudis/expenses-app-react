import React, { FC } from "react";
import Button from "@material-ui/core/Button";
import { Routes, Route, Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { Link as RouterLink, MemoryRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

const LinkToAbout = React.forwardRef((props, ref) => (
    <RouterLink to="/" {...props} role={undefined}></RouterLink>
));

export const AboutPage: FC = () => {
  return (
    <>
        <div className="container">
            <h1>Hello, World!</h1>
            <Button variant="outlined" component={LinkToAbout}>HOME</Button>

        </div>
    </>
  );
};
