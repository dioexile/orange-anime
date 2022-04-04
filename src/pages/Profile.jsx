import React from 'react'
import { useAuth } from '../AuthProviders/useAuth'

const Profile = () => {
  const {user} = useAuth()
  const qwe = () => {
    console.log(user)
  }
  return (
    <div className='profile'>
      <h2 className="profile-name" onClick={qwe}>asd</h2>
    </div>
  )
}

export default Profile