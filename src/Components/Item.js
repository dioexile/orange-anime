import React from "react";
import '../styles/topnews.css'

const Item = (props) => {
  return(
    <div className="topnews-item">
      <a href="#">
        <div className="topnews-item__photo">
          <img src={props.animeImg} alt="photo" />
        </div>
        <div className="topnews-item__title">{props.animeName}</div>
      </a>
    </div>
  );
};

export default Item
