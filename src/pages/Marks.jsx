import React from 'react';
import '../styles/style.css';
import Topnews from '../Components/Topnews';
import MarksComp from '../Components/MarksComp'

const Marks = (props) => {
  return (
    <> 
      <Topnews/>
      <MarksComp/>
    </>
    
  );
};

export default Marks;