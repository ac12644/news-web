import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    
    toolbarSecondary: {
      justifyContent: 'space-between',
      overflowX: 'auto',
      
    },
    toolbarLink: {
      padding: theme.spacing(1),
      flexShrink: 0,
    },
  }));


const sections = [
    { title: 'All', url: '/all_news' },
    { title: 'Technology', url: '/tech_news' },
    { title: 'Business', url: '/business_news' },
    { title: 'Entertainment', url: '/entertainment_news' },
    { title: 'Sports', url: '/sports_news' },
    { title: 'Health', url: '/health_news' },
    { title: 'Science', url: '/science_news' },
    { title: 'Travel', url: '#' },
  ];
function SubHeader() {
    const classes = useStyles(); 
    return (
        <div>
             <Toolbar component="nav" variant="dense" className={classes.toolbarSecondary}>
      {sections.map((section) => (
          <Link
            color="inherit"
            noWrap
            key={section.title}
            variant="body2"
            href={section.url}
            className={classes.toolbarLink}
          >
            {section.title}
          </Link>
        ))}
        
      </Toolbar>
        </div>
    )
}

export default SubHeader
