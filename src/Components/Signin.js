import React from "react";
import cl from '../styles/signin.module.css'

const Signin = ({visible, setVisible}) => {

  const rootClasses1 = [cl.overlay1]
  if (visible){
    rootClasses1.push(cl.active);
  }

  return(

    <div className={rootClasses1.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.modalLogin1} onClick = {(e) => e.stopPropagation()}>
        <h3 className={cl.modalTitle1}>вход</h3>
        <form method="post" >
          <div className={cl.formInput1}>
            <div className={cl.formInput1}>
              <label>ЛОГИН</label>
              <input type="text" required className={cl.modalInput1}/>
            </div>
            <div className={cl.formInput1}>
              <label>ПАРОЛЬ</label>
              <input type="password" name="password" required className={cl.modalInput1}/>
            </div>
          </div>
        </form>
        <button type="submit" className={cl.regbtn1}>войти</button>
      </div>
    </div>

  );
};

export default Signin
