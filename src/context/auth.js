import React, { useState, useEffect, createContext, useContext } from 'react';
import { loginWithGoogle, auth } from '../firebase';

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true)

  const login = () => {
    return loginWithGoogle()
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = { user, login };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider> 
  )
};

export { AuthContext, AuthProvider };