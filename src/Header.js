import React from 'react';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";



const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: '600',
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
      justifyContent: 'center',
     
    },
  },
  
}));



 function Header() {
  const classes = useStyles();
 

  const user = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  }
  

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h5"
          color="inherit"
          align="center"
          noWrap
          className={classes.toolbarTitle}
        >
          <Link to = "/all_news" color="inherit">News Web</Link>
        </Typography>
        <Link to = {!user && '/signin'}  >
       <Button variant="outlined" size="small" onClick={handleAuthenticaton} >
       
          <span>{!user ? 'Sign In' : user.email}</span>
     
         

         
        </Button> </Link>
      </Toolbar>
     
    </React.Fragment>
  );
}

export default Header;
