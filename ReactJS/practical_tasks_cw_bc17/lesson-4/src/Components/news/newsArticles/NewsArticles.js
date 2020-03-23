import React from "react";
import MediaCard from "../../../ui/mediaCard/MediaCard";
import shortId from 'shortid';

const NewsArticles = ({ data, componentDidUpdate }) => (
  <>
    {data.map(article => {
        const transformArticle = {...article, id: shortId()}
      return <MediaCard key={transformArticle.id} {...(transformArticle || {})} />;
    })}
    <button onClick={()=>(componentDidUpdate)}>MORE</button>
  </>
);

export default NewsArticles;
