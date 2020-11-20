import React from 'react';
import { Link} from 'react-router-dom';

import CheckIcon from '@material-ui/icons/Check';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      marginTop: 50,
      marginBottom: 50,
      padding: theme.spacing(1),
      backgroundColor: 'green',
      borderRadius: '50%',
      height: 100,
      width:100
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
  }));

const RegistrationSuccess = ()=>{
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <CheckIcon className={classes.avatar}>
                
                </CheckIcon>
                <Typography component="h1" variant="h5">
                    Registration Success.
                </Typography>
                <Typography component="h1" variant="h5">
                    <Link to="/login" variant="body2">
                        {"Login to continue"}
                    </Link>
                </Typography>
            </div>
        </Container>
           
    )

}

export default RegistrationSuccess;