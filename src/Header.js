import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';




const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-evenly',
  },
  toolbarTitle: {
    flex: 1,
    fontWeight: '600',
    
    [theme.breakpoints.down('sm')]: {
      fontSize: '20px',
    
      
     
    },
  },
  
}));



 function Header() {
  const classes = useStyles();

  
  

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
      News Web
        </Typography>
        <Button size="small" href="/signin">Sign In</Button>

      </Toolbar>
     
    </React.Fragment>
  );
}

export default Header;
