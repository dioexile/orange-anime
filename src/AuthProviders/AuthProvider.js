import React, { useState, createContext, useEffect, useMemo } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


export const AuthContext = createContext({})

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null)
  const ga = getAuth()
  const db = getFirestore()
  useEffect(() => {
    const unListen = onAuthStateChanged(ga, authUser => {
      if(authUser)
        setUser(
          {
            _id: authUser.uid,
            email: authUser.email,
            login: authUser.displayName
          }
      )
      else {
        setUser(null)
      }
    })
    return () => {
      unListen()
    }
  })
  const values = useMemo(() => ({
    db,
    user,
    setUser,
    ga
  }), [user, ga, db])

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}
