import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: '10px',
    marginRight: '10px',
    marginBottom: '10px',
    overflowX: 'auto',
    background: '#f1f3f4',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
    
    
  },
  cover: {
   width: '100%',
   maxWidth: '350px',
   height: '180px',
   [theme.breakpoints.down('sm')]: {
    marginRight: 'auto',
    marginLeft: 'auto',
    maxWidth: '400px',
   
  },

  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  title: {
    
    [theme.breakpoints.down('sm')]: {
      fontSize: '16px',
      textAlign: 'left',
     lineHeight: '1.4'
     
    },

  },
  
  desc: {
      textAlign: 'left',
     
      [theme.breakpoints.down('sm')]: {
        fontSize: '15px',
        textAlign: 'left',
       lineHeight: '1.4'
       
      },
  },
  date: {
      color: '#1a73e8',
      fontStyle: 'italic',
      marginTop: '10px',
      
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    
},
  button: {
      color: '#1a73e8',
      marginLeft: '10px',
      textTransform: 'lowercase'
  }
  
  
}));

 function NewsArt({ title, urlToImage, description, url, publishedAt, author}) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>

      <CardMedia
        className={classes.cover}
        image={urlToImage}
        
      />

      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6" className={classes.title}>
            {title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.desc}>
            {description}<span onClick={(e) => { e.preventDefault(); window.location.href={url};}}>
          <Button size="small" className={classes.button} >continue reading...</Button></span>
          </Typography>
          <div className= {classes.cardFooter}>
          <Typography variant="subtitle2" color="textSecondary" className={classes.date}>
          {publishedAt}
          </Typography>
          <Typography variant="subtitle2" color="textSecondary" className={classes.date}>
          {author}
          </Typography>

          </div>
          
         
        </CardContent>
       
      </div>
      
    </Card>
  );
}


export default NewsArt;
