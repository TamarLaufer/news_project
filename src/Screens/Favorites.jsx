import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Card from "../Components/Card";
import { Context } from "../Context/Context";

const Favorites = () => {
  const context = useContext(Context);
  const mapFavorites = context.favorites.map((index) => {
    const item = context.getArticle(index);
    return (
      <Link to={"/article/" + index} key={index}>
        <Card item={item} title={item.title} />
      </Link>
    );
  });
  return (
    <div>
      <h2>Favorites News</h2>
      {mapFavorites}
    </div>
  );
};

export default Favorites;
