import React from 'react';
import '../styles/style.css';
import Topnews from '../Components/Topnews';
import Main from '../Components/Main'

const Genres = (props) => {
  return (
    <> 
      <div className='container'>
        <Topnews/>
        <Main/>
      </div>
    </>
    
  );
};

export default Genres;