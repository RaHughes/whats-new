import React from 'react';
import './NewsArticle.scss';

const NewsArticle = ({img, headline, description, url}) => {
  
  return(
    <article className='news-article'>
      <img src={img} alt='news'/>
      <h2>{headline}</h2>
      <p>{description}</p>
      <form action={url} method="get" target="_blank">
        <button className="article-button" type="submit">Read Full Article</button>
      </form>
    </article>
  )
}

export default NewsArticle;