import React, {useState} from "react";
import dbanime from './DBanime';
import MainItem from './MainItem';

const Main = () => {

  return(
    <div className="main">
      <ul className="main-header">
        <li className="main-header__item">новинки</li>
        <li className="main-header__item">анонсы</li>
        <li className="main-header__item">топ</li>
      </ul>
      <div className="main-bg">
        <section className="main-section">
          <h2 className="main-section__title">Аниме сериалы</h2>
          <MainItem/>
        </section>
        <section className="main-section">
          <h2 className="main-section__title">Аниме фильмы</h2>
        </section>
      </div>
    </div>
  );
};

export default Main