import React, { useContext, useEffect, useState } from "react"
import { signOut } from "../../firebase/auth"
import { auth } from "../../firebase/firebase"

const AuthContext = React.createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({ children }: any) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const doSetIsEmailVerified = (payload: boolean) => {
    setIsEmailVerified(payload)
  }

  const doSignOut = async () => {
    try {
      await signOut()
      localStorage.removeItem("lastTimerDeathTime")
    } catch (error) {
      console.log(error)
    }
  }

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
    doSignOut,
    doSetIsEmailVerified,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
