import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { PrivateRoute } from "../HOC/PrivateRoute"

import { Confirm } from "./Confirm/Confirm"
import { Home } from "./Home/Home"
import { NoMatch } from "./NoMatch/NoMatch"
import { SignUp } from "./SignUp/SignUp"

export const Navigation: React.FC = () => {
  return (
    <Router basename="/" forceRefresh={false}>
      <Switch>
        <PrivateRoute exact path="/" component={Home} />
        <PrivateRoute path="/sign-up" component={SignUp} />
        <PrivateRoute path="/confirm" component={Confirm} />

        <Route component={NoMatch} />
      </Switch>
    </Router>
  )
}
