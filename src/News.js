import React, { useContext } from "react";
import { NewsContext } from "./NewsContext";
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

function News(props) {
  const classes = useStyles();
  const { data } = useContext(NewsContext);
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

export default News;