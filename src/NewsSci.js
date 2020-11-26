import React, { useContext } from "react";
import { NewsScience } from "./NewsScience";
import { makeStyles } from '@material-ui/core/styles';
import NewsArt from "./NewsArt";
import CircularProgress from '@material-ui/core/CircularProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
}));

function NewsSci(props) {
  const classes = useStyles();
  const { data } = useContext(NewsScience);
  console.log(data);

  return (
    <div>
      
      <div className="all__news">
        {data
          ? data.articles.map((news) => (
              <NewsArt data={news} key={news.url} />

            ))
          : <CircularProgress className={classes.root}/>}
      </div>
    </div>
  );
}

export default NewsSci;