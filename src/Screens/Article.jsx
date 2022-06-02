import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../Context/Context";

const Article = () => {
  const context = useContext(Context);
  const params = useParams();
  const article = context.getArticle(params.id);
  console.log(article);
  return (
    <div className='article-page-container'>
      <h3>{article.title}</h3>
      <article className='article-description'>{article.description}</article>
      <img src={article.image} alt={article.title} className='article-img' />
      <button onClick={() => context.addToFav(params.id)} className='btn'>
        Add to favorites
      </button>
      <Link to={"/favorites"}>Go to favorites</Link>
    </div>
  );
};

export default Article;
