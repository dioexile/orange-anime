import React, {useState} from 'react';
import '../styles/style.css';
import Header from '../Components/Header';
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