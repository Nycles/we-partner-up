import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { PrivateRoute } from "../HOC/PrivateRoute"

import { Confirm } from "./Confirm/Confirm"
import { Home } from "./Home/Home"
import { SignUp } from "./SignUp/SignUp"

export const Navigation = () => {
  return (
    <Router basename="/" forceRefresh={false}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/confirm" component={Confirm} />
      </Switch>
    </Router>
  )
}
