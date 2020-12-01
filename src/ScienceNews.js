import React, {useState, useEffect } from "react";
import NewsArt from "./NewsArt";
import axios from "axios";



function ScienceNews() {
  const [data, setData] = useState({ articles: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://newsapi.org/v2/top-headlines?country=us&category=science&apiKey=09a334ba3fbe41acaff79515476dc4cc',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);
  return (
      
      <div className="all__news">
      <ul>
      {data.articles.map(item => (
              <NewsArt 
               title= {item.title}
               urlToImage = {item.urlToImage}
               description = {item.description}
               url = {item.url} 
               publishedAt = {item.publishedAt} 
               author = {item.author} />

            ))}

            </ul>
      </div>
    
  );
}

export default ScienceNews;