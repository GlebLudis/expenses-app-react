import React, { useReducer, useEffect } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link as RouterLink, Link } from "react-router-dom";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      border: theme.spacing(0),
    },
    loginBtn: {
      marginLeft: theme.spacing(9),
      flexGrow: 1,
    },
    signBtn: {
      marginLeft: theme.spacing(),
      flexGrow: 1,
    },
    card: {
      margin: theme.spacing(0),
      padding: theme.spacing(0),
      border: theme.spacing(0),
    },
  })
);

type State = {
  username: string;
  password: string;
  isButtonDisabled: boolean;
  helperText: string;
  isError: boolean;
};

const initialState: State = {
  username: "",
  password: "",
  isButtonDisabled: true,
  helperText: "",
  isError: false,
};

type Action =
  | { type: "setUsername"; payload: string }
  | { type: "setPassword"; payload: string }
  | { type: "setIsButtonDisabled"; payload: boolean }
  | { type: "loginSuccess"; payload: string }
  | { type: "loginFailed"; payload: string }
  | { type: "setIsError"; payload: boolean };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "setUsername":
      return {
        ...state,
        username: action.payload,
      };
    case "setPassword":
      return {
        ...state,
        password: action.payload,
      };
    case "setIsButtonDisabled":
      return {
        ...state,
        isButtonDisabled: action.payload,
      };
    case "loginSuccess":
      return {
        ...state,
        helperText: action.payload,
        isError: false,
      };
    case "loginFailed":
      return {
        ...state,
        helperText: action.payload,
        isError: true,
      };
    case "setIsError":
      return {
        ...state,
        isError: action.payload,
      };
  }
};

const WithOutLogin = React.forwardRef((props, ref) => (
  <RouterLink to="/" {...props} role={undefined}></RouterLink>
));

const Login = () => {
  const classes = useStyles();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (state.username.trim() && state.password.trim()) {
      dispatch({
        type: "setIsButtonDisabled",
        payload: false,
      });
    } else {
      dispatch({
        type: "setIsButtonDisabled",
        payload: true,
      });
    }
  }, [state.username, state.password]);

  const handleLogin = () => {
    if (state.username === "abc@email.com" && state.password === "password") {
      dispatch({
        type: "loginSuccess",
        payload: "Login Successfully",
      });
    } else {
      dispatch({
        type: "loginFailed",
        payload: "Incorrect username or password",
      });
    }
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.keyCode === 13 || event.which === 13) {
      state.isButtonDisabled || handleLogin();
    }
  };

  const handleUsernameChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setUsername",
      payload: event.target.value,
    });
  };

  const handlePasswordChange: React.ChangeEventHandler<HTMLInputElement> = (
    event
  ) => {
    dispatch({
      type: "setPassword",
      payload: event.target.value,
    });
  };
  return (
    <>
      <form className={classes.container} noValidate autoComplete="off">
        <div>
          <TextField
            error={state.isError}
            fullWidth
            id="username"
            type="email"
            label="Username"
            placeholder="Username"
            margin="normal"
            onChange={handleUsernameChange}
            onKeyPress={handleKeyPress}
          />
          <TextField
            error={state.isError}
            fullWidth
            id="password"
            type="password"
            label="Password"
            placeholder="Password"
            margin="normal"
            helperText={state.helperText}
            onChange={handlePasswordChange}
            onKeyPress={handleKeyPress}
          />
        </div>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.loginBtn}
          onClick={handleLogin}
          disabled={state.isButtonDisabled}
        >
          Login
        </Button>
        <Button
          variant="contained"
          size="large"
          color="secondary"
          className={classes.signBtn}
          onClick={handleLogin}
          disabled={(state.isButtonDisabled = false)}
        >
          Sign In
        </Button>
      </form>
      <div className="no-login">
        <Button className="no-login" component={WithOutLogin}>
          Without Log In
        </Button>
      </div>
    </>
  );
};

export default Login;
