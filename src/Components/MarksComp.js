import React from "react";
import '../styles/main.css'

const MarksComp = (props) => {
  return(
    <div className="main">
      <ul className="main-header">
        <li className="main-header__item">новинки</li>
        <li className="main-header__item">анонсы</li>
        <li className="main-header__item">топ</li>
      </ul>
      <div className="main-bg">
        <section className="main-section">
          <h2 className="main-section__title">Ваши закладки</h2>
          <h2 className="main-section__title">Ваши закладки</h2>
          <h2 className="main-section__title">Ваши закладки</h2>
          <h2 className="main-section__title">Ваши закладки</h2>
          <h2 className="main-section__title">Ваши закладки</h2>
        </section>
      </div>
    </div>
  );
};

export default MarksComp;