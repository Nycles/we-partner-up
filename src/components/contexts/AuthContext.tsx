import React, { useContext, useEffect, useState } from "react"
import { signOut } from "../../firebase/auth"
import { auth } from "../../firebase/firebase"

interface IContext {
  isAuth: boolean
  email: string
  isEmailVerified: boolean
  doSignOut(): any
  doSetIsEmailVerified(payload: boolean): void
}

const AuthContext = React.createContext({})

export const useAuth = () => useContext(AuthContext)

export const AuthProvider: React.FC = ({ children }) => {
  const [isAuth, setIsAuth] = useState<boolean>(false)
  const [email, setEmail] = useState<string>("")
  const [isEmailVerified, setIsEmailVerified] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(true)

  const doSetIsEmailVerified = (payload: boolean): void => setIsEmailVerified(payload)

  const doSignOut = async (): Promise<void> => {
    try {
      await signOut()
      localStorage.removeItem("lastTimerDeathTime")
    } catch (error) {
      console.log(error)
    }
  }

  const authListener = (): (() => void) => {
    const unsubscribe = auth.onAuthStateChanged((authUser: any) => {
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

    return () => unsubscribe()
  }

  useEffect(authListener, [])

  const value: IContext = {
    isAuth,
    email,
    isEmailVerified,
    doSignOut,
    doSetIsEmailVerified,
  }

  return <AuthContext.Provider value={value}>{!loading && children}</AuthContext.Provider>
}
