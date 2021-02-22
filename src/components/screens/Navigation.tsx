import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"

import { Confirm } from "./Confirm/Confirm"
import { Home } from "./Home/Home"
import { SignUp } from "./SignUp/SignUp"

export const Navigation = () => {
  return (
    <Router basename="/" forceRefresh={false}>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/sign-up">
          <SignUp />
        </Route>

        <Route path="/confirm">
          <Confirm />
        </Route>
      </Switch>
    </Router>
  )
}
