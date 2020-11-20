import React from 'react';
import { useHistory, Link } from 'react-router-dom';

//import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginService from '../services/LoginService';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(2),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const SignupComponent = () => {
  const classes = useStyles();
  const history = useHistory();

  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");
  const [username, setUserName] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [dob, setDOB] = React.useState("");

  const handleFirstNameChange = event => setFirstName(event.target.value);
  const handleLastNameChange = event => setLastName(event.target.value);
  const handleUserNameChange = event => setUserName(event.target.value);
  const handlePasswordChange = event => setPassword(event.target.value);
  const handleConfirmPasswordChange = event => setConfirmPassword(event.target.value);
  const handleDOBChange = event => setDOB(event.target.value);

  const [message, setMessage] = React.useState("");

  const handleSubmit = async () => {

    try {
      const user = { username, password, confirmPassword, firstName, lastName, dob };
      const response = await LoginService.register(user);
      if (response.status !== 201) {
        setMessage('Failed to register');
      }
      history.push('/reg-success');
    } catch (error) {
      console.log(error);
      setMessage('Failed to register');
    }


  };

  return <Container component="main" maxWidth="xs">
    <CssBaseline />
    <div className={classes.paper}>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form className={classes.form} >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              value={firstName}
              onChange={handleFirstNameChange}
              autoFocus
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              value={lastName}
              onChange={handleLastNameChange}

            />
          </Grid>
          <Grid item xs={12} >
            <TextField
              variant="outlined"
              required
              fullWidth
              id="dob"
              type="date"
              label="Date of birth"
              name="dob"
              value={dob}
              onChange={handleDOBChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              value={username}
              onChange={handleUserNameChange}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              id="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}

            />
          </Grid>
        </Grid>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleSubmit}

        >
          Sign Up
        </Button>
        <Typography style={{ margin: 7, color: 'red' }} variant="body1">
          {message}
        </Typography>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to='/login'>
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  </Container>
};


export default SignupComponent;