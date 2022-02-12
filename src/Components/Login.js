import React, { useState } from "react";
import cl from '../styles/login.module.css'
import DBusers from './DBusers'
import Input from './UI/Input'
const Login = ({visible, setVisible}) => {

  const rootClasses = [cl.overlay]
  if (visible){
    rootClasses.push(cl.active);
  }
  const [user, setUser] = useState(DBusers)
  console.log(user)

  return(
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.modalLogin} onClick = {(e) => e.stopPropagation()}>
        <h3 className={cl.modalTitle}>регистрация</h3>
        <form method="post" >
          <div className={cl.formInput}>
            <Input label='ЛОГИН' type='text'/>
            <Input label='EMAIL' type='email' name='email'/>
            <Input label='ПАРОЛЬ' type='password' name='password'/>
          </div>
        </form>
        <button type="submit" className={cl.regbtn} >Зарегистрироваться</button>
      </div>
    </div>

  );
};

export default Login
