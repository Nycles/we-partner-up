import React from "react"
import { Redirect, Route } from "react-router-dom"
import { useAuth } from "../contexts/AuthContext"

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const { isAuth, isEmailVerified }: any = useAuth()

  return (
    <Route
      {...rest}
      render={(props) => {
        const url: string = props.location.pathname

        if (!isAuth && url !== "/sign-up") return <Redirect to="sign-up" />
        else if (isAuth && !isEmailVerified && url !== "/confirm") return <Redirect to="confirm" />
        else if (isAuth && isEmailVerified && url === "/confirm") return <Redirect to="/" />
        else return <Component {...props} />
      }}
    ></Route>
  )
}
