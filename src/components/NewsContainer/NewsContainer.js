  
import React from 'react';
import './NewsContainer.scss';
import NewsArticle from '../NewsArticle/NewsArticle.js'

const NewsContainer = ({articles}) => {
    
    const newsArticles = articles.map(news => {
      return (<NewsArticle
        img={news.img}
        headline={news.headline}
        description={news.description}
        url={news.url}
        />)
    });
  
    return (
       <section id="news-container">
         {newsArticles}
       </section>
     );
   }

export default NewsContainer