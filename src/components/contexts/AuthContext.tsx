import React, { useContext, useEffect, useState } from "react"
import { auth } from "../../firebase/firebase"

const AuthContext = React.createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    auth.onAuthStateChanged((authUser: any) => {
      if (authUser) {
        setIsAuth(true)
        setEmail(authUser.email)
        setIsEmailVerified(authUser.emailVerified)
      } else {
        setIsAuth(false)
        setEmail("")
        setIsEmailVerified(false)
      }
      setLoading(false)
    })
  }, [])

  const value = {
    isAuth,
    email,
    isEmailVerified,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
