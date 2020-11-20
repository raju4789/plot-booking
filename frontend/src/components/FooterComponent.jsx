import React from 'react';


import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none'
    },
  },
  appBar: {
    backgroundColor: '#3f51b5',
    color: 'white',
    left: 0,
    bottom: 0,
    marginBottom:0,
    position: 'fixed',
    textAlign: 'center',
    justifyItems:'center'

  },
  toolbar: {
    flexWrap: 'wrap'
  },
  toolbarTitle: {
    flexGrow: 1
  },
  link: {
    margin: theme.spacing(1, 1.5),
    color: 'white',
    border: 'none'
  },
  
}));

const FooterComponent = () => {
  const classes = useStyles();
    return (
        <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
          Copyright © Raju MLN.
          </Typography>
          
          <Button href="https://www.linkedin.com/in/raju-m-l-n/" variant="outlined" color="primary" className={classes.link}>
            Linkedin
          </Button>
        </Toolbar>
      </AppBar>
    )
}
export default FooterComponent;
