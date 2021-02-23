import React from "react"
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { PrivateRoute } from "../HOC/PrivateRoute"

import { Confirm } from "./Confirm/Confirm"
import { Home } from "./Home/Home"
import { SignUp } from "./SignUp/SignUp"

export const Navigation: React.FC = () => {
  return (
    <Router basename="/" forceRefresh={false}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/sign-up" component={SignUp} />
        <PrivateRoute path="/confirm" component={Confirm} />
      </Switch>
    </Router>
  )
}
