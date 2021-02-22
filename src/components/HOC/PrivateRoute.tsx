import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuth, isEmailVerified }: any = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth) return <Redirect to="sign-up" />
        else if (isAuth && !isEmailVerified) return <Redirect to="confirm" />
        else return <Component {...props} />
      }}
    ></Route>
  )
}
