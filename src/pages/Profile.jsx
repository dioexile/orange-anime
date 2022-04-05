import React from 'react'
import { useAuth } from '../AuthProviders/useAuth'
import { signOut } from 'firebase/auth'
import '../styles/profile.css'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


const Profile = () => {
  const {user, ga} = useAuth()
  const history = useHistory()

  const qwe = () => {
    console.log(user)
  }

  const logout = () => {
    signOut(ga)
    history.push('/home')
  }
  return (
    <div className='profile'>
      <div className="user-about">
        <h2 className="profile-name" onClick={qwe}>{user.login}</h2>
        <button onClick={logout} className="logoutButton">Выйти</button>
      </div>
    </div>
  )
}

export default Profile