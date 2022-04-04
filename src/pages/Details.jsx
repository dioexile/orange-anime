import React, {useState} from 'react'
import '../styles/anime.css'
import dbanime from '../Components/DBanime';


const Details = ({match}) => {
  const anime = dbanime.animeSerials
  const thisAnime = anime.filter(anime => {
    return anime.id == match.params.id
  })
  let animeInfo = thisAnime[0]
  console.log(animeInfo)
  return (
    <div className='anime-page'>
      <div className="anime-page__head">
        <div className="anime-page__img">
          <img src={animeInfo.img}/>
        </div>
        <div className="anime-page__title">
          <h2>{animeInfo.name}</h2>
          <p>rating: {animeInfo.rating}</p>
        </div>
      </div>
      <div className="anime-page__video">
        <div className="player">
          <iframe src={animeInfo.video} frameborder="0" width="740" height="440"scrolling="no" allowfullscreen></iframe>
        </div>
      </div>
    </div>
  )
}

export default Details