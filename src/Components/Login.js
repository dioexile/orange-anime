import React, { useState, useEffect } from "react";
import cl from '../styles/login.module.css'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import { useAuth } from "../AuthProviders/useAuth";

const Login = ({visible, setVisible}) => {
  const [userData, setUserData] = useState({email: '', password: '', login: ''})
  const [isReg, setIsReg] = useState(false)
  const {ga, user} = useAuth()
  const rootClasses = [cl.overlay]
  if (visible){
    rootClasses.push(cl.active);
  }

  const handleLogin = async (e) => {
    e.preventDefault()
    if(isReg){
      await createUserWithEmailAndPassword(ga, userData.email, userData.password)
      await signInWithEmailAndPassword(ga, userData.email, userData.password)

    }
    console.log(isReg, userData.login, userData.email, userData.password )
    setIsReg(true)
    setUserData({email: '', password: '', login: ''})
    setVisible(false)
  }


  return(
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.modalLogin} onClick = {(e) => e.stopPropagation()}>
        <h3 className={cl.modalTitle}>регистрация</h3>
        <form method="post" onSubmit={handleLogin}>
          <div className={cl.formInput}>
            <label>ЛОГИН</label>
            <input placeholder='ЛОГИН' value={userData.login} type='name' className={cl.modalInput} onChange={e => setUserData({...userData, login: e.target.value})}/>
            <label>EMAIL</label>
            <input placeholder='EMAIL' value={userData.email} type='email' name='email'  className={cl.modalInput} onChange={e => setUserData({...userData, email: e.target.value})}/>
            <label>ПАРОЛЬ</label>
            <input placeholder='ПАРОЛЬ' value={userData.password} type='password' name='password' className={cl.modalInput} onChange={e => setUserData({...userData, password: e.target.value})}/>
          </div>
          <button type="submit" className={cl.regbtn}>Зарегистрироваться</button>
        </form>
      </div>
    </div>

  );
};

export default Login
