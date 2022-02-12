import React, {useState} from "react";
import '../styles/main.css'
import dbanime from './DBanime';
import MySelect from "./MySelect";


const MainItem = ({itemList}) => {

  const [anime, setAnime] = useState(dbanime.animeSerials)

  const [selectedSort, setSelectedSort] = useState('')

  const sortAnime = (sort) => {
    setSelectedSort(sort)
    setAnime([...anime].sort((a, b) => a[sort].localeCompare(b[sort])))
  }
  
  return(
    <div>
      <MySelect 
            value = {selectedSort}
            onChange={sortAnime}
            defaultValue="сортировать по"
            options = {[
              {value: 'name', name:'По названию'},
              {value: 'rating', name:'По рейтингу'},
            ]}
      />
      <ul className="main-list">
        {anime.map(function(item ,index) { 
          return(
            <li className='main-item' key={index}>
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