import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { useAlert } from "react-alert";
import { useHistory } from "react-router-dom";

import auth from "../helpers/fake-data/Auth";

export default function SignIn({ loginUsername, loginPassword }) {
  const classes = useStyles();
  //const alert = useAlert();
  let history = useHistory();

  const [username, setUsername] = useState(loginUsername);
  const [password, setPassword] = useState(loginPassword);

  let onClickButton = e => {
    let status = false;
    e.preventDefault();
    auth.map(user => {
      if (username === user.username && password === user.password) {
        status = true;
      }
    });
    if (status === true) history.push("/home");
    //else alert.error("username or passeword is incorrect");
  };

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Veuillez vous authentifier
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Nom d'utilisateur"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={event => {
              setUsername(event.target.value);
            }}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Mot de passe"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={event => {
              setPassword(event.target.value);
            }}
          />
          <Button
            type="submit"
            onClick={onClickButton}
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Valider
          </Button>
        </form>
      </div>
    </Container>
  );
}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));
