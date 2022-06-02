import { createContext, useState } from "react";
import { Link } from "react-router-dom";
import ApiFetch from "../API/ApiFetch";
import Card from "../Components/Card";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Context = createContext(null);

export const DataProvider = (props) => {
  const [news, setNews] = useState(null);
  const [categoryList, setCategoryList] = useState([
    "health",
    "general",
    "sports",
  ]);
  const [categoryName, setCategoryName] = useState("");
  const [favorites, setFavorites] = useState([]);

  const mapNews = news?.map((item, index) => {
    return (
      <Link to={"/article/" + index} key={index}>
        <Card item={item} title={item.title} />
      </Link>
    );
  });

  const mapCategory = categoryList.map((category, index) => {
    return (
      <button
        key={index}
        onClick={() => getDataFromServer(category)}
        className='btn'
      >
        {category}
      </button>
    );
  });

  const getDataFromServer = (category) => {
    ApiFetch(category).then((response) => {
      setNews(response.data.data);
    });
    setCategoryName(category);
  };

  const getArticle = (index) => {
    return news[index];
  };

  const addToFav = (index) => {
    if (favorites.indexOf(index) !== -1) {
      toast("This favorite is already exist in favorites");
    } else {
      const tempArr = [...favorites];
      tempArr.push(index);
      setFavorites(tempArr);
    }
  };

  return (
    <Context.Provider
      value={{ mapCategory, mapNews, getArticle, addToFav, favorites }}
    >
      {props.children}
      <ToastContainer />
    </Context.Provider>
  );
};
