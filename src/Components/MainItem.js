import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import '../styles/main.css'
import dbanime from './DBanime';
import MySelect from "./MySelect";

const MainItem = () => {

  const [anime, setAnime] = useState(dbanime.animeSerials)
  const [value, setValue] = useState('')

  const filtredAnime = anime.filter(anime => {
    return anime.name.toLowerCase().includes(value.toLowerCase())
  })

  const [selectedSort, setSelectedSort] = useState('')
  const sortAnime = (sort) => {
    setSelectedSort(sort)
    setAnime([...anime].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  const {push} = useHistory()
  
  return(
    <div>
      <div className="controls">
        <MySelect 
              value = {selectedSort}
              onChange={sortAnime}
              defaultValue="сортировать по"
              options = {[
                {value: 'name', name:'По названию'},
                {value: 'rating', name:'По рейтингу'},
              ]}
        />
        <div className="navbar-search">
          <input 
            type="text" 
            placeholder ='Поиск' 
            className='navbar-search__input'
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
      </div>
      <ul className="main-list">
        {filtredAnime.map(function(item ,index) { 
          return(
            <li className='main-item' key={index} onClick={() => push(`/anime/${item.id}`)}>
              <a src='#'>
                <img src={item.img}/>
                <div className="main-item__title">{item.name}</div>
              </a>
            </li>
          )
        }
        )}
      </ul>
    </div>
  );
};

export default MainItem