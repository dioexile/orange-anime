import React from 'react';
import Item from './Item'
import anime from '../images/3.jpg'
import anime2 from '../images/4.jpg'
import '../styles/topnews.css'

const Topnews = () => {
  return(
    <div className='topnews'>
      <div className="topnews-first">
        <Item animeImg={anime} animeName='Мастера Меча Онлайн: Прогрессив'/>
        <Item animeImg={anime2} animeName ='Атака титанов 2'/>
        <Item animeImg={anime} animeName='Мастера Меча Онлайн: Прогрессив'/>
        <Item animeImg={anime2} animeName ='Атака титанов 2'/>
      </div>
      <div className="topnews-second">
        <Item animeImg={anime} animeName='Мастера Меча Онлайн: Прогрессив'/>
        <Item animeImg={anime2} animeName ='Атака титанов 2'/>
        <Item animeImg={anime} animeName='Мастера Меча Онлайн: Прогрессив'/>
        <Item animeImg={anime2} animeName ='Атака титанов 2'/>
      </div>
    </div>  
  )
}

export default Topnews;