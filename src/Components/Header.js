import React, {useState} from 'react';
import '../styles/header.css'
import Login from './Login'
import Signin from './Signin'
import Navbar from './Navbar';
import { useAuth } from '../AuthProviders/useAuth';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {user} = useAuth()
  function usertf(){
    if(user){
      return <Link to="Profile" className="login">профиль</Link>
    } else {
      return <><div className="signin" onClick={() => setModal1(true)}>вход</div><div className="login" onClick={() => setModal(true)}>регистрация</div></>
    }
  }
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  return(
    <header>
      <nav className="navbar">
        <Navbar/>
        {usertf()}
        
      </nav>
      <Signin visible={modal1} setVisible = {setModal1}/>
      <Login visible={modal} setVisible = {setModal}/>
    </header>
  );
};
export default Header;