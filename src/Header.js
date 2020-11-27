import React from 'react';
import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();

  const user= useStateValue();
  const dispatch = useStateValue();

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
          href="/"
          noWrap
          className={classes.toolbarTitle}
        >
      News Web
        </Typography>
        <Link to={!user && '/signin'}>
          <div onClick={handleAuthenticaton} className="header__option">
            
            <span className="header__optionLineTwo">{user ? 'Sign Out' : 'Sign In'}</span>
          </div>
        </Link>

      </Toolbar>
     
    </React.Fragment>
  );
}

export default Header;
