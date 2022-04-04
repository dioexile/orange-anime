import React, {useState} from 'react';
import '../styles/header.css'
import Login from './Login'
import Signin from './Signin'
import Navbar from './Navbar';

const Header = (props) => {
  const [modal, setModal] = useState(false);
  const [modal1, setModal1] = useState(false);
  return(
    <header>
      <nav className="navbar">
        <Navbar/>
        <div className="signin" onClick={() => setModal1(true)}>вход</div>
        <div className="login" onClick={() => setModal(true)}>регистрация</div>
      </nav>
      <Signin visible={modal1} setVisible = {setModal1}/>
      <Login visible={modal} setVisible = {setModal}/>
    </header>
  );
};
export default Header;