import React, { useEffect, useState, useContext } from "react";
import { Context } from "../Context/Context";

const Home = () => {
  const context = useContext(Context);

  return (
    <div className='container-item'>
      <h1>Isracard News!</h1>
      <div className='container-btn'>{context.mapCategory}</div>
      <div className='container-card'>{context.mapNews}</div>
    </div>
  );
};

export default Home;
