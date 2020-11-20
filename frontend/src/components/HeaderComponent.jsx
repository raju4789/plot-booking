import React from "react";
import { useHistory } from "react-router-dom";

import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    backgroundColor: "#3f51b5",
    color: "white",
    left: 0,
    top: 0,
    textAlign: "center",
    position: "fixed",
  },
  toolbar: {
    flexWrap: "wrap",
  },
  toolbarTitle: {
    flexGrow: 1,
    float: "right",
  },
  link: {
    margin: theme.spacing(1, 1.5),
    border: "1px solid white",
    backgroundColor: "#3f51b5",
    color: "white",
  },
}));

const HeaderComponent = (_, ref) => {
  const classes = useStyles();
  const history = useHistory();

  const [userName, setUserName] = React.useState(null);

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };


  React.useEffect(() =>{
    return history.listen((location) => { 

      setUserName(
        (localStorage.getItem("userName") === undefined) || (localStorage.getItem("userName") === null) && (location.pathname !== '/dashboard')
          ? null
          : localStorage.getItem("userName")
      );
   }) 
    
    
  },[history]);

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <Typography
          variant="h6"
          color="inherit"
          noWrap
          className={classes.toolbarTitle}
        >
          Plot Booking
        </Typography>
        {userName !== null ? (
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Welcome {userName}
          </Typography>
        ) : null}

        {userName !== null ? (
          <Button
            color="secondary"
            variant="outlined"
            className={classes.link}
            onClick={handleLogout}
          >
            Logout
          </Button>
        ) : null}
      </Toolbar>
    </AppBar>
  );
};

const forwardedRefHeader = React.forwardRef(HeaderComponent);

export default forwardedRefHeader;
